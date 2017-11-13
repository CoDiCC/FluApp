'use strict';

describe('Controller: FormularioCtrl', function () {

  // load the controller's module
  beforeEach(module('gripApp'));

  var FormulariocontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FormulariocontrollerCtrl = $controller('FormularioCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {

  });
});
