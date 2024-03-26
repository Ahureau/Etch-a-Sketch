const gridContainer = document.getElementsByClassName("gridContainer")[0];

// Create grid

const squareCount = 16;

function createRows() {
    for (i = 0; i < squareCount; i++) {
        div = document.createElement("div");
        div.classList.add("row");
        gridContainer.appendChild(div);
    }
}

function createBoxes() {
    const rows = Array.from(document.getElementsByClassName("row"));
    rows.forEach((row) => {
            for (i = 0; i < squareCount; i++) {
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