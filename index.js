const saveBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

const myLeads = [];

saveBtn.addEventListener("click", saveLead);

function saveLead() {
    myLeads.push(inputEl.value);
    console.log(myLeads);
    renderList();
}

function renderList() {
    lastEntry = myLeads.length - 1;
    let liEl = document.createElement("li");
    liEl.textContent = myLeads[lastEntry]; //<li>value</li>
    ulEl.appendChild(liEl); 
}