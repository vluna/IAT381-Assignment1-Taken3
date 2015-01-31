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
	$scope.selCurrencyA = '';
	$scope.selCurrencyB = '';
	$scope.exchRateA = 0 ;
	$scope.exchRateB = 0 ;
	$scope.exchRateResult = 0 ;

	//First dropdown
	$scope.OnItemClick1 = function(event) {
    $scope.selCurrency1 = event;
    };
  
	//Second dropdown
	$scope.OnItemClick2 = function(event) {
    $scope.selCurrency2 = event;
	};

   $scope.exchangeIt = function(){

	//American
	if($scope.selCurrency1 == 'American' && $scope.selCurrency2 =='Philippines')
	{
		$scope.exchRateB = 44;
		$scope.exchRateA = $scope.initCur;
	}			
	else if($scope.selCurrency1 == 'American' && $scope.selCurrency2 =='Mexican')
	{
		$scope.exchRateB = 44;
		$scope.exchRateA = $scope.initCur;
	}		
	else if($scope.selCurrency1 == 'American' && $scope.selCurrency2 =='Greek')
	{
		$scope.exchRateB = 0.89;
		$scope.exchRateA = $scope.initCur;
	}		 
	else if($scope.selCurrency1 == 'American' && $scope.selCurrency2 =='Canadian')
	{
		$scope.exchRateB = 1.27;
		$scope.exchRateA = $scope.initCur;
	}		
	else  if($scope.selCurrency1 == 'American' && $scope.selCurrency2 =='American')
	{
		$scope.exchRateB = 1;
		$scope.exchRateA = $scope.initCur;
	}

	//Canadian
	if($scope.selCurrency1 == 'Canadian' && $scope.selCurrency2 =='Philippines')
	{
		$scope.exchRateB = 34.72;
		$scope.exchRateA = $scope.initCur;
	}			
	else if($scope.selCurrency1 == 'Canadian' && $scope.selCurrency2 =='Mexican')
	{
		$scope.exchRateB = 11.76;
		$scope.exchRateA = $scope.initCur;
	}		
	else if($scope.selCurrency1 == 'Canadian' && $scope.selCurrency2 =='Greek')
	{
		$scope.exchRateB = .7;
		$scope.exchRateA = $scope.initCur;
	}		
	else if($scope.selCurrency1 == 'Canadian' && $scope.selCurrency2 =='Canadian')
	{
		$scope.exchRateB = 1;
		$scope.exchRateA = $scope.initCur;
	}		
	else if($scope.selCurrency1 == 'Canadian' && $scope.selCurrency2 =='American')
	{
		$scope.exchRateB = .79;
		$scope.exchRateA = $scope.initCur;
	}			
		
	//Mexican
	if($scope.selCurrency1 == 'Mexican' && $scope.selCurrency2 =='Philippines')
	{
		$scope.exchRateB = 2.95;
		$scope.exchRateA = $scope.initCur;
	}			
	else if($scope.selCurrency1 == 'Mexican' && $scope.selCurrency2 =='Mexican')
	{
		$scope.exchRateB = 1;
		$scope.exchRateA = $scope.initCur;
	}		
	else if($scope.selCurrency1 == 'Mexican' && $scope.selCurrency2 =='Greek')
	{
		$scope.exchRateB = .059;
		$scope.exchRateA = $scope.initCur;
	}		
	else if($scope.selCurrency1 == 'Mexican' && $scope.selCurrency2 =='Canadian')
	{
		$scope.exchRateB = .085;
		$scope.exchRateA = $scope.initCur;
	}		
	else if($scope.selCurrency1 == 'Mexican' && $scope.selCurrency2 =='American')
	{
		$scope.exchRateB = .067;
		$scope.exchRateA = $scope.initCur;
	}			
		
	//Philippines
	if($scope.selCurrency1 == 'Philippines' && $scope.selCurrency2 =='Philippines')
	{
		$scope.exchRateB = 1;
		$scope.exchRateA = $scope.initCur;
	}			
	else if($scope.selCurrency1 == 'Philippines' && $scope.selCurrency2 =='Mexican')
	{
		$scope.exchRateB = .085;
		$scope.exchRateA = $scope.initCur;
	}		
	else if($scope.selCurrency1 == 'Philippines' && $scope.selCurrency2 =='Greek')
	{
		$scope.exchRateB = .02;
		$scope.exchRateA = $scope.initCur;
	}		
	else if($scope.selCurrency1 == 'Philippines' && $scope.selCurrency2 =='Canadian')
	{
		$scope.exchRateB = .029;
		$scope.exchRateA = $scope.initCur;
	}	
	else if($scope.selCurrency1 == 'Philippines' && $scope.selCurrency2 =='American')
	{
		$scope.exchRateB = .023;
		$scope.exchRateA = $scope.initCur;
	}			
		
	//Greek
	if($scope.selCurrency1 == 'Greek' && $scope.selCurrency2 =='Philippines')
	{
		$scope.exchRateB = 49.87;
		$scope.exchRateA = $scope.initCur;
	}			
	else if($scope.selCurrency1 == 'Greek' && $scope.selCurrency2 =='Mexican')
	{
		$scope.exchRateB = 16.9;
		$scope.exchRateA = $scope.initCur;
	}	
	else if($scope.selCurrency1 == 'Greek' && $scope.selCurrency2 =='Greek')
	{
		$scope.exchRateB = 1;
		$scope.exchRateA = $scope.initCur;
	}		
	else if($scope.selCurrency1 == 'Greek' && $scope.selCurrency2 =='Canadian')
	{
		$scope.exchRateB = 1.44;
		$scope.exchRateA = $scope.initCur;
	}		
	else if($scope.selCurrency1 == 'Greek' && $scope.selCurrency2 =='American')
	{
		$scope.exchRateB = 1.13;
		$scope.exchRateA = $scope.initCur;
	}		
	
	//Formula
	$scope.exchRateResult = $scope.exchRateA * $scope.exchRateB;
	//Output results
	$scope.Exchanged = ($scope.exchRateResult);

	};
	
  });
