(function () {
    'use strict';
    angular
        .module('speakeasy')
        .factory('userFactory', userFactory)

    userFactory.$inject = ['$http'];

    function userFactory($http) {
        var urlPrefix = 'https://pacoima-ypi.azurewebsites.net/'

        var service = {
            getUsers: getUsers
        }
        return service

        function getUsers() {
            return $http.get(urlPrefix + "api/profiles/Search/2")
        }
   
    }
}) ();