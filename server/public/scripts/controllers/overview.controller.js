myApp.controller('OverviewController', function(UserService, ngAudio) {
  console.log('OverviewController created');
  var vm = this;
  vm.userService = UserService;
});
