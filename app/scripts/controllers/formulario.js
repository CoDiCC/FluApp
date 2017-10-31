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
  $scope.initialModel = {};
  $scope.schema = schema;
  $scope.form = formDefinition;
  $scope.registoForm = null;

  $scope.onReset = function (form) {

    if (form) {
      form.$setPristine();
      form.$setUntouched();
    }
    $scope.model = {};
    $scope.$broadcast('schemaFormRedraw');
  };

  $scope.onSubmit = function (form) {
    // First we broadcast an event so all fields validate themselves
    $scope.$broadcast('schemaFormValidate');

    // custom validations

    if (!form.$valid) {
      window.alert('O formulário tem erros. Por favor verifique a informação (assinalada a vermelho).');
    } else {
      var registo = angular.copy($scope.model);
      registos.add(registo);
      // reset form
      $scope.onReset(form);
      window.alert('Registo inserido com sucesso!');
    }
  };
}]);
