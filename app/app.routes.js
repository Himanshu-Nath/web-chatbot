angular.module('myApp')

.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('login', {
          url : '/login',
          templateUrl: 'app/components/login/login.view.html',
          authenticate: false
        })

        .state('register', {
          url : '/register',
          templateUrl : 'app/components/register/register.view.html',
          authenticate : true
        })
      
        .state('home.dashboard', {
          url : '/dashboard',
          templateUrl : 'app/components/home/dashboard/dashboard.view.html',
          authenticate : true
        })
      
        .state('home.registeredUser', {
          url : '/registeredUser',
          templateUrl : 'app/components/home/registeredUser/registeredUser.view.html',
          authenticate : true
        })

        .state('home', {
          url : '/home',
          templateUrl : 'app/components/home/home.view.html',
          authenticate : true
        });

        $urlRouterProvider.otherwise('/login');
  }
])

.run(function ($rootScope, $state) {
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
    // if(toState.name.slice(0,5) != "login" && fromState.name.slice(0,5) != "login"
    //     && toState.name.slice(0,5) != fromState.name.slice(0,5)) {
    // if(authenticate) {
    //   console.log("Sorry you can't navigate");
    //   event.preventDefault();
    // }
    //$state.current.name;
    // if (toState.authenticate && !AuthService.isAuthenticated()){
    //   $state.transitionTo("login");
    //   event.preventDefault();
    // }
  });
});



//$rootScope.$on('$stateChangeSuccess', function() {
//               $rootScope.adminFlag = $window.localStorage.getItem('adminFlag');
//
//               if( vm.$state.current.name === 'elearning.browse' || vm.$state.current.name === 'elearning.search-results') {
//                       // Get master courses and products
//                       vm.getMasterProductCategory( null );
//                       // Get all courses
//                       vm.getAllCourses( null );
//               }
//
//               if( vm.$state.current.name === 'elearning.home') {
//                       // Get all courses
//                       vm.getAllCourses( null );
//               }
//       });
