/* 

Extra Credit
Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.

*/

let squares = document.querySelector("#squares")

//random RGB color for mouseover event
function getRandomRGBA () {
    let r = Math.ceil(Math.random() * 255); // da 0 a 255
    let g = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);
    let a = 0.8;
   
    return (`rgba(${r}, ${g}, ${b}, ${a})`);
}

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
        }
    const coloredSquare = document.querySelectorAll("#squares div");
    coloredSquare.forEach((element) => {
            element.addEventListener("mouseover", () => {
                if (element.style.backgroundColor === "") {
                    element.style.backgroundColor = getRandomRGBA();
                }
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
    };
};

const resetButton = document.querySelector("#setup button")
resetButton.addEventListener("click", resetSquares);

//default behavior
createSquares(16);
