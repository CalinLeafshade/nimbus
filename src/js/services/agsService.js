
var child_process = require('child_process');

var proxyServices = angular.module('proxyServices', []);

proxyServices.factory('ags', [ '$q',
    function ($q) {
        
        var version;
        
        return {
            getVersion: function() {
                
                var deferred = $q.defer();
                
                if (version) {
                    return version;
                }
                
                child_process.exec('ags --help', function (err, stdout, stderr){
                    if (err) {
                        deferred.reject(err.code);
                    }
                    else {
                        version = /^ACI version ([\d\.]+)$/m.exec(stdout)[0];
                        deferred.resolve(version);
                    }
                });
                
                return deferred.promise; 
            }
        };
  
}]);
