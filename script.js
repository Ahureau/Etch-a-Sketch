const gridContainer = document.getElementsByClassName("gridContainer")[0];
const body = document.querySelector("body");

// Create grid

let squareCount = 32;

function createRows() {
    for (let i = 0; i < squareCount; i++) {
        div = document.createElement("div");
        div.classList.add("row");
        gridContainer.appendChild(div);
    }
}

function createBoxes() {
    const rows = Array.from(document.getElementsByClassName("row"));
    rows.forEach((row) => {
            for (let i = 0; i < squareCount; i++) {
            const box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);
        }
    })
}

function createGrid(){
    createRows();
    createBoxes();
}

createGrid();

// Add event listener to all boxes

gridContainer.addEventListener("mouseover", (b) => {
    if (b.target && b.target.classList.contains("box")) {
        b.target.classList.toggle("black");
    }
})

// Add selection of grid size

function createSelector() {
    const inputContainer = document.createElement("div");
    inputContainer.id = "input"
    const inputText = document.createElement("input");
    inputText.type = "text";
    inputText.id = "inputText";
    const inputLabel = document.createElement("label");
    inputLabel.textContent = "Change the grid's pixel count (max 100)";
    inputLabel.htmlFor = "inputText"
    const inputButton = document.createElement("button");
    inputButton.textContent = "Update grid"
    inputContainer.appendChild(inputLabel);
    inputContainer.appendChild(inputText);
    inputContainer.appendChild(inputButton);
    body.appendChild(inputContainer);
    updateFunction();
}

createSelector();

// Runs all functions to reset the grid and create a new one.

function updateFunction() {
    const btn = document.querySelector("button");
    btn.addEventListener("click", () => {
        let selectionInt = parseInt(document.getElementById("inputText").value);
        let selection = document.getElementById("inputText")
        if (Number.isInteger(selectionInt) && selectionInt <= 100 && selectionInt > 0) {
            squareCount = selectionInt;
            selection.value = "";
            resetFunction();
            createGrid();
        }
    })
}

function resetFunction() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

// Color randomizer

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
