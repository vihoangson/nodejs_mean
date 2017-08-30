angular.module('userControllers', [])
    .controller('regCtrl', function ($http,$location,$timeout,User) {
        var app = this;
        this.regUser = function (regData) {
            app.loading=true;
            app.flag_successMsg = false;
            app.flag_errorMsg = false;

            User.create(app.regData).then(function(data,$locale){
                app.flag_successMsg = false;
                app.flag_errorMsg = false;
                if(data.data.success){
                    app.flag_successMsg = true;
                    app.successMsg = data.data.message +"... Redirecting";
                    $timeout(function(){
                        $location.path('/');
                    },2000);
                }else{
                    app.flag_errorMsg = true;
                    app.errorMsg = data.data.message;
                }
                app.loading=false;
            });
        }
    });