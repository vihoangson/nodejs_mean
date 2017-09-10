angular.module('mainControllers', ['authServices'])
    .controller('mainCtrl', function ($http, $location, $timeout, Auth, $rootScope) {
        var app = this;
        $rootScope.$on('$routeChangeStart', function () {
            app.isLoggedIn = false;
            if (Auth.isLoggedIn()) {
                app.isLoggedIn = true;
                console.log('Success login');
                Auth.getUser().then(function (data) {
                    app.username = data.data.username
                })
            } else {
                console.log('Failure login');
                app.username = '';
            }
        })


        this.dologin = function (loginData) {

            app.loading = true;
            app.errorMsg = false;
            Auth.login(app.loginData).then(function (data) {

                if (data.data.success == true) {
                    app.loading = false;
                    app.errorMsg = data.data.message + '... Redirecting';
                    $timeout(function () {
                        $location.path("/about");
                        app.loginData = '';
                        app.successMsg = false;
                    }, 2000);
                } else {
                    alert(data.data.message);
                }

            })
        }

        this.logout = function () {
            Auth.logout()   ;
        }

    });