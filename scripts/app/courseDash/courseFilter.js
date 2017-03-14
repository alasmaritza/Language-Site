(function () {
  'use strict';
  angular
    .module('speakeasy')
    .factory('courseFilter', courseFilter);

  courseFilter.$inject = ["$http"];

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