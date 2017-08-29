angular.module('userControllers', [])
    .controller('regCtrl', function ($http,$location,$timeout,User) {
        var app = this;
        this.regUser = function (regData) {
            app.loading=true;
            app.successMsg = '';
            app.errorMsg = '';

            User.create(app.regData).then(function(data,$locale){
                if(data.data.success){
                    app.successMsg = data.data.message +"... Redirecting";
                    $timeout(function(){
                        $location.path('/');
                    },2000);
                }else{
                    app.errorMsg = data.data.message;
                }
                app.loading=false;
            });
        }
    });