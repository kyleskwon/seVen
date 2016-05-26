var app = angular.module('seVen', ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebaseArray) {
  var ref = new Firebase("https://seven-9d492.firebaseio.com");
  // download the data into an array
  $scope.messages = $firebaseArray(ref);
  // putting a console.log here won't work, see below
  $scope.addMessage = function() {
    $scope.messages.$add({
        text: $scope.newMessageText
    });
  };
});