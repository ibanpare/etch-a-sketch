/* 
If mouse click button at the top of the screen
a popup asks the number of squares per side of the new grid
once entered, the existing grid should be removed 
and a new grid should be generated in the same total space as before (e.g. 960px wide) 
Set the limit for the user input to a maximum of 100

Extra Credit
Instead of just changing the color of a square from black to white (for example), 
have each pass through with the mouse change it to a completely random RGB value. 
Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.

*/

let rows = 16;
let columns = rows;

let squares = document.querySelector("#squares")

function getRandomRGBA () {
    let r = Math.ceil(Math.random() * 255); // da 0 a 255
    let g = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);
    let a = Math.ceil(Math.random()) * 10 / 10    ; // da 0 a 1 in incrementi di 10%
   
    return (`rgba(${r}, ${g}, ${b}, ${a})`);
}

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        const square = document.createElement('div');
        square.setAttribute("id", `${i}${j}`);
        squares.appendChild(square);
    }
}

const square = document.querySelectorAll("#squares div")
square.forEach((element) => {
    element.addEventListener("mouseover", () => {
        element.style.backgroundColor = getRandomRGBA();
    })
});
