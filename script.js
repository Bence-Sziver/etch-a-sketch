const container = document.querySelector("#container");
const genBtn = document.querySelector("#genButton");
const randBtn = document.querySelector("#randButton");
const darkenBtn = document.querySelector("#darkenButton");
let rows = createGrid();
let isColored = false;
let isDarkening = false;
let opacity = 0.0;

container.addEventListener("mouseover", event => {
  if (isColored) {
    const randomColor = `rgb(${genRandomNumber()}, ${genRandomNumber()}, ${genRandomNumber()})`;
    event.target.style.backgroundColor = randomColor;
    randBtn.style.backgroundColor = "rgb(227, 145, 130)";
  } else {
    event.target.style.backgroundColor = "rgb(0, 0, 0)";
  }
  if (isDarkening) {
    event.target.style.opacity = opacity;
  } else {
    event.target.style.opacity = 1.0;
  }
  opacity += 0.1;
});

genBtn.addEventListener("click", () => {
  let size = +prompt("Add a size for the board (min: 1, max 100): ", "16");
  if (!size) return alert("Wrong input");
  if (size > 100) size = 100;
  if (size < 1) size = 1;
  removeGrid(rows);
  rows = createGrid(size);
});

randBtn.addEventListener("click", () => {
  isColored = !isColored;
  randBtn.style.backgroundColor = (isColored) ?
     "rgb(227, 145, 130)" :
     "rgb(212, 215, 214)";
});

darkenBtn.addEventListener("click", () => {
  isDarkening = !isDarkening;
  if (isDarkening) opacity = 0.0;
  darkenBtn.style.backgroundColor = (isDarkening) ?
    "rgb(52, 49, 49)" :
    "rgb(212, 215, 214)";
  darkenBtn.style.color = (isDarkening) ?
    "rgb(255, 255, 255)" :
    "rgb(0, 0, 0)";
});

function createGrid(size = 16) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let j = 0; j < size; j++) {
      const item = document.createElement("div");
      item.classList.add("item");
      row.appendChild(item);
    }
  }
  return document.querySelectorAll(".row");
}

function removeGrid(nodeList) {
  nodeList.forEach(node => {
    container.removeChild(node);
  });
}

function genRandomNumber() {
  return Math.floor(Math.random() * 255);
}