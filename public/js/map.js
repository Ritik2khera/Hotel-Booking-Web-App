var map = L.map('map').setView([28.6139, 77.2090],7);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([28.6139, 77.2088]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();
   
    var map = L.map('map').setView([20.0, 0.0], 2); // Initial view with zoom level 2 (World View)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Function to perform forward geocoding using Nominatim
    function geocodeCountry() {
        var country = document.getElementById("country").value;
        var encodedCountry = encodeURIComponent(country);

        var geocodeURL = `https://nominatim.openstreetmap.org/search?q=${encodedCountry}&format=json&limit=1`;

        fetch(geocodeURL)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    var lat = data[0].lat;
                    var lon = data[0].lon;

                    // Center the map on the geocoded coordinates
                    map.setView([lat, lon], 6); // Zoom level 6 for a country view

                    // Add a marker at the geocoded location
                    L.marker([lat, lon]).addTo(map)
                        .bindPopup(`Location: ${country}`)
                        .openPopup();
                } else {
                    alert('No results found for the given country');
                }
            })
            .catch(error => console.error('Error:', error));
    }