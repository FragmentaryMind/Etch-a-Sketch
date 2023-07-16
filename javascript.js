let gridContainer = document.querySelector(".grid-container");
const resizeButton = document.querySelector(".resize-button");

function createGrid (x) {
    for (let rows = 0; rows < x; rows++) {
        for (let columns = 0; columns < x; columns++) {
            let div = document.createElement("div");
            div.setAttribute("class","grid-element");
            div.setAttribute("style", "height: " + gridContainer.offsetHeight / x + "px; " +
                                      "width: " + gridContainer.offsetWidth / x + "px");
            gridContainer.appendChild(div);
        }
    }
    gridContainer.addEventListener("mouseover", gridElementHover);
}

function gridElementHover (event) {
    const myClass = event.target.getAttribute("class");
    if (myClass != "grid-element") return;
    event.target.setAttribute("class", myClass + " bg-black");
}

function resizeGridPrompt (event) {
    let i = prompt("How many squares per side? (2 to 48)");

    if (isNaN(i) || i < 2 || i > 48) {
        alert("Invalid number entered. Resize aborted.");
        return;
    }

    gridContainer.remove();
    gridContainer = document.createElement("div");
    gridContainer.setAttribute("class","grid-container");
    const body = document.querySelector("body");
    body.appendChild(gridContainer);
    createGrid(i);
}

createGrid(16);
resizeButton.addEventListener("click", resizeGridPrompt);