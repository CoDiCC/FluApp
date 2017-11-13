'use strict';

/**
 * @ngdoc function
 * @name gripApp.controller:EditrecordmodalCtrl
 * @description
 * # EditrecordmodalCtrl
 * Controller of the gripApp
 */
angular.module('gripApp').controller('EditrecordmodalCtrl', [
  '$uibModalInstance',
  '$scope',
  'registos',
  'schema',
  'formDefinition',
  'record',
  function ($uibModalInstance, $scope, registos, schema, formDefinition, record) {
    $scope.model = record;
    $scope.schema = schema;
    $scope.form = formDefinition.editForm();

    $scope.ok = function () {
      $uibModalInstance.close($scope.model);
    };
    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }
]);
