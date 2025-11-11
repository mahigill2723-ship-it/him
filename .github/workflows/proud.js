const container = document.querySelector(".container");

function createLeaf() {
  const leaf = document.createElement("div");
  leaf.classList.add("leaf");
 
  leaf.style.left = Math.random() * 100 + "vw";
  leaf.style.animationDuration = 5 + Math.random() * 5 + "s";
  container.appendChild(leaf);

  setTimeout(() => leaf.remove(), 10000);
}

setInterval(createLeaf, 800);
