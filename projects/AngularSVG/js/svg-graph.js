angular.module("svgGraph", []).directive("linearGraph", [function(){
  const
  UPU = 10.0; // units-per-unit - inner multiplier for viewBox (plot) units per data unit

  function Rect(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  Rect.prototype = {
    get maxX(){
      return this.x + this.width;
    },
    get maxY(){
      return this.y + this.height;
    },
    toString: function(){
      return [this.x, this.y, this.width, this.height].join(" ");
    }
  }

  Rect.fromRange = function(minX, maxX, minY, maxY){
    return new Rect(minX, minY, maxX - minX, maxY - minY);
  }

  function LinearGraphController($scope){
    this.bounds = new Rect(0, 0, 1, 1);
    this.unit = {x: 1, y: 1};
    this.viewBox = new Rect(0, 0, 1, 1);
    this.points = [];
    
    var updater = function(newValue){
      if(newValue)
        this.update($scope.series);
    }.bind(this);

    // TODO!!!!!!

    $scope.$watch('series', updater, true);

  }
  LinearGraphController.prototype = {
    update: function(dataInfo){
      this.bounds = this.computeDataBounds(dataInfo);
      console.log(this.bounds);
      this.unit = {
          x: this.computeOptimalUnit(this.bounds.x, this.bounds.maxX),
          y: this.computeOptimalUnit(this.bounds.y, this.bounds.maxY)
      }
      this.rangeX = this.computeScaledRange(this.bounds.x, this.bounds.maxX, this.unit.x);
      this.rangeY = this.computeScaledRange(this.bounds.y, this.bounds.maxY, this.unit.y);
      this.viewBox = this.computeViewBox(this.rangeX, this.rangeY);
      this.points = this.computePoints(dataInfo);
      console.log(this.points);
    },
    computeDataBounds: function(dataInfo) {
      var names = Object.keys(dataInfo);
      var minX = Math.min(...names.map(function(key) {
        return Math.min(...dataInfo[key].x);
      }));
      
      var maxX = Math.max(...names.map(function(key) {
        return Math.max(...dataInfo[key].x);
      }));

      var maxY = Math.max(...names.map(function(key) {
        return Math.max(...dataInfo[key].y);
      }));

      var minY = Math.min(...names.map(function(key) {
        return Math.min(...dataInfo[key].y);
      }));

      // var minX = Math.min.apply(null, seriesX);  
      // var maxX = Math.max.apply(null, seriesX);
      // var minY = Math.min.apply(null, seriesY);
      // var maxY = Math.max.apply(null, seriesY);      
      return Rect.fromRange(minX, maxX, minY, maxY);
    },
    //
    computeOptimalUnit: function(min, max){
      var interval = max - min;
      var k = Math.ceil(Math.log10(interval)) - 1;
      var unit = Math.pow(10,k);
      if(unit*5 > interval) unit /= 2;
      if(unit*5 > interval) unit /= 2.5;
      return unit;
    },

    computeScaledRange: function(min, max, unit){
     return [Math.floor(min/unit - 0.5)*unit, Math.ceil(max/unit + 0.5)*unit];
    },
    
    computeViewBox: function(rangeX, rangeY){
      var topLeft = this.computePoint(rangeX[0],rangeY[1]);
      var bottomRight = this.computePoint(rangeX[1],rangeY[0]);
      return Rect.fromRange(topLeft.x, bottomRight.x, topLeft.y, bottomRight.y);
    },

    computePoints: function(dataInfo){
     return Object.keys(dataInfo).map( function(key) {
        var data = dataInfo[key];
        return data.x.map(function(e, i) {
          return this.computePoint(e, data.y[i]);
        }, this); 
     }, this);
      /*return [{x:-15,y:-70},{x:-10,y:-35},{x:-5,y:-10},{x:0,y:5},{x:5,y:10},{x:10,y:5},{x:15,y:-10}];*/
    },

    computePoint: function(x, y){
      return {
        x: x / this.unit.x * UPU,
        y: -y / this.unit.y * UPU
      };
      /*return {
        x: x * 10,
        y: -y * 10
      };*/
    }
  };
  const matcher = /^series(\w+)[XY]$/, parser = /^.*series-(\w+)-([xy])$/;
  return {
    templateUrl: "/linear-graph.html",
    controller: ["$scope", LinearGraphController],
    scope: {
      seriesX: "=?",
      seriesY: "=?",
      series: "=?"
    },
    restrict: "E",
    controllerAs: "graph",
    bindToController: false,
    link: function($scope, $element, $attrs){
      if($scope.series) return;
      if($scope.seriesX && $scope.seriesY) {
        $scope.$watchGroup(['seriesX','seriesY'], function(){
          $scope.series = {
            default: {
              x: $scope.seriesX,
              y: $scope.seriesY
            }
          };
        });
      } else {
        var dataInfo = {};
        for(var match in $attrs){
          if (matcher.test(match)) {
            var parsed = parser.exec($attrs.$attr[match]);
            var key = parsed[1];
            var subKey = parsed[2];
            dataInfo[key] = dataInfo[key] || {};
            dataInfo[key][subKey] = $scope.$parent.$eval($attrs[match]);
          }
        }
        $scope.series = dataInfo;
        console.log($scope.series);
      }
    }
  };
}]).filter('svgPath', function(){
  return function(points){
    var pathString = "M" + points[0].x + " " + points[0].y;
    for (var i = 1; i < points.length; i++){
      pathString += "L" + points[i].x + " " + points[i].y;
    }
    return pathString;
  };
}).filter('ticks', function() {
  return function(range, unit) {
    var start = range[0];
    var end = range[1];
    var result = [];

    while( (start += unit) < end ) {
      if(start) result.push(start)
    }

    return result;
  };
})
