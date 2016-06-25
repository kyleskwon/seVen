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

seven.controller("HomeCtrl", ["$scope", "$interval", "$firebaseArray", 
    function($scope, $interval, $firebaseArray) {
        var ref = new Firebase("https://se7en.firebaseio.com/");
        $scope.tasks = $firebaseArray(ref);
//        $scope.priority = ['high', 'medium', 'low'];
    
// loop through the task array
// check if expired
// if expired, change state to expired
// look at firebase doc for methods
        $interval(function() {
            for (var i = 0; i < $scope.tasks.length; i++) {
                var currentTime = (new Date()).getTime();
                if (currentTime >= $scope.tasks[i].timeCreated + 100000) {
                    $scope.tasks[i].state = "expired";
                    $scope.tasks.$save(i);
                }
            }
        }, 3000)
    
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
        
        $scope.hideTask = function() {
            for (var i = 0; i < $scope.tasks.length; i++) {
                if ($scope.tasks[i].state == "active") {
                    return false;
                } else if ($scope.tasks[i].state == "expired") {
                    return false;
                }
            }
        }
    }
]);

//  hide task after 0.5 sec (500); change to 7 days (604800000)
//  var currentTime = new Date().getTime();
//  if (currentTime - timeCreated >= 604800000) {
//      hide task
//  }
// function that finds the current time and compares it to the timeCreated + timeLimit
