angular.module('graphDemo', ['svgGraph']).controller('GraphDemoController', ['$scope', function($scope){
  // y = 2*(x - 0.5)^2 - 1
  $scope.xData = [-1.5, -1.0, -0.5, +0.0, +0.5, +1.0, +1.5];
  $scope.yData = [+7.0, +3.5, +1.0, -0.5, -1.0, -0.5, +1.0];
  $scope.data = $scope.xData.map(function(e, i){
    return {
      x: e,
      y: -$scope.yData[i]
    };
  });
}]);