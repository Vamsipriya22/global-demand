// Create the Map
const map = new maplibregl.Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/style.json', // Default MapLibre style
    center: [0, 20], // [Longitude, Latitude]
    zoom: 1.5,
    pitch: 30,
    bearing: 0,
    antialias: true
});

// Sample demand data with country colors and links
const countryData = {
    "Austria": { "color": "#FF5733", "link": "https://example.com/austria" },
    "Belgium": { "color": "#33FF57", "link": "https://example.com/belgium" },
    "Bosnia and Herzegovina": { "color": "#5733FF", "link": "https://example.com/bosnia" },
    "Bulgaria": { "color": "#FF33A1", "link": "https://example.com/bulgaria" },
    "Croatia": { "color": "#33FFF3", "link": "https://example.com/croatia" },
    "Cyprus": { "color": "#F3FF33", "link": "https://example.com/cyprus" },
    "Czech Republic": { "color": "#8B33FF", "link": "https://example.com/czech" },
    "Denmark": { "color": "#FF8333", "link": "https://example.com/denmark" },
    "Estonia": { "color": "#33A1FF", "link": "https://example.com/estonia" },
    "Finland": { "color": "#FF336E", "link": "https://example.com/finland" },
    "France": { "color": "#33FFB1", "link": "https://example.com/france" },
    "Germany": { "color": "#336EFF", "link": "https://example.com/germany" },
    "Greece": { "color": "#FF9933", "link": "https://example.com/greece" },
    "Hungary": { "color": "#9933FF", "link": "https://example.com/hungary" },
    "Iceland": { "color": "#33FF99", "link": "https://example.com/iceland" },
    "Ireland": { "color": "#FF3366", "link": "https://example.com/ireland" },
    "Italy": { "color": "#3366FF", "link": "https://example.com/italy" },
    "Latvia": { "color": "#66FF33", "link": "https://example.com/latvia" },
    "Lithuania": { "color": "#FF6633", "link": "https://example.com/lithuania" },
    "Netherlands": { "color": "#6633FF", "link": "https://example.com/netherlands" },
    "Norway": { "color": "#FF33FF", "link": "https://example.com/norway" },
    "Poland": { "color": "#33FF66", "link": "https://example.com/poland" },
    "Portugal": { "color": "#FF3333", "link": "https://example.com/portugal" },
    "Romania": { "color": "#33FFFF", "link": "https://example.com/romania" },
    "Spain": { "color": "#FF33CC", "link": "https://example.com/spain" },
    "Sweden": { "color": "#33CCFF", "link": "https://example.com/sweden" },
    "Switzerland": { "color": "#CC33FF", "link": "https://example.com/switzerland" },
    "United Kingdom": { "color": "#FFCC33", "link": "https://example.com/uk" },
    "Canada": { "color": "#9933CC", "link": "https://example.com/canada" },
    "Mexico": { "color": "#33CC99", "link": "https://example.com/mexico" },
    "Argentina": { "color": "#CC9933", "link": "https://example.com/argentina" },
    "Brazil": { "color": "#33FFCC", "link": "https://example.com/brazil" },
    "Chile": { "color": "#FFCC99", "link": "https://example.com/chile" },    
    "Australia": { "color": "#99FFCC", "link": "https://www.aemo.com.au/energy-systems/electricity/national-electricity-market-nem/data-nem/aggregated-data" },
    "New Zealand": { "color": "#CC99FF", "link": "https://www.emi.ea.govt.nz/Wholesale/Reports/W_GD_C?DateFrom=20250212&DateTo=20250212&RegionType=NZ&_rsdr=D1&_si=_dr_RegionType|NZ,_dr__rsdr|L364D,_dr_DateFrom|20240213,_dr_DateTo|20250212,v|4" },
    "Kenya": { "color": "#FF99CC", "link": "https://example.com/kenya" },
    "Saudi Arabia": { "color": "#99CCFF", "link": "https://example.com/saudi" },
    "South Korea": { "color": "#CCFF99", "link": "https://example.com/korea" },
    "Sri Lanka": { "color": "#FF6699", "link": "https://gendata.pucsl.gov.lk/generation-profile" },
    "Turkey": { "color": "#6699FF", "link": "https://www.kaggle.com/datasets/dharanikra/electrical-power-demand-in-turkey" }
};

// Load country boundaries from GeoJSON
map.on('load', function () {
    fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
        .then(response => response.json())
        .then(data => {
            map.addSource('countries', {
                'type': 'geojson',
                'data': data
            });

            map.addLayer({
                'id': 'country-fills',
                'type': 'fill',
                'source': 'countries',
                'layout': {},
                'paint': {
                    'fill-color': [
                        'match',
                        ['get', 'name'],
                        ...Object.entries(countryData).flatMap(([name, info]) => [name, info.color]),
                        "#AAAAAA" // Default color for unlisted countries
                    ],
                    'fill-opacity': 0.7
                }
            });

            // Add country borders
            map.addLayer({
                'id': 'country-borders',
                'type': 'line',
                'source': 'countries',
                'layout': {},
                'paint': {
                    'line-color': '#000',
                    'line-width': 1
                }
            });

            // Click Event for Countries
            map.on('click', 'country-fills', function (e) {
                const countryName = e.features[0].properties.name;
                const countryInfo = countryData[countryName];

                if (countryInfo) {
                    window.open(countryInfo.link, '_blank'); // Open demand data link
                } else {
                    alert("No demand data available for " + countryName);
                }
            });

            // Change cursor on hover
            map.on('mouseenter', 'country-fills', function () {
                map.getCanvas().style.cursor = 'pointer';
            });

            map.on('mouseleave', 'country-fills', function () {
                map.getCanvas().style.cursor = '';
            });
        });
});
