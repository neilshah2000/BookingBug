'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'ui.router'
]).
config(['$locationProvider', '$urlRouterProvider', function($locationProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
}]);
