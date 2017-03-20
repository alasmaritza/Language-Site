(function () {
    'use strict';
    angular
        .module('speakeasy')
        .controller('modalController', modalController)
    // .component('modalComponent', {
    //     templateUrl: 'ChooseYourAdventure.html',
    //     bindings: {
    //         resolve: '<',
    //         close: '&',
    //         dismiss: '&'
    //     }
    // })


    modalController.$inject = ['$uibModalInstance', 'items']

    function modalController($uibModalInstance, items) {
        var vm = this;
        vm.$scope = $scope;
        vm.$uibModalInstance = $uibModalInstance
        vm.cancel = cancel;
        console.log($uibModalInstance);

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        };
    }


})();