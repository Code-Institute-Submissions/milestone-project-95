$(".support-heading").on("click", function () {
  $(".support-heading").siblings().slideUp("slow");
  $(this).siblings().slideDown("slow");

});

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: {
      lat: 53.073396,
      lng: -1.664170,
    },
  });

  var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

  var locations = [
    {
      lat: 51.500900,
      lng: -0.116878,
    },
    {
      lat: 51.506029,
      lng: -0.085206,
    },
    {
      lat: 51.516766,
      lng: -0.099711,
    },
    {
      lat: 55.863731,
      lng: -4.337989,
    },
    {
      lat: 55.871811,
      lng: -4.323421,
    },
    {
      lat: 55.881806,
      lng: -4.313970,
    },
    {
      lat: 55.973937,
      lng: -3.176686,
    },
    {
      lat: 55.973888,
      lng: -3.196599,
    },
    {
      lat: 55.961913,
      lng: -3.230845,
    },
     {
      lat: 53.387708,
      lng: -2.292388,
    },
    {
      lat: 53.399831,
      lng: -2.302511,
    },
    {
      lat: 53.415139,
      lng: -2.314184,
    },
        {
      lat: 51.478771,
      lng: -3.179306,
    },
    {
      lat: 51.468671,
      lng: -3.169205,
    },
    {
      lat: 51.436909,
      lng: -3.180177,
    },
    {
      lat: 52.480341,
      lng: -1.839631,
    },
    {
      lat: 52.517371,
      lng: -1.838631,
    },
    {
      lat: 52.432422,
      lng: -1.821847,
    }
  ];

  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  for(let i = 0; i < markers.length; i++)
  {
  markers[i].addListener('click', function(){
      infowindow.open(map, markers[i]);
  })
  }
  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

    var infoContent = '<div style="max-width:150px;">This is a location you can travel to recive additonal support with dementia</div>';

    var infowindow = new google.maps.InfoWindow({
    content: infoContent
});

}

console.log($(".support-img-item").height());