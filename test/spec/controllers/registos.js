'use strict';

describe('Controller: RegistosCtrl', function () {

  // load the controller's module
  beforeEach(module('gripApp'));

  var RegistoscontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegistoscontrollerCtrl = $controller('RegistosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(RegistoscontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
