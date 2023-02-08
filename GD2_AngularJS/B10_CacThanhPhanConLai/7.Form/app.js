// Cau lenh khoi tao 1 module
var myApp = angular.module("myModule", []);
myApp.controller("myController", function ($scope) {
  var users = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Joddhn", lastName: "dd" },
  ];
  $scope.users = users;

  $scope.chuyenTrang = function () {
    alert("sdfs");
  };
});
