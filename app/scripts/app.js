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
        .state('expired', {
            url: '/expired',
            controller: 'ExpiredCtrl',
            templateUrl: '/templates/expired.html'
        });
}]);

seven.controller("ExpiredCtrl", function($scope, $interval, $firebaseArray) {
    
});

seven.controller("HomeCtrl", function($scope, $interval, $firebaseArray) {
    var ref = new Firebase("https://se7en.firebaseio.com/");
    $scope.tasks = $firebaseArray(ref);
    
// loop through the task array
// check if expired
// if expired, change state to expired
// look at firebase doc for methods
    
    //filter over tasks that are active
    $interval(function() {
        for (var i = 0; i < $scope.tasks.length; i++) {
            var currentTime = (new Date()).getTime();
            if ((currentTime >= $scope.tasks[i].timeCreated + 3000) && ($scope.tasks[i].state == "active")) {
                $scope.tasks[i].state = "expired";
                $scope.tasks.$save(i);
            }
        }
    }, 3000)
    
    $scope.addTask = function() {
        $scope.tasks.$add({
            description: $scope.task,
            priority: $scope.priority,
            state: "active",
            timeCreated: (new Date()).getTime()
        }).then(function(ref) {
            $scope.task = "";
        });
    }
    
    $scope.completeTask = function(task) {
        task.state = "complete";
        $scope.tasks.$save(task);
    }
});