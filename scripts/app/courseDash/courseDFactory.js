(function () {
  'use strict';
  angular
    .module('speakeasy')
    .factory('courseFactory', courseFactory);

  courseFactory.$inject = ["$http"];

  function courseFactory($http) {
    var urlPrefix = "https://pacoima-ypi.azurewebsites.net/"


    return {
      getCourse: getCourse
    }

    function getCourse() {
      return $http.get(urlPrefix + 'api/courses')
    }
  }

})();