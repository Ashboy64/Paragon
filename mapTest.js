var map
var latitude
var longitude

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 0, lng: 0},
    zoom: 8
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    var marker = new google.maps.Marker({
            position: pos,
            // icon: "https://previews.123rf.com/images/asmati/asmati1602/asmati160202762/52163144-disabled-sign-flat-style-icon-on-transparent-background.jpg",
            map: map
    });

    // infoWindow = new google.maps.InfoWindow;
    //
    // infoWindow.setPosition(pos);
    // infoWindow.setContent('Your Location');
    // infoWindow.open(map);
    map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                      'Error: The Geolocation service failed.' :
                      'Error: Your browser doesn\'t support geolocation.');
                      infoWindow.open(map);
  }
