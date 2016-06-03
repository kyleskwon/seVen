var app = angular.module('seven', ["firebase"]);

//app.controller("SampleCtrl", function($scope, $firebaseObject) {
//  var ref = new Firebase("https://se7en.firebaseio.com/");
//  // download the data into a local object
//  $scope.data = $firebaseObject(ref);
//});

app.controller("ProfileCtrl", ["$scope", "$firebaseArray",
    function($scope, $firebaseArray) {
        var tasksRef = new Firebase("https://se7en.firebaseio.com/tasks");
        
        $scope.tasks = $firebaseArray(tasksRef);
        
        var query = tasksRef.orderByChild("timestamp").limitToLast(25);
        
        $scope.filteredTasks = $firebaseArray(query);
//        $scope.filteredTasks.$add({text: "h"});
    }
]);