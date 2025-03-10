const container = document.querySelector("#container");

createGrid();

container.addEventListener("mouseover", event => {
  event.target.classList.add("hover");
});

function createGrid() {
  for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let j = 0; j < 16; j++) {
      const item = document.createElement("div");
      item.classList.add("item");
      row.appendChild(item);
    }
  }
}