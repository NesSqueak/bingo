// VARIABLES
let table = document.querySelector("table");


// LISTENERS
table.addEventListener("click", mark_item);


// FUNCTIONS
function mark_item(e) {
    let td = document.querySelectorAll("td");

    for (i = 0; i < td.length; i++) {
        if (e.target.textContent == td[i].textContent && !td[i].classList.contains("center")) {
            td[i].classList.toggle("mark");
        }
    }
}