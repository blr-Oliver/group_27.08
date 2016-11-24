angular.module('graphDemo', ['svgGraph']).controller('GraphDemoController', ['$scope', function($scope){
  // y = 2*(x - 0.5)^2 - 1
  $scope.xData = [-1.5, -1.0, -0.5, +0.0, +0.5, +1.0, +1.5];
  $scope.yData = [+7.0, +3.5, +1.0, -0.5, -1.0, -0.5, +1.0];

  $scope.series = {
  	default: { 
  		x: $scope.xData,
  		y: $scope.yData
  	},
  	series: {
  		x: [-1,10],
  		y: [-1,10]
  	}
  }
console.log(JSON.stringify($scope.series));
  
  $scope.data = $scope.xData.map(function(e, i){
    return {
      x: e,
      y: -$scope.yData[i]
    };
  });
}]);
