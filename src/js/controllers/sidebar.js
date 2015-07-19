var sidebarControllers = angular.module('sidebarControllers', [ 'proxyServices' ])

.controller('NavCtrl', ['$scope',
    function ($scope) {
        
    }
])

.controller('FooterCtrl', ['$scope', 'ags', '$q',
    function ($scope, ags, $q) {
        
        $q.when(ags.getVersion()).then(function(vers) {
            $scope.ags = {
                version: ags.getVersion()
            };
        });
        
    }
]);