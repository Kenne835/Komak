myApp.controller('OverviewController', function(UserService, IntakeService, $location, ngAudio) {
  console.log('OverviewController created');
  var vm = this;
  vm.userService = UserService;
  vm.intake = IntakeService.intake;

  vm.bodyClick = function() {
    console.log('onclick function');
    //save the selection in service before navigation
   $location.path('/body');
  };

  vm.extremityClick = function() {
    console.log('onclick function');
    //save the selection in service before navigation
   $location.path('/extremities');
  };

  vm.comorbidityClick = function() {
    console.log('onclick function');
    //save the selection in service before navigation
   $location.path('/comorbidities');
  };

  vm.overviewClick = function() {
    console.log('onclick function');
    //save the selection in service before navigation
   $location.path('/overview');
  };

  vm.doctorViewClick = function() {
    console.log('onclick function');
    //save the selection in service before navigation
   $location.path('/doctorView');
  };

  vm.getTranslations = function() {
  console.log('in getTranslations');
  $http.get('/translations').then(function(response){
    console.log('get response:', response);
    lc.translations = response.data;
  });
};


});
