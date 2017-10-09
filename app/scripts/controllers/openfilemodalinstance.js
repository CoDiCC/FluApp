'use strict';

/**
 * @ngdoc function
 * @name fluApp.controller:OpenFileModalInstanceCtrl
 * @description
 * # OpenfilemodalinstanceCtrl
 * Controller of the fluApp
 */
angular.module('fluApp').controller('OpenFileModalInstanceCtrl', ['$uibModalInstance', '$scope', 'FileReader', function ($uibModalInstance, $scope, $FileReader) {
  $scope.file = null;
  $scope.ok = function () {
    if (!$scope.file) {
      $uibModalInstance.dismiss('cancel');
      return;
    }
    var filePromise = $FileReader.readAsText($scope.file, '', $scope);
    $uibModalInstance.close(filePromise);
  };
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}]);

angular.module('fluApp').directive("ngFileSelect", function () {
  return {
    link: function ($scope, el) {
      el.bind("change", function (e) {
        $scope.file = (e.srcElement || e.target).files[0];
      });
    }
  };
});
