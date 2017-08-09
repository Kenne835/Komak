myApp.factory('IntakeService', function($http, $location){
  var intake = {bodypart: 'arm', limb: 'upperArm'}; // Where we will put our selection

  return {
    intake: intake
  };
});
