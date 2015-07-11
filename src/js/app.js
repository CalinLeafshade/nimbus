
var app = angular.module('nimbus', [
    'ngRoute', 'onlineControllers', 'gameServices'
]);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/online', {
            templateUrl: 'partials/online.html',
            controller: 'OnlineCtrl'
        }).
        when('/online/game/:gameID', {
            templateUrl: 'partials/onlinegame.html',
             controller: 'OnlineGameDetailsCtrl'
        }).
        when('/library', {
            templateUrl: 'partials/library.html',
            controller: 'LibraryCtrl'
        }).
        otherwise({
            redirectTo: '/online'
        });
    }]);
