'use strict';

describe('Controller: TipCalculatorCtrl', function () {

  // load the controller's module
  beforeEach(module('halloumiAppApp'));

  var TipCalculatorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TipCalculatorCtrl = $controller('TipCalculatorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
