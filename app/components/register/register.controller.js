angular.module('myApp')

.controller('RegisterController', ['$state', 'localStorageService', 'RegisterService', 'FlashService',
  function($state, localStorageService, RegisterService, FlashService) {

    var vm = this;

    vm.register = function() {        
        RegisterService.register(vm.user)
        	.then(function(response) {
                if (response.success) {
                    FlashService.success('Registration successful', true);
                    $state.go('login');
                } else {
                    FlashService.error(response.message);
                    vm.dataLoading = false;
                }
          },
        function(error) {});
    }
    
    vm.cancel = function() {        
        $state.go('login');
    }
  }
]);