var app = angular.module('seven', ["firebase"]);

app.controller("ProfileCtrl", function($scope, $firebaseArray) {
  var ref = new Firebase("https://se7en.firebaseio.com/");
    $scope.tasks = $firebaseArray(ref);
//  // download the data into a local object
//  $scope.data = $firebaseObject(ref);
//});

//app.controller("ProfileCtrl", ["$scope", "$firebaseArray",
//    function($scope, $firebaseArray) {
//        var tasksRef = new Firebase("https://se7en.firebaseio.com/tasks");
//        
//        $scope.tasks = $firebaseArray(tasksRef);
//        
//        var query = tasksRef.orderByChild("timestamp").limitToLast(25);
//        
//        $scope.filteredTasks = $firebaseArray(query);
////        $scope.filteredTasks.$add({text: "h"});
//    }

        $scope.addTask = function() {
            $scope.tasks.$add({
              text: $scope.newTaskText
            });
          };
});

//app.controller("SampleCtrl", function($scope, $firebaseObject) {
//  var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com/data");
//  // download the data into a local object
//  var syncObject = $firebaseObject(ref);
//  // synchronize the object with a three-way data binding
//  // click on `index.html` above to see it used in the DOM!
//  syncObject.$bindTo($scope, "data");
//});