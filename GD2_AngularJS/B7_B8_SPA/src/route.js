var myApp = angular.module("myModule", ["ngRoute"]);
// chuyen trang
myApp.config(function ($routeProvider, $locationProvider) {
  // xoa khoang trang trinh duyet
  $locationProvider.hashPrefix("");
  // $routeProvider : chuyen trang
  $routeProvider
    .when("/trang-chu", {
      // lam gi thi lam
      // noi dung cua trang chu
      //       template: `<section>
      //             <h1>Noi dung trang chu</h1>
      //             <h1>Noi dung trang chu</h1>
      //             <h1>Noi dung trang chu</h1>
      //             <h1>Noi dung trang chu</h1>
      //             <h1>Noi dung trang chu</h1>
      //         </section>
      //         <table>
      //   <tr>
      //     <th>Company</th>
      //     <th>Contact</th>
      //     <th>Country</th>
      //   </tr>
      //   <tr>
      //     <td>Alfreds Futterkiste</td>
      //     <td>Maria Anders</td>
      //     <td>Germany</td>
      //   </tr>
      //   <tr>
      //     <td>Centro comercial Moctezuma</td>
      //     <td>Francisco Chang</td>
      //     <td>Mexico</td>
      //   </tr>
      // </table><table>
      // <tr>
      //   <th>Company</th>
      //   <th>Contact</th>
      //   <th>Country</th>
      // </tr>
      // <tr>
      //   <td>Alfreds Futterkiste</td>
      //   <td>Maria Anders</td>
      //   <td>Germany</td>
      // </tr>
      // <tr>
      //   <td>Centro comercial Moctezuma</td>
      //   <td>Francisco Chang</td>
      //   <td>Mexico</td>
      // </tr>
      // </table><table>
      // <tr>
      //   <th>Company</th>
      //   <th>Contact</th>
      //   <th>Country</th>
      // </tr>
      // <tr>
      //   <td>Alfreds Futterkiste</td>
      //   <td>Maria Anders</td>
      //   <td>Germany</td>
      // </tr>
      // <tr>
      //   <td>Centro comercial Moctezuma</td>
      //   <td>Francisco Chang</td>
      //   <td>Mexico</td>
      // </tr>
      // </table><table>
      // <tr>
      //   <th>Company</th>
      //   <th>Contact</th>
      //   <th>Country</th>
      // </tr>
      // <tr>
      //   <td>Alfreds Futterkiste</td>
      //   <td>Maria Anders</td>
      //   <td>Germany</td>
      // </tr>
      // <tr>
      //   <td>Centro comercial Moctezuma</td>
      //   <td>Francisco Chang</td>
      //   <td>Mexico</td>
      // </tr>
      // </table><table>
      // <tr>
      //   <th>Company</th>
      //   <th>Contact</th>
      //   <th>Country</th>
      // </tr>
      // <tr>
      //   <td>Alfreds Futterkiste</td>
      //   <td>Maria Anders</td>
      //   <td>Germany</td>
      // </tr>
      // <tr>
      //   <td>Centro comercial Moctezuma</td>
      //   <td>Francisco Chang</td>
      //   <td>Mexico</td>
      // </tr>
      // </table>
      //         `,
      templateUrl: "pages/trang-chu.html",
      controller: HomeController,
      // controller: DongVatController,
      // ThucVatController,
      // DongVatController,
    })
    .when("/contact", {
      // lam gi thi lam
      // noi dung cua trang chu
      //   template: "<h1>Noi dung trang contact</h1>",
      //Truyen file HTML
      // template: "<h1>Noi dung trang cua hang</h1>",
    })
    .when("/cua-hang/:name", {
      // lam gi thi lam
      // noi dung cua trang chu
      templateUrl: "pages/lien-he.html",
      controller: HienThi,
    })
    .otherwise({
      redirectTo: "/trang-chu",
    });
});
