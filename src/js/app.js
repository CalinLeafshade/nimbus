var app = angular.module('nimbus', [
    'ngRoute', 'onlineControllers', 'gameServices', 'sidebarControllers', 'directives', 'settingsControllers', 'communityControllers', 'libraryControllers'
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
        when('/community', {
            templateUrl: 'partials/community.html',
            controller: 'CommunityCtrl'
        }).
        when('/settings', {
            templateUrl: 'partials/settings.html',
            controller: 'SettingsCtrl'
        }).
        otherwise({
            redirectTo: '/online'
        });
    }]);
