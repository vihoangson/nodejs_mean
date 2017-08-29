angular.module('appRoutes', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/pages/home.html'
            })
            .when('/about', {
                templateUrl: 'app/views/pages/about.html'
            })
        //    .otherwise({redirecTo:('/')})
        ;
        $locationProvider.html5Mode({
            enable: true,
            requireBase: false
        });

    });