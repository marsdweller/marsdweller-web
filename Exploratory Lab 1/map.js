mapboxgl.accessToken = 'pk.eyJ1IjoibWFyc2R3ZWxsZXIiLCJhIjoiY2xldngxZWxkMGdtZDNzcGlibDUydzFuMSJ9.OGixkNaBLKqe-8w4qSaRJQ';

const map = (window.map = new mapboxgl.Map({
    container: 'map',							// 'map' is the id of the HTML div
    style: 'mapbox://styles/marsdweller/clf1co38z001b01ti2ejc2cm1',
}));

const startingLatitude = 67;
const startingLongitude = -171;
const endingLatitude = 61;
const endingLongitude = -47;
const n = 10;

(async() => {
    const points = [];
    for (let i=0; i < n; i++) {
        for (let j=0; j < n; j++) {
            points.push({
                lat: startingLatitude + i * (endingLatitude - startingLatitude)/n,
                lng: startingLongitude + j * (endingLongitude - startingLongitude)/n,
                val: 0
            })
        }
    }
    // Create the URLs
    const baseUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&lat=";
    const apiKey = 'df550e9f1181924ef8bfb257be2627b7';
    const urls = points.map(point => baseUrl + point.lat + "&lon=" + point.lng + "&appid=" + apiKey);
    // Fetch the weather data
    const weathers = await Promise.all(urls.map(async url => {
        const response = await fetch(url);
        return response.text();
    }));
    // Set the temperature
    points.forEach((point, index) => {
        point.val = JSON.parse(weathers[index]).main.temp;
    })

const map = (window.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10'
    }));
    
    // When the map is loaded, create and the color scale layer
    map.on('load', () => {
        const layer = interpolateHeatmapLayer.create({
            points: points,				// use our array of points
            layerId: 'temperature'		// define an ID for the layer
        });
        map.addLayer(layer, 'road-label');
    });
})();