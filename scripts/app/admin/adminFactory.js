(function () {
    'use strict';
    angular
        .module('speakeasy')
        .factory('adminFactory', adminFactory);

    adminFactory.$inject = ['$http'];

    function adminFactory($http) {
          var urlPrefix = 'https://pacoima-ypi.azurewebsites.net/'
        return {
            getQuiz : getQuiz,
            postQuiz: postQuiz,
            getQuestion : getQuestion,
            putQuestion: putQuestion,
            deleteQuestion : deleteQuestion,
            getProfile: getProfile
        }
         function getQuiz() {
                return $http.get(urlPrefix + 'api/quizzes/957')
            }
          
              function postQuiz(data) {
                return $http.post(urlPrefix + 'api/quizzes/', data, {withCredentials: true} )
            }
        function putQuestion(data) {
            return $http.put(urlPrefix + 'api/quizzes/questions/' + data.id, data, {withCredentials: true} )
        }

          function deleteQuestion() {
            return $http.post(urlPrefix + 'api/questions/' + id )
        }

          function getProfile() {
            return $http.get(urlPrefix + 'api/profiles/' + sabio.page.UserId)
        }
           
             function getQuestion() {
                return $http.get(urlPrefix + 'api/quizzes/questions/')
            }
    }



})();