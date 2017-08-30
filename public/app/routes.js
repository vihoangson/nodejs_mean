angular.module('appRoutes', ['ngRoute'])
    .config(function ( $locationProvider,$routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/pages/home.html'
            })
            .when('/about', {
                templateUrl: 'app/views/pages/about.html'
            })
            .when('/register', {
                templateUrl: 'app/views/pages/registration.html',
                controller:'regCtrl',
                controllerAs: 'register'
            })
            .when('/login', {
                templateUrl: 'app/views/pages/login.html',
                controller:'mainCtrl',
                controllerAs: 'main'
            })
            .otherwise({redirecTo: ('/')})
        ;
    });