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
    "required": ["hospital"],
    "properties": {
      "hospital": {
        "id": "/properties/hospital",
        "title": "Hospital",
        "type": "string"
      },
      "numprocessoclinico": {
        "id": "/properties/numprocessoclinico",
        "title": "N.º processo clínico",
        "type": "integer"
      },
      "datadeadmissao": {
        "id": "/properties/datadeadmissao",
        "title": "Data de Admissão na UCI",
        "type": "string",
        "format": "date"
      },
      "dataalta": {
        "id": "/properties/dataalta",
        "title": "Data da Alta UCI",
        "type": "string",
        "format": "date"
      },
      "sexo": {
        "id": "/properties/sexo",
        "title": "Sexo",
        "type": "string",
        "enum": ["M", "F", "I"]
      },
      "datanascimento": {
        "id": "/properties/datanascimento",
        "title": "Data de Nascimento",
        "type": "string",
        "format": "date"
      },
      "obito": {
        "id": "/properties/obito",
        "title": "Óbito?",
        "type": "boolean"
      },
      "dataobito": {
        "id": "/properties/dataobit",
        "title": "Data do òbito",
        "type": "string",
        "format": "date"
      },
      "causademorte": {
        "id": "/properties/causademorte",
        "title": "Causa de Morte",
        "type": "string",
        "format": "date"
      },
      "tosse": {
        "id": "/properties/tosse",
        "title": "Tosse",
        "type": "boolean"
      },
      "febre": {
        "id": "/properties/vebre",
        "title": "Febre",
        "type": "boolean"
      },
      "dispneia": {
        "id": "/properties/dispneia",
        "title": "Dispneia",
        "type": "boolean"
      },
      "odinofagia": {
        "id": "/properties/odinofagia",
        "title": "Odinofagia",
        "type": "boolean"
      },
      "outrosintoma": {
        "id": "/properties/outrosintoma",
        "title": "Outro sintoma",
        "type": "string"
      },
      "datainiciosintomas": {
        "id": "/properties/datainiciosintomas",
        "title": "Data de Início de Sintomas",
        "type": "string",
        "format": "date"
      },
      "vacinado": {
        "id": "/properties/vacinado",
        "title": "Vacinado",
        "description": "O doente foi vacinado contra a gripe nesta época?",
        "type": "boolean"
      },
      "datavacinacao": {
        "id": "/properties/datavacinacao",
        "title": "Data de Vacinação",
        "type": "string",
        "format": "date"
      },
      "sdra": {
        "id": "/properties/sdra",
        "title": "SDRA",
        "description": "Síndrome de Desconforto Respiratório no Adulto",
        "type": "boolean"
      },
      "bronquiolite": {
        "id": "/properties/bronquiolite",
        "title": "Bronquiolite",
        "type": "boolean"
      },
      "encefalite": {
        "id": "/properties/encefalite",
        "title": "Encefalite",
        "type": "boolean"
      },
      "miocardite": {
        "id": "/properties/miocardite",
        "title": "Miocardite",
        "type": "boolean"
      },
      "pneumonia": {
        "id": "/properties/pneumonia",
        "title": "Pneumonia",
        "type": "boolean"
      },
      "sepsis": {
        "id": "/properties/sepsis",
        "title": "Sepsis",
        "type": "boolean"
      },


      "asma": {
        "id": "/properties/asma",
        "title": "Asma",
        "type": "boolean"
      },
      "dpoc": {
        "id": "/properties/dpoc",
        "title": "DPOC",
        "type": "boolean"
      },
      "diabetes": {
        "id": "/properties/diabetes",
        "title": "Diabetes",
        "type": "boolean"
      },
      "doencaoncologica": {
        "id": "/properties/doencaoncologica",
        "title": "Doença Oncológica",
        "type": "boolean"
      },
      "doencacardiacacronica": {
        "id": "/properties/doencacardiacacronica",
        "title": "Doença Cardíaca Crónica",
        "type": "boolean"
      },
      "hiv": {
        "id": "/properties/hiv",
        "title": "HIV",
        "type": "boolean"
      },
      "doencarenalcronica": {
        "id": "/properties/doencarenalcronica",
        "title": "Doença Renal Crónica",
        "type": "boolean"
      },
      "doencahepaticacronica": {
        "id": "/properties/doencahepaticacronica",
        "title": "Doença Hepática Crónica",
        "type": "boolean"
      },
      "doencaneuromuscular": {
        "id": "/properties/doencaneuromuscular",
        "title": "doencaneuromuscular",
        "type": "boolean"
      },
      "doencaneurocognitiva": {
        "id": "/properties/doencaneurocognitiva",
        "title": "Doença Neurocognitiva",
        "type": "boolean"
      },
      "obesidade": {
        "id": "/properties/obesidade",
        "title": "Obesidade",
        "description": "IMC entre 30kg/m2 e 40kg/m2",
        "type": "boolean"
      },
      "obesidademorbida": {
        "id": "/properties/obesidademorbida",
        "title": "Obesidade Mórbida",
        "description": "IMC > 40kg/m2",
        "type": "boolean"
      },
      "gravidez": {
        "id": "/properties/gravidez",
        "title": "Gravidez",
        "description": "Está grávida?",
        "type": "boolean"
      },


      "oseltamivir": {
        "id": "/properties/oseltamivir",
        "title": "Oseltamivir",
        "type": "boolean"
      },
      "zanamivir": {
        "id": "/properties/zanamivir",
        "title": "Aanamivir",
        "type": "boolean"
      },

      "vni": {
        "id": "/properties/vni",
        "title": "Ventilação mecânica não invasiva",
        "description": "CPAP ou BIPAP",
        "type": "boolean"
      },
      "intubacao": {
        "id": "/properties/intubacao",
        "title": "Ventilação mecânica invasiva",
        "type": "boolean"
      },
      "ecmo": {
        "id": "/properties/ecmo",
        "title": "ECMO",
        "type": "boolean"
      },
      "dialise": {
        "id": "/properties/dialise",
        "title": "Técnica de substituição renal",
        "type": "boolean"
      },
      "zaragatoa": {
        "id": "/properties/zaragatoa",
        "title": "Zaragatoa naso ou orofaríngea",
        "type": "boolean"
      },
      "lavadoalveolar": {
        "id": "/properties/lavadoalveolar",
        "title": "Aspirado endotraqueal ou lavado broncoalveolar",
        "type": "boolean"
      },
      "biopsia": {
        "id": "/properties/lavadoalveolar",
        "title": "Biópsia tecidular post-mortem",
        "type": "boolean"
      },

      "serotipagem": {
        "id": "/properties/serotipagem",
        "title": "Tipo e subtipo do vírus",
        "type": "string",
        "enum": [
          "A",        // A, not sub-typed
          "AH1",      // A(H1), not N sub-typed
          "AH1N1",    // A(H1N1)
          "AH3",      // A(H3), not N sub-typed
          "AH3N2",    // A(H3N2)
          "AH5",      // A(H5), not N sub-typed
          "AH5N1",    // A(H5N1)
          "B",        // lineage not determined
          "BVic",     // Influenza type B, Victoria lineage
          "BYam",     // Influenza type B, Yamagata lineage
          "PanAH1",   // A(H1)pdm09
          "PanAH1N1", // A(H1N1)pdm09
          "UNK",      // Unknown
          "Outro"     // Outro
        ]
      },

      "observacoes": {
        "id": "/properties/observacoes",
        "title": "Observações",
        "type": "string"
      }

    }
  };
});
