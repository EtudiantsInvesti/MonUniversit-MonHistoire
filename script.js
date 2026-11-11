console.log("Mon université, mon histoire is running!");

const map = document.getElementById("map");
const pavilionList = document.getElementById("pavilion-list");
const informationPanel = document.getElementById("information-panel");

console.log("Map container:", map);
console.log("Pavilion list:", pavilionList);
console.log("Information panel:", informationPanel);

// ------------------------------------
// 1. Pavilion information
// ------------------------------------

const pavilions = [
    {
        id: "pavillon-a",
        name: "Pavillon A",
        year: "",
        donor: "Nom du donateur",
        description: "Information historique sur le pavillon A."
    },
    {
        id: "pavillon-b",
        name: "Pavillon B",
        year: "",
        donor: "Nom du donateur",
        description: "Information historique sur le pavillon B."
    },
    {
        id: "pavillon-c",
        name: "Pavillon C",
        year: "",
        donor: "Nom du donateur",
        description: "Information historique sur le pavillon C."
    },
     {
        id: "pavillon-d",
        name: "Pavillon D",
        year: "",
        donor: "Nom du donateur",
        description: "Information historique sur le pavillon C."
    },
     {
        id: "pavillon-e",
        name: "Pavillon E",
        year: "",
        donor: "Nom du donateur",
        description: "Information historique sur le pavillon C."
    },
     {
        id: "pavillon-f",
        name: "Pavillon F",
        year: "",
        donor: "Nom du donateur",
        description: "Information historique sur le pavillon C."
    },
     {
        id: "pavillon-g",
        name: "Pavillon G",
        year: "",
        donor: "Nom du donateur",
        description: "Information historique sur le pavillon C."
    },
     {
        id: "pavillon-h",
        name: "Pavillon H",
        year: "",
        donor: "Nom du donateur",
        description: "Information historique sur le pavillon C."
    },
     {
        id: "pavillon-i",
        name: "Pavillon I",
        year: "",
        donor: "Nom du donateur",
        description: "Information historique sur le pavillon C."
    },
     {
        id: "pavillon-j",
        name: "Pavillon J",
        year: "",
        donor: "Nom du donateur",
        description: "Information historique sur le pavillon C."
    },
     {
        id: "pavillon-k",
        name: "Pavillon K",
        year: "",
        donor: "Nom du donateur",
        description: "Information historique sur le pavillon C."
    },
     {
        id: "pavillon-l",
        name: "Pavillon L",
        year: "",
        donor: "Nom du donateur",
        description: "Information historique sur le pavillon C."
    },
];


// ------------------------------------
// 2. Find the HTML elements we need
// ------------------------------------

/*const pavilionList item already declared at top of file */
const informationTitle = document.getElementById("information-title");
const informationDescription = document.getElementById("information-description");
const closeInformationButton = document.getElementById("close-information");
const informationYear = document.getElementById("information-year");
const informationDonor = document.getElementById("information-donor");

// ------------------------------------
// 3. Display a pavilion's information
// ------------------------------------

function showPavilion(pavilion) {

    // Display the pavilion title
    informationTitle.textContent = pavilion.name;

    // Display the foundation year
    informationYear.textContent = pavilion.year;

    // Display the donor
    informationDonor.textContent = pavilion.donor;

    // Display the historical description
    informationDescription.textContent = pavilion.description;

    // Make the popup visible
    informationPanel.hidden = false;
}

// Close the information popup when the X is clicked
closeInformationButton.addEventListener("click", function() {
    informationPanel.hidden = true;
});


// ------------------------------------
// 4. Create the pavilion list
// ------------------------------------

for (const pavilion of pavilions) {

    // Create a list item
    const listItem = document.createElement("li");

    // Create a button for the pavilion
    const button = document.createElement("button");

    // Set the button's text
    button.textContent = pavilion.name;


    // Add a class so we can style it with CSS
    button.classList.add("pavilion-button");

    // When clicked, display this pavilion's information
    button.addEventListener("click", function() {
        showPavilion(pavilion);
    });

    // Put the button inside the list item
    listItem.appendChild(button);

    // Put the list item inside the sidebar list
    pavilionList.appendChild(listItem);
}