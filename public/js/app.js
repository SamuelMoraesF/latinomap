var map = L.map("map");
L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
	attribution: 'Map data &copy; <a href="http://www.osm.org">OpenStreetMap</a>'
}).addTo(map);
