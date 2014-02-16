var app = angular.module("directivesApp", []);
app.run(function($rootScope){
    $rootScope.rootProperty = "root";
    $rootScope.parentProperty = "undefined";
    $rootScope.childProperty = "undefined";
});
app.controller("parentController", function($scope) {
    $scope.parentProperty = "parent";
}).controller("childController", function($scope) {
    $scope.childProperty = "child";
});

app.directive('myDirective', function() {
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
    }
});