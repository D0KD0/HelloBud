mapboxgl.accessToken =
    "pk.eyJ1IjoidGNoYXUyMTAwIiwiYSI6ImNsYzcxMnM4ejJqNXEzcHA5aTdmZ2RodDAifQ.5Dbrhy7FLhTgOh8eJQEdkw";
/** 
 * Add the map to the page
*/
var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/light-v11",
    center: [-77.034084142948, 38.909671288923],
    zoom: 10,
});

let dispensaries;
fetch("/api/dispensaries").then(
    res => {
        res.json().then(
            data => {
                dispensaries = data
                console.log(dispensaries)
                const stores = {
                    "features": [
                        {
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -77.034084142948,
                                    38.909671288923
                                ]
                            },
                            "properties": {
                                "phoneFormatted": "(202) 234-7336",
                                "phone": "2022347336",
                                "address": "1471 P St NW",
                                "city": "Washington DC",
                                "country": "United States",
                                "postalCode": "20005",
                                "state": "D.C."
                            }
                        },
                        {

                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -77.049766,
                                    38.900772
                                ]
                            },
                            "properties": {
                                "phoneFormatted": "(202) 507-8357",
                                "phone": "2025078357",
                                "address": "2221 I St NW",
                                "city": "Washington DC",
                                "country": "United States",
                                "postalCode": "20037",
                                "state": "D.C."
                            }
                        },
                        {

                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -77.043929,
                                    38.910525
                                ]
                            },
                            "properties": {
                                "phoneFormatted": "(202) 387-9338",
                                "phone": "2023879338",
                                "address": "1512 Connecticut Ave NW",
                                "city": "Washington DC",
                                "country": "United States",
                                "postalCode": "20036",
                                "state": "D.C."
                            }
                        },
                        {

                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -77.0672,
                                    38.90516896
                                ]
                            },
                            "properties": {
                                "phoneFormatted": "(202) 337-9338",
                                "phone": "2023379338",
                                "address": "3333 M St NW",
                                "city": "Washington DC",
                                "country": "United States",
                                "postalCode": "20007",
                                "state": "D.C."
                            }
                        },
                        {

                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -77.002583742142,
                                    38.887041080933
                                ]
                            },
                            "properties": {
                                "phoneFormatted": "(202) 547-9338",
                                "phone": "2025479338",
                                "address": "221 Pennsylvania Ave SE",
                                "city": "Washington DC",
                                "country": "United States",
                                "postalCode": "20003",
                                "state": "D.C."
                            }
                        },
                        {

                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -76.933492720127,
                                    38.99225245786
                                ]
                            },
                            "properties": {
                                "address": "8204 Baltimore Ave",
                                "city": "College Park",
                                "country": "United States",
                                "postalCode": "20740",
                                "state": "MD"
                            }
                        },
                        {

                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -77.097083330154,
                                    38.980979
                                ]
                            },
                            "properties": {
                                "phoneFormatted": "(301) 654-7336",
                                "phone": "3016547336",
                                "address": "4831 Bethesda Ave",
                                "cc": "US",
                                "city": "Bethesda",
                                "country": "United States",
                                "postalCode": "20814",
                                "state": "MD"
                            }
                        },
                        {

                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -77.359425054188,
                                    38.958058116661
                                ]
                            },
                            "properties": {
                                "phoneFormatted": "(571) 203-0082",
                                "phone": "5712030082",
                                "address": "11935 Democracy Dr",
                                "city": "Reston",
                                "country": "United States",
                                "postalCode": "20190",
                                "state": "VA"
                            }
                        },
                        {

                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -77.10853099823,
                                    38.880100922392
                                ]
                            },
                            "properties": {
                                "phoneFormatted": "(703) 522-2016",
                                "phone": "7035222016",
                                "address": "4075 Wilson Blvd",
                                "city": "Arlington",
                                "country": "United States",
                                "postalCode": "22203",
                                "state": "VA"
                            }
                        },
                        {

                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -75.28784,
                                    40.008008
                                ]
                            },
                            "properties": {
                                "phoneFormatted": "(610) 642-9400",
                                "phone": "6106429400",
                                "address": "68 Coulter Ave",
                                "city": "Ardmore",
                                "country": "United States",
                                "postalCode": "19003",
                                "state": "PA"
                            }
                        },
                        {

                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -75.20121216774,
                                    39.954030175164
                                ]
                            },
                            "properties": {
                                "phoneFormatted": "(215) 386-1365",
                                "phone": "2153861365",
                                "address": "3925 Walnut St",
                                "city": "Philadelphia",
                                "country": "United States",
                                "postalCode": "19104",
                                "state": "PA"
                            }
                        },
                        {
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -77.043959498405,
                                    38.903883387232
                                ]
                            },
                            "properties": {
                                "phoneFormatted": "(202) 331-3355",
                                "phone": "2023313355",
                                "address": "1901 L St. NW",
                                "city": "Washington DC",
                                "country": "United States",
                                "postalCode": "20036",
                                "state": "D.C."
                            }
                        }
                    ]
                };

                /**
                * Assign a unique id to each store. You'll use this `id`
                * later to associate each point on the map with a listing
                * in the sidebar.
                */
                stores.features.forEach((store, i) => {
                    store.properties.id = i;
                });

                /**
                * Wait until the map loads to make changes to the map.
                */
                map.on('load', () => {
                    /**
                    * This is where your '.addLayer()' used to be, instead
                    * add only the source without styling a layer
                    */
                    map.addSource('places', {
                        'type': 'geojson',
                        'data': dispensaries
                    });

                    /**
                    * Add all the things to the page:
                    * - The location listings on the side of the page
                    * - The markers onto the map
                    */
                    buildLocationList(dispensaries);
                    addMarkers();
                });

                // Add zoom and rotation controls to the map.
                map.addControl(new mapboxgl.NavigationControl());

                /**
                * Add a marker to the map for every store listing.
                **/
                function addMarkers() {
                    /* For each feature in the GeoJSON object above: */
                    for (const dispensary of dispensaries) {
                        /* Create a div element for the marker. */
                        const el = document.createElement('div');
                        /* Assign a unique `id` to the marker. */
                        el.id = `marker-${dispensary.id}`;
                        /* Assign the `marker` class to each marker for styling. */
                        el.className = 'marker';

                        /**
                        * Create a marker using the div element
                        * defined above and add it to the map.
                        **/
                        new mapboxgl.Marker(el, { offset: [0, -23] })
                            .setLngLat(dispensary.point.coordinates)
                            .addTo(map);

                        /**
                        * Listen to the element and when it is clicked, do three things:
                        * 1. Fly to the point
                        * 2. Close all other popups and display popup for clicked store
                        * 3. Highlight listing in sidebar (and remove highlight for all other listings)
                        **/
                        el.addEventListener('click', (e) => {
                            /* Fly to the point */
                            flyToStore(dispensary);
                            /* Close all other popups and display popup for clicked store */
                            createPopUp(dispensary);
                            /* Highlight listing in sidebar */
                            const activeItem = document.getElementsByClassName('active');
                            e.stopPropagation();
                            if (activeItem[0]) {
                                activeItem[0].classList.remove('active');
                            }
                            const listing = document.getElementById(
                                `listing-${dispensary.id}`
                            );
                            listing.classList.add('active');
                        });
                    }
                }

                /**
                * Add a listing for each store to the sidebar.
                **/
                function buildLocationList(dispensaries) {
                    for (const dispensary of dispensaries) {
                        /* Add a new listing section to the sidebar. */
                        const listings = document.getElementById('listings');
                        const listing = listings.appendChild(document.createElement('div'));
                        /* Assign a unique `id` to the listing. */
                        listing.id = `listing-${dispensary.id}`;
                        /* Assign the `item` class to each listing for styling. */
                        listing.className = 'item';

                        /* Add the link to the individual listing created above. */
                        const link = listing.appendChild(document.createElement('a'));
                        link.href = '#';
                        link.className = 'title';
                        link.id = `link-${dispensary.id}`;
                        link.innerHTML = `${dispensary.address}`;

                        /* Add details to the individual listing. */
                        const details = listing.appendChild(document.createElement('div'));
                        details.innerHTML = `${dispensary.city}`;
                        if (dispensary.phone) {
                            details.innerHTML += ` &middot; ${dispensary.phone}`;
                        }

                        /**
                        * Listen to the element and when it is clicked, do four things:
                        * 1. Update the `currentFeature` to the store associated with the clicked link
                        * 2. Fly to the point
                        * 3. Close all other popups and display popup for clicked store
                        * 4. Highlight listing in sidebar (and remove highlight for all other listings)
                        **/
                        link.addEventListener('click', function () {
                            for (const dispensary of dispensaries) {
                                if (this.id === `link-${dispensary.id}`) {
                                    flyToStore(dispensary);
                                    createPopUp(dispensary);
                                }
                            }
                            const activeItem = document.getElementsByClassName('active');
                            if (activeItem[0]) {
                                activeItem[0].classList.remove('active');
                            }
                            this.parentNode.classList.add('active');
                        });
                    }
                }

                /**
                * Use Mapbox GL JS's `flyTo` to move the camera smoothly
                * a given center point.
                **/
                function flyToStore(dispensary) {
                    console.log(dispensary.point.coordinates)
                    map.flyTo({
                        center: dispensary.point.coordinates,
                        zoom: 15
                    });
                }

                /**
                * Create a Mapbox GL JS `Popup`.
                **/
                function createPopUp(dispensary) {
                    const popUps = document.getElementsByClassName('mapboxgl-popup');
                    if (popUps[0]) popUps[0].remove();
                    const popup = new mapboxgl.Popup({ closeOnClick: false })
                        .setLngLat(dispensary.point.coordinates)
                        .setHTML(
                            `<h3>Sweetgreen</h3><h4>${dispensary.address}</h4>`
                        )
                        .addTo(map);
                }
            }
        )
    }
)

