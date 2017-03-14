(function (){

    'use strict';
    angular
    .module('speakeasy') 
    .config (config);
        
        function config ($stateProvider, $urlRouterProvider) {
            // $urlRouterProvider.otherwise ('');

        $stateProvider
         .state('UserProfile.uprofileAddress', {
                    url: '/addressform',
                    templateUrl: 'Addressform/uprofileAddress.html',
                   controller: 'ProfileController as profile',
                    
                })
                 .state('UserProfile.uprofileSettings', {
                    url: '/settingsform',
                    templateUrl: 'Settingsform/uprofileSettings.html',
                   controller: 'ProfileController as profile',
                    
                })
                 .state('UserProfile.userprofile', {
                    url: '/profileabout',
                    templateUrl: 'profileabout/userprofile.html',
                   controller: 'ProfileController as profile',
                    
                })
        //      .state('blogForm.nest',{
        //             url: '/backhome',
        //             templateUrl: 'Blogs/BlogYourAdventure.html',

        // })


    }
    

})();
