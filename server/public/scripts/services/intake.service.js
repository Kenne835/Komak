myApp.factory('IntakeService', function($http, $location){
  var intake = {symptoms: [], comorbidity: []}; // Where we will put our selection
  var results = {postedBodyPartArray: []};
  var reset = {};
  return {
    intake: intake,
    results: results,
    reset: reset
  };
});
