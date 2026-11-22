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
        descriptionFile: "locations/marie-victorin.txt",
        sources: [
            "Cameron, Christina, Claudine Déom et Nicole Valois. Le campus. Le patrimoine architectural et paysager de l’Université de Montréal / The Architectural and Landscape Heritage. Presses de l'Université de Montréal, 2010. 10.4000/books.pum.6920  . ",
            "Rétroviseur. « Le pavillon Marie-Victorin, un bâtiment entre un passé religieux et un présent scientifique », consulté le 15 novembre 2026. Le pavillon Marie-Victorin, un bâtiment entre un passé religieux et un présent scientifique."
        ]
    },
    {
        id: "location-b",
        name: "Polytechnique",
        year: "1873",
         descriptionFile: "locations/polytechnique.txt",
        sources: [
            "Gagnon, Robert. Histoire de l’École polytechnique, 1873-1990 : la montée des ingénieurs francophones. Boréal, 1991"
        ]
    },
    {
        id: "location-c",
        name: "Roger-Gaudry",
        year: "",
         descriptionFile: "locations/roger-gaudry.txt",
        sources: [
            
        ]
    },
    {
        id: "location-d",
        name: "Lionel-Groulx",
        year: "",
        descriptionFile: "locations/lionelgroulx.txt",
        sources: [
           
        ]
    },
    {
        id: "location-e",
        name: "HEC",
        year: "1907",
        descriptionFile: "locations/HEC.txt",
        sources: [
             "Harvey, Pierre. « The founding of the École des Hautes Études Commerciales de   Montréal » dans Capitalizing Knowledge, 87-100. University of Toronto Press, 2000. ",
            "HEC Montréal. « L’histoire de l’HEC Montréal », consulté le 15 novembre 2026. L’histoire de HEC Montréal | HEC Montréal."
        ]
    },
    {
        id: "location-f",
        name: "Place Publique",
        year: "",
        description: "Information historique sur le pavillon C.",
        sources: [
            
        ]
    },
    {
        id: "location-g",
        name: "Sous-Terrain",
        year: "",
         image: "images/campusescalier.jpg",
        description: "Information historique sur le pavillon C.",
        sources: [
            
        ]
    },
    {
        id: "location-h",
        name: "Projet Manhattan",
        year: "",
        description: "Information historique sur le pavillon C.",
        sources: [
            
        ]
    },
    {
        id: "location-i",
        name: "Attaque antiféministe de Polytechnique",
        year: "6 Décembre 1989",
        descriptionFile: "locations/AttackAntiFeministe.txt",
        sources: [
            "Gagnon, Robert. Histoire de l’École polytechnique, 1873-1990 : la montée des ingénieurs francophones.Boréal, 1991.",
            "LaChapelle, Judith. « Récit d'une tragédie » La Presse, 6 décembre 2019. Polytechnique | Le récit d'une tragédie | La Presse. ",
            "Polytechnique Montréal. « Souvenir et Recueillement », consulté le 15 novembre 2026. 6 décembre - Polytechnique Montréal.",
            "Wikipédia. «  Tuerie de l'École polytechnique de Montréal », consulté le 15 novembre 2026. Tuerie de l'École polytechnique de Montréal — Wikipédia. "
        ]
    },
    {
        id: "location-j",
        name: "Installation Sur La Montagne",
        year: "1878",
        descriptionFile: "locations/InstallationSurLaMontagne.txt",
        sources: [
            "Poitras, Daniel et Micheline Cambron. L’Université de Montréal : une histoire urbaine et internationale. Les Presses de l’Université de Montréal, 2023.  "
        ]
    },
    {
        id: "location-k",
        name: "Mobilisation Étudiant",
        year: "",
        image:"images/carreerouge.jpg",
        description: "Information historique sur le pavillon C.",
        sources: [
            
        ]
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
const informationSources = document.getElementById("information-sources");

// ------------------------------------
// 3. Display a location's information
// ------------------------------------

async function showLocation(location) {
//async allows the fn to wait for the next txt file to load

    // Display the pavilion title
    informationTitle.textContent = location.name;

    // Display the foundation year
    informationYear.textContent = location.year;

    // Display the historical description
    informationDescription.textContent = location.description;

    // Make the popup visible
    informationPanel.hidden = false;

    // Show a temporary message while the text loads
    informationDescription.textContent = "Chargement...";

     // Load the historical description from its text file
    try {
        const response = await fetch(location.descriptionFile); //requesting txt file and reads contents

        if (!response.ok) {
            throw new Error("Impossible de charger le texte.");
        }

        const descriptionText = await response.text();

        informationDescription.textContent = descriptionText;

    } catch (error) {
        informationDescription.textContent =
            "Impossible de charger les informations historiques.";

        console.error(error);
    }

    // Display the sources and references
if (location.sources && location.sources.length > 0) {
    informationSources.textContent = location.sources.join("\n\n");
} else {
    informationSources.textContent = "À déterminer";
}
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