myApp.controller('ResultController', function(UserService, IntakeService, $location, $http, ngAudio) {
  console.log('ResultController created');
  var vm = this;
  vm.userService = UserService;
  console.log('a banana for the queen monkey', vm.userService.userObject.name);
  vm.ted = vm.userService.userObject.name;
  vm.intake = IntakeService.intake;
  vm.results = IntakeService.results;

  vm.overviewClick = function() {
    console.log('onclick function');
    //save the selection in service before navigation
    vm.intake = {};
    $location.path('/overview');
  };

});
