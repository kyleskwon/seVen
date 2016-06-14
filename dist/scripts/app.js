(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
        
        $stateProvider
            .state('landing', {
                url: '/',
//                controller: 'LandingCtrl as landing',
                templateUrl: '/templates/landing.html'
        });
    }
    
    angular
        .module('seven', ['firebase', 'ui.router'])
        .config(config)
        .controller("TaskCtrl", function($scope, $firebaseArray) {
          var ref = new Firebase("https://se7en.firebaseio.com/");
            $scope.tasks = $firebaseArray(ref);

        //  Synchronize collections as arrays
            $scope.addTask = function() {
                $scope.tasks.$add({
                  text: $scope.newTaskText
                });
                $scope.text = "";
            };
        });
})();

//    var app = angular.module('seven', ['firebase'])
//    
//    app.controller("TaskCtrl", function($scope, $firebaseArray) {
//      var ref = new Firebase("https://se7en.firebaseio.com/");
//        $scope.tasks = $firebaseArray(ref);
//    
//    //  Synchronize collections as arrays
//        $scope.addTask = function() {
//            $scope.tasks.$add({
//              text: $scope.newTaskText
//            });
//            $scope.text = "";
//        };
//    });

//var app = angular.module('seven', [
//    'firebase',
//    'ui.router'
//])
//
//.config(function ($stateProvider) {
//    $stateProvider
//        .state('landing', {
//            url: '/',
//            controller: 'LandingCtrl as landing',
//            templateUrl: '/templates/landing.html'
//    });
//});
//
//app.controller("TaskCtrl", function($scope, $firebaseArray) {
//  var ref = new Firebase("https://se7en.firebaseio.com/");
//    $scope.tasks = $firebaseArray(ref);
//    
////  Synchronize collections as arrays
//    $scope.addTask = function() {
//        $scope.tasks.$add({
//          text: $scope.newTaskText
//        });
//        $scope.text = "";
//    };
//});

//var seven = angular.module('seven', ['ui.router']);

//(function() {
//    function config($stateProvider, $locationProvider) {
//        $locationProvider
//            .html5Mode({
//                enabled: true,
//                requireBase: false
//        });
//        
//        $stateProvider
//            .state('landing', {
//                url: '/',
//                templateUrl: "/templates/landing.html"
//            })
//              .state('landing.list', {
//                url: 'list',
//                templateUrl: "/templates/landing.list.html"
//            });
//    }
//    
//    angular
//        .module('seven', ['ui.router'])
//        .config(config);
//})();


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