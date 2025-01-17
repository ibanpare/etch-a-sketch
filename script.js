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
}

function getRandomColor() {
    let red = Math. floor(Math. random() * 256);
    let green = Math. floor(Math. random() * 256);
    let blue = Math. floor(Math. random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
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

const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        if (!square.style.opacity) {square.style.opacity = 0.1};
        square.style.opacity = parseFloat(square.style.opacity) + 0.1;
        square.style.backgroundColor = getRandomColor();
    })
})    

/*
Bisogna riscrivere il disegna grid da 0
E triggerare la colorazione post disegno
*/