angular.module("primeShow", ["pagination"]).controller("PrimeShowController",
 ["$scope", "primeLoader", function($scope, primeLoader){
 		$scope.state= {
 			current: 9 ,
 			last: 15
 		};
 		$scope.primeList = [];

 		$scope.$watch("state.current", function(newValue, oldValue, $scope){
    		console.log(oldValue,'->',newValue)	;
    		primeLoader(($scope.state.current-1)*50000, $scope.state.current*50000).then(function doneCallback(data){
    			if(data)
	    			$scope.primeList = data;
	    		else
	    			console.log('cancelled');
    		});

    	}, false);
 	}
 ]).factory("primeLoader", ["$http","$q", function($http, $q){
 		var start, end, promise;

 		return function(x, y){

 			if(x == start && y == end) return promise;
 			
 			start = x;
 			end = y;

 			promise = $http({

	    		url:"http://192.168.0.104:8888",
	    		method:"GET",
	    		params: {
	    			start : x,
	    			end : y
	    		},
	    		headers: { 
	    			Accept: "application/json" //ожидаемый формат 
	    		}
    		}).then(function(response){
    			var rParams = response.config.params;
    			if(rParams.start == x  && rParams.end == y)
    				return response.data;
    			return [];
    		});

    		return promise;
    	};
 	}
 ]);
