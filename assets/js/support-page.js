$(".support-heading").on("click", function () {
  $(".support-heading").siblings().slideUp("slow");
  $(this).siblings().slideDown("slow");
});


function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: {
      lat: 53.073396,
      lng: -1.66417,
    },
  });

  let markers = [];
  let locations = [
    ["London Dementia Community Support Center", 51.5009, 0.116878,"A"],
    ["London Dementia Care Home", 51.506029, -0.085206,"B"],
    ["London Befriending Support servie", 51.516766, -0.099711,"C"],
    ["Glasgow Dementia Commuity Support Center", 55.863731, -4.337989,"D"],
    ["Glasgow Care Home", 55.871811, -4.323421,"E"],
    ["Glasgow Befriending Support Service", 55.881806, -4.31397,"F"],
    ["Edinburgh Dementia Commumity Support Center", 55.973937, -3.176686,"G"],
    ["Edinburgh Care Home with Specilaist Dementia care",55.973888,-3.196599,"H"],
    ["Edinburgh Befriending Support Service", 55.961913, -3.230845,"I"],
    ["Manchester Dementia Community Support Center", 53.387708, -2.292388,"J"],
    ["Manchester Care Home", 53.399831, -2.302511,"K"],
    ["Manchester Befriending Support Service", 53.415139, -2.314184,"L"],
    ["Cardiff Dementia Commuity Support Center", 51.478771, -3.179306,"M"],
    ["Cardiff Care Home", 51.468671, -3.169205,"N"],
    ["Cardiff Befriending Commnuity Service", 51.436909, -3.180177,"O"],
    ["Birmingham Dementia Community Support Center", 52.480341, -1.839631,"P"],
    ["Birmingham Care Home", 52.517371, -1.838631,"Q"],
    ["Birmingham Befriending Community Service", 52.432422, -1.821847,"R"],
  ];


  var marker;

   for(let i = 0; i < locations.length; i++){ 
   let position = new google.maps.LatLng(locations[i][1], locations[i][2]);
   let currentLabel = locations[i][3];
   let windowContent = locations[i][0];
   var infowindow = new google.maps.InfoWindow({
        content: windowContent,
        maxWidth: 150
   });
   marker = new google.maps.Marker({
            position:position,
            label:currentLabel,
            map:map 
    });
    markers.push(marker);  

    marker.infowindow = infowindow;
    marker.addListener('click', function(){
        return this.infowindow.open(map,this);
    })
}

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
