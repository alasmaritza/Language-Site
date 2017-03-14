(function () {
    'use strict';
    angular

        .module('speakeasy')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
       // $urlRouterProvider.otherwise('chooseYourAdventure/home');

        $stateProvider

            .state('chooseYourAdventure.spanish', {
                url: '/Spanish',
                templateUrl: 'Adventures/Spanish.html',
                controller: 'adventureController as quiz',
                title: 'SpeakEasy | Choose Your Adventure'
            })

            .state('chooseYourAdventure.french', {
                url: '/French',
                templateUrl: 'Adventures/French.html',
                controller: 'adventureController as quiz',
                title: 'SpeakEasy | Choose Your Adventure'
            })

            .state('chooseYourAdventure.japanese', {
                url: '/Japanese',
                templateUrl: 'Adventures/Japanese.html',
                controller: 'adventureController as quiz',
                title: 'SpeakEasy | Choose Your Adventure'
            })


    }
})();