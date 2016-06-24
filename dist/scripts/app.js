seven = angular.module('seven', ['ui.router', 'firebase']);

seven.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
    $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
        });
    
    $stateProvider
        .state('home', {
            url: '/',
            controller: 'HomeCtrl',
            templateUrl: '/templates/home.html'
        })
        .state('complete', {
            url: '/complete',
            controller: 'CompleteCtrl',
            templateUrl: '/templates/complete.html'
        })
        .state('expired', {
            url: '/expired',
            controller: 'ExpiredCtrl',
            templateUrl: '/templates/expired.html'
        });
}]);

seven.controller("HomeCtrl", function($scope, $interval, $firebaseArray) {
    var ref = new Firebase("https://se7en.firebaseio.com/");
    $scope.tasks = $firebaseArray(ref);
//    $scope.select = 'Choose one';   // dropdown placeholder
    $scope.priority = ['High', 'Medium', 'Low'];
    
    // loop through the task array
    // check if expired
    // if expired, change state to expired
    // look at firebase doc for methods
    $interval(function() {
        console.log("A");
    }, 2000)
    
//  Synchronize collections as arrays
    $scope.addTask = function() {
        $scope.tasks.$add({
            description: $scope.task,
//            priority: ,   // user's choice from $scope.priority
            state: "active",
            timeCreated: (new Date()).getTime()
        }).then(function(ref) {
            $scope.task = "";
        });
    }
    
    //$scope.hiding = true;
    $scope.hideTask = function() {
        //  hide task after 0.5 sec (500); change to 7 days (604800000)
        //  var currentTime = new Date().getTime();
        //  if (currentTime - timeCreated >= 604800000) {
        //      hide task
        //  }
        // function that finds the current time and compares it to the timeCreated + timeLimit
        // run this check every 5 seconds
        
        // set up an interval that 
        
        $scope.hiding = false;    
        $timeout(function() {
            $scope.state = "complete";
            $scope.hiding = true; 
        }, 500);
    }
});

//authentication
//  app.controller("ProfileCtrl", function($scope, $firebaseAuth) {
//    var ref = new Firebase("https://se7en.firebaseio.com");
//    
//    var auth = $firebaseAuth(ref);
//    
//    auth.$authWithOAuthPopup("facebook").then(function(authData) {
//        console.log("Logged in as:", authData.uid);
//    }).catch(function(error) {
//        console.log("Authentication failed:", error);
//    });
//  });

//three-way data binding (notice the $bindTo method)
//  app.controller("SampleCtrl", function($scope, $firebaseObject) {
//      var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com/data");
//download the data into a local object
//      var syncObject = $firebaseObject(ref);
//synchronize the object with a three-way data binding
//click on `index.html` above to see it used in the DOM!
//  syncObject.$bindTo($scope, "data");
//});