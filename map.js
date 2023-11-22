"use strict";

function initMap() {
  const myLatLng = {
    lat: 22.375986099243164,
    lng: 114.17797088623047
  };
  let map = new google.maps.Map(document.getElementById("map2"), {
    zoom: 14,
    center: myLatLng,
    fullscreenControl: false,
    zoomControl: true,
    streetViewControl: false
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "My location"
  });
}