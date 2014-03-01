angular.module('app', ['ngRoute', 'appControllers'])
  .config(['$routeProvider',
  function ($routeProvider) {
    'use strict';
    $routeProvider.
      when('/', {
        templateUrl: 'views/hello.html',
        controller: 'HelloController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
