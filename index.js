const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
let score = JSON.parse(localStorage.getItem("score"));
const scoreElement = document.getElementById("score");

if (!score) {
  score = 0;
}
scoreElement.innerText = `score: ${score}`;

const questionElement = document.getElementById("question");
const formElement = document.getElementById("form");

questionElement.innerText = `What is ${num1} multiply by ${num2}`;

const correctAnswer = num1 * num2;
const inputElement = document.getElementById("input");

formElement.addEventListener("submit", () => {
  const userAnswer = +inputElement.value;
  if (userAnswer === correctAnswer) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
