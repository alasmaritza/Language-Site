(function () {
    'use strict';
    angular
    .module('speakeasy')
    .factory('quizFactory', quizFactory)

    quizFactory.$inject = ['$http'];

    function quizFactory($http) {

        var urlPrefix = 'https://pacoima-ypi.azurewebsites.net/'

        var service = {
            getQuiz: getQuiz,
            postQuiz: postQuiz,
            gradeQuiz: gradeQuiz,
            getResults: getResults
        }

        return service

            function getQuiz() {
                return $http.get(urlPrefix + 'api/quizzes/questions/')

            };

            function postQuiz(myChoice) {
                var config = {
                    method: "POST",
                    url: urlPrefix + 'api/quizzes/results/answers',
                    data: myChoice,
                    withCredentials: true

                };

                return $http(config)
            };

            function gradeQuiz(grade) {
                var config = {
                    method: "PUT",
                    url: urlPrefix + 'api/quizzes/results/214',
                    data: grade,
                    withCredentials: true
                };

                return $http(config);
            }

            function getResults() {
                var config = {
                    method: "GET",
                    url: urlPrefix + 'api/quizzes/results/214',
                    data: grade,
                    withCredentials: true
                };

                return $http(config);
            }

    }
})();