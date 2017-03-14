(function (){

    'use strict';
    angular
    .module("speakeasy")
    .controller("userDashController", userDashController); 

        userDashController.$inject = ['$scope', "$http", "userDashboardFactory"];

        function userDashController($scope, $http, userDashboardFactory) {
            var vm = this;
     
            vm.userboard = userboard;

               userDashboardFactory.getUserDash().then(userboard);

               function userboard(response){
               vm.users = response.data.item;
               }

 




        };

})();




