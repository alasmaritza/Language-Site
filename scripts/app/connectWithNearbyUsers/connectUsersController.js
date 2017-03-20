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
        vm.events = events;
        var personName = "";
        var first;
        var markerBounds = new google.maps.LatLngBounds();

        _initialize()

        function _initialize() {
            vm.geocoder = new google.maps.Geocoder();
            vm.map = new google.maps.Map($('#map-canvas')[0]);
            userFactory.getUsers().then(showUsers);
        }

        function events() {
            var location = [{
                lat: 40.7058316,
                lng: -74.2581906,
                title: "New York, NY"
            }, {
                lat: 44.7078266,
                lng: -119.2914274,
                title: "Olympia, WA"
            }, {
                lat: 32.8248175,
                lng: -117.3753541,
                title: "San Diego, CA"
            }, {
                lat: 40.0046684,
                lng: -75.258117,
                title: "Philadelphia, PA"
            }, {
                lat: 39.7539729,
                lng: -104.9650084,
                title: "Denver, CO"
            }];




            for (var i = 0; i < location.length; i++) {
                var loc = location[i];
                var timeout = i * 200;
                var title = location[i].title;
                addTimeout(loc, timeout, title);
            }
        }

        function addTimeout(loc, timeout, title) {
            var flag = {
                scaledSize: new google.maps.Size(45, 45),
                url: '/content/images/Pink.ico'
            };
            window.setTimeout(function () {
                var marker = new google.maps.Marker({

                    map: vm.map,
                    position: loc,
                    icon: flag,
                    title: title,
                    animation: google.maps.Animation.DROP
                });
            }, timeout);
        }

        // }

        function showUsers(user) {
            vm.user = user.data.items;
            for (var i = 0; i < vm.user.length; i++) {
                var person = vm.user[i];
                var addressString = person.city + " " + person.stateProvinceCode;
                var timeout = i * 200;
                // personName += vm.user[i].firstName
                codeAddress(addressString);
            }
            //}

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

                    var icon = {
                        scaledSize: new google.maps.Size(32, 32),
                        url: '/content/images/markerMap.png'
                    }

                    var marker = new google.maps.Marker({

                        map: vm.map,
                        position: loc,
                        icon: icon,
                        animation: google.maps.Animation.DROP
                        // title: personName
                    });

                    var infowindow = new google.maps.InfoWindow({
                        content: '<p>' + personName + '</p>'
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
    }

})();