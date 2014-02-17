var app = angular.module("filtersApp", []);
app.directive('ensureUnique', function ($http) {
  'use strict';
  return {
    require: 'ngModel',
    link: function (scope, element, attributes, c) {
      scope.$watch(attributes.ngModel, function (input) {
        if (!input) {
          return;
        }
        $http({
          method: 'POST',
          url: 'api/check/' + attributes.ensureUnique,
          data: {'field': attributes.ensureUnique}
        }).success(function (data) {
          c.$setValidity('unique', data.isUnique);
        }).error(function (data) {
          c.$setValidity('unique', false);
        });
      });
    }
  };
});