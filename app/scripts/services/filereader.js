'use strict';

/**
 * @ngdoc service
 * @name gripApp.filereader
 * @description
 * # filereader
 * Service in the gripApp.
 *
 * USAGE
 * -----
 *
 * Inject the service in your controller
 *
 *     function controller ($scope, FileReader)
 *
 * Call the readAsDataURL method with a File or Blob object. Remember that you also
 * have to pass the $scope.
 *
 *       FileReader.readAsDataURL(file, $scope)
 *
 * readAsDataURL returns a promise, so you can call then on it
 *
 * ```
 * .then(function (resp) {
 *   // Do stuff
 *
 * }, function (err) {
 *   // Do stuff
 * });
 * ```
 *
 * readAsDataUrl also broadcast the fileProgress event. You can listen for it to
 * check on the progress of the loading
 *
 * ```
 * $scope.$on('fileProgress', function (event, data) {
 *   // data = {
 *   //   total: ...
 *   //   loaded: ...
 *   // }
 * }
 * ```
 *
 *
 *
 */
angular.module('gripApp').factory('FileReader', ['$q', '$window', function ($q, $window) {

  // Wrap the onLoad event in the promise
  var onLoad = function (reader, deferred, scope) {
    return function () {
      scope.$apply(function () {
        deferred.resolve(reader.result);
      });
    };
  };

  // Wrap the onLoad event in the promise
  var onError = function (reader, deferred, scope) {
    return function () {
      scope.$apply(function () {
        deferred.reject(reader.result);
      });
    };
  };

  // Wrap the onProgress event by broadcasting an event
  var onProgress = function (reader, scope) {
    return function (event) {
      scope.$broadcast('fileProgress', {
        total: event.total,
        loaded: event.loaded
      });
    };
  };

  // Instantiate a new Filereader with the wrapped properties
  var getReader = function (deferred, scope) {
    var reader = new $window.FileReader();
    reader.onload = onLoad(reader, deferred, scope);
    reader.onerror = onError(reader, deferred, scope);
    reader.onprogress = onProgress(reader, scope);
    return reader;
  };

  // Read a file as a data url
  var readAsDataURL = function (file, scope) {
    var deferred = $q.defer();

    var reader = getReader(deferred, scope);
    reader.readAsDataURL(file);

    return deferred.promise;
  };

  // Read a file as a text
  var readAsText = function (file, encoding, scope) {
    var deferred = $q.defer();

    var reader = getReader(deferred, scope);
    reader.readAsText(file, encoding);

    return deferred.promise;
  };

  // Read a file as a binary data
  var readAsBinaryString = function (file, scope) {
    var deferred = $q.defer();

    var reader = getReader(deferred, scope);
    reader.readAsBinaryString(file);

    return deferred.promise;
  };

  return {
    readAsDataURL: readAsDataURL,
    readAsBinaryString: readAsBinaryString,
    readAsText: readAsText
  };
}]);
