'use strict';
angular.module('myApp.home', ['ngRoute'])
    // Определение маршрута
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }])
    // контроллер home
    .controller('HomeCtrl', [function() {
    }]);
