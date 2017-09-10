angular.module('userApp', ['appRoutes','userControllers','userServices','ngAnimate','mainControllers'])
.config(function($httpProvider){
    $httpProvider.interceptors.push('AuthInterceptors');
})
;