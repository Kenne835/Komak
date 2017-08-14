var myApp = angular.module('myApp', ['ngRoute', 'ngAudio', 'checklist-model', 'ngMaterial']);

myApp.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    //.backgroundPalette('white')
    .primaryPalette('blue-grey')
    .accentPalette('blue-grey');
});

/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  console.log('myApp -- config');
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'LoginController as lc',
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as lc'
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController as uc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/info', {
      templateUrl: '/views/templates/info.html',
      controller: 'InfoController',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/overview', {
      templateUrl: '/views/templates/overview.html',
      controller: 'OverviewController as oc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/extremities', {
      templateUrl: '/views/templates/extremities.html',
      controller: 'OverviewController as oc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/body', {
      templateUrl: '/views/templates/body.html',
      controller: 'OverviewController as oc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/comorbidities', {
      templateUrl: '/views/templates/comorbidities.html',
      controller: 'OverviewController as oc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/doctorView', {
      templateUrl: '/views/templates/doctorView.html',
      controller: 'ResultController as rc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .otherwise({
      redirectTo: 'home'
    });
});
