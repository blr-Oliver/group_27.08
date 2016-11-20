angular.module("angularSVGGraph", []).directive("linearGraph", [function(){
  return {
    templateUrl: "/linear-graph.html",
    controller: ["$scope", function($scope){
    }],
    scope: {
      scale: "=?",
      xArray: "=?",
      yArray: "=?"
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
    }
  }
}])
