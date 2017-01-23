angular.module('myApp')

.factory('RegisterService', ['$http', '$q', '$rootScope', 'AuthenticationService', function($http, $q, $rootScope, AuthenticationService) {    
    var RegisterService = {};

    RegisterService.register = function(data) {
    	var deferred = $q.defer();
        var token = AuthenticationService.authToken(data.username, data.password);
        data.token = token;
        console.log("auth "+JSON.stringify(data));
    	$http.post('/api/register', data)
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
    
    return RegisterService;
  }
]);