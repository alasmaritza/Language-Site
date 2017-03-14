(function () {

    'use strict';
    angular
        .module("speakeasy")
        .controller("loginController", loginController);

    loginController.$inject = ['$scope', "$http", "loginFactory"];

    function loginController($scope, $http, loginFactory) {
        var vm = this;

        vm.userlogin = userlogin;
        vm.updateForm = updateForm;
        // vm.userboard = userboard;
        //vm.blogData = blogData;

        // activate();
      
        // function activate(){
        //     userBlogFactory.getUserArticle().then(blogData);

        // }

        
        // function blogData(data) {
        //     vm.items = data.data.items;
        //     console.log(data.data.items);
        // }
    function updateForm() {

            var form = {
                email: vm.userlogin.email,
                password: vm.userlogin.password  

            }
            loginFactory.postLogin(form).then(userlogin);


        }

        function userlogin(response) {
            vm.users = response.data.item;
             sessionStorage.setItem("user", response.data.item);
            //   $state.go('UserDashboard');
            window.location.replace('Speakeasy.html#/UserDashboard');
            console.log(response.data.item);
          
            // if (response.data.item === true) {
            //     window.location.replace = 'http://localhost:8080/views/Speakeasy.html#/UserDashboard';
            //     console.log(data);
            // } else {
            //     console.log("error");
            // };
        

           
        }

        
    }

})();