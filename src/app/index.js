var app = angular.module('app', ['emailParser']);
app.controller("ExpressionController",
    function($scope, $parse) {
        $scope.$watch('expression', function(newVal, oldVal, scope) {
            if(newVal != oldVal) {
                scope.result = $parse(newVal)(scope);
            }
        });
    }
);

app.controller("HelloController",
    function($scope) {
        var updateClock = function() {
            $scope.clock = new Date();
        };

        setInterval(function() {
            $scope.$apply(updateClock())
        }, 1000);

        updateClock();

        $scope.name = "Hello";
    }
);

app.controller("CalculationController",
    function($scope) {
        $scope.price = 0;
        $scope.name = "Calculation";
        $scope.add = function(amount) {
            $scope.price += amount;
        }
        $scope.subtract = function(amount) {
            if($scope.price > 0) {
                $scope.price -= amount;
            }
        }
    }
)

app.controller("EmailController",
    function($scope, EmailParser) {
        $scope.emailBody = "Hi {{ recipient }}, \n\nCheers,\nHuanhuan";
        $scope.$watch("emailBody", function(emailBody){
            if(emailBody) {
                $scope.preview = EmailParser.parse(emailBody,{recipient: $scope.recipient});
            }
        });
        $scope.$watch("recipient", function(recipient){
           if(recipient){
               $scope.preview = EmailParser.parse($scope.emailBody,{recipient: recipient});
           }
        });
    }
);

var parserModule = angular.module("emailParser", []);
//parserModule.config(['$interpolateProvider',
//    function($interpolateProvider) {
//        $interpolateProvider.startSymbol('_');
//        $interpolateProvider.endSymbol('_');
//    }
//]);
parserModule.factory("EmailParser", ['$interpolate',
    function($interpolate) {
        return {
            parse: function(emailBody, params){
                return $interpolate(emailBody)(params);
            }
        }
    }])


