angular.module('myApp', [])
  .run(function ($rootScope, $timeout) {
//        $timeout(function() {
    'use strict';
    $rootScope.imgSrc = 'https://www.google.com/images/srpr/logo11w.png';
//        }, 2000);

  });