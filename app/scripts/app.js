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
  .config(function ($routeProvider) {
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
  });

testSlide.run(function($rootScope,$animate){
  $rootScope.panStyle="view-frame-forward";
   $rootScope.$on('$routeChangeSuccess', function(ev,next,current) {
      
         if(current.$$route.level > next.$$route.level){
            $rootScope.panStyle="view-frame-back";
         }
     else if(current.$$route.level < next.$$route.level){
            $rootScope.panStyle="view-frame-forward";
         }
      });
    
   });

