const container = document.querySelector(".container");

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");

  star.style.left = Math.random() * 100 + "vw";
  star.style.animationDuration = Math.random() * 3 + 5 + "s";
  container.appendChild(star);

  setTimeout(() => star.remove(), 8000);
}

setInterval(createStar, 500);
