/* 
If mouse click button at the top of the screen
a popup asks the number of squares per side of the new grid
once entered, the existing grid should be removed 
and a new grid should be generated in the same total space as before (e.g. 960px wide) 
Set the limit for the user input to a maximum of 100

Extra Credit
have each pass through with the mouse change it to a completely random RGB value. 
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
            element.style.backgroundColor = getRandomRGBA();
            });
        });
    };

//deletes and recreates squares
function resetSquares() {
    const square = document.querySelectorAll("#squares div");
    square.forEach((element) => {
        squares.removeChild(element);
    });
    if ((squaresPerSide = parseInt(prompt("Insert number of squares per side: "))) > 100) {
        alert("Sorry, the maximum is 100!");
    } else {
        createSquares(squaresPerSide);
    };
};

const resetButton = document.querySelector("#setup button")
resetButton.addEventListener("click", resetSquares);

//default behavior
createSquares(16);
