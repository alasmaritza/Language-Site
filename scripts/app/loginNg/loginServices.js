(function (){

    'use strict';
   

   angular
    .module("speakeasy")
    .factory("loginFactory", loginFactory);
   
    loginFactory.$inject= ["$http"];

   function loginFactory ($http){

    var urlPrefix = 'https://pacoima-ypi.azurewebsites.net/'
       
       var service= {
            postLogin: postLogin
            //getUserArticle: getUserArticle
        }
        return service;

        function postLogin(data) {
            return $http.post(urlPrefix + 'api/users/login/force/', data,{withCredentials:true})
        }

        // function getUserArticle(){
        //     return $http.get(urlPrefix +'api/Articles/', {withCredentials:true})
        // }


   }
   

})();