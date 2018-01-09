'use strict';

/**
 * @ngdoc service
 * @name gripApp.CsvParser
 * @description
 * # CsvParser
 * Service in the gripApp.
 */
angular.module('gripApp').service('CsvParser', function () {

  var delimiter = ';';

  return {

    setDelimiter: function (delim) {
      delimiter = delim;
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
            var value = line[c];

            // remove "
            value = value.replace(/^"*/, '').replace(/"*$/, '');

            // trim spaces
            value = value.trim();

            // force typecast to null
            if (value === '') {
              value = null;
            // force typecast to boolean
            } else if (value === 'TRUE' || value === 'true') {
              value = true;
            } else if (value === 'FALSE' || value === 'false') {
              value = false;

            // force typecast to Integer (removed)
            //} else if (/^\d+$/.test(value)) {
            //  value = parseInt(value);
            }

            lineObj[headers[c]] = value;
          }
        }
        data[i] = lineObj;
      }
      return data;
    }
  };


});
