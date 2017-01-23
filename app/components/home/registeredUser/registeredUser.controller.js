angular.module('myApp')

.controller('RegisteredUsersController', ['$state', 'localStorageService', 'RegisteredUsersService', 'FlashService', '$window',
  function($state, localStorageService, RegisteredUsersService, FlashService, $window) {

    var vm = this;
    vm.find = {};
    //vm.find.token = localStorageService.get('CurrentUserToken');
    vm.find.token = $window.localStorage.getItem('CurrentUserToken');
    vm.find.id = localStorageService.get('CurrentUserId');
      
      console.log("ID : "+localStorageService.get('CurrentUserId'));

    vm.findRegisteredUser = function() {        
        RegisteredUsersService.findRegisteredUser(vm.find)
        	.then(function(response) {
                if (response.success) {
                    FlashService.success(response.message);
                    vm.status = true;
                    vm.result = response.result;
                    console.log("auth "+JSON.stringify(response));
                } else {
                    vm.status = false;
                    FlashService.error(response.message);
                    vm.dataLoading = false;
                }
          },
        function(error) {});
    }
    
    vm.sendRequest = function() {   
        console.log("Id "+vm.find.reqId);
        console.log("Name "+vm.find.reqName);
        RegisteredUsersService.sendFriendRequest(vm.find)
        	.then(function(response) {
                $('.modal').modal('toggle');
                if (response.success) {
                    FlashService.success(response.message);
                    vm.status = true;
                    vm.result = response.result;
                } else {
                    vm.status = false;
                    FlashService.error(response.message);
                    vm.dataLoading = false;
                }
          },
        function(error) {});
    }
    
    vm.back = function() {        
        $state.go('home');
    }
    
    $(document).on("click", ".rowId", function () {        
        vm.find.reqId = $(this).data('id');
        vm.find.reqName = $(this).data('name');
        $(".modal .modal-body .modal-body-h1").html(vm.find.reqName);
    });
    
  }
]);