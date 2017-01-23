angular.module('myApp')

.factory('DashboardService', ['$http', '$q', '$rootScope', 'AuthenticationService', function($http, $q, $rootScope, AuthenticationService) {    
    var DashboardService = {};

    DashboardService.register = function(data) {
    	var deferred = $q.defer();
        
        data.token = token;
        console.log("auth "+JSON.stringify(data));
    	$http.post('/api/get/registeredUser', data)
    		.then(function successCallback(response) {
                if(response.data.status == true) 
                    deferred.resolve({ success: true });
                else
                    deferred.resolve({ success: false, message: "Wrong Input" });
    		}, function errorCallback(response) {
    			deferred.reject("Error");
    		});
    	return deferred.promise;
      }
    
    return DashboardService;
  }
]);