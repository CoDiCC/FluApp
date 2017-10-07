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

  var data = [];

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
