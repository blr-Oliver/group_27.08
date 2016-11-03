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
});
