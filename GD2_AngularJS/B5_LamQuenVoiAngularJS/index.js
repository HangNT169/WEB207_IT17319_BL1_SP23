// B1: Khoi tao module
var myApp = angular.module("myModule", []);

// B2: Khoi tao controller
// Co 2 cach khoi tao controller
// C1: Dung ham cu the(tuong minh)
// tenBienModule.controller("ten controller",tenHam)
// myApp.controller("myController", myFunction);

// // $scope la bien trao doi giua model va view
// function myFunction($scope) {
//   $scope.message1 = "Hello Angular JS";
// }

// C2: Ham nac danh
myApp.controller("myController", function ($scope) {
  // code
  // Gia tri String
  $scope.message1 = "Hello Angular JS";
  // Gia tri khoi tao la 1 Object
  //   {} : la 1 Object
  // Mang:[]
  var employee = {
    firstName: "Hang",
    lastName: "Nguyen",
  };
  $scope.e = employee;
  //   $scope.e = {
  //     firstName: "Hang",
  //     lastName: "Nguyen",
  //   };

  // Gia tri khoi tao la 1 mang
  $scope.info = ["hihi1", "hihi2"];

  // Gia tri khoi tao la 1 mang Object
  $scope.mangObject = [
    {
      firstName: "Hang",
      lastName: "Nguyen",
    },
    {
      firstName: "Hang",
      lastName: "Nguyen",
    },
  ];
  $scope.tinhTong = function () {
    // code
    $scope.sum =
      Number.parseInt($scope.number1) + Number.parseInt($scope.number2);
  };
});
