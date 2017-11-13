'use strict';

/**
 * @ngdoc service
 * @name gripApp.formDefinition
 * @description
 * # formDefinition
 * Factory in the gripApp.
 */
angular.module('gripApp').factory('formDefinition', function () {

  var dataFuturo = function (date) {
    return (!date || new Date(date) <= new Date());
  };

  var form = [
    {
      type: "fieldset",
      title: "Informações administrativas",
      items: [
        { key: 'hospital' },
        { key: 'numprocessoclinico' },
        { key: 'datadeadmissao',
          type: 'date',
          validationMessage: {
            'datadeadmissaoNoFuturo': 'Data de admissão não pode ser no futuro',
            'dataAdmissaoAposAlta': 'Data de admissão não pode ser posterior à data de alta'
          },
          $validators: {
            dataAdmissaoAposAlta: function(dataAdmissao, oldValue, form) {
              return (!dataAdmissao || !form.dataalta || new Date(dataAdmissao) <= new Date(form.dataalta));
            },
            datadeadmissaoNoFuturo: dataFuturo
          }
        },
        { key: 'sexo',
          type: "radiobuttons",
          titleMap: [
            { value: "M", name: "Masculino" },
            { value: "F", name: "Feminino" },
            { value: "O", name: "Outro" }
          ],
          description: "Transsexuais devem ser incluidos em 'outro'",
          validationMessage: {
            'gravidezNoHomem': 'Não pode seleccionar sexo masculino e gravidez'
          },
          $validators: {
            gravidezNoHomem: function(sexo, oldValue, form) {
              if (!form.gravidez || !sexo) {
                return true;
              }
              return !(form.gravidez === "Y" && sexo === 'M');
            }
          }
        },
        { key: 'datanascimento',
          type: 'date',
          validationMessage: {
            nascimentoNoFuturo: 'Data de nascimento não pode ser numa data futura',
            nascimentoAposAdmissao: 'Data de nascimento não pode ser posterior à data de admissão',
            nascimentoAposSintomas: 'Data de nascimento não pode ser posterior à data de início de sintomas',
            nascimentoAposLaboratorio: 'Data de nascimento não pode ser posterior à data de resultasdo laboratorial',
            nascimentoAposAlta: 'Data de nascimento não pode ser posterior à data de alta',
            nascimentoAposObito: 'Data de nascimento não pode ser posterior à data de óbito'
          },
          $validators: {
            nascimentoNoFuturo: dataFuturo,
            nascimentoAposAdmissao: function(dataNasc, oldValue, form) {
              return !(form.datadeadmissao && new Date(form.datadeadmissao) < new Date(dataNasc));
            },
            nascimentoAposSintomas: function(dataNasc, oldValue, form) {
              return !(form.datainiciosintomas && new Date(form.datainiciosintomas) < new Date(dataNasc));
            },
            nascimentoAposLaboratorio: function(dataNasc, oldValue, form) {
              return !(form.datalaboratorio && new Date(form.datalaboratorio) < new Date(dataNasc));
            },
            nascimentoAposAlta: function(dataNasc, oldValue, form) {
              return !(form.dataalta && new Date(form.dataalta) < new Date(dataNasc));
            },
            nascimentoAposObito: function(dataNasc, oldValue, form) {
              return !(form.dataobito && new Date(form.dataobito) < new Date(dataNasc));
            }
          }
        }
      ]
    },
    {
      type: "fieldset",
      title: "Sintomas e vacinação",
      items: [
        {
          key: 'datainiciosintomas',
          type: "date",
          validationMessage: {
            inicioSintomasNoFuturo: 'Data de início de sintomas não pode ser no futuro',
            sintomasAntesNascimento: 'Data de início de sintomas não pode ser anterior à data de nascimento',
            sintomasAposAlta: 'Data de início de sintomas não pode ser posterior à data de alta',
            sintomasAposObito: 'Data de início de sintomas não pode ser posterior à data de óbito'
          },
          $validators: {
            inicioSintomasNoFuturo: dataFuturo,
            sintomasAntesNascimento: function(sintomas, oldValue, form) {
              return (!form.datanascimento || !sintomas || new Date(form.datanascimento) <= new Date(sintomas));
            },
            sintomasAposAlta: function(sintomas, oldValue, form) {
              return (!form.dataalta || !sintomas || new Date(form.dataalta) >= new Date(sintomas));
            },
            sintomasAposObito: function(sintomas, oldValue, form) {
              return (!form.dataobito || !sintomas ||  new Date(form.dataobito) >= new Date(sintomas));
            }
          }
        },
        {
          key: 'vacinado',
          type: "radiobuttons",
          titleMap: [
            { value: "Y", name: "Sim" },
            { value: "N", name: "Não" },
            { value: "UNK", name: "Desconhecido" }
          ]
        }
      ]
    },
    {
      type: "fieldset",
      title: "Doença Crónica",
      items: [
        {
          key: 'doencacronica',
          type: "radiobuttons",
          titleMap: [
            { value: "Y", name: "Sim" },
            { value: "N", name: "Não" },
            { value: "UNK", name: "Desconhecido" }
          ]
        },
        {
          type: "fieldset",
          condition: 'model.doencacronica === "Y"',
          items: [
            { key: 'asma' },
            { key: 'dpoc'},
            { key: 'diabetes'},
            { key: 'doencaoncologica'},
            { key: 'doencacardiacacronica'},
            { key: 'hiv'},
            { key: 'doencarenalcronica'},
            { key: 'doencahepaticacronica'},
            { key: 'doencaneuromuscular'},
            { key: 'doencaneurocognitiva'},
            { key: 'obesidade'}
          ]
        },
        {
          key: 'gravidez',
          type: "radiobuttons",
          condition: 'model.sexo === "F"',
          titleMap: [
            { value: "Y", name: "Sim" },
            { value: "N", name: "Não" },
            { value: "UNK", name: "Desconhecido" }
          ],
          validationMessage: {
            'gravidezNoHomem': 'Não pode seleccionar sexo masculino e gravidez'
          },
          $validators: {
            gravidezNoHomem: function(gravidez, oldValue, form) {
              if (!gravidez || !form.sexo) {
                return true;
              }
              return !(gravidez === 'Y' && form.sexo === 'M');
            }
          }
        }
      ]
    },
    {
      type: "fieldset",
      title: "Tratamento",
      items: [
        {
          key: "feztratamento",
          type: "radiobuttons",
          titleMap: [
            { value: "Y", name: "Sim" },
            { value: "N", name: "Não" },
            { value: "UNK", name: "Desconhecido" }
          ]
        },
        {
          type: "fieldset",
          condition: 'model.feztratamento === "Y"',
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
        {
          key: "fezprocedimento",
          type: "radiobuttons",
          titleMap: [
            { value: "Y", name: "Sim" },
            { value: "N", name: "Não" },
            { value: "UNK", name: "Desconhecido" }
          ]
        },
        {
          type: "fieldset",
          condition: 'model.fezprocedimento === "Y"',
          items: [
            { key: 'vni'},
            { key: 'intubacao'},
            { key: 'ecmo'},
            { key: 'dialise'}
          ]
        }
      ]
    },
    {
      type: "fieldset",
      title: "Amostra Biológica",
      items: [
        { key: 'zaragatoa'},
        { key: 'lavadoalveolar'},
        { key: 'biopsia'}
      ]
    },
    {
      type: "fieldset",
      title: "Resultado Laboratorial",
      items: [
        {
          key: 'serotipagem',
          titleMap: [
            { value: "UNK", name: "Desconhecido" },
            { value: "A", name: "A (não subtipado)" },
            { value: "AH1", name: "A(H1)" },
            { value: "AH1N1", name: "A(H1N1)" },
            { value: "AH3", name: "A(H3)" },
            { value: "AH3N2", name: "A(H3N2)" },
            /*{ value: "AH5", name: "A(H5)" },*/
            /*{ value: "AH5N1", name: "A(H5N1)" },*/
            { value: "B", name: "B (não subtipado)" },
            { value: "BVic", name: "B Victoria" },
            { value: "BYam", name: "B Yamagata" }
          ]
        },
        {
          key: 'datalaboratorio',
          type: "date",
          validationMessage: {
            'laboratorioAntesDeHospitalizacao': 'Data de confirmação laboratorial não pode ser anterior à Data de Admissão na UCI',
            'altaNoFuturo': 'Data de confirmação laboratorial não pode ser numa data futura'
        },
          $validators: {
            altaNoFuturo: dataFuturo,
            laboratorioAntesDeHospitalizacao: function(dataLab, oldValue, form) {
              return (!dataLab || !form.datadeadmissao || new Date(dataLab) >= new Date(form.datadeadmissao));
            }
          }
        }
      ]
    },

    {
      type: "fieldset",
      title: "Alta/Óbito",
      items: [
        {
          key: 'dataalta',
          type: 'date',
          validationMessage: {
            'altaAntesDeHospitalizacao': 'Data da Alta não pode ser anterior à Data de Admissão na UCI',
            'altaNoFuturo': 'Data de alta não pode ser numa data futura',
            'obitoAntesDeAlta': 'Data de óbito não pode ser anterior à Data de Alta. Em caso de óbito durante o internamento, coloque a mesma data em ambos os campos'
          },
          $validators: {
            altaNoFuturo: dataFuturo,
            altaAntesDeHospitalizacao: function(dataAlta, oldValue, form) {
              return (!dataAlta || !form.datadeadmissao || new Date(form.datadeadmissao) <= new Date(dataAlta));
            },
            obitoAntesDeAlta: function(dataAlta, oldValue, form) {
              return (!dataAlta || !form.dataobito || new Date(dataAlta) <= new Date(form.dataobito));
            }
          }
        },
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
            {
              key: 'dataobito',
              type: 'date',
              validationMessage: {
                'dataobitoNoFuturo': 'Data do Óbito não pode ser no futuro',
                'obitoAntesDeHospitalizacao': 'Data de óbito não pode ser anterior à data de internamento',
                'obitoAntesDeAlta': 'Data de óbito não pode ser anterior à Data de Alta. Em caso de óbito durante o internamento, coloque a mesma data em ambos os campos'
              },
              $validators: {
                dataobitoNoFuturo: dataFuturo,
                obitoAntesDeHospitalizacao: function(dataObito, oldValue, form) {
                  return (!dataObito || !form.datadeadmissao || new Date(form.datadeadmissao) <= new Date(dataObito));
                },
                obitoAntesDeAlta: function(dataObito, oldValue, form) {
                  return (!dataObito || !form.dataalta || new Date(form.dataalta) <= new Date(dataObito));
                }
              }
            }
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
    }
  ];

  return {
    newForm: function () {
      var nForm = angular.copy(form);
      nForm.push({
        type: "fieldset",
        title: "Acções",
        htmlClass: 'stretch-all',
        items: [
          { type: 'submit', title: 'Carregar' },
          { type: 'button', title: 'Reset', onClick: "onReset()"}
        ]
      });
      return nForm;
    },
    editForm: function () {
      return angular.copy(form);
    }
  };
});
