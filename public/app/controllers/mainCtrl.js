angular.module('mainControllers', ['authServices'])
    .controller('mainCtrl', function ($http, $location, $timeout, Auth) {
        var app = this;
        this.dologin = function (loginData) {

            Auth.login(app.loginData).then(function(data){

            })
        }
    });