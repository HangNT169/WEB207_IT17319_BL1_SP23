var myApp = angular.module("myApp", []);
myApp.controller("myController", function ($scope, $rootScope) {
  $scope.message = "Hello";
  $rootScope.mess1 = "Bien toan cuc";
});
