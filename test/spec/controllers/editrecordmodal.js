'use strict';

describe('Controller: EditrecordmodalCtrl', function () {

  // load the controller's module
  beforeEach(module('gripApp'));

  var EditrecordmodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditrecordmodalCtrl = $controller('EditrecordmodalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditrecordmodalCtrl.awesomeThings.length).toBe(3);
  });
});
