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

    // custom validations
    console.log($scope.model);

    if (form.$invalid) {
      alert('O formulário tem erros. Por favor verifique a informação (assinalada a vermelho).');
    } else {
      var registo = angular.copy($scope.model);
      registos.add(registo);
      $scope.model = {};
      form.$setPristine();
      form.$setUntouched();
      alert('Registo inserido com sucesso!');
    }
  };


  /* VALIDATORS */
  function validate_altaAntesDeHospitalizacao(dataAlta, dataHospitalizacao)
  {
    if (!dataAlta || !dataHospitalizacao) {
      return;
    }
    dataAlta = new Date(dataAlta);
    dataHospitalizacao = new Date(dataHospitalizacao);
    if (dataHospitalizacao > dataAlta) {
      $scope.$broadcast('schemaForm.error.dataAlta','altaAnteriorAHospitalizacao', 'Data da Alta não pode ser anterior à Data de Hospitalização');
      //alert("Erro: A Data da Alta não pode ser anterior à Data de Hospitalização");
      return false;
    }
    return true;
  }




}]);
