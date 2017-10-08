'use strict';

/**
 * @ngdoc service
 * @name fluApp.formDefinition
 * @description
 * # formDefinition
 * Factory in the fluApp.
 */
angular.module('fluApp').factory('formDefinition', function () {
  return [
    {
      type: "fieldset",
      title: "Informações gerais",
      items: [
        { key: 'hospital' },
        { key: 'numprocessoclinico' },
        { key: 'datadeadmissao', type: 'date'},
        { key: 'dataalta', type: 'date'},
        { key: 'sexo' },
        { key: 'datanascimento', type: 'date'},
        {
          key: 'obito',
          type: "radiobuttons",
          titleMap: [
            { value: "Y", name: "Sim" },
            { value: "N", name: "Não" },
            { value: "UNK", name: "Desconhecido" }
          ]
        },
        {
          type: "fieldset",
          title: "Se óbito...",
          condition: 'model.obito === "Y"',
          items: [
            { key: 'dataobito', type: 'date'},
            { key: 'causademorte' }
          ]
        }
      ]
    },
    {
      type: "fieldset",
      items: [
        {
          type: "fieldset",
          title: "Apresentação Clínica",
          items: [
            {
              key: "assintomatico",
              title: "Doente assintomático?",
              type: "radiobuttons",
              required: true,
              titleMap: [
                { value: "Y", name: "Sim" },
                { value: "N", name: "Não" },
                { value: "UNK", name: "Desconhecido" }
              ]
            },
            {
              type: "section",
              condition: 'model.assintomatico === "N"',
              items: [
                { key: 'tosse'},
                { key: 'febre' },
                { key: 'dispneia' },
                { key: 'odinofagia' },
                { key: 'outrosintoma' },
                { key: 'datainiciosintomas', type: "date" }
              ]
            }
          ]
        },
        {
          type: "fieldset",
          title: "Vacinação",
          items: [
            {
              key: 'vacinado',
              type: "radiobuttons",
              titleMap: [
                { value: "Y", name: "Sim" },
                { value: "N", name: "Não" },
                { value: "UNK", name: "Desconhecido" }
              ]
            },
            { key: 'datavacinacao', type: "date", condition: 'model.vacinado === "Y"'}
          ]
        },
        {
          type: "fieldset",
          title: "Complicações",
          items: [
            {
              key: "complicacoes",
              title: "Teve complicações durante o internamento?",
              required: true,
              type: "radiobuttons",
              titleMap: [
                { value: "Y", name: "Sim" },
                { value: "N", name: "Não" },
                { value: "UNK", name: "Desconhecido" }
              ]
            },
            {
              type: "section",
              condition: 'model.complicacoes === "Y"',
              items: [
                { key: 'sdra'},
                { key: 'bronquiolite'},
                { key: 'encefalite'},
                { key: 'miocardite'},
                { key: 'pneumonia'},
                { key: 'sepsis'}
              ]
            }
          ]
        }
      ]
    },
    {
      type: "fieldset",
      items: [
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
        }
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
        {
          key: 'serotipagem',
          titleMap: [
            { value: "UNK", name: "Desconhecido" },
            { value: "A", name: "A, sem sub-tipo" },
            { value: "AH1", name: "A(H1), sem sub-tipo N" },
            { value: "AH1N1", name: "A(H1N1)" },
            { value: "AH3", name: "A(H3), sem sub-tipo N" },
            { value: "AH3N2", name: "A(H3N2)" },
            { value: "AH5", name: "A(H5), sem sub-tipo N" },
            { value: "AH5N1", name: "A(H5N1)" },
            { value: "B", name: "linhagem indeterminada" },
            { value: "BVic", name: "Influenza type B, Victoria lineage" },
            { value: "BYam", name: "Influenza type B, Yamagata lineage" },
            { value: "PanAH1", name: "A(H1)pdm09" },
            { value: "PanAH1N1", name: "A(H1N1)pdm09" },
            { value: "O", name: "Outro"}
          ]
        }
      ]
    },

    {
      type: "fieldset",
      title: "Observações",
      items: [
        { key: 'observacoes', type: "textarea"}
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
});
