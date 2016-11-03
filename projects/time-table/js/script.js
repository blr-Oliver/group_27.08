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

//Функция сортировки!
function sort(dataArray){
	dataArray.sort(function (first, second){
		if (first.time[0] > second.time[0]){
			return 1;
		}
		if (first.time[0] < second.time[0]){
			return -1;
		}
		if (first.time[0] == second.time[0]){
			if (+first.number > +second.number){
				return 1;
			}
			if (+first.number < +second.number){
				return -1;
			}
			if (first.number == second.number){
				if (first.type > second.type){
					return 1;
				}else{
					return -1;
				}
			}
		}
	})
	dataArray.map(function(currentValue, index, array){
		return currentValue.time.map(function(cV, i, arr){
			return cV = cV % 60;
		})
	})
	return data;
}
