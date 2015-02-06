'use strict';

/**
 * @ngdoc function
 * @name halloumiAppApp.controller:CurrencyConverterCtrl
 * @description
 * # CurrencyConverterCtrl
 * Controller of the halloumiAppApp
 */
angular.module('halloumiAppApp')
  .controller('CurrencyConverterCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	//Variables
	$scope.selCurrency1 = "Currency";
	$scope.selCurrency2 = "Currency";
	$scope.exchRateA = 0 ;
	$scope.exchRateB = 0 ;
	$scope.exchRateResult = 0 ;

	//First dropdown
	$scope.OnItemClick1 = function(event) {
    	$scope.selCurrency1 = event;
		console.log($scope.selCurrency1,'hello');
    };
  
	//Second dropdown
	$scope.OnItemClick2 = function(event) {
    	$scope.selCurrency2 = event;
		console.log($scope.selCurrency2,'hi');
	};

   $scope.exchangeIt = function(){

	//American
	if($scope.selCurrency1 == 'American' && $scope.selCurrency2 =='Philippines')
	{
		$scope.exchRateB = 44;
	}			
	else if($scope.selCurrency1 == 'American' && $scope.selCurrency2 =='Mexican')
	{
		$scope.exchRateB = 44;
	}		
	else if($scope.selCurrency1 == 'American' && $scope.selCurrency2 =='Greek')
	{
		$scope.exchRateB = 0.89;
	}		 
	else if($scope.selCurrency1 == 'American' && $scope.selCurrency2 =='Canadian')
	{
		$scope.exchRateB = 1.27;
	}		
	else  if($scope.selCurrency1 == 'American' && $scope.selCurrency2 =='American')
	{
		$scope.exchRateB = 1;
	}

	//Canadian
	if($scope.selCurrency1 == 'Canadian' && $scope.selCurrency2 =='Philippines')
	{
		$scope.exchRateB = 34.72;
	}			
	else if($scope.selCurrency1 == 'Canadian' && $scope.selCurrency2 =='Mexican')
	{
		$scope.exchRateB = 11.76;
	}		
	else if($scope.selCurrency1 == 'Canadian' && $scope.selCurrency2 =='Greek')
	{
		$scope.exchRateB = .7;
	}		
	else if($scope.selCurrency1 == 'Canadian' && $scope.selCurrency2 =='Canadian')
	{
		$scope.exchRateB = 1;
	}		
	else if($scope.selCurrency1 == 'Canadian' && $scope.selCurrency2 =='American')
	{
		$scope.exchRateB = .79;
	}			
		
	//Mexican
	if($scope.selCurrency1 == 'Mexican' && $scope.selCurrency2 =='Philippines')
	{
		$scope.exchRateB = 2.95;
	}			
	else if($scope.selCurrency1 == 'Mexican' && $scope.selCurrency2 =='Mexican')
	{
		$scope.exchRateB = 1;
	}		
	else if($scope.selCurrency1 == 'Mexican' && $scope.selCurrency2 =='Greek')
	{
		$scope.exchRateB = .059;
		
	}		
	else if($scope.selCurrency1 == 'Mexican' && $scope.selCurrency2 =='Canadian')
	{
		$scope.exchRateB = .085;
		
	}		
	else if($scope.selCurrency1 == 'Mexican' && $scope.selCurrency2 =='American')
	{
		$scope.exchRateB = .067;
	}			
		
	//Philippines
	if($scope.selCurrency1 == 'Philippines' && $scope.selCurrency2 =='Philippines')
	{
		$scope.exchRateB = 1;
	}			
	else if($scope.selCurrency1 == 'Philippines' && $scope.selCurrency2 =='Mexican')
	{
		$scope.exchRateB = .085;
	}		
	else if($scope.selCurrency1 == 'Philippines' && $scope.selCurrency2 =='Greek')
	{
		$scope.exchRateB = .02;
	}		
	else if($scope.selCurrency1 == 'Philippines' && $scope.selCurrency2 =='Canadian')
	{
		$scope.exchRateB = .029;
	}	
	else if($scope.selCurrency1 == 'Philippines' && $scope.selCurrency2 =='American')
	{
		$scope.exchRateB = .023;
	}			
		
	//Greek
	if($scope.selCurrency1 == 'Greek' && $scope.selCurrency2 =='Philippines')
	{
		$scope.exchRateB = 49.87;
	}			
	else if($scope.selCurrency1 == 'Greek' && $scope.selCurrency2 =='Mexican')
	{
		$scope.exchRateB = 16.9;
	}	
	else if($scope.selCurrency1 == 'Greek' && $scope.selCurrency2 =='Greek')
	{
		$scope.exchRateB = 1;
	}		
	else if($scope.selCurrency1 == 'Greek' && $scope.selCurrency2 =='Canadian')
	{
		$scope.exchRateB = 1.44;
	}		
	else if($scope.selCurrency1 == 'Greek' && $scope.selCurrency2 =='American')
	{
		$scope.exchRateB = 1.13;
	}		
	
	//Formula
	$scope.exchRateA = $scope.initCur;
	
	$scope.exchRateResultRough = $scope.exchRateA * $scope.exchRateB;
	
	//Fixes to 2 Decimal placess
	$scope.exchRateResult = $scope.exchRateResultRough.toFixed(2);
	
	//Output results
	$scope.Exchanged = ($scope.exchRateResult);

	};
	
  });
