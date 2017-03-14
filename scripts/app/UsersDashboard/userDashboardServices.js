

(function (){

    'use strict';
   

   angular
    .module("speakeasy")
    .factory("userDashboardFactory", userDashboardFactory);
   
    userDashboardFactory.$inject= ["$http"];

   function userDashboardFactory ($http){

        return {
            getUserDash: getUserDash,
            
        }

        function getUserDash() {
            return $http.get('http://pacoima-ypi.azurewebsites.net/api/profiles/'+ sabio.page.UserId)
        }


   }

})();


