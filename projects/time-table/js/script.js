angular.module('timeTable', ['resourceLoader']) //использеум второй наш модуль
.controller('TimeTableController', ['$scope', 'ResourceLoader', function($scope, ResourceLoader){ //запрашиваем необходимые компоненты
  $scope.currentTime = 930; // это 18:30, час-пик
  $scope.tableContent = [{
    type: 'T',
    number: '53',
    route: 'зеленый луг',
    time1: 5,
    time2: 15
  }];

  $scope.refresh = function(){
    $scope.tableContent = sort(fetch($scope.data, $scope.currentTime));
  }

  $scope.data = []; // вначале пусто
  //загружаем на старте
  new ResourceLoader('/js/data.json').load().then(function(response){
    $scope.data = response.data;
  });

  /*
  // выборка
   $scope.dataArray = []; // это поле - всего лишь промежуточное в процессе вычислений, можно и без него обойтись
   */

  function fetch(data, currentTime){
    //была каша с областями видимости и доступом к полям - или запаковать в замыкание, или напрямую обращаться к $scope
    return data.map(function(currentValue, index, array){
      for (var i = 0; i < currentValue.time.length; i++){
        if(currentValue.time[i] >= currentTime){
          var counter = i;
          break;
        }
      }

      return angular.extend(/*это имелось ввиду?*/{}, currentValue, {
        time: currentValue.time.slice(counter, counter + 2)
      });
    });
  }
  //части контроллера должны лежать в контроллере
  function sort(dataArray){
    dataArray.sort(function(first, second){
      if(first.time[0] > second.time[0]){
        return 1;
      }
      if(first.time[0] < second.time[0]){
        return -1;
      }
      if(first.time[0] == second.time[0]){
        if(+first.number > +second.number){ //номер может содержать букву, например 87э, 12д, 109в и т.д.
          return 1;
        }
        if(+first.number < +second.number){
          return -1;
        }
        if(first.number == second.number){
          if(first.type > second.type){ //наверное тип все-таки главнее номера
            return 1;
          }else{
            return -1;
          }
        }
      }
    })
    // map возвращает копию, а оригинальный массив не изменится, нам как раз нужно изменить, да еще и разделить на 2 поля
    // поэтому - не map, а forEach
    dataArray.forEach(function(currentValue, index, array){
      currentValue.time1 = currentValue.time[0] - $scope.currentTime;
      currentValue.time2 = currentValue.time[1] - $scope.currentTime;
      /*
      return currentValue.time.map(function(cV, i, arr){
        // currentTime лежит в $scope
        return cV = cV - $scope.currentTime; //Время до прихода транспорта относительно текущего времени.
      })
      */
      if (isNaN(currentValue.time1)){ // Чтобы не выводило NaN
        currentValue.time1 = "Wait for tomorrow";
        currentValue.time2 = "Wait for tomorrow";
      }
    })
    return dataArray;
  }
}]);
