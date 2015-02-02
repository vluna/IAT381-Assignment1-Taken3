'use strict';

describe('Controller: SplitBillCtrl', function () {

  // load the controller's module
  beforeEach(module('halloumiAppApp'));

  var SplitBillCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SplitBillCtrl = $controller('SplitBillCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
