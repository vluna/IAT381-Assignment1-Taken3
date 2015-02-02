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

    $scope.totalBill = '';
    $scope.tip = 10;
    $scope.numOfPeople = 1;

    $scope.randomTip = function()
    {
    	$scope.tip = Math.floor((Math.random($scope.tip)*16)+10);
    	$scope.updateTip();
    };

    $scope.updateTip = function() 
    {
		$scope.tipAmount = $scope.totalBill * $scope.tip/100;
		$scope.totalAmount = $scope.totalBill + $scope.tipAmount;
		$scope.amountPerPerson = $scope.totalAmount / $scope.numOfPeople;
    };
 });