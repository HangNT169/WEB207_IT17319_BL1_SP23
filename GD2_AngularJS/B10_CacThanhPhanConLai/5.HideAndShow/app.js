// Cau lenh khoi tao 1 module
var myApp = angular
  .module("myModule", [])
  .controller("myController", function ($scope) {
    var employees = [
      { firstName: "Nguyen", lastName: "Hang", gender: true, salary: 10 },
      { firstName: "Nguyen", lastName: "Hang2", gender: true, salary: 213 },
      { firstName: "Nguyen", lastName: "Hang3", gender: false, salary: 43 },
      { firstName: "Nguyen", lastName: "Hang4", gender: true, salary: 4 },
    ];
    $scope.employees = employees;
    $scope.increaseLike = function (employee) {
      employee.salary++;
    };
    $scope.increaseDislike = function (employee) {
      employee.salary--;
    };
  });
