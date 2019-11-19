function myMap() {
var LatLngCenter={lat:38.62727,lng:-90.19789}
var LatLngLansing={lat:42.732536, lng: -84.555534};
var LatLngLosAlamos={lat:35.8800364, lng: -106.3031138};
var LatLngOakRidge={lat:36.0103561, lng: -84.2696449};
var LatLngPhiladelphia={lat:39.9525839, lng: -75.1652215};
var LatLngChicago={lat:41.8781136, lng: -87.6297982}
var mapProp= {
  center: LatLngCenter,
  zoom:5,
};


var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker = new google.maps.Marker({
        position: LatLngLansing,
        map: map,
        title: 'Lansing'
        });
var marker = new google.maps.Marker({
        position: LatLngLosAlamos,
        map: map,
        title: 'Los Alamos'
        });
var marker = new google.maps.Marker({
        position: LatLngOakRidge,
        map: map,
        title: 'Oak Ridge'
        });
var marker = new google.maps.Marker({
        position: LatLngPhiladelphia,
        map: map,
        title: 'Philadelphia'
        });
var marker = new google.maps.Marker({
        position: LatLngChicago,
        map: map,
        title: 'Chicago'
        });
}

