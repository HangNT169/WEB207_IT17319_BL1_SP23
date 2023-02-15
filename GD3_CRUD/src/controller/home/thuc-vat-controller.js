window.ThucVatController = function ($scope, $http) {
  // De giao tiep BE, FE
  // => Phuong thuc HTTP
  // Voi cac HTTP Method : GET,POST,PUT,DELETE.....
  // CRUD: CREATE, READ, UPDATE, DELETE
  // request: Nhung gia tri tham so duoc truyen tu client => server
  // (FE => BE) => Giong tham so truyen vao cua 1 function
  // response: Gia tri nhan duoc tu phia server => client
  // (BE=> FE)=> Giong nhu ket qua tra ve cua 1 function
  // => Giong ket qua tra ve cua 1 function
  // GET: Lay du lieu  <=> READ <=> SELECT
  $scope.listThucVat = [];
  $scope.form_thucVat = {
    ten: "",
    loai: "",
    gioiTinh: true,
  };
  $scope.viTriUpdate = -1;
  // -1 : Chua chon dong de update
  $http.get(thucVatAPI).then(function (response) {
    // console.log(response.data);
    $scope.listThucVat = response.data;
  });

  // DELETE : Xoa du lieu <=> DELETE <=> DELETE
  $scope.removeThucVat = function (event, index) {
    event.preventDefault();
    let tv = $scope.listThucVat[index];
    let api = thucVatAPI + "/" + tv.id;
    $http.delete(api).then(function () {
      $scope.listThucVat.splice(index, 1);
      alert("Xoa thanh cong");
    });
  };

  // Detail
  $scope.detailThucVat = function (event, index) {
    event.preventDefault();
    let tv = $scope.listThucVat[index];
    $scope.form_thucVat.ten = tv.ten;
    $scope.form_thucVat.loai = tv.loai;
    $scope.form_thucVat.gioiTinh = tv.gioiTinh;
    $scope.viTriUpdate = index;
  };

  // POST : Them du lieu <=> CREATE <=> INSERT INTO
  $scope.addThucVat = function (event) {
    event.preventDefault();
    $http.post(thucVatAPI, $scope.form_thucVat).then(function (response) {
      $scope.listThucVat.push(response.data);
    });
  };

  // PUT: Sua du lieu <=> UPDATE <=> UPDATE
  $scope.updateThucVat = function (event) {
    event.preventDefault();
    if ($scope.viTriUpdate == -1) {
      alert("Chon di");
    }
    let tv = $scope.listThucVat[$scope.viTriUpdate];
    let api = thucVatAPI + "/" + tv.id;
    $http.put(api, $scope.form_thucVat).then(function (response) {
      $scope.listThucVat[$scope.viTriUpdate] = response.data;
    });
  };
};
