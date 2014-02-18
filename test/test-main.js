'use strict';

var tests = [];
var file;
for (file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
  baseUrl: '/Users/hhuang/angularJS/angularJS_diary',
  paths: {
    'jquery': 'bower_components/jquery/dist/jquery',
    'angular': 'bower_components/angular/angular',
    'angularRoute': 'bower_components/angular-route/angular-route',
    'angularMocks': 'bower_components/angular-mocks/angular-mocks'
  },
  shim: {
    'underscore': {
      exports: '_'
    }
  },

  deps: tests,

  callback: window.__karma__.start
});