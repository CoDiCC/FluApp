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

  $scope.countSelected = function () {
    var count = $scope.registos.length - 1;
    var counter = 0;
    for (var i = count; i >= 0 ; --i) {
      if ($scope.registos[i].$$selected === true) {
        counter++;
      }
    }
    return counter;
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
        $scope.registos = [];
        try {
          registos.setAll(data);
        } catch (e) {
          window.alert(e);
        }

        $scope.registos = registos.getAll();
      },
      function () {}
    );
  };

  $scope.editRecordModalOpen = function () {

    if ($scope.countSelected() !== 1) {
      return;
    }
    var count = $scope.registos.length - 1;
    var record = {};
    var index = null;

    for (var i = count; i >= 0 ; --i) {
      if ($scope.registos[i].$$selected === true) {
        //create copy of record
        record = angular.copy($scope.registos[i]);
        index = i;

        // transform all date items in record in a date object
        // because angular input date only accepts datetime objects
        for (var item in record) {
          if (record.hasOwnProperty(item)) {
            // we assume that all properties whose name start by data are... well... dates
            if (/^data/.test(item) && record[item] !== null && record[item] !== '') {
              try {
                record[item] = new Date(record[item]);
              } catch (e) {
                record[item] = null;
              }
            }
          }
        }
        break; // stop loop on first record selected
      }
    }

    if (index === null) {
      return;
    }

    var modalInstance = $uibModal.open({
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'views/editrecordmodal.html',
      controller: 'EditrecordmodalCtrl',
      resolve: {
        record: function () {
          return record;
        }
      }
    });

    modalInstance.result.then(
      function (registo) {
        // ok
        registos.set(index, registo);
        $scope.registos = registos.getAll();
      },
      function () {
        //cancel
        console.log('cancel');
      }
    );

  };

}]);
