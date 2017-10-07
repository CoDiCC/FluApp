'use strict';

/**
 * @ngdoc function
 * @name fluApp.controller:FormularioCtrl
 * @description
 * # FormularioCtrl
 * Controller of the fluApp
 */
angular.module('fluApp').controller('FormularioCtrl', ['$scope', 'registos', 'schema', function ($scope, registos, schema) {
  $scope.model = {};

  $scope.schema = schema;

  $scope.form = [
    {
      type: "fieldset",
      title: "Informações gerais",
      items: [
        { key: 'hospital' },
        { key: 'numprocessoclinico' },
        { key: 'datadeadmissao'/*, type: 'date' */},
        { key: 'dataalta'/*, type: 'date' */},
        { key: 'sexo' },
        { key: 'datanascimento'/*, type: 'date' */},
        { key: 'obito'},
        {
          type: "fieldset",
          title: "Se óbito...",
          condition: 'model.obito',
          items: [
            { key: 'dataobito'/*, type: 'date' */},
            { key: 'causademorte' }
          ]
        }
      ]
    },
    {
      type: "fieldset",
      title: "Apresentação Clínica",
      items: [
        { key: 'tosse'},
        { key: 'febre' },
        { key: 'dispneia' },
        { key: 'odinofagia' },
        { key: 'outrosintoma' },
        { key: 'datainiciosintomas' }
      ]
    },
    {
      type: "fieldset",
      title: "Vacinação",
      items: [
        { key: 'vacinado'},
        { key: 'datavacinacao'}
      ]
    },
    {
      type: "fieldset",
      title: "Complicações",
      items: [
        { key: 'sdra'},
        { key: 'bronquiolite'},
        { key: 'encefalite'},
        { key: 'miocardite'},
        { key: 'pneumonia'},
        { key: 'sepsis'}
      ]
    },

    {
      type: "fieldset",
      title: "Antecedentes",
      items: [
        { key: 'asma'},
        { key: 'dpoc'},
        { key: 'diabetes'},
        { key: 'doencaoncologica'},
        { key: 'doencacardiacacronica'},
        { key: 'hiv'},
        { key: 'doencarenalcronica'},
        { key: 'doencahepaticacronica'},
        { key: 'doencaneuromuscular'},
        { key: 'doencaneurocognitiva'},
        { key: 'obesidade'},
        { key: 'obesidademorbida'},
        { key: 'gravidez'}
      ]
    },

    {
      type: "fieldset",
      title: "Tratamento",
      items: [
        { key: 'oseltamivir'},
        { key: 'zanamivir'}
      ]
    },

    {
      type: "fieldset",
      title: "Procedimentos",
      items: [
        { key: 'vni'},
        { key: 'intubacao'},
        { key: 'ecmo'},
        { key: 'dialise'},
        { key: 'zaragatoa'},
        { key: 'lavadoalveolar'},
        { key: 'biopsia'}
      ]
    },

    {
      type: "fieldset",
      title: "Laboratório",
      items: [
        { key: 'serotipagem'}
      ]
    },

    {
      type: "fieldset",
      title: "Observações",
      items: [
        { key: 'observacoes', type: "textarea"},
      ]
    },
    {
      type: "fieldset",
      title: "Acções",
      htmlClass: 'stretch-all',
      items: [
        { type: 'submit', title: 'Carregar' },
        { type: 'button', title: 'Reset', fieldHtmlClass: 'btn-danger'}
      ]
    }
  ];

  $scope.onSubmit = function (registoForm) {
    // First we broadcast an event so all fields validate themselves
    $scope.$broadcast('schemaFormValidate');

    if (registoForm.$valid) {
      var registo = angular.copy($scope.model);
      registos.add(registo);
      $scope.model = {};
      registoForm.$setPristine();
      registoForm.$setUntouched();
    }
  };
}]);
