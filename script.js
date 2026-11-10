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
        description: "Information historique sur le pavillon A."
    },
    {
        id: "pavillon-b",
        name: "Pavillon B",
        description: "Information historique sur le pavillon B."
    },
    {
        id: "pavillon-c",
        name: "Pavillon C",
        description: "Information historique sur le pavillon C."
    },
     {
        id: "pavillon-d",
        name: "Pavillon D",
        description: "Information historique sur le pavillon C."
    },
     {
        id: "pavillon-e",
        name: "Pavillon E",
        description: "Information historique sur le pavillon C."
    },
     {
        id: "pavillon-f",
        name: "Pavillon F",
        description: "Information historique sur le pavillon C."
    },
     {
        id: "pavillon-g",
        name: "Pavillon G",
        description: "Information historique sur le pavillon C."
    },
     {
        id: "pavillon-h",
        name: "Pavillon H",
        description: "Information historique sur le pavillon C."
    },
     {
        id: "pavillon-i",
        name: "Pavillon I",
        description: "Information historique sur le pavillon C."
    },
     {
        id: "pavillon-j",
        name: "Pavillon J",
        description: "Information historique sur le pavillon C."
    },
     {
        id: "pavillon-k",
        name: "Pavillon K",
        description: "Information historique sur le pavillon C."
    },
     {
        id: "pavillon-l",
        name: "Pavillon L",
        description: "Information historique sur le pavillon C."
    },
];


// ------------------------------------
// 2. Find the HTML elements we need
// ------------------------------------

/*const pavilionList item already declared at top of file */
const informationTitle = document.getElementById("information-title");
const informationDescription = document.getElementById("information-description");


// ------------------------------------
// 3. Display a pavilion's information
// ------------------------------------

function showPavilion(pavilion) {
    informationTitle.textContent = pavilion.name;
    informationDescription.textContent = pavilion.description;
}


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