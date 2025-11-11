const container = document.querySelector(".container");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
 
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 5 + "s";
  container.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 400);
