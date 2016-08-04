'use strict';

/**
 * @ngdoc overview
 * @name hackathonApp
 * @description
 * # hackathonApp
 *
 * Main module of the application.
 */
angular
  .module('hackathonApp', [
    'ngRoute','restangular'
  ])
  .config(function ($routeProvider,RestangularProvider) {

   RestangularProvider.setBaseUrl('http://localhost:714/Practice/api/v1/');

    $routeProvider
      .when('/', {
        templateUrl: 'ModuleFirst/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .factory("Names",function(Restangular){ //servie for login

  return Restangular.service('names');

})
