console.log("Mon université, mon histoire is running!");

const map = document.getElementById("map");
const locationList = document.getElementById("locations-list");
const informationPanel = document.getElementById("information-panel");

console.log("Map container:", map);
console.log("Locations list:", locationList);
console.log("Information panel:", informationPanel);

// ------------------------------------
// 1. Location information
// ------------------------------------

const locations = [
    {
        id: "location-a",
        name: "Marie-Victorin",
        year: "1958",
        donor: "Nom du donateur",
        descriptionFile: "locations/marie-victorin.txt"
    },
    {
        id: "location-b",
        name: "Polytechnique",
        year: "",
        donor: "Nom du donateur",
         descriptionFile: "locations/polytechnique.txt"
    },
    {
        id: "location-c",
        name: "Roger-Gaudry",
        year: "",
        donor: "Nom du donateur",
         descriptionFile: "locations/roger-gaudry.txt"
    },
    {
        id: "location-d",
        name: "Jean-Brillant",
        year: "",
        donor: "Nom du donateur",
        descriptionFile: "locations/jean-brillant.txt"
    },
    {
        id: "location-e",
        name: "HEC",
        year: "",
        donor: "Nom du donateur",
        descriptionFile: "locations/HEC.txt"
    },
    {
        id: "location-f",
        name: "Place Publique",
        year: "",
        donor: "Nom du donateur",
        description: "Information historique sur le pavillon C."
    },
    {
        id: "location-g",
        name: "Sous-Terrain",
        year: "",
        donor: "Nom du donateur",
        description: "Information historique sur le pavillon C."
    },
    {
        id: "location-h",
        name: "Projet Manhattan",
        year: "",
        donor: "Nom du donateur",
        description: "Information historique sur le pavillon C."
    },
    {
        id: "location-i",
        name: "Carabins",
        year: "",
        donor: "Nom du donateur",
        description: "Information historique sur le pavillon C."
    },
    {
        id: "location-j",
        name: "Émeute Tramway",
        year: "",
        donor: "Nom du donateur",
        description: "Information historique sur le pavillon C."
    },
    {
        id: "location-k",
        name: "Carte Rouge",
        year: "",
        donor: "Nom du donateur",
        description: "Information historique sur le pavillon C."
    },
    {
        id: "location-l",
        name: "Location L",
        year: "",
        donor: "Nom du donateur",
        description: "Information historique sur le pavillon C."
    },
];


// ------------------------------------
// 2. Find the HTML elements we need
// ------------------------------------

/*const locationList item already declared at top of file */
const informationTitle = document.getElementById("information-title");
const informationDescription = document.getElementById("information-description");
const closeInformationButton = document.getElementById("close-information");
const informationYear = document.getElementById("information-year");
const informationDonor = document.getElementById("information-donor");

// ------------------------------------
// 3. Display a location's information
// ------------------------------------

function showLocation(location) {

    // Display the pavilion title
    informationTitle.textContent = location.name;

    // Display the foundation year
    informationYear.textContent = location.year;

    // Display the donor
    informationDonor.textContent = location.donor;

    // Display the historical description
    informationDescription.textContent = location.description;

    // Make the popup visible
    informationPanel.hidden = false;
}

// Close the information popup when the X is clicked
closeInformationButton.addEventListener("click", function () {
    informationPanel.hidden = true;
});


// ------------------------------------
// 4. Create the location list
// ------------------------------------

for (const location of locations) {

    // Create a list item
    const listItem = document.createElement("li");

    // Create a button for the location
    const button = document.createElement("button");

    // Set the button's text
    button.textContent = location.name;


    // Add a class so we can style it with CSS
    button.classList.add("location-button");

    // When clicked, display this pavilion's information
    button.addEventListener("click", function () {
        showLocation(location);
    });

    // Put the button inside the list item
    listItem.appendChild(button);

    // Put the list item inside the sidebar list
    locationList.appendChild(listItem);
}

// ------------------------------------
// 5. Connect map markers to locations
// ------------------------------------

const mapMarkers = document.querySelectorAll(".map-marker");

for (const marker of mapMarkers) {

    marker.addEventListener("click", function () {

        // Get the location ID from the marker
        const locationId = marker.dataset.location;

        // Find the matching location in our locations array
        const selectedLocation = locations.find(function (location) {
            return location.id === locationId;
        });

        // Display its information
        if (selectedLocation) {
            showLocation(selectedLocation);
        }

    });

}