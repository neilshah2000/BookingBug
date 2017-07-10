'use strict';

// Declare app level module which depends on views, and components
angular.module('bookingApp', [
  'ngRoute',
  'bookingApp.view1',
  'bookingApp.view2',
  'bookingApp.version',
  'bookingApp.servicesPage',
  'ui.router'
]).
config(['$locationProvider', '$urlRouterProvider', function($locationProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/view1');
}]);
