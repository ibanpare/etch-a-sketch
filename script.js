const container = document.querySelector("#container");
const changeSizeBtn = document.querySelector("#changeSizeBtn");
const resetBtn = document.querySelector("#resetBtn");


function drawGrid(sideSize) {
    size = sideSize ** 2;
    let squareWidth = 480/(+sideSize + 5);
    let squareHeight = squareWidth;
    for (let i = 1; i <= size; i++) {
        const littleSquare = document.createElement("div");
        littleSquare.classList.add("square");
        littleSquare.setAttribute(`style`, `flex: 0 0 ${squareWidth}px; height: ${squareHeight}px`);
        container.appendChild(littleSquare);
    }
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.classList.add("colored");
        })
    })    
}

function resetGrid() {
    container.textContent = '';
}

resetBtn.addEventListener("click", () => {
    resetGrid();
})

changeSizeBtn.addEventListener("click", () => {
    resetGrid();
    drawGrid(prompt("How many squares per side do you want? Pick a number from 1 to 100."));
});

drawGrid(16);