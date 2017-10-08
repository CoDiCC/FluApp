'use strict';

/**
 * @ngdoc function
 * @name fluApp.controller:FormularioCtrl
 * @description
 * # FormularioCtrl
 * Controller of the fluApp
 */
angular.module('fluApp').controller('FormularioCtrl', ['$scope', 'registos', 'schema', 'formDefinition', function ($scope, registos, schema, formDefinition) {
  $scope.model = {};
  $scope.schema = schema;
  $scope.form = formDefinition;

  $scope.onSubmit = function (form) {

    // First we broadcast an event so all fields validate themselves
    $scope.$broadcast('schemaFormValidate');

    console.log($scope.model);

    if (form.$valid) {
      var registo = angular.copy($scope.model);
      registos.add(registo);
      $scope.model = {};
      form.$setPristine();
      form.$setUntouched();
    }
  };

  /*
  function dirtyFixForDateBug() {

  }*/


}]);
