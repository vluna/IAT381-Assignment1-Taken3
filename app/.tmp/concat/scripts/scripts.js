'use strict';

/**
 * @ngdoc overview
 * @name halloumiAppApp
 * @description
 * # halloumiAppApp
 *
 * Main module of the application.
 */

 var testSlide = 
angular
  .module('halloumiAppApp', [
    'ngAnimate',
    'ngMessages',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/split-bill', {
        templateUrl: 'views/split-bill.html',
        controller: 'SplitBillCtrl',
        level:2
      })
      .when('/tip-calculator', {
        templateUrl: 'views/tip-calculator.html',
        controller: 'TipCalculatorCtrl',
        level:3
      })
      .when('/currency-converter', {
        templateUrl: 'views/currency-converter.html',
        controller: 'CurrencyConverterCtrl',
        level:4
      })
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        level:1
      })
      .otherwise({
        redirectTo: '/',
        level:1
      });
  }]);

testSlide.run(["$rootScope", "$animate", function($rootScope,$animate){
  $rootScope.panStyle="view-frame-forward";
   $rootScope.$on('$routeChangeSuccess', function(ev,next,current) {
      
         if(current.$$route.level > next.$$route.level){
            $rootScope.panStyle="view-frame-back";
         }
     else if(current.$$route.level < next.$$route.level){
            $rootScope.panStyle="view-frame-forward";
         }
      });
    
   }]);


'use strict';

/**
 * @ngdoc function
 * @name halloumiAppApp.controller:SplitBillCtrl
 * @description
 * # SplitBillCtrl
 * Controller of the halloumiAppApp
 */
angular.module('halloumiAppApp')
  .controller('SplitBillCtrl', ["$scope", function ($scope) 
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

    	$scope.result = ('Cost per person: $ ' + $scope.billSplited.toFixed(2));
  	};
}]);
'use strict';

/**
 * @ngdoc function
 * @name halloumiAppApp.controller:TipCalculatorCtrl
 * @description
 * # TipCalculatorCtrl
 * Controller of the halloumiAppApp
 */
angular.module('halloumiAppApp')
  .controller('TipCalculatorCtrl', ["$scope", function ($scope) {
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
 }]);
'use strict';

/**
 * @ngdoc function
 * @name halloumiAppApp.controller:CurrencyConverterCtrl
 * @description
 * # CurrencyConverterCtrl
 * Controller of the halloumiAppApp
 */
angular.module('halloumiAppApp')
  .controller('CurrencyConverterCtrl', ["$scope", function ($scope) {
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
	
  }]);

'use strict';

/**
 * @ngdoc function
 * @name halloumiAppApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the halloumiAppApp
 */
angular.module('halloumiAppApp')
  .controller('HomeCtrl', ["$scope", function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
