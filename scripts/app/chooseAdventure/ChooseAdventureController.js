(function () {
    'use strict';

    angular
        .module('speakeasy')
        .controller('adventureController', adventureController)

    adventureController.$inject = ['$http', '$scope', '$anchorScroll', '$uibModal', 'adventureFactory'];


    function adventureController($scope, $http, $anchorScroll, $uibModal, adventureFactory) {
        var vm = this
        vm.$uibModal = $uibModal;
        vm.populateDiv = populateDiv;
        vm.quizRedirect = quizRedirect;
        vm.clickMe = clickMe;
        vm.showModal = showModal;
        vm.showFrenchModal = showFrenchModal;
        vm.showSpanishModal = showSpanishModal;
        vm.close = close;
        var ans = [];
        var answer = [];

        function close() {
            $('.fade').trigger('click');
            ans = [];
        }

        function showFrenchModal() {
            vm.$uibModal.open({
                animation: true,
                templateUrl: 'frenchQuiz',
                controller: 'adventureController',
                controllerAs: 'quiz',
                size: 'md',
                resolve: {
                    items: function () {}
                }
            })
        }

        function showModal() {
            vm.$uibModal.open({
                animation: true,
                templateUrl: 'japaneseQuiz',
                controller: 'adventureController',
                controllerAs: 'quiz',
                size: 'md',
                resolve: {
                    items: function () {}
                }
            })
        }

        function showSpanishModal() {
            vm.$uibModal.open({
                animation: true,
                templateUrl: 'spanishQuiz',
                controller: 'adventureController',
                controllerAs: 'quiz',
                size: 'md',
                resolve: {
                    items: function () {}
                }
            })
        }

        adventureFactory.getQuizzes().then(populateDiv);

        function populateDiv(quizzes) {
            vm.quizzes = quizzes.data.items;
        }

        function clickMe(clickEvent) {
            $(clickEvent.toElement).toggleClass('btn-success');
            vm.answer = $(clickEvent.toElement).html();
            ans.push(vm.answer);
            if (ans[0] == "Argentina" && ans[1] == "Adventure") {
                $anchorScroll('argentinaAdventure');
                ans = [];
                $('.fade').trigger('click');
            } else if (ans[0] == "Argentina" && ans[1] == "Arts and Culture") {
                $anchorScroll('argentinaArts');
                ans = [];
                $('.fade').trigger('click');
            } else if (ans[0] == "Argentina" && ans[1] == "Leisure") {
                $anchorScroll('argentinaLeisure');
                ans = [];
                $('.fade').trigger('click');
            } else if (ans[0] == "Mexico" && ans[1] == "Adventure") {
                $anchorScroll('mexicoAdventure');
                ans = [];
                $('.fade').trigger('click');
            } else if (ans[0] == "Mexico" && ans[1] == "Arts and Culture") {
                $anchorScroll('mexicoArts');
                ans = [];
                $('.fade').trigger('click');
            } else if (ans[0] == "Mexico" && ans[1] == "Leisure") {
                $anchorScroll('mexicoLeisure');
                ans = [];
                $('.fade').trigger('click');
            } else if (ans[0] == "Spain" && ans[1] == "Adventure") {
                $anchorScroll('spainAdventure');
                ans = [];
                $('.fade').trigger('click');
            } else if (ans[0] == "Spain" && ans[1] == "Arts and Culture") {
                $anchorScroll('spainArts');
                ans = [];
                $('.fade').trigger('click');
            } else if (ans[0] == "Spain" && ans[1] == "Leisure") {
                $anchorScroll('spainLeisure');
                ans = [];
                $('.fade').trigger('click');
            }
        }

        function quizRedirect(clickEvent) {
            $(clickEvent.toElement).toggleClass('btn-success');
            vm.answer = $(clickEvent.toElement).html();
            ans.push(vm.answer);
            if (ans[0] == "France" && ans[1] == "Adventure") {
                $anchorScroll('frenchAdventure');
                ans = [];
                $('.fade').trigger('click');
            } else if (ans[0] == "France" && ans[1] == "Arts and Culture") {
                $anchorScroll('frenchArts');
                ans = [];
                $('.fade').trigger('click');
            } else if (ans[0] == "France" && ans[1] == "Leisure") {
                $anchorScroll('leisureFrench');
                ans = [];
                $('.fade').trigger('click');
            } else if (ans[0] == "Montreal, Canada" && ans[1] == "Adventure") {
                $anchorScroll('montrealAdventure');
                ans = [];
                $('.fade').trigger('click');
            } else if (ans[0] == "Montreal, Canada" && ans[1] == "Arts and Culture") {
                $anchorScroll('montrealArts');
                ans = [];
                $('.fade').trigger('click');
            } else if (ans[0] == "Montreal, Canada" && ans[1] == "Leisure") {
                $anchorScroll('montrealLeisure');
                ans = [];
                $('.fade').trigger('click');
            } else if (ans[0] == "Morocco" && ans[1] == "Adventure") {
                $anchorScroll('moroccoAdventure');
                ans = [];
                $('.fade').trigger('click');
            } else if (ans[0] == "Morocco" && ans[1] == "Arts and Culture") {
                $anchorScroll('moroccoArts');
                ans = [];
                $('.fade').trigger('click');
            } else if (ans[0] == "Morocco" && ans[1] == "Leisure") {
                $anchorScroll('moroccoLeisure');
                ans = [];
                $('.fade').trigger('click');
            } else if (ans[0] == "Japan" && ans[1] == "Adventure") {
                $anchorScroll('japanAdventure');
                ans = [];
                $('.fade').trigger('click');
            } else if (ans[0] == "Japan" && ans[1] == "Arts and Culture") {
                $anchorScroll('japanArts');
                ans = [];
                $('.fade').trigger('click');
            } else if (ans[0] == "Japan" && ans[1] == "Leisure") {
                $anchorScroll('japanLeisure');
                ans = [];
                $('.fade').trigger('click');
            } else if (ans[0] == "China" && ans[1] == "Adventure") {
                $anchorScroll('chinaAdventure');
                ans = [];
                $('.fade').trigger('click');
            } else if (ans[0] == "China" && ans[1] == "Arts and Culture") {
                $anchorScroll('chinaArts');
                ans = [];
                $('.fade').trigger('click');
            } else if (ans[0] == "China" && ans[1] == "Leisure") {
                $anchorScroll('chinaLeisure');
                ans = [];
                $('.fade').trigger('click');
            } else if (ans[0] == "Thailand" && ans[1] == "Adventure") {
                $anchorScroll('thailandAdventure');
                ans = [];
                $('.fade').trigger('click');
            } else if (ans[0] == "Thailand" && ans[1] == "Arts and Culture") {
                $anchorScroll('thailandArts');
                ans = [];
                $('.fade').trigger('click');
            } else if (ans[0] == "Thailand" && ans[1] == "Leisure") {
                $anchorScroll('thailandLeisure');
                ans = [];
                $('.fade').trigger('click');
            }
        }

    }

})();