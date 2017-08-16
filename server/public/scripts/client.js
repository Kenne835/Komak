var myApp = angular.module('myApp', ['ngRoute', 'ngAudio', 'checklist-model', 'ngMaterial']);

myApp.config(function($mdThemingProvider) {
  $mdThemingProvider.definePalette('white', {
    '50': 'ffffff',
    '100': 'ffffff',
    '200': 'ffffff',
    '300': 'ffffff',
    '400': 'ffffff',
    '500': 'ffffff',
    '600': 'ffffff',
    '700': 'ffffff',
    '800': 'ffffff',
    '900': '37474f',
    'A100': 'ffffff',
    'A200': 'ffffff',
    'A400': 'ffffff',
    'A700': 'ffffff',
    'contrastDefaultColor': 'light',

    'contrastDarkColors': ['50', '100',
     '200', '300', '400', 'A100'],
    'contrastLightColors': undefined
  });
  $mdThemingProvider.definePalette('btnGrey', {
    '50': 'ECEFF1',
    '100': 'CFD8DC',
    '200': 'B0BEC5',
    '300': '90A4AE',
    '400': '78909c',
    '500': '607D8B',
    '600': 'CFD8DC',
    '700': '455A64',
    '800': '263238',
    '900': '37474f',
    'A100': 'ffffff',
    'A200': 'ffffff',
    'A400': 'ffffff',
    'A700': 'ffffff',
    'contrastDefaultColor': 'light',

    'contrastDarkColors': ['50', '100',
     '200', '300', '400', 'A100'],
    'contrastLightColors': undefined
  });
  $mdThemingProvider.theme('default')
    //.backgroundPalette('white')
    .primaryPalette('blue-grey', {'default': '700'})
    .accentPalette('red')
    .backgroundPalette('white')
    .warnPalette('btnGrey', {'default': '200'});
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
