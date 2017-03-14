///IFFE
(function () {
    'use strict';
    angular
        .module('speakeasy')
        .factory('blogFactory', BlogFactory);
    BlogFactory.$inject = ['$http'];
    //////////////////////////////////////////////////////
    function BlogFactory($http) {
        var urlPrefix = 'https://pacoima-ypi.azurewebsites.net/';
        return {
            getBlogData: getBlogData,
            postUserBlog: postUserBlog
        }
        /////////////////////////////////////////////////////////////////////
        function getBlogData() {
            return $http.get(urlPrefix + 'api/Articles/', {
                withCredentials: true
            });
        }
        //my post call setup/////////////////////////////////////////////////
        function postUserBlog(data) {
            var config = {
                method: "Post",
                url: urlPrefix + 'api/Articles',
                withCredentials: true,
                data: data
            }
            return $http(config)
        }
        ////////////////////////////////////////////////////////////////////
    }
})();


// (function (){

//     'use strict';
   

//    angular
//     .module("speakeasy")
//     .factory("userBlogFactory", userBlogFactory);
   
//     userBlogFactory.$inject= ["$http"];

//    function userBlogFactory ($http){

//     var urlPrefix = 'https://pacoima-ypi.azurewebsites.net/'
       
//        var service= {
//             postUserBlog: postUserBlog,
//             getUserArticle: getUserArticle,
//             // getPostArticle: getPostArticle
//         }
//         return service;

//         function getUserArticle(){
//             return $http.get(urlPrefix +'api/Articles/', {withCredentials:true})
//         } 

//         function postUserBlog(data) {
//             return $http.post(urlPrefix + 'api/Articles/', data,{withCredentials:true})
//         }

       
//         // function getPostArticle(getPost){
//         //     return $http.get(urlPrefix +'api/Articles/', form, {withCredentials:true})
//         // }






//    }
   

// })();