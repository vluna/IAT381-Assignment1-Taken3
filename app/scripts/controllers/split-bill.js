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

    $scope.roommates = [
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: '4', value: 4 },
      { label: '5', value: 5 },
      { label: '6', value: 6 },
      { label: '7', value: 7 },
      { label: '8', value: 8 },
      { label: '9', value: 9 }
    ];

    $scope.numOfRoommates = 0;

    $scope.change = function(option)
    {
      $scope.numOfRoommates = option.value;
    }
    
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
    	$scope.billSplited = $scope.sumOfValues / $scope.numOfRoommates;

    	$scope.result = ('Cost per person: $ ' + $scope.billSplited);
  	};
});