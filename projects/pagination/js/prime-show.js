angular.module("primeShow", ["pagination"]).controller("PrimeShowController", ["$scope", "$http", function($scope, $http){
    $scope.state = {
        current: 6,
        last: 20
    },
    $scope.$watch("state.current", function (newValue, oldValue, scope){
       $http({
        url: "http://192.168.0.104:8888",
        method: "GET",
        params: {
            start: ($scope.state.current - 1) * 500,
            end: $scope.state.current * 500},
        header: {
            Accept: "application.json"
        }
    }).then(function(response){
        $scope.primeList = response.data;
    })
    }, false)
}
]);



//$q - promises

//.then(doneCallback(response, statusCode), failCallback())