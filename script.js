const container = document.querySelector("#container");
const changeSizeBtn = document.querySelector("#changeSizeBtn");
const resetBtn = document.querySelector("#resetBtn");

function drawGrid(sideSize) {
  size = sideSize ** 2;
  let squareWidth = (480/sideSize) - 4;
  let squareHeight = squareWidth;
  console.log("size is" + size);
  console.log("side size is" + sideSize);
  console.log("square hegiht is" + squareHeight);
  for (let i = 1; i <= size; i++) {
    const littleSquare = document.createElement("div");
    littleSquare.classList.add("square");
    littleSquare.setAttribute(
      `style`,
      `width: ${squareWidth}px; height: ${squareHeight}px`
    );
    container.appendChild(littleSquare);
  }

  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      if (!square.style.opacity) {
        square.style.opacity = 0.1;
      }
      square.style.opacity = parseFloat(square.style.opacity) + 0.1;
      square.style.backgroundColor = getRandomColor();
    });
  });
}

function getRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

function resetGrid() {
  container.textContent = "";
}

resetBtn.addEventListener("click", () => {
  resetGrid();
});

changeSizeBtn.addEventListener("click", () => {
  resetGrid();
  drawGrid(
    prompt(
      "How many squares per side do you want? Pick a number from 1 to 100."
    )
  );
});

drawGrid(16);

// still bugged as fuck with many squares + need to refactor
// and add a constant for margins