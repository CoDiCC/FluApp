/* global tv4 */
'use strict';

/**
 * @ngdoc service
 * @name fluApp.records
 * @description
 * # records
 * Factory in the fluApp.
 */
angular.module('fluApp').factory('registos', ['schema', function (schema) {

  var headers = [];
  var props = [];
  var nSchema = angular.copy(schema);

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

      if (!angular.isUndefined(schema.properties[prop].format) && schema.properties[prop].format === 'date') {
        if (angular.isArray(schema.properties[prop].type)) {
          nSchema.properties[prop].type.push('object');
        } else {
          nSchema.properties[prop].type = [nSchema.properties[prop].type, 'object'];
        }
      }
    }
  }

  var data = [];

  var checkInterface = function (record) {
    if (!record.hasOwnProperty('$$selected')) {
      record.$$selected = false;
    }
    return record;
  };

  var validateAgainstSchema = function (record) {
    if (!tv4.validate(record, nSchema)) {
      throw tv4.error;
    }
    return true;
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
    insertAt: function (index, record) {
      return data.splice(index, 0, record);
    },
    set: function (index, record) {
      if (!angular.isNumber(index)) {
        throw new Error('index parameter should be an integer');
      }
      if (validateAgainstSchema(record)) {
        data[index] = checkInterface(record);
        return index;
      }
      return null;
    },
    add: function (record) {
      if (!angular.isObject(record) && !angular.isArray(record)) {
        throw new Error('record parameter should be an object or an array');
      }
      if (validateAgainstSchema(record)) {
        return data.push(checkInterface(record)) - 1;
      }
      return null;
    },
    remove: function (index) {
      return data.splice(index, 1)[0];
    },
    getAll: function () {
      return data;
    },
    setAll: function (regs) {
      data = [];
      for (var i = 0; i < regs.length; ++i) {
        if (validateAgainstSchema(regs[i])) {
          data.push(checkInterface(regs[i]));
        }
      }
      return data;
    },
    reset: function () {
      data = [];
      return data;
    },
    validateRecord: function (record) {
      return validateAgainstSchema(record);
    }
  };

}]);
