const saveBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");

const myLeads = [];

saveBtn.addEventListener("click", saveLead);

function saveLead() {
    myLeads.push(inputEl.value);
    console.log(myLeads);
}
