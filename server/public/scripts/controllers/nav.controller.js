myApp.controller('NavController', function($scope, $http, $location, UserService, $mdSidenav) {
  console.log('NavController created');
  var vm = this;
  vm.userService = UserService;
});
