angular.module('authServices',[])
    .factory('Auth', function ($http, AuthToken,$window) {
        authFactory = {};
        authFactory.login = function(loginData){
            return $http.post('/api/authenticate', loginData).then(function (data) {
                AuthToken.setToken(data.data.token);
                return data;
            })
        }

        authFactory.isLoggedIn = function () {
            if (AuthToken.getToken()) {
                return true;
            } else {
                return false;
            }
        }

        // Auth.logout();
        authFactory.logout = function(){
            $window.localStorage.removeItem('token');
        }

        return authFactory;
    })
    .factory('AuthToken', function ($window) {
        var authTokenFactory = {};

        // AuthToken.setToken(token)
        authTokenFactory.setToken = function (token) {
            $window.localStorage.setItem('token', token);
        }

        // AuthToken.getToken()
        authTokenFactory.getToken = function () {
            return $window.localStorage.getItem('token');
        }



        return authTokenFactory;
    })

;