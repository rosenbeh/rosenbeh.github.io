function createMap() {
  // https://www.latlong.net/ : Caesargasse 4 Weiz
  //var myOffice = new google.maps.LatLng(47.218252, 15.628486);
  showMap(47.218252, 15.628486);
};

function showMap(lat, lng) {
  map = new OpenLayers.Map("map");
  var mapnik = new OpenLayers.Layer.OSM(
    "OpenStreetMap",
    // Official OSM tileset as protocol-independent URLs
    [
      '//a.tile.openstreetmap.org/${z}/${x}/${y}.png',
      '//b.tile.openstreetmap.org/${z}/${x}/${y}.png',
      '//c.tile.openstreetmap.org/${z}/${x}/${y}.png'
    ],
    null);
  map.addLayer(mapnik);
  var lonLat = new OpenLayers.LonLat(lng, lat)
    .transform(
      new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
      map.getProjectionObject() // to Spherical Mercator Projection
  );

  var zoom = 17;
  map.setCenter(lonLat, zoom);
  var markers = new OpenLayers.Layer.Markers("Markers");
  map.addLayer(markers);

  var size = new OpenLayers.Size(128, 100);
  var offset = new OpenLayers.Pixel(-size.w / 2, -size.h);
  var icon = new OpenLayers.Icon('https://physio-rosenberger.github.io/images/Marker.png', size, offset);
  markers.addMarker(new OpenLayers.Marker(lonLat, icon));
}


