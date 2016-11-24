
	'use strict';
angular.module('myApp', [
    'ngRoute',
    'myApp.home' // подключаем новый модуль
]).
    config(['$routeProvider', function($routeProvider) {
        // назначаем представление по умолчанию
        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    }]);
