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
            "Archives et gestion de l’information - Université de Montréal. s. d.-a. « Roger Gaudry ».Consulté le 23 novembre 2026.https://archives.umontreal.ca/histoire-de-luniversite/articles-thematiques/personnalites-et-visiteurs/roger-gaudry/.",
            "Archives et gestion de l’information - Université de Montréal. s. d.-b. « Roger Gaudry(1913 – 2001) ». Consulté le 23 novembre 2026.https://archives.umontreal.ca/histoire-de-luniversite/pionnieres-et-pionniers/roger-gaudry-1913-2001/.",
            "Bizier, Hélène-Andrée. 1993. L’Université de Montreal: La Quête Du Savoir. Libre Expression.",
            "Lambert, Phyllis. 1990. « Ernest Cormier Et L’université De Montréal ». Annales d’histoire de l’art Canadien 13/14 (2/1): 7‑11.",
            "Parcs Canada. 2022. « Lieu historique national du Pavillon-Roger-Gaudry ». novembre 30. https://parcs.canada.ca/culture/designation/lieu-site/pavillon-roger-gaudry-building.",
            "Plante, Denis. 2001. « On veut bâtir un hôpital au Pavillon principal! » Forum, avril 23.http://www.forum.umontreal.ca/numeros/2000_2001/forum_01_04_23/article11.html"
        ]
    },
    {
        id: "location-d",
        name: "Lionel-Groulx",
        year: "",
        descriptionFile: "locations/lionelgroulx.txt",
        sources: [
           "Comité du 75e anniversaire. 2023. Histoire : 75 ans. Département d’histoire de l’Université de Montréal. https://histoire.umontreal.ca/public/FAS/histoire/Images/General/75e_anniversaire.pdf.",
           "Hébert, Karine, François-Olivier Dorais, et Marilyne Lafrenière. 2024. « Le prix Lionel-Groulx à l’IHAF, une histoire de remises en cause ». Revue d’histoire de l’Amérique française 78 (1): 81‑105. https://doi.org/10.7202/1118137ar.",
           "UdeMnouvelles, l’actualité de l’Université de Montréal. 2024. « L’Université de Montréal conserve le nom du pavillon Lionel-Groulx ». septembre 18. https://nouvelles.umontreal.ca/article/2024/09/18/l-universite-de-montreal-conservele-nom-du-pavillon-lionel-groulx."
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
         descriptionFile: "locations/placepublique.txt",
        sources: [
            "FAECUM. s. d. « Historique et gains ». Consulté le 23 novembre 2026. https://www.faecum.qc.ca/a-propos/historique-et-gains.",
            "Gravel, Denis. 2006. Histoire de la FAÉCUM, 1976-2006: une fédération en marche. Société de recherche historique archiv-histo.",
            "Plante, Denis. 2002. « Université de Montréal - Forum - Édition du 6 mai 2002 / Volume 36, numéro 28 - Division des archives ». Forum, mai 6. http://www.iforum.umontreal.ca/Forum/ArchivesForum/2001-2002/020506/article1103.htm.",
            "Poitras, Daniel, et Micheline Cambron. 2023. L’Université de Montréal: une histoire urbaine et internationale. Les Presses de l’Université de Montréal"
        ]
    },
    {
        id: "location-g",
        name: "Sous-Terrain",
        year: "",
         image: "images/campusescalier.jpg",
         descriptionFile: "locations/sousterrain.txt",
        sources: [
            "AEP, Alliance de la Montagne pour l’Écologie, et FAÉCUM. s. d. « Pétition pour que la ligne de bus 155 passe sur le campus de la montagne ». Google Forms. Consulté le 23 novembre 2026. https://docs.google.com/forms/d/e/1FAIpQLSdrU4TMLcQl8iGlZOlc7LUYpVcYWYZDC0Rxn6EDq7duvxiN0w/viewform?usp=embed_facebook.",
            "Brodeur Consultant. 2016. Place de la Laurentienne Université de Montréal. https://ocpm.qc.ca/sites/default/files/pdf/P111/3-10_etude_patrimoniale_place_de_la_laurentienne_2016.pdf.",
            "« DMA | Projets | Tunnel d’accès au Pavillon Roger-Gaudry ». s. d. Consulté le 23 novembre 2026. https://dma-arch.com/projects/tunnel-dacces-au-pavillon-roger-gaudry",
            "EXP. s. d. « Tunnel piétonnier du campus de la Montagne de l’Université de Montréal ». Consulté le 23 novembre 2026. https://www.exp.com/fr/experience/tunnel-pietonnier-du-campus-de-la-montagne-de-luniversite-de-montreal/.",
            "Poitras, Daniel, et Micheline Cambron. 2023. L’Université de Montréal: une histoire urbaine et internationale. Les Presses de l’Université de Montréal.",
            "Valois, Nicole. 2013. « L’architecture de paysage moderne du campus de l’Université de Montréal ». Cahiers de géographie du Québec 56 (158): 343‑72. https://doi.org/10.7202/1014550ar"
        ]
    },
    {
        id: "location-h",
        name: "Projet Manhattan",
        year: "",
        showInList: false,  //item is events not location
         descriptionFile: "locations/projetManhattan.txt",
        sources: [ "Sabourin, Gilles. 2020. Montréal et la bombe. Septentrion",
            "Walling, Jeremy, et Carl Bouchard. 2025. « Du campus au front : les universités québécoises et la Deuxième Guerre mondiale ». Bulletin d’histoire politique 32 (3): 49‑81. https://doi.org/10.7202/1121815ar.",
            "Walling, Jeremy John. 2023. « « Nous ne parlerons pas de la guerre » : la participation oubliée de l’Université de Montréal à la Seconde Guerre mondiale ». Cahiers d’histoire 38 (2): 73‑99. https://doi.org/10.7202/1099405ar."
        ]
    },
    {
        id: "location-i",
        name: "Attaque antiféministe de Polytechnique",
        year: "6 Décembre 1989",
        showInList: false,  //item is events not location
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
        showInList: false, //item is events not location
        image:"images/carreerouge.jpg",
         descriptionFile: "locations/mobilisationetudiant.txt",
        sources: [
            "Deland, Maxime, et Daniel Renaud. 2012. « Des vandales saccagent l’Université de Montréal ». Éducation. Journal de Montréal, avril 12. https://www.journaldemontreal.com/2012/04/12/vandalisme-a-luniversite-de-montreal",
            "Poitras, Daniel, et Micheline Cambron. 2023. « Chapitre 32 ». In L’Université de Montréal: une histoire urbaine et internationale. Les Presses de l’Université de Montréal.",
            "Radio-Canada. 2012. « Rentrée mouvementée à l’UQAM et à l’UdeM ». Radio-Canada, août 27. https://ici.radio-canada.ca/article/info/575840/rentree-universitaire-quebec-greve-etudiants-session-hiver.",
            "Teisceira-Lessard, Philippe, et David Santerre. 2012. « Grève étudiante: blocus et opération «10 plaies d’Égypte» ». Justice et Faits Divers. La Presse, avril 5. https://www.lapresse.ca/actualites/justice-et-faits-divers/201204/05/01-4512747-greve-etudiante-blocus-et-operation-10-plaies-degypte.php"
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

    //checks to see if item is actual location or event
    if (location.showInList === false) {
    continue;
}

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