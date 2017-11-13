'use strict';

/**
 * @ngdoc function
 * @name gripApp.controller:FormularioCtrl
 * @description
 * # FormularioCtrl
 * Controller of the gripApp
 */
angular.module('gripApp').controller('FormularioCtrl', ['$scope', 'registos', 'schema', 'formDefinition', function ($scope, registos, schema, formDefinition) {
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
    $scope.model = {};
    if (form) {
      form.$setPristine();
      form.$setUntouched();
    }
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

    // reset errors
    $scope.$broadcast('schemaForm.error.doencacronica','doencacronicaNaoSeleccionada', true);

    // validate first
    try {
      registos.validateRecord($scope.model);
    } catch (e) {

      if (!angular.isUndefined(e.dataPath) && e.dataPath === "" && angular.isArray(e.subErrors)) {
        for (var i = 0; i < e.subErrors.length; ++i) {
          if (e.subErrors[i].dataPath === '/doencacronica') {
            $scope.$broadcast('schemaForm.error.doencacronica','doencacronicaNaoSeleccionada', 'Tendo seleccionado o campo "Doença Crónica" como "Sim", deverá seleccionar pelo menos um destes valores');
          }
        }
      }
    }


    if (!form.$valid) {
      window.alert('O formulário tem erros. Por favor verifique a informação (assinalada a vermelho).');
    } else {
      //var registo = angular.copy($scope.model);
      registos.add($scope.model);
      // reset form
      $scope.onReset(form);
      window.alert('Registo inserido com sucesso!');
    }
  };
}]);
