'use strict';

/**
 * @ngdoc function
 * @name halloumiAppApp.controller:SplitBillCtrl
 * @description
 * # SplitBillCtrl
 * Controller of the halloumiAppApp
 */
angular.module('halloumiAppApp')
  .controller('SplitBillCtrl', function ($scope) 
  {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  	$scope.sumOfValues = 0;

    // The items that you want to sum.
    $scope.addItem = [{ billAmount : '' }];

    $scope.newItem = function($event)
    {
        $scope.addItem.push({ billAmount : '' });
        $event.preventDefault();
    };

    $scope.onchange = function ($event, item) 
    {
      $scope.sumOfValues = $scope.addItem.map(function (item) {
        return parseInt(item.billAmount, 10);
      }).reduce(function (prev, next) {
        return prev + next;
      });
    };

    $scope.calculate = function() 
    {
    	$scope.roommatesCount = $scope.numOfRoommates;

    	$scope.billSplited = $scope.sumOfValues / $scope.roommatesCount;

    	$scope.result = ('Cost per person: $ ' + $scope.billSplited);
  	};
});