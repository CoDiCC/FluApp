'use strict';

/**
 * @ngdoc service
 * @name fluApp.registos
 * @description
 * # registos
 * Factory in the fluApp.
 */
angular.module('fluApp').factory('registos', ['schema', function (schema) {

  var headers = [];
  var props = [];

  for (var prop in schema.properties) {
    if (schema.properties.hasOwnProperty(prop)) {
      var header;
      props.push(prop);
      if (schema.properties[prop].hasOwnProperty('title')) {
        header = schema.properties[prop].title;
      } else {
        header = prop;
      }
      headers.push(header);
    }
  }

  var data = [
    {
      hospital: 'CHO',
      datadeadmissao: '03-06-1985',
      numprocessoclinico: 1234,
      sexo: 'M',
      '$$selected': false
    },
    {
      hospital: 'CHLN',
      datadeadmissao: '01-06-1923',
      numprocessoclinico: 4567,
      sexo: 'F',
      '$$selected': false
    },
    {
      hospital: 'CHUCH',
      datadeadmissao: '01-08-1993',
      numprocessoclinico: 4567,
      sexo: 'I',
      '$$selected': false
    }
  ];

  var checkInterface = function (registo) {
    if (!registo.hasOwnProperty('$$selected')) {
      registo.$$selected = false;
    }
    return registo;
  };


  return {
    getHeaders: function () {
      return headers;
    },
    getProps: function () {
      return props;
    },
    get: function (index) {
      return data[index];
    },
    set: function (index, record) {
      data[index] = checkInterface(record);
    },
    add: function (registo) {
      data.push(checkInterface(registo));
    },
    remove: function (index) {
      data.splice(index, 1);
    },
    getAll: function () {
      return data;
    },
    reset: function () {
      data = [];
    }
  };

}]);
