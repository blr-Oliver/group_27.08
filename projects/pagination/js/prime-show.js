angular.module("primeShow", ["pagination"]).controller("PrimeShowController",
    ["$scope", "primeLoader", function($scope, primeLoader){
      const pageSize = 500;
      $scope.state = {
        current: 9,
        last: 15
      };
      $scope.primeList = [];

      $scope.$watch("state.current", function(newValue, oldValue, $scope){
        primeLoader(($scope.state.current - 1) * pageSize, $scope.state.current * pageSize).then(function doneCallback(data){
          console.log('SUCCESS', oldValue, '->', newValue);
          $scope.primeList = data;
        }, function failCallback(reason){
          console.log('FAILED', '(' + reason + ')', oldValue, '->', newValue);
        });
      }, false);
    }]).factory("primeLoader", ["$http", "$q", function($http, $q){
  var start, end, ongoing, serverUrl = "http://localhost:8888";

  return function(x, y){
    if(x == start && y == end)
      return task.promise;
    start = x;
    end = y;
    if(ongoing)
      ongoing.reject('cancelled by another request');
    var task = ongoing = $q.defer();
    $http({
      url: serverUrl,
      method: "GET",
      params: {
        start: start,
        end: end
      },
      headers: {
        Accept: "application/json" //ожидаемый формат 
      }
    }).then(function(response){
      task.resolve(response.data);
    }, function(){
      start = end = ongoing = null;
      task.reject(...arguments);
    });

    return task.promise;
  };
}]);
