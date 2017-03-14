(function () {
    'use strict';
    angular

        .module()
        .config(config);

    function config($stateProvider) {
        //$urlRouterProvider.otherwise('/');

        $stateProvider
            // .state('home', {
            //     url: '/home',
            //     templateUrl: 'ChooseYourAdventureHome.html',
            //     controller: 'quizController as quiz'
            // })

            .state('MexicanCuisine', {
                url: '/MexicanCuisine',
                templateUrl: 'MexicanCuisine.html',
                controller: 'quizController as quiz'
            })

            .state('MoroccoTraditions', {
                url: '/MoroccoTraditions',
                templateUrl: 'MoroccoTraditions.html',
                controller: 'quizController as quiz'
            })

            .state('Reading and Writing Basics', {
                url: '/japanese',
                templateUrl: 'Japanese.html',
                controller: 'quizController as quiz'
            })


    }
})();



<div class="container">
                    <div ui-view>
                    </div>
					</div>



                    <button ui-sref=".MexicanCuisine" class="btn-button"> </button>