var gameServices = angular.module('gameServices', ['ngResource']);

gameServices.constant('APIROOT', 'http://api.agsarchives.com');

gameServices.factory('Game', ['$resource', 'APIROOT',
    function ($resource, APIROOT) {
        return $resource(APIROOT + '/api/v1/games/:gameID', { gameID: '@agsid' });
    }]);

//sportsballServices.factory('Match', ['$resource',
//    function ($resource) {
//        return $resource('/api/matches/:matchID', { matchID: '@_id' }, {
//            endTurn: {
//                method: 'PUT', params: { action: 'endTurn' }
//            }
//        });
//    }]);
//
//sportsballServices.factory('PlayerTypes', ['$resource',
//    function ($resource) {
//        return $resource('/api/players/types');
//    }]);
