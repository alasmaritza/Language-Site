(function () {
    'use strict';
    angular
        .module('speakeasy')
        .factory('quizFactory2', quizFactory2);

        quizFactory2.$inject = ['$http'];

function quizFactory2 ($http) {

return {
    getQuizzes2: getQuizzes2
}

    function getQuizzes2() {
           return $http.get('https://optiola.azurewebsites.net/api/quizzes/questions/936')
            
        };
}

})();
