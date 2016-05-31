var app = angular.module('seven', ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebaseObject) {
  var ref = new Firebase("https://se7en.firebaseio.com/");
  // download the data into a local object
  $scope.data = $firebaseObject(ref);
});

app.controller("ProfileCtrl", ["$scope", $firebaseArray",
    function($scope, $firebaseArray) {
        var messagesRef = new Firebase("https://se7en.firebaseio.com/messages");
        
        $scope.messages = $firebaseArray(messagesRef);
        
        var query = messagesRef.orderByChild("timestamp").limitToLast(25);
        
        $scope.filteredMessages = $firebaseArray(query);
    }
]);