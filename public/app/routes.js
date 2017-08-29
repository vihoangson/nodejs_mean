angular.module('appRoutes', ['ngRoute'])
    .config(function ( $locationProvider,$routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/pages/home.html'
            })
            .when('/about', {
                templateUrl: 'app/views/pages/about.html'
            })
            .otherwise({redirecTo: ('/')})
        ;
    });