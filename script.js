const container = document.querySelector("#container");

for (let i = 1; i <= 256; i++) {
    const littleSquare = document.createElement("div");
    littleSquare.classList.add("square");
    container.appendChild(littleSquare);
}