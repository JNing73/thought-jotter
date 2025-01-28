const saveBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const delBtn = document.getElementById("delete-btn");

saveBtn.addEventListener("click", saveLead);
delBtn.addEventListener("click", confirmDelete)

// Retrieve data from local storage or initialise a new array
let myLeads = JSON.parse(localStorage.getItem("leads")) ?? [];

// Render the list if there is one, otherwise does nothing
initialRender();

function saveLead() {
    if (inputEl.value == "") 
    {
        return;
    }
    myLeads.push(inputEl.value);
    console.log(myLeads);

    renderNewLead();
    inputEl.value = ""; // Clear user input

    localStorage.setItem("leads", JSON.stringify(myLeads)); // Update local storage
}

function renderNewLead() {
    lastEntry = myLeads.length - 1;
    let liEl = document.createElement("li");
    liEl.textContent = myLeads[lastEntry]; //<li>value</li>
    ulEl.appendChild(liEl); 
}

function initialRender() {

    ulEl.innerHTML = "";

    for (let i = 0; i < myLeads.length; i++) {
        let liEl = document.createElement("li");
        liEl.textContent = myLeads[i];
        ulEl.appendChild(liEl);
    }
}

function confirmDelete() {
    const selection = confirm("Are you sure you want to delete all the saved data?")

    if (selection) {
        localStorage.clear();
        myLeads = [];
        initialRender();
        alert("All data deleted");
    }
}
