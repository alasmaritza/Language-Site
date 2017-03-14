(function () {
   'use strict';

    angular
        .module('speakeasy')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$scope', '$http', 'profileFactory'];

    function ProfileController($scope, $http, profileFactory) {
        var vm = this;
        //vm.aboutStatement= 'Here you will write something about yourself so edit this in Settings. ';
         vm.ProfileData = ProfileData;
         vm.UpdateForm = UpdateForm;
         vm.Address = Address;
         vm.GetCall = GetCall;

         vm._initialize = _initialize;
          vm.geocoder = null;
        vm.map = null;
        vm.geocodeResponse = null;
        vm.address = {};
       //  vm.user;
         //vm.CityMap = CityMap;
        var submitStatus= "Update Success!"
          vm.form= true;
        _initialize();
        GetCall();
      //  profileFactory.getProfile().then(ProfileData);
        function GetCall(){
        
            profileFactory.getProfile().then(ProfileData);
        }
       
        function ProfileData(profile) {
            vm.profile = profile.data.item    
        }

        function UpdateForm (){
            
            var form ={ 
                firstName:vm.profile.firstName,
                lastName: vm.profile.lastName,
              //  about: vm.profile.aboutStatement,
               email: vm.profile.email,
                id: sabio.page.UserId
            }
           profileFactory.updateProfileName(form).then(UpdateAbout);
            // var formAbout={
            //     aboutStatement: vm.profile.aboutStatement,
            // }
            // profileFactory.profileAboutMe(formAbout).then(onsuccessupdate);
        } 
        
        function onsuccessupdate(){
          vm.ServerResponse = submitStatus;
            profileFactory.getProfile().then(ProfileData);
        }
     
        
        function UpdateAbout(){
              var formAbout={
                   id: sabio.page.UserId,
                aboutStatement: vm.profile.aboutStatement,
            }
            profileFactory.profileAboutMe(formAbout).then(onsuccessupdate);
        }
        function Address(){
            var addressFormData={
                 id: sabio.page.UserId,
                AddressLine1: vm.profile.addressLine1,
                address2: vm.profile.addressLine2,
                city: vm.profile.city,
                StateProvinceCode: vm.profile.stateProvinceCode,
                zip: vm.profile.zip
            }
             profileFactory.profileAddress(addressFormData).then(GetCall);
        }
        // function updatePassword(){
          //  var passwordUpdatedValues = {
            //    password: vm.password
            //};
            //ProfileFactory.updatePassword(passwordUpdatedValues).then(  );
        //}

      //  function uploadImage(){

      //  }

        function toggleForm(){
         vm.form= true;
          // vm.myVar= !vm.myVar;
           vm.form = vm.form === false ? true: false;
        }


       // function NgMap(){
         //   console.log(map.getCenter());
           // console.log('markers', map.markers);
          //  console.log('shapes', map.shapes);
        //   $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyA1pd7futzwyTCqiPKGyDFz_ZR_qGyR_hw"
       // }


           _initialize()
         function _initialize() {
            vm.geocoder = new google.maps.Geocoder();
            var latlng = new google.maps.LatLng(34.263773, -118.425187);
            var mapOptions = {
                zoom: 19,
                center: latlng
            }
            vm.map = new google.maps.Map($('#map2')[0], mapOptions);
      }
        //      function markUser(user){
        //          vm.user.data.item;
        //           for (var i = 0; i < vm.user.length; i++) {
        //         var person = vm.user[i];
        //         var addressString = person.city + " " + person.stateProvinceCode;
        //         // personName = person.firstName;
        //         codeAddress(addressString);
        //         // codeAddress(personName)
        
        //   }
        //      }

         function Address() {

            var addressString = vm.profile.address1 + " " + vm.profile.city + " " + vm.profile.state + " " + vm.profile.zip;

            _codeAddress(addressString);
        }

        function _codeAddress(address) {
            console.log("address string -> ", address);

            vm.geocoder.geocode({ 'address': address }, _onCodeAddress);
        }

        function _onCodeAddress(results, status) {
            //vm.notify(function () {
            //    vm.geocodeResponse = JSON.stringify(results, null, "     ");
            //});

            if (status == google.maps.GeocoderStatus.OK) {

                var geometry = results[0].geometry;
                var loc = geometry.location;

                console.log("got location data from API", loc);

                vm.map.setCenter(loc);

                var marker = new google.maps.Marker({
                    map: vm.map,
                    position: loc
                });

                if (geometry.viewport)
                    vm.map.fitBounds(geometry.viewport);

                var lat = loc.lat();
                var lon = loc.lng();

                console.log("found coordinates in reply -> (%s, %s)", lat, lon);

                vm.profile.latitude = lat;
                vm.profile.longitude = lon;

                _saveAddress();

            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        }

      
    };

})();