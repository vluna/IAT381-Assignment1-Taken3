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
      .when('/invoice', {
        templateUrl: 'views/invoice.html',
        controller: 'InvoiceCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
