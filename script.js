const container = document.querySelector("#container");
const btn = document.querySelector("button");
let rows = createGrid();

container.addEventListener("mouseover", event => {
  event.target.classList.add("hover");
});

btn.addEventListener("click", () => {
  let size = +prompt("Add a size for the board (min: 1, max 100): ", "16");
  if (!size) return alert("Wrong input");
  if (size > 100) size = 100;
  if (size < 1) size = 1;
  removeGrid(rows);
  rows = createGrid(size);
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