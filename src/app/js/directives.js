var app = angular.module("directivesApp", []);
app.run(function ($rootScope) {
  'use strict';
  $rootScope.rootProperty = "root";
  $rootScope.parentProperty = "undefined";
  $rootScope.childProperty = "undefined";
});
app.controller("parentController", function ($scope) {
  'use strict';
  $scope.parentProperty = "parent";
}).controller("childController", function ($scope) {
  'use strict';
  $scope.childProperty = "child";
});

app.directive('myDirective', function () {
  'use strict';
  return {
    restrict: "A",
    template: "<input type='text' ng-model='myLink'/><a href='{{ myLink }}'>{{ myLinkText }}</a>",
//        controller: function($scope) {
//            $scope.myLink = "http://www.google.com";
//            $scope.myLinkText = "Google";
//        }
    scope: {
      myLink: "=myLink",
      myLinkText: "@myLinkText2"
    }
  };
});