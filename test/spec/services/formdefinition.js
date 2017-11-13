'use strict';

describe('Service: formDefinition', function () {

  // load the service's module
  beforeEach(module('gripApp'));

  // instantiate service
  var formDefinition;
  beforeEach(inject(function (_formDefinition_) {
    formDefinition = _formDefinition_;
  }));

  it('should do something', function () {
    expect(!!formDefinition).toBe(true);
  });

});
