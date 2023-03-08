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
function createSquares(rows, columns) {    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const square = document.createElement('div');
            square.setAttribute("id", `${i}${j}`);
            squares.appendChild(square);
        }
    }

    const square = document.querySelectorAll("#squares div");
    square.forEach((element) => {
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
    rows = parseInt(prompt("Insert number of rows: "));
    columns = parseInt(prompt("Insert number of columns: "));
    createSquares(rows, columns);
};

const resetButton = document.querySelector("#setup button")
resetButton.addEventListener("click", resetSquares);

//default behavior
createSquares(16,16);
