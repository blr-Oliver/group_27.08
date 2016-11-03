angular.module('timeTable',[]).controller('TimeTableController', function ($scope) {
	$scope.currentTime = 100;
	$scope.tableContent = [{
		type: 	'T',
		number: '53',
		route: 	'зеленый луг',
		time1:	5,
		time2:	15	
	}];
	$scope.refresh = function () {
		
	}
	
	
	// выборка
	$scope.dataArray = [];
	dataArray = data.map( function(currentValue, index, array) {
		for(var i = 0; i < currentValue.time.length; i++) {
			if(currentValue.time[i] >= currentTime) {
				var counter = i;
				break;
			}
		}
		currentValue.time.slice(counter, counter + 2);
	});

});
