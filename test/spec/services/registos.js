'use strict';

describe('Service: registos', function () {

  // load the service's module
  beforeEach(module('fluApp'));

  // instantiate service
  var registos;
  beforeEach(inject(function (_registos_) {
    registos = _registos_;
  }));

  it('should do something', function () {
    expect(!!registos).toBe(true);
  });

});
