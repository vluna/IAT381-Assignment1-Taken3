'use strict';

describe('Controller: CurrencyConverterCtrl', function () {

  // load the controller's module
  beforeEach(module('halloumiAppApp'));

  var CurrencyConverterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CurrencyConverterCtrl = $controller('CurrencyConverterCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
