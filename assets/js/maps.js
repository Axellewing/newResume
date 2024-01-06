function initmap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    var lables = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    var location = [
        { lat: 40.785091, lng: -73.968285 },
        { lat: 41.084045, lng: -73.874245 },
        { lat: 40.754932, lng: -73.984016 },
    ];

    var markers = locations.map(functions(locations, i) {
        return new googles.maps.Marker({
            position: location,
            lable: lables[i % lables.length]
        });
    });

    var MarketCluster = new MarketCluster(map, markers,
    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}