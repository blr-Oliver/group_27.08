angular.module("svgGraph", []).directive("linearGraph", [function(){
  return {
    templateUrl: "/linear-graph.html",
    controller: ["$scope", function($scope){
    }],
    scope: {
      scale: "=?",
      seriesX: "=",
      seriesY: "="
    },
    restrict: "E",
    controllerAs: "graph",
    bindToController: false,
    link: function($scope, $element, $attrs){
      $scope.origin = {
        x: 30,
        y: 60
      };
      $scope.unit = {
        x: 10,
        y: 10
      };
      $scope.points = [{
        x: 10,
        y: 40
      }, {
        x: 30,
        y: 50
      }, {
        x: 70,
        y: 60
      }, {
        x: 80,
        y: 30
      }];
    }
  }
}]).filter('svgPath', function(){
  return function(points){
    if(!points || !points.length)
      return "";
    return "M" + points[0].x + " " + points[0].y + "L" + points.slice(1).map(function(p){
      return p.x + " " + p.y;
    }).join(" ");
  };
})
