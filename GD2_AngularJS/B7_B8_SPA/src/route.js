var myApp = angular.module("myModule", ["ngRoute"]);
// Chuyen trang
myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  // chuyen trang
  $routeProvider
    .when("/home", {
      // noi dung cua trang co duong dan la /trang-chu
      // template: `<section>
      //       <h1>Day la trang chu</h1>
      //       <h1>Day la trang chu</h1>
      //    </section>`,
      templateUrl: "pages/trang-chu.html",
    })
    .when("/gioi-thieu", {
      // noi dung cua trang co duong dan la /trang-chu
      template: "<h1>Day la gioi thieu</h1>",
    })
    .when("/about/HangNT169", {
      // noi dung cua trang co duong dan la /trang-chu
      template: "<h1>Day la chung toi</h1>",
    })
    .otherwise({
      redirectTo: "/home",
    });
});
