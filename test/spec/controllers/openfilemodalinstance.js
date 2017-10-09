'use strict';

describe('Controller: OpenfilemodalinstanceCtrl', function () {

  // load the controller's module
  beforeEach(module('fluApp'));

  var OpenfilemodalinstanceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OpenfilemodalinstanceCtrl = $controller('OpenfilemodalinstanceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OpenfilemodalinstanceCtrl.awesomeThings.length).toBe(3);
  });
});
