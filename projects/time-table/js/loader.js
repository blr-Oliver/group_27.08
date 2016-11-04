angular.module('resourceLoader', []).factory('ResourceLoader', ['$http', function($http){

  function ResourceLoader(url, params, forced){
    this.preinit(url, params, forced);
  }
  ResourceLoader.prototype = {
    preinit: function(url, params, forced){
      //по сути - бантики, отслеживание разных форматов входа
      //рабочей нагрузки метод не имеет (кроме, разве что, клонирования объекта параметров)
      switch (arguments.length) {
      case 0:
        throw 'insufficient arguments';
        break;
      case 1:
        if(typeof (url) == 'string')
          this.init({
            url: url
          }, true);
        else
          this.init(angular.extend({}, url), true);
        break;
      case 2:
        if(typeof (url) == 'string'){
          if(params !== null && typeof (params) == 'object'){
            this.init(angular.extend({
              url: url
            }, params), true);
          }else
            this.init({
              url: url
            }, !params);
        }else
          this.init(angular.extend({}, url), !params);
        break;
      default:
        this.init(angular.extend({
          url: url
        }, params), !forced);
      }
    },
    init: function(params, lazy){
      //основная работа конструктора
      this.params = params;
      if(!lazy)
        this.load();
    },
    load: function(){
      //отправляет запрос, если такового еще не было
      //возвращает promise на отправленный(сейчас или ранее) запрос + вешает свой обработчик, цеплюящий ответ
      if(!this.task){
        var self = this;
        this.task = $http(this.params);
        this.task.then(function(response){
          self.result = response.data;
        });
      }
      return this.task;
    },
    reset: function(){
      //уничтожает все нажитое непосильным ajax-ом
      this.task = null;
      delete this.result;
    },
    isResolved: function(){
      //есть чо?
      return this.task && !this.task.isPending();
    }
  }

  return ResourceLoader;

}]);