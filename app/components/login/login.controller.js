angular.module('myApp')

.controller('LoginController', ['$state', 'localStorageService', 'LoginService', 'FlashService', '$window',
  function($state, localStorageService, LoginService, FlashService, $window) {

    var vm = this;

    vm.adminLogin = function() {        
        LoginService.login(vm.login)
        	.then(function(response) {
                if (response.success) {
                    //localStorageService.set("CurrentUserToken", response.token);
                    $window.localStorage.setItem('CurrentUserToken', response.token);
                    localStorageService.set('CurrentUserId', response.id);
                    $window.localStorage.setItem('CurrentUserName', response.firstName);
                    $state.go('home.dashboard');
                } else {
                    FlashService.error(response.message);
                    vm.dataLoading = false;
                }
          },
        function(error) {});
    }
  }
]);