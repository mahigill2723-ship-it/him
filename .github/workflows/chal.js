const container = document.querySelector(".container");

function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");
  sparkle.innerHTML = "✨";
  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.animationDuration = Math.random() * 3 + 6 + "s";
  container.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 9000);
}

setInterval(createSparkle, 900);
