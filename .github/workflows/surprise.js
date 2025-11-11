// CARD FLIP
const card = document.getElementById("card");
card.addEventListener("click", () => {
  card.querySelector(".card-inner").classList.toggle("flip");
});

// QUIZ LOGIC
const quizBtn = document.getElementById("quiz-btn");
const quizContainer = document.querySelector(".quiz-container");

quizBtn.addEventListener("click", () => {
  card.style.display = "none"; // hide card
  quizBtn.style.display = "none"; // hide start button
  quizContainer.classList.remove("hidden");
});

const quizData = [
  { question: "Who is the most handsome man?", correct: "Hosia" },
  { question: "What is Maheen's fav nickname after Paro?", correct: "Mano" },
  { question: "What's the cutest thing ever?", correct: "Panda" }
];

const quizDiv = document.getElementById("quiz");
const submitBtn = document.getElementById("submit");

// LOAD QUESTIONS
function loadQuiz() {
  quizDiv.innerHTML = quizData.map((q, i) => `
    <p>${q.question}</p>
    <input type="text" id="answer${i}" placeholder="Type your answer here" />
  `).join('');
}

loadQuiz();

// SUBMIT LOGIC
submitBtn.addEventListener("click", () => {
  let score = 0;

  quizData.forEach((q, i) => {
    const ans = document.getElementById(`answer${i}`).value.trim().toLowerCase();
    if(ans === q.correct.toLowerCase()) score++;
  });

  quizDiv.innerHTML = `<h3>You got ${score}/${quizData.length} correct 💙</h3>`;
  submitBtn.style.display = "none";

  // Home button
  const homeBtn = document.createElement("button");
  homeBtn.id = "home-btn";
  homeBtn.textContent = "Go to Home Page 💖";
  quizContainer.appendChild(homeBtn);

  homeBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});
