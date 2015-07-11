
var onlineControllers = angular.module('onlineControllers', [ 'gameServices' ])

.controller('OnlineCtrl', ['$scope', 'Game',
    function ($scope, Game) {
        var games = Game.query(function () {
            $scope.games = games;
        });
    }
])

.controller('OnlineGameDetailsCtrl', ['$scope', '$routeParams', 'Game',
    function ($scope, $routeParams, Game) {
        var game = Game.get({gameID: $routeParams.gameID }, function() {
            $scope.game = game;
        });
    }
]);

//teamControllers.controller('TeamDetailCtrl', ['$scope', '$routeParams', 'Team', '$modal', 'PlayerTypes',
//  function ($scope, $routeParams, Team, $modal, PlayerTypes) {
//        $scope.teamID = $routeParams.teamID;
//
//        var team = Team.get({ teamID: $routeParams.teamID }, function () {
//            $scope.team = team;
//        });
//
//        $scope.hirePlayer = function () {
//
//            var modalInstance = $modal.open({
//                templateUrl: 'newPlayer.html',
//                controller: 'HirePlayerCtrl',
//                resolve: {
//                    team: function () {
//                        return $scope.team
//                    }
//                }
//            });
//
//            modalInstance.result.then(function (type) {
//                team.$addPlayer({ typeID: type });
//            }, function () {
//
//            });
//        };
//
//    }]);
//
//teamControllers.controller('HirePlayerCtrl', ['$scope', '$modalInstance', 'team', 'PlayerTypes', function ($scope, $modalInstance, team, PlayerTypes) {
//
//
//
//        $scope.types = PlayerTypes.query();
//
//        $scope.team = team;
//
//        $scope.canHireType = function (typeID) {
//            var type = $scope.types[typeID];
//            if (!type) return false;
//            if (team.cash < type.value) return false;
//            if (type.limit && team.players.filter(function (x) { return x.typeID == typeID }).length >= type.limit) return false;
//            return true;
//        }
//
//        $scope.hire = function (typeID) {
//            $modalInstance.close(typeID);
//        };
//
//        $scope.cancel = function () {
//            $modalInstance.dismiss('cancel');
//        };
//
//    }]);
