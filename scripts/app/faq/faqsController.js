(function () {

    angular
        .module("speakeasy")
        .controller("faqsController", faqsController);

    faqsController.$inject = ["$scope", "$http", "faqsFactory"];

    function faqsController($scope, $http, faqsFactory) {

        var vm = this;

        vm.faqsData = faqsData;

        faqsFactory.getFaqs().then(faqsData);

        function faqsData(faqs) {
            vm.faqs = faqs.data.items
        }


    }

})();