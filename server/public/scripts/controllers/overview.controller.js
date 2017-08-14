myApp.controller('OverviewController', function(UserService, IntakeService, $location, $http, ngAudio) {
  console.log('OverviewController created');
  var vm = this;
  vm.userService = UserService;
  vm.intake = IntakeService.intake;
  vm.results = IntakeService.results;
  vm.reset = IntakeService.reset;

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
    vm.intake = {};
    $location.path('/overview');
  };

  vm.doctorViewClick = function() {
    console.log('onclick function');
    //save the selection in service before navigation
    $http.post('/translations', vm.intake)
    .then(function(response) {
      console.log('selected value', response);
      console.log('here is the data from the response I got from my post request for translations', response.data);
      console.log('pudding and cakes');
      IntakeService.results.postedBodyPartArray = response.data;

      $location.path('/doctorView');
   });
  };

});
