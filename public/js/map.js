mapboxgl.accessToken =
    "pk.eyJ1IjoidGNoYXUyMTAwIiwiYSI6ImNsYzcxMnM4ejJqNXEzcHA5aTdmZ2RodDAifQ.5Dbrhy7FLhTgOh8eJQEdkw";
/** 
 * Add the map to the page
*/
var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/light-v11",
    center: [-117.863899, 33.706684],
    zoom: 13,
});

let dispensaries;
fetch("/api/dispensaries").then(
    res => {
        res.json().then(
            data => {
                dispensaries = data
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
                        link.innerHTML = `${dispensary.name}`;

                        /* Add details to the individual listing. */
                        const details = listing.appendChild(document.createElement('div'));
                        details.className = 'my-2';
                        
                        if (dispensary.phone) {
                            details.innerHTML += `Phone Number: ${dispensary.phone}`;
                        }

                        const menuBtn = listing.appendChild(document.createElement('a'));
                        menuBtn.href = `/dispensaries/${dispensary.id}`;
                        menuBtn.className = 'btn btn-secondary rounded d-block';
                        menuBtn.id = `menu-${dispensary.id}`;
                        menuBtn.innerHTML = `View Menu`;

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
                            `<h3>${dispensary.name}</h3><h4>${dispensary.address}, ${dispensary.city}, ${dispensary.state} ${dispensary.zip_code}</h4>`
                        )
                        .addTo(map);
                }
            }
        )
    }
)

