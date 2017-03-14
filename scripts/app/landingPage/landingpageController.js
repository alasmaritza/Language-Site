(function () {

    angular
        .module("speakeasy")
        .controller('landingPageController', landingPageController);

    landingPageController.$inject = ["$scope"];

    function landingPageController($scope) {

        var vm = this;


        vm.myInterval = 0;
        vm.noWrapSlides = false;
        vm.active = 0;
        vm.$scope = $scope;
        var slides = $scope.slides = [];
        var currIndex = 0;
        var slideImage = ["/content/img/images/argentina.jpg", "/content/img/images/cancun.jpg","/content/img/images/japan.jpg"];
        var videoImage= [src="https://www.youtube.com/embed/rGrBHiuPlT0"]

        vm.addSlide = addSlide;
        

      function addSlide (oneImage) {



            var newWidth = 800 + slides.length + 1;
            slides.push({
                //image: '//unsplash.it/' + newWidth + '/800',
                image: oneImage,
                text: ['Ready to Learn?', 'Culture, Arts &Leisure', 'Ready for Your Adventure?'][slides.length % 4],
                id: currIndex++
            });
        };

       
        for (var i = 0; i <3; i++) {
            var oneImage = slideImage[i] 
           
            vm.addSlide(oneImage);
            
        }
            

       
    
     
    }

 
     
    
})();