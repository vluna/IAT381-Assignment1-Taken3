'use strict';

/**
 * @ngdoc function
 * @name halloumiAppApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the halloumiAppApp
 */
angular.module('halloumiAppApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
