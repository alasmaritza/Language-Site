(function () {

    'use strict';
    angular
        .module("speakeasy")
        .controller("userBlogController", userBlogController);

    userBlogController.$inject = ['$scope', "$http", "blogFactory", "$window"];

    function userBlogController($scope, $http, BlogFactory, $window) {
        var vm = this;

        vm.blogData = blogData;
      // vm.userblog = userblog;
        vm.UpdateForm = UpdateForm;
        // vm.userboard = userboard;
        vm.form = false;
        vm.hide = hide;
        // vm.getUserPost = getUserPost

        activate();
      //start up for get call
        function activate(){
        BlogFactory.getBlogData().then(blogData);

        }

        //get call
        function blogData(data) {
            vm.items = data.data.items;
            
            // console.log(data.data.items);
        }

        //setter
        // function postUserBlog(response) {
        //     vm.users = response.data.item;
        //     console.log(response.data.item);
            
        // }

       

        //getter
        function UpdateForm() {

            var form = {
                title: vm.title,
                author: vm.author,
                content: vm.content
                

            }   //post call to the api
            BlogFactory.postUserBlog(form).then(blogData);
           


        }


            // userBlogFactory.getPostArticle().then(userblog); 
            function hide () {
                 $window.history.back();
            }

    }






    // function userboard(response) {
    //     vm.item = response.data.item;
    //     console.log("does this work") 
    // }






})();