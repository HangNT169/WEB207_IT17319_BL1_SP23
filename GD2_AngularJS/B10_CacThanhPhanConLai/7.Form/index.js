let app = angular.module("myApp", []);
app.controller("myController", function ($scope) {
  var users = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Joddhn", lastName: "dd" },
  ];
  var user = { firstName: "Joddhn", lastName: "dd" };
  $scope.users = users;
  $scope.user = user;
});

//   camelCase;
app.directive("checkPassword", function () {
  return {
    require: "ngModel",
    link: function (scope, element, attr, mCtrl) {
      const fnValidate = function (value) {
        if (value.length < 6) {
          mCtrl.$setValidity("check_length_pwd", false); // xet loi duoc hien thi hay khong: hop le hay k: false => hien thi : check_length_pwd : ten dat
        } else {
          mCtrl.$setValidity("check_length_pwd", true);
        }
      };

      mCtrl.$parsers.push(fnValidate);
      // fnValidate : kiem tra khi co loi. Neu loi => push vao
    },
  };
});
