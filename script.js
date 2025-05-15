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
    "Albania": { "color": "#FFC1C1", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=13.03.2025+00:00|CET|DAY&biddingZone.values=CTY|10YAL-KESH-----5!CTY|10YAL-KESH-----5&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Austria": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=13.03.2025+00:00|CET|DAY&biddingZone.values=CTY|10YAT-APG------L!CTY|10YAT-APG------L&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Belgium": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=13.03.2025+00:00|CET|DAY&biddingZone.values=CTY|10YBE----------2!CTY|10YBE----------2&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Bosnia and Herzegovina": { "color": "#FF4D4D", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=13.03.2025+00:00|CET|DAY&biddingZone.values=CTY|10YBA-JPCC-----D!CTY|10YBA-JPCC-----D&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Bulgaria": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=13.03.2025+00:00|CET|DAY&biddingZone.values=CTY|10YCA-BULGARIA-R!CTY|10YCA-BULGARIA-R&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Croatia": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=13.03.2025+00:00|CET|DAY&biddingZone.values=CTY|10YHR-HEP------M!CTY|10YHR-HEP------M&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Cyprus": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=13.03.2025+00:00|CET|DAY&biddingZone.values=CTY|10YCY-1001A0003J!CTY|10YCY-1001A0003J&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Czech Republic": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=13.03.2025+00:00|CET|DAY&biddingZone.values=CTY|10YCZ-CEPS-----N!CTY|10YCZ-CEPS-----N&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Denmark": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=13.03.2025+00:00|CET|DAY&biddingZone.values=CTY|10Y1001A1001A65H!CTY|10Y1001A1001A65H&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Estonia": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=13.03.2025+00:00|CET|DAY&biddingZone.values=CTY|10Y1001A1001A39I!CTY|10Y1001A1001A39I&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Finland": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=13.03.2025+00:00|CET|DAY&biddingZone.values=CTY|10YFI-1--------U!CTY|10YFI-1--------U&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "France": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=13.03.2025+00:00|CET|DAY&biddingZone.values=CTY|10YFR-RTE------C!CTY|10YFR-RTE------C&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Georgia": { "color": "#FFC1C1", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=13.03.2025+00:00|CET|DAY&biddingZone.values=CTY|10Y1001A1001B012!CTY|10Y1001A1001B012&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Germany": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=13.03.2025+00:00|CET|DAY&biddingZone.values=CTY|10Y1001A1001A83F!CTY|10Y1001A1001A83F&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Greece": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=13.03.2025+00:00|CET|DAY&biddingZone.values=CTY|10YGR-HTSO-----Y!CTY|10YGR-HTSO-----Y&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Hungary": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=13.03.2025+00:00|CET|DAY&biddingZone.values=CTY|10YHU-MAVIR----U!CTY|10YHU-MAVIR----U&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Ireland": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=14.03.2024+00:00|CET|DAY&biddingZone.values=CTY|10YIE-1001A00010!CTY|10YIE-1001A00010&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Italy": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=14.03.2024+00:00|CET|DAY&biddingZone.values=CTY|10YIT-GRTN-----B!CTY|10YIT-GRTN-----B&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Kosovo": { "color": "#FFC1C1", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=14.03.2024+00:00|CET|DAY&biddingZone.values=CTY|10Y1001C--00100H!CTY|10Y1001C--00100H&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Latvia": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=14.03.2024+00:00|CET|DAY&biddingZone.values=CTY|10YLV-1001A00074!CTY|10YLV-1001A00074&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Lithuania": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=14.03.2024+00:00|CET|DAY&biddingZone.values=CTY|10YLT-1001A0008Q!CTY|10YLT-1001A0008Q&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Luxembourg": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=13.03.2025+00:00|CET|DAY&biddingZone.values=CTY|10YLU-CEGEDEL-NQ!CTY|10YLU-CEGEDEL-NQ&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Moldova": { "color": "#FF4D4D", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=13.03.2025+00:00|CET|DAY&biddingZone.values=CTY|10Y1001A1001A990!CTY|10Y1001A1001A990&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Montenegro": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=13.03.2025+00:00|CET|DAY&biddingZone.values=CTY|10YCS-CG-TSO---S!CTY|10YCS-CG-TSO---S&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Netherlands": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=14.03.2024+00:00|CET|DAY&biddingZone.values=CTY|10YNL----------L!CTY|10YNL----------L&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Macedonia": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=13.03.2025+00:00|CET|DAY&biddingZone.values=CTY|10YMK-MEPSO----8!CTY|10YMK-MEPSO----8&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Norway": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=14.03.2024+00:00|CET|DAY&biddingZone.values=CTY|10YNO-0--------C!CTY|10YNO-0--------C&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Poland": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=14.03.2024+00:00|CET|DAY&biddingZone.values=CTY|10YPL-AREA-----S!CTY|10YPL-AREA-----S&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Portugal": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=14.03.2024+00:00|CET|DAY&biddingZone.values=CTY|10YPT-REN------W!CTY|10YPT-REN------W&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Romania": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=14.03.2024+00:00|CET|DAY&biddingZone.values=CTY|10YRO-TEL------P!CTY|10YRO-TEL------P&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Republic of Serbia": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=13.03.2025+00:00|CET|DAY&biddingZone.values=CTY|10YCS-SERBIATSOV!CTY|10YCS-SERBIATSOV&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Slovakia": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=13.03.2025+00:00|CET|DAY&biddingZone.values=CTY|10YSK-SEPS-----K!CTY|10YSK-SEPS-----K&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Slovenia": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=13.03.2025+00:00|CET|DAY&biddingZone.values=CTY|10YSI-ELES-----O!CTY|10YSI-ELES-----O&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Spain": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=14.03.2024+00:00|CET|DAY&biddingZone.values=CTY|10YES-REE------0!CTY|10YES-REE------0&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Sweden": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=14.03.2024+00:00|CET|DAY&biddingZone.values=CTY|10YSE-1--------K!CTY|10YSE-1--------K&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Switzerland": { "color": "#CC0000", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=14.03.2024+00:00|CET|DAY&biddingZone.values=CTY|10YCH-SWISSGRIDZ!CTY|10YCH-SWISSGRIDZ&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Ukraine": { "color": "#FF4D4D", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=01.01.2022+00:00|CET|DAY&biddingZone.values=CTY|10Y1001C--00003F!CTY|10Y1001C--00003F&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "United Kingdom": { "color": "#FF4D4D", "link": "https://transparency.entsoe.eu/load-domain/r2/totalLoadR2/show?name=&defaultValue=false&viewType=TABLE&areaType=CTY&atch=false&dateTime.dateTime=14.03.2024+00:00|CET|DAY&biddingZone.values=CTY|10Y1001A1001A92E!CTY|10Y1001A1001A92E&dateTime.timezone=CET_CEST&dateTime.timezone_input=CET+(UTC+1)+/+CEST+(UTC+2) "},
    "Canada": { "color": "#FFC1C1", "link": "https://energy-information.canada.ca/en/resources/high-frequency-electricity-data"},
    "Argentina": { "color": "#FFC1C1", "link": "https://api.cammesa.com/demanda-svc/swagger-ui.html#/demanda-ws" }, 
    "Brazil": { "color": "#660000", "link": "https://dados.ons.org.br/dataset/curva-carga" },
    "Chile": { "color": "#660000", "link": "https://www.coordinador.cl/operacion/graficos/operacion-real/demanda-real/" },    
    "Peru": { "color": "#660000", "link": "https://www.coes.org.pe/Portal/portalinformacion/demanda" },    
    "Australia": { "color": "#660000", "link": "https://www.aemo.com.au/energy-systems/electricity/national-electricity-market-nem/data-nem/aggregated-data" },
    "New Zealand": { "color": "#660000", "link": "https://www.emi.ea.govt.nz/Wholesale/Reports/W_GD_C?DateFrom=20250212&DateTo=20250212&RegionType=NZ&_rsdr=D1&_si=_dr_RegionType|NZ,_dr__rsdr|L364D,_dr_DateFrom|20240213,_dr_DateTo|20250212,v|4" },
    "Algeria": { "color": "#FF4D4D", "link": "https://data.mendeley.com/datasets/z5x2d3mhw7/1" },
    "Nigeria": { "color": "#FFC1C1", "link": "https://data.mendeley.com/datasets/pxvdm26rn7/2" },
    "South Africa": { "color": "#FF4D4D", "link": "https://www.eskom.co.za/dataportal/demand-side/" },  
    "Japan": { "color": "#FF4D4D", "link": "https://www.tepco.co.jp/en/forecast/html/download-e.html" },
    "Sri Lanka": { "color": "#FFC1C1", "link": "https://gendata.pucsl.gov.lk/generation-profile" },
    "Turkey": { "color": "#FFC1C1", "link": "https://www.kaggle.com/datasets/dharanikra/electrical-power-demand-in-turkey" }   
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
                    'fill-opacity': 1.0
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
