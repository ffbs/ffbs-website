round = function (num, n) {
	return Math.round(num * Math.pow(10,n)) / Math.pow(10,n);
}
writeHash = function () {
	ll = map.getCenter().transform("EPSG:900913","EPSG:4326");
	location.hash = '#'+map.getZoom()+'/'+round(ll.lat,4)+'/'+round(ll.lon,4);
}

map = new OpenLayers.Map("mapdiv", {
	eventListeners: {"moveend": writeHash, "zoomend": writeHash}
});

map.addLayer(new OpenLayers.Layer.OSM());

var pois = new OpenLayers.Layer.Text( "Freifunk Braunschweig",
							{ location:"/nodes.txt",
								projection: map.displayProjection
							});
map.addLayer(pois);
var layer_switcher= new OpenLayers.Control.LayerSwitcher({});
map.addControl(layer_switcher);

updateMap = function () {
	var lon = null,lat = null,zoom = null
	if (location.hash != "") {
		list = location.hash.substr(1).split('/');
		if (list.length == 3) {
			zoom = parseInt(list[0]);
			lat = parseFloat(list[1]);
			lon = parseFloat(list[2]);
		}
	}
	if (lon == null || lat == null || zoom == null) {
		lon = 10.522;
		lat = 52.2645;
		zoom = 12;
	}
	var lonLat = new OpenLayers.LonLat(lon,lat).transform(
				new OpenLayers.Projection("EPSG:4326"),
				map.getProjectionObject() );
	map.setCenter(lonLat, zoom);
}

$(window).on('hashchange', updateMap)
updateMap();

