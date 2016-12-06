
  var map;

  function initMap () {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.730610, lng: -73.935242 },
      zoom: 8
    });

    var marker = new google.maps.Marker({
	  position: {lat: 40.7128, lng: -74.0061},
	  map: map,
	  title: 'New York, NY'
	});
    var newMarker = new google.maps.Marker({
    position: {lat: 40.7605, lng: -73.9510},
    map: map,
    title: 'New York, NY'
  });

  marker.addListener('click', function(){
    map.setZoom(15);
    map.setCenter(marker.getPosition());
  });
}


//turn on Map
initMap();
