myApp.controller('OverviewController', function(UserService, IntakeService, $location, $http, ngAudio) {
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
    $http.post('/translations', vm.intake)
    .then(function(response) {
      console.log('selected value', response);
      console.log('here is the data from the response I got from my post request for translations', response.data);
      vm.postedBodyPartArray = response.data;

      console.log('pudding and cakes', vm.postedBodyPartArray[0].translation);
   $location.path('/doctorView');
 });
  };

// Create a function that is called in each button on ng-click,
// and in the function there will be a post route, sending the value of the button to the server.
// In the server, there will be the other side of the post request and then
// I’ll put a SQL query in the post request that finds the row in the table where
// the value matches the value passed from the button. In the same post request, return the result.row.
// Then create a function that resets the table on button click.

//when a button is clicked, the value of the button is sent in a post request to the database.
//as the user navigates the form, values accumulate in the databse.
//a get request dislays all of the translations that have been inserted into the database on the doctorView page.
//when the user reaches the doctorView page, they can see their selections.
//the new form button on the bottom of the page sends a delete all request to the database and redirects the user to the overview page.

});
