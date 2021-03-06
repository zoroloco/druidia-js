/*
 * This front end router will route different views.
 *
 * When you use ngroute, you are using a single page application that
 * does not reload a page.  It just replaces content.
 *
 * Note: After first fetch, the next fetches are cached. Only hits server first time.
 *
*/

// public/js/appRoutes.js
angular.module('route-module', []).
    config(['$routeProvider', '$locationProvider',
       function($routeProvider, $locationProvider) {

        $routeProvider.when('/home', {
                        templateUrl : '/views/templates/home.html'
                      }).when('/test', {
                        templateUrl : '/views/templates/test.html'
                      }).when('/quiz', {
                        templateUrl : '/views/templates/quiz.html'
                      }).otherwise({
                        redirectTo: '/'
                      });

        $locationProvider.html5Mode(true);
      }]);//config
