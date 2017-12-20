"use strict";

function initMap() {
  let swat = {lat: 34.771747, lng: 72.360151};
  let dir = {lat: 35.197660, lng: 71.874921};
  let chitral = {lat: 35.769883, lng: 71.774110};
  let mapDemo = document.getElementById("map");

  // this sets the default location for when the map is first loaded
  let map = new google.maps.Map(mapDemo, {
    zoom: 7,
    center: swat
  });

  // these set different markers you want to show on your map
  let markerSWAT = new google.maps.Marker({
    position: swat,
    map: map,
    title: 'This is Mingora Swat'
  });
  let markerDIR = new google.maps.Marker({
    position: dir,
    map: map,
    title: 'This is where Dir is located'
  });
  let markerCHITRAL = new google.maps.Marker({
    position: chitral,
    map: map,
    title: 'Here is chitral'
  });
}