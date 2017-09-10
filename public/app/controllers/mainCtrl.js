angular.module('mainControllers', ['authServices'])
    .controller('mainCtrl', function ($http, $location, $timeout, Auth) {
        var app = this;
        if(Auth.isLoggedIn()){
            console.log('Success login');
            Auth.getUser().then(function(data){
                console.log(data);
            })
        }else{
            console.log('Failure login');
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

        this.logout = function(){
            Auth.logout();
        }

    });