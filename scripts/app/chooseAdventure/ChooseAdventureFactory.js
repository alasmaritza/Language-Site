(function () {
    'use strict';
    angular
        .module('speakeasy')
        .factory('adventureFactory', adventureFactory)

    adventureFactory.$inject = ['$http'];

    function adventureFactory($http) {

        var urlPrefix = 'https://pacoima-ypi.azurewebsites.net/'

        var service = {
            getQuizzes: getQuizzes,
        }

        return service

            function getQuizzes() {
                return $http.get(urlPrefix + 'api/quizzes/questions/')

            }


    }
})();