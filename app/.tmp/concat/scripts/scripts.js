'use strict';

/**
 * @ngdoc overview
 * @name halloumiAppApp
 * @description
 * # halloumiAppApp
 *
 * Main module of the application.
 */
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
        controller: 'SplitBillCtrl'
      })
      .when('/invoice', {
        templateUrl: 'views/invoice.html',
        controller: 'InvoiceCtrl'
      })
      .when('/tip-calculator', {
        templateUrl: 'views/tip-calculator.html',
        controller: 'TipCalculatorCtrl'
      })
      .when('/currency-converter', {
        templateUrl: 'views/currency-converter.html',
        controller: 'CurrencyConverterCtrl'
      })
      .otherwise({
        redirectTo: '/'
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

  	$scope.sumOfValues = 0;

    // The items that you want to sum.
    $scope.addItem = [{ billAmount : '' }];

    $scope.newItem = function($event)
    {
        $scope.addItem.push({ billAmount : '' });
        $event.preventDefault();
    };

    $scope.onchange = function (item) 
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
  }]);
