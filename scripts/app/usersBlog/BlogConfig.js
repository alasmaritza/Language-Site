(function (){

    // 'use strict';
    // angular
    // .module('speakeasy') 
    // .config (config);
        
        function config ($stateProvider, $urlRouterProvider) {
            // $urlRouterProvider.otherwise ('');

        $stateProvider
            // .state('home',{
            //     url: '/BlogYourAdventure',
            //     templateUrl: 'blogHome.html',
            //     controller: "homeController as home"
            // })

            .state('BlogYourAdventure.blogForm', {
                    url: '/blog',
                    templateUrl: 'Blogs/blogForm.html',
                    controller: 'userBlogController as blog',
                    title: 'SpeakEasy | User Blogs'
                    
                })
             .state('blogForm.nest',{
                    url: '/backhome',
                    templateUrl: 'Blogs/BlogYourAdventure.html',
                    title: 'SpeakEasy | User Blogs'

        })


    }
    

})();





// function config ($stateProvider, $urlRouterProvider) {
//             $urlRouterProvider.otherwise('/home');

//             $stateProvider
//                 .state('home', {
//                     url: '/home',
//                     templateUrl: 'partial-home-Example.html'
//                 })

//                 .state('home.list', {
//                     url: 'list',
//                     templateUrl: 'partial-home-list-Example.html',
//                     controller: MusicController
//                 })