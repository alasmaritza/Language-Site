(function () {
    angular
        .module('test')
        .controller('testController', testController);

    testController.$inject = ['$scope'];


    function testController($scope) {
        var vm = this;
        vm.firstName = "Bruce";
        vm.middleName = "Paul";
        vm.lastName = "Dickinson";

    };

})();