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
                controller: 'Home.controller',
                templateUrl: '/templates/home.html'
        });
}]);

seven.controller("Home.controller", function($scope, $timeout, $firebaseArray) {
    var ref = new Firebase("https://se7en.firebaseio.com/");
    $scope.tasks = $firebaseArray(ref);

//  Synchronize collections as arrays
    $scope.addTask = function() {
        $scope.tasks.$add({
          text: $scope.task,
          timeCreated: (new Date()).getTime()
        }).then(function(ref) {
            $scope.task = "";
        });
    }
    
    $scope.hideTask = function() {
        $scope.show = true;
        $timeout(function(){
            $scope.show = false;
        }, 3000);
        //$timeout(ng-hide, 3000);
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