'use strict';

/**
 * @ngdoc function
 * @name halloumiAppApp.controller:TipCalculatorCtrl
 * @description
 * # TipCalculatorCtrl
 * Controller of the halloumiAppApp
 */
angular.module('halloumiAppApp')
  .controller('TipCalculatorCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.people = [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: '4', value: 4 },
      { label: '5', value: 5 },
      { label: '6', value: 6 },
      { label: '7', value: 7 },
      { label: '8', value: 8 },
      { label: '9', value: 9 }
    ];

    $scope.numOfPeople = 0;

    $scope.change = function(option)
    {
      $scope.numOfPeople = option.value;
    }

    $scope.totalBill = '';
    $scope.tip = 12;
    $scope.numOfPeople = 1;

    $scope.randomTip = function()
    {
    	$scope.tip = Math.floor((Math.random($scope.tip)*16)+10);
    	$scope.updateTip();
    };

    $scope.updateTip = function() 
    {
		  $scope.tipAmount = ($scope.totalBill * $scope.tip/100);
		  $scope.totalAmount = $scope.totalBill + $scope.tipAmount;
		  $scope.amountPerPerson = ($scope.totalAmount / $scope.numOfPeople);
    };
 });