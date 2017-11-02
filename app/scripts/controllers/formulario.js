'use strict';

/**
 * @ngdoc function
 * @name fluApp.controller:FormularioCtrl
 * @description
 * # FormularioCtrl
 * Controller of the fluApp
 */
angular.module('fluApp').controller('FormularioCtrl', ['$scope', 'registos', 'schema', 'formDefinition', '$rootScope', function ($scope, registos, schema, formDefinition, $rootScope) {
  $scope.model = {};
  $scope.schema = schema;
  $scope.form = formDefinition.newForm();
  $scope.registoForm = null;
  $scope.index = null;

  $scope.$on('edit-record', function (event, arg) {
    $scope.model = arg.record;
    $scope.index = arg.index;
  });

  $scope.onReset = function (form) {

    if (form) {
      form.$setPristine();
      form.$setUntouched();
    }
    $scope.model = {};
    $scope.index = null;
    $scope.$broadcast('schemaFormRedraw');
  };

  $scope.onSubmit = function (form) {
    // First we broadcast an event so all fields validate themselves
    $scope.$broadcast('schemaFormValidate');
    // custom validations

    // we then convert dates to date objects
    for (var item in $scope.model) {
      if ($scope.model.hasOwnProperty(item) && $scope.model[item] && /^data/.test(item)) {
        $scope.model[item] = new Date($scope.model[item]);
      }
    }

    if (!form.$valid) {
      window.alert('O formulário tem erros. Por favor verifique a informação (assinalada a vermelho).');
    } else {
      //var registo = angular.copy($scope.model);
      if ($scope.index !== null) {
        registos.set($scope.index, $scope.model);
        // since angular only performs shallow watches on arrays
        // we need to manually broadcast an event to update other controllers
        // namely registos controller
        $rootScope.$broadcast('records-updated');
      } else {
        registos.add($scope.model);
      }
      // reset form
      $scope.onReset(form);
      window.alert('Registo inserido com sucesso!');
    }
  };
}]);
