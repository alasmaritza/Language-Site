(function () {
    'use strict';
    angular
        .module('speakeasy')
        .controller('connectController', connectController)

    connectController.$inject = ['$scope', '$http', 'userFactory'];

    function connectController($scope, $http, userFactory) {
        var vm = this;
        vm.showUsers = showUsers;
        vm.geocoder = null;
        vm.map = null;
        vm.geocodeResponse = null;
        vm.address = {};
        vm.user;
        var personName;
        var first;
        var markerBounds = new google.maps.LatLngBounds();

        _initialize()

        function _initialize() {
            vm.geocoder = new google.maps.Geocoder();
            vm.map = new google.maps.Map($('#map-canvas')[0]);
            userFactory.getUsers().then(showUsers);
        }

        function showUsers(user) {
            vm.user = user.data.items;
            for (var i = 0; i < vm.user.length; i++) {
                var person = vm.user[i];
                var addressString = person.city + " " + person.stateProvinceCode;
                //  personName = person.firstName;
                //  first = [];
                //  first.push(personName)
                codeAddress(addressString);

            }
        }

        function codeAddress(addressString) {
            console.log(addressString);
            vm.geocoder.geocode({
                'address': addressString
            }, _onCodeAddress);
        }

        function _onCodeAddress(results, status) {


            if (status == google.maps.GeocoderStatus.OK) {

                var geometry = results[0].geometry;
                var loc = geometry.location;

                var first = [];
                var names = ["Armando", "Chris", "Fred", "Wendy", "Dan", "Aaron", "Garry", "John", "Gregorio", "Jimmy", "Billy", "Diana"]
                for (var i = 0; i < names.length; i++) {
                    personName = names[i];

                    first.push(personName)
                }

                var icon = {
                    scaledSize: new google.maps.Size(32, 32),
                    url: '/content/images/markerMap.png'
                }
                var marker = new google.maps.Marker({

                    map: vm.map,
                    position: loc,
                    icon: icon
                    //title: first
                });




                var infowindow = new google.maps.InfoWindow({
                    content: '<p>' + first + '</p>'
                });
                marker.addListener('click', function () {
                    infowindow.open(vm.map, marker);
                });


                if (geometry.bounds) {
                    markerBounds.extend(loc);
                    vm.map.fitBounds(markerBounds);

                    var lat = loc.lat();
                    var lon = loc.lng();

                    vm.address.latitude = lat;
                    vm.address.longitude = lon;

                }
            }
        }

    }

})();