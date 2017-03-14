(function () {
'use strict';
    angular
        .module('speakeasy')
        .controller("courseDashController", courseDashController);

    courseDashController.$inject = ["$scope", "$http", "courseFactory"];

    function courseDashController($scope, $http, courseFactory) {

        var vm = this;
 
        
        vm.courseData = courseData;
        

activate();

function activate(){

         courseFactory.getCourse().then(courseData);


}




        function courseData(dataObjFromServer) {
            vm.items = dataObjFromServer.data.items

            console.log(dataObjFromServer.data.items);
        }


    }

})();