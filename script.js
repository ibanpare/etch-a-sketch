let squares = document.querySelector("#squares")

//random RGB color for mouseover event
function getRandomRGBA () {
    let r = Math.ceil(Math.random() * 255); // da 0 a 255
    let g = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);
    let a = 0.8;
   
    return (`rgba(${r}, ${g}, ${b}, ${a})`);
}

//colors squares with random RGB color
function colorSquares() {
    const coloredSquare = document.querySelectorAll("#squares div");
    coloredSquare.forEach((element) => {
        element.addEventListener("mouseover", () => {
            if (element.style.backgroundColor === "") {
                element.style.backgroundColor = getRandomRGBA();
            };
        });
    });
};

//creates squares with mouseover logic
function createSquares(squaresPerSide) {    
    for (let i = 1; i <= (squaresPerSide ** 2); i++) {
        const square = document.createElement('div');
        square.setAttribute("id", `${i}`);
        squares.appendChild(square);
        square.style.cssText = `
        height: ${(512 / (squaresPerSide) - 2)}px;
        width: ${(512 / (squaresPerSide)- 2)}px;
    `;
    };
};

//colors squares black and adds 10% opacity with every hover
function darkenSquares() {
    const coloredSquare = document.querySelectorAll("#squares div");
    coloredSquare.forEach((element) => {
        element.addEventListener("mouseover", () => {
            if (element.style.backgroundColor === "") {
                element.style.backgroundColor = "black";
                element.style.opacity = 0.1;
            } else if (parseFloat(element.style.opacity)  < 1){
                element.style.opacity = parseFloat(element.style.opacity) + 0.1;
            };
        });
    });
};

//deletes and recreates squares
function resetSquares() {
    const square = document.querySelectorAll("#squares div");
    square.forEach((element) => {
        squares.removeChild(element);
    });

    squaresPerSide = parseInt(prompt("Insert number of squares per side: "));

    if (squaresPerSide > 100) {
        alert("Sorry, the maximum is 100!");
    } else {
        createSquares(squaresPerSide);
        darkenSquares();
    };
};

const resetButton = document.querySelector("#setup button")
resetButton.addEventListener("click", resetSquares);

//default behavior
createSquares(16);
darkenSquares();
