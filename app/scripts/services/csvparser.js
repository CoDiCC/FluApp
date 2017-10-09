'use strict';

/**
 * @ngdoc service
 * @name fluApp.CsvParser
 * @description
 * # CsvParser
 * Service in the fluApp.
 */
angular.module('fluApp').service('CsvParser', function () {

  var delimiter = ';';

  return {

    setDelimiter: function (delim) {
      delimiter = delim
    },

    parse: function (csv) {
      // normalize line endings
      csv = csv.replace(/\r\n/g, '\n');

      var data = csv.split('\n');
      var headers = data.shift().split(delimiter);

      for (var i = data.length; i >= 0; --i) {
        if (!data[i]) {
          data.splice(i, 1);
          continue;
        }
        var line = data[i].split(delimiter);
        var lineObj = {};

        for (var c = 0; c < headers.length; ++c) {
          if (!angular.isUndefined(line[c])) {
            lineObj[headers[c]] = line[c];
          }
        }
        data[i] = lineObj;
      }
      return data;
    }
  };


});
