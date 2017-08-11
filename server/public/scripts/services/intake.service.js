myApp.factory('IntakeService', function($http, $location){
  var intake = {symptoms: [], comorbidity: []}; // Where we will put our selection
  var results = {postedBodyPartArray: []};
  return {
    intake: intake,
    results: results
  };
});
