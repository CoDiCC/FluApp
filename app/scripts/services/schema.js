'use strict';

/**
 * @ngdoc service
 * @name fluApp.schema
 * @description
 * # schema
 * Factory in the fluApp.
 */
angular.module('fluApp').factory('schema', function () {
  return {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "http://example.com/example.json",
    "type": "object",
    "required": [
      "hospital",
      "numprocessoclinico",
      "datadeadmissao",
      "sexo",
      "datanascimento",
      "datainiciosintomas",
      "vacinado",
      "doencacronica",
      "feztratamento",
      "fezprocedimento",
      "serotipagem",
      "datalaboratorio",
      "dataalta",
      "obito"
    ],
    "anyOf": [
      {
        "allOf": [
          {
            "required": ["doencacronica"],
            "properties": {
              "doencacronica": { "enum": ["Y"] }
            }
          },
          {
            "anyOf": [
              {"required": ["asma"], "properties": {"asma": {"enum": [true]}}},
              {"required": ["dpoc"], "properties": {"dpoc": {"enum": [true]}}},
              {"required": ["diabetes"], "properties": {"diabetes": {"enum": [true]}}},
              {"required": ["doencaoncologica"], "properties": {"doencaoncologica": {"enum": [true]}}},
              {"required": ["doencacardiacacronica"], "properties": {"doencacardiacacronica": {"enum": [true]}}},
              {"required": ["hiv"], "properties": {"hiv": {"enum": [true]}}},
              {"required": ["doencarenalcronica"], "properties": {"doencarenalcronica": {"enum": [true]}}},
              {"required": ["doencahepaticacronica"], "properties": {"doencahepaticacronica": {"enum": [true]}}},
              {"required": ["doencaneuromuscular"], "properties": {"doencaneuromuscular": {"enum": [true]}}},
              {"required": ["obesidade"], "properties": {"obesidade": {"enum": [true]}}}
            ]
          }
        ]
      },
      {
        "allOf": [
          {
            "properties": {
              "doencacronica": { "enum": ["N", "UNK"] }
            }
          },
          {
            "allOf": [
              {"properties": {"asma": {"enum": [false]}}},
              {"properties": {"dpoc": {"enum": [false]}}},
              {"properties": {"diabetes": {"enum": [false]}}},
              {"properties": {"doencaoncologica": {"enum": [false]}}},
              {"properties": {"doencacardiacacronica": {"enum": [false]}}},
              {"properties": {"hiv": {"enum": [false]}}},
              {"properties": {"doencarenalcronica": {"enum": [false]}}},
              {"properties": {"doencahepaticacronica": {"enum": [false]}}},
              {"properties": {"doencaneuromuscular": {"enum": [false]}}},
              {"properties": {"obesidade": {"enum": [false]}}}
            ]
          }
        ]
      }
    ],

    "properties": {
      "hospital": {
        "id": "/properties/hospital",
        "title": "Hospital",
        "description": "Hospital/Centro Hospitalar",
        "type": "string",
        "enum": [
          "British Hospital",
          "Centro Hospitalar Cova da Beira - Hospital Pêro da Covilhã",
          "Centro Hospitalar de São João - Hospital São João",
          "Centro Hospitalar do Alto Ave - Hospital da Senhora da Oliveira, Guimarães",
          "Centro Hospitalar e Universitário de Coimbra - Hospitais da Universidade de Coimbra",
          "Centro Hospitalar Lisboa Central",
          "Centro Hospitalar Lisboa Norte",
          "Centro Hospitalar Lisboa Ocidental - Hospital de São Francisco Xavier",
          "Centro Hospitalar Médio Tejo - Hospital Dr. Manoel Constâncio Abrantes",
          "Centro Hospitalar Tondela Viseu - Hospital de São Teotónio",
          "CUF Descobertas",
          "Hospital Beatriz Ângelo",
          "Hospital de Cascais Dr. José de Almeida",
          "Hospital do Divino Espírito Santo de Ponta Delgada (Açores)",
          "Hospital dos Lusíadas",
          "Hospital Professor Doutor Fernando Fonseca",
          "Hospital Vila Franca de Xira",
          "Unidade Local de Saúde Castelo Branco - Hospital Amato Lusitano",
          "Unidade Local de Saúde do Litoral Alentejano - Hospital do Litoral Alentejano"
        ]
      },
      "numprocessoclinico": {
        "id": "/properties/numprocessoclinico",
        "title": "N.º processo clínico",
        "description": "Número do processo clínico no hospital",
        "type": "string"
      },
      "datadeadmissao": {
        "id": "/properties/datadeadmissao",
        "title": "Data de admissão",
        "type": "string",
        "description": "Data de Admissão na UCI",
        "format": "date"
      },
      "sexo": {
        "id": "/properties/sexo",
        "title": "Sexo",
        "description": "Sexo do utente",
        "type": "string",
        "enum": ["M", "F", "O"]
      },
      "datanascimento": {
        "id": "/properties/datanascimento",
        "title": "Data de Nascimento",
        "description": "Data de nascimento do utente",
        "type": "string",
        "format": "date"
      },
      "datainiciosintomas": {
        "id": "/properties/datainiciosintomas",
        "title": "Data de início de sintomas",
        "type": "string",
        "format": "date"
      },
      "vacinado": {
        "id": "/properties/vacinado",
        "title": "Vacinado",
        "description": "O doente foi vacinado contra a gripe nesta época?",
        "type": "string",
        "enum": ["Y", "N", "UNK"]
      },
      "doencacronica": {
        "id": "/properties/doencacronica",
        "title": "Doença Crónica",
        "description": "O doente tem alguma doença crónica?",
        "type": "string",
        "enum": ["Y", "N", "UNK"]
      },
      "asma": {
        "id": "/properties/asma",
        "title": "Asma",
        "type": ["boolean", "null"],
        "default": false
      },
      "dpoc": {
        "id": "/properties/dpoc",
        "title": "DPOC",
        "type": ["boolean", "null"],
        "default": false
      },
      "diabetes": {
        "id": "/properties/diabetes",
        "title": "Diabetes",
        "type": ["boolean", "null"],
        "default": false
      },
      "doencaoncologica": {
        "id": "/properties/doencaoncologica",
        "title": "Doença Oncológica",
        "type": ["boolean", "null"],
        "default": false
      },
      "doencacardiacacronica": {
        "id": "/properties/doencacardiacacronica",
        "title": "Doença Cardíaca Crónica",
        "type": ["boolean", "null"],
        "default": false
      },
      "hiv": {
        "id": "/properties/hiv",
        "title": "VIH (ou outras imunodeficiências)",
        "type": ["boolean", "null"],
        "default": false
      },
      "doencarenalcronica": {
        "id": "/properties/doencarenalcronica",
        "title": "Doença Renal Crónica",
        "type": ["boolean", "null"],
        "default": false
      },
      "doencahepaticacronica": {
        "id": "/properties/doencahepaticacronica",
        "title": "Doença Hepática Crónica",
        "type": ["boolean", "null"],
        "default": false
      },
      "doencaneuromuscular": {
        "id": "/properties/doencaneuromuscular",
        "title": "Doença Neuromuscular",
        "type": ["boolean", "null"],
        "default": false
      },
      "obesidade": {
        "id": "/properties/obesidade",
        "title": "Obesidade",
        "description": "IMC > 29,9kg/m2",
        "type": ["boolean", "null"],
        "default": false
      },
      "gravidez": {
        "id": "/properties/gravidez",
        "title": "Gravidez",
        "type": "string",
        "enum": ["Y", "N", "UNK"]
      },
      "feztratamento": {
        "id": "/properties/feztratamento",
        "title": "Fez tratamento",
        "type": "string",
        "enum": ["Y", "N", "UNK"]
      },
      "oseltamivir": {
        "id": "/properties/oseltamivir",
        "title": "Oseltamivir",
        "type": ["boolean", "null"],
        "default": false
      },
      "zanamivir": {
        "id": "/properties/zanamivir",
        "title": "Zanamivir",
        "type": ["boolean", "null"],
        "default": false
      },
      "fezprocedimento": {
        "id": "/properties/fezprocedimento",
        "title": "Realizou procedimento",
        "description": "Realizou algum dos seguintes procedimentos durante internamento?",
        "type": "string",
        "enum": ["Y", "N", "UNK"]
      },
      "vni": {
        "id": "/properties/vni",
        "title": "Ventilação mecânica não invasiva",
        "description": "CPAP ou BIPAP",
        "type": ["boolean", "null"],
        "default": false
      },
      "intubacao": {
        "id": "/properties/intubacao",
        "title": "Ventilação mecânica invasiva",
        "type": ["boolean", "null"],
        "default": false
      },
      "ecmo": {
        "id": "/properties/ecmo",
        "title": "ECMO",
        "type": ["boolean", "null"],
        "default": false
      },
      "dialise": {
        "id": "/properties/dialise",
        "title": "Técnica de substituição renal",
        "type": ["boolean", "null"],
        "default": false
      },
      "zaragatoa": {
        "id": "/properties/zaragatoa",
        "title": "Zaragatoa naso ou orofaríngea",
        "type": ["boolean", "null"],
        "default": false
      },
      "lavadoalveolar": {
        "id": "/properties/lavadoalveolar",
        "title": "Aspirado endotraqueal ou lavado broncoalveolar",
        "type": ["boolean", "null"],
        "default": false
      },
      "biopsia": {
        "id": "/properties/lavadoalveolar",
        "title": "Biópsia tecidular post-mortem",
        "type": ["boolean", "null"],
        "default": false
      },
      "serotipagem": {
        "id": "/properties/serotipagem",
        "title": "Tipo e subtipo do vírus",
        "type": "string",
        "enum": [
          "A",
          "AH1",
          "AH1N1",
          "AH3",
          "AH3N2",
          "AH5",
          "AH5N1",
          "B",
          "BVic",
          "BYam",
          "PanAH1",
          "PanAH1N1",
          "UNK",
          "O"
        ]
      },
      "datalaboratorio": {
        "id": "/properties/datalaboratorio",
        "title": "Data da confirmação laboratorial",
        "type": "string",
        "format": "date"
      },
      "dataalta": {
        "id": "/properties/dataalta",
        "title": "Data da alta",
        "description": "Data de Alta na UCI",
        "type": "string",
        "format": "date"
      },
      "obito": {
        "id": "/properties/obito",
        "title": "Óbito?",
        "description": "O utente faleceu?",
        "type": "string",
        "enum": ["Y", "N", "UNK"]
      },
      "dataobito": {
        "id": "/properties/dataobito",
        "title": "Data do óbito",
        "description": "Data do óbito (se aplicável)",
        "type": ["string", "null"],
        "format": "date"
      },
      "observacoes": {
        "id": "/properties/observacoes",
        "title": "Observações",
        "type": ["string", "null"]
      }
    }
  };
});
