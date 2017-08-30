angular.module('mainControllers', ['authServices'])
    .controller('mainCtrl', function ($http, $location, $timeout, Auth) {
        var app = this;
        if(Auth.isLoggedIn()){
            $location.path('/');
        }else{
            alert('not login');
        }
        this.dologin = function (loginData) {

            app.loading = true;
            Auth.login(app.loginData).then(function(data){
                app.loading = false;
                if(data.data.success == true){
                    $location.path("/");
                }else{
                    alert(data.data.message);
                }

            })
        }
    });