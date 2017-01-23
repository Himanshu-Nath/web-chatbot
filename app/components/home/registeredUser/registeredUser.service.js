angular.module('myApp')

.factory('RegisteredUsersService', ['$http', '$q', '$rootScope', 'AuthenticationService', function($http, $q, $rootScope, AuthenticationService) {    
    var RegisteredUsersService = {};

    RegisteredUsersService.findRegisteredUser = function(data) {
    	var deferred = $q.defer();
        
        console.log("auth "+JSON.stringify(data));
    	$http.post('/api/get/registeredUser', data)
    		.then(function successCallback(response) {
                if(response.data.status == true) 
                    deferred.resolve({ success: true, message: "Record Found Successfully !", result: response.data.result });
                else
                    deferred.resolve({ success: false, message: "No user find of this name !" });
    		}, function errorCallback(response) {
    			deferred.reject("Error");
    		});
    	return deferred.promise;
      }
    
    RegisteredUsersService.sendFriendRequest = function(data) {
    	var deferred = $q.defer();
        
        console.log("auth "+JSON.stringify(data));
    	$http.post('/api/sendFriendRequest', data)
    		.then(function successCallback(response) {
                if(response.data.status == true) 
                    deferred.resolve({ success: true, message: "Request Send" });
                else
                    deferred.resolve({ success: false, message: "Error in sending request !" });
    		}, function errorCallback(response) {
    			deferred.reject("Error");
    		});
    	return deferred.promise;
      }
    
    return RegisteredUsersService;
  }
]);