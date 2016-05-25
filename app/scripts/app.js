var app = angular.module('seVen', ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebaseArray) {
  var ref = new Firebase("https://seven-9d492.firebaseio.com");
  // download the data into an array
  $scope.task = $firebaseArray(ref);
  // putting a console.log here won't work, see below
});