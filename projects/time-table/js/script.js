angular.module('timeTable',[]).controller('TimeTableController', function ($scope) {
	$scope.currentTime = 100;
	$scope.tableContent = ['type', 'number', 'route', 'time1', 'time2'];
	$scope.refresh = function () {
		
	}
});