const container = document.querySelector("#container");
const changeSizeBtn = document.querySelector("#changeSizeBtn");
const resetBtn = document.querySelector("#resetBtn");
const squares = document.querySelectorAll(".square");

function drawGrid(size) {
    for (let i = 1; i <= size; i++) {
        const littleSquare = document.createElement("div");
        littleSquare.classList.add("square");
        container.appendChild(littleSquare);
    }
}

function resetGrid() {
    container.textContent = '';
}

squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.classList.add("colored");
    })
})

resetBtn.addEventListener("click", () => {
    resetGrid();
})

changeSizeBtn.addEventListener("click", () => {
    drawGrid(prompt("How many squares do you want? Pick a number from 1 to 100."));
})

drawGrid(256);

