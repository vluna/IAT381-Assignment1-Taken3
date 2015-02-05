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
  .config(function ($routeProvider) {
    $routeProvider
      .when('/split-bill', {
        templateUrl: 'views/split-bill.html',
        controller: 'SplitBillCtrl'
      })
      .when('/tip-calculator', {
        templateUrl: 'views/tip-calculator.html',
        controller: 'TipCalculatorCtrl'
      })
      .when('/currency-converter', {
        templateUrl: 'views/currency-converter.html',
        controller: 'CurrencyConverterCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/invoice', {
        templateUrl: 'views/invoice.html',
        controller: 'InvoiceCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
