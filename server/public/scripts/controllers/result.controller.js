myApp.controller('ResultController', function(UserService, IntakeService, $location, $http, $window, ngAudio) {
  console.log('ResultController created');
  var vm = this;
  vm.userService = UserService;
  vm.name = vm.userService.userObject.name;
  vm.intake = IntakeService.intake;
  vm.results = IntakeService.results;

  vm.overviewClick = function() {
    console.log('onclick function');
    //save the selection in service before navigation
    $location.path('/overview');
    $window.location.reload();
  };

  vm.email = {
    email: ''
  };

  vm.emailDoctor = function() {
    console.log('emailDoctor function called');
    console.log(vm.email);
    console.log(vm.results);
    swal({
      title: 'Success.',
      text: 'The Email has been successfully sent.',
      type: 'success',
      width: 800,
    });
    var obj = {email: vm.email, name: vm.name, translation: vm.results};
    $http.post('/nodemailer', obj).then(function(response) {
      console.log('object successfully sent to nodemailer router');
    });
  };

});
