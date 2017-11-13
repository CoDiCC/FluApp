'use strict';

describe('Service: registos', function () {

  var mockSchema;
  var registos;

  // load the service's module
  beforeEach(module('gripApp'));

  // load schema mock
  beforeEach(function () {
    mockSchema = {
      properties: {
        "foo": {
          "id": "/properties/foo",
          "title": "Foo",
          "description": "Sexo do utente",
          "type": "boolean"
        },
        "bar": {
          "id": "/properties/bar",
          "title": "Bar open",
          "description": "Bar is open for all",
          "type": "string",
          "enum": ['a', 'b', 'c']
        },
        "baz": {
          "id": "/properties/baz",
          "type": "integer"
        }
      }
    };
    module(function ($provide) {
      $provide.value('schema', mockSchema);
    });
  });

  beforeEach(inject(function(_registos_){
    registos = _registos_;
  }));

  it('getHeaders: should return an array of defined headers in schema', function () {
    var getHeaders = registos.getHeaders();
    expect(getHeaders.length).toBe(3);
    expect(getHeaders).toEqual(['Foo', 'Bar open', 'baz']);
  });

  it('getProps: should return an array of defined properties', function () {
    var getProps = registos.getProps();
    expect(getProps.length).toBe(3);
    expect(getProps).toEqual(['foo', 'bar', 'baz']);
  });

  it('add/set/get: should add/set/get data', function () {
    var data = {
      valid:   { foo: true,  bar: 'a', baz: 1 },
      valid2:  { foo: true,  bar: 'b', baz: 2 },
      invalid: { foo: 'bla', bar: 'd', baz: 'a' }
    };

    // pass valid data
    expect(registos.add(data.valid)).toBe(0);
    expect(registos.get(0)).toEqual(data.valid);

    // pass invalid data (throw error)
    expect(function () {registos.add(data.invalid); }).toThrow(new Error('in record --> /foo because invalid type: string (expected boolean)'));
    expect(registos.get(0)).toEqual(data.valid);

    // set record 0
    expect(registos.set(0, data.valid2)).toBe(0);
    expect(registos.get(0)).toEqual(data.valid2);

    // bad call to set
    expect(function () { registos.set('foo'); }).toThrow(new Error('index parameter should be an integer'));
  });

  it('remove: should remove data', function () {
    var data = { foo: true,  bar: 'a', baz: 1 };

    expect(registos.add(data)).toBe(0);
    expect(registos.remove(0)).toEqual(data);

    // bad remove
    expect(registos.remove(0)).toBeUndefined();
  });

  it('setAll/getAll: should set/retrieve all data', function () {
    var data = [
      { foo: true,  bar: 'a', baz: 1 },
      { foo: true,  bar: 'b', baz: 1 },
      { foo: true,  bar: 'c', baz: 1 }
    ];

    expect(registos.setAll(data)).toEqual(data);
    expect(registos.getAll(data)).toEqual(data);
  });

  it('reset: should reset data', function () {
    var data = [
      { foo: true,  bar: 'a', baz: 1 },
      { foo: true,  bar: 'b', baz: 1 },
      { foo: true,  bar: 'c', baz: 1 }
    ];

    expect(registos.setAll(data)).toEqual(data);
    expect(registos.reset().length).toBe(0);
  });

});
