'use strict';

/**
 * @ngdoc function
 * @name fluApp.controller:RegistosCtrl
 * @description
 * # RegistosCtrl
 * Controller of the fluApp
 */
angular.module('fluApp').controller('RegistosCtrl', ['$scope', 'registos', '$uibModal', 'CsvParser', function ($scope, registos, $uibModal, CsvParser) {
  $scope.headers = registos.getHeaders(true);
  $scope.props = registos.getProps();
  $scope.registos = registos.getAll();

  $scope.options = {
    filename: 'registos',
    fieldSeparator: ';'
  };

  $scope.getArray = function () {
    return JSON.parse(angular.toJson(registos.getAll()));
  };

  $scope.getHeaders = function () {
    return registos.getHeaders();
  };

  $scope.getProps = function () {
    return registos.getProps();
  };

  $scope.reset = function () {
    if (window.confirm("Deseja mesmo apagar todos os registos?") === true) {
      registos.reset();
      $scope.registos = registos.getAll();
    }
  };

  $scope.deleteRecord = function () {
    if (window.confirm("Deseja mesmo apagar o(s) registo(s) seleccionados?") === true) {
      var count = $scope.registos.length - 1;
      for (var i = count; i >= 0 ; --i) {
        if ($scope.registos[i].$$selected === true) {
          registos.remove(i);
        }
      }
    }
    $scope.registos = registos.getAll();
  };

  $scope.fileLoadModalOpen = function () {
    var modalInstance = $uibModal.open({
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'views/uploadfilemodal.html',
      controller: 'OpenFileModalInstanceCtrl'
    });

    modalInstance.result.then(
      function (file) {
        var data = CsvParser.parse(file);
        registos.setAll(data);
        $scope.registos = registos.getAll();
        console.log(registos.getAll());
      },
      function () {

      }
    );
  };



}]);
