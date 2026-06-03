const quizData = [
  {
    question: "Which language runs in the browser?",
    answers: ["Python", "JavaScript", "C++", "Java"],
    correctIndex: 1,
  },
  {
    question: "What does CSS stand for?",
    answers: [
      "Creative Style Sheets",
      "Colorful Style Syntax",
      "Cascading Style Sheets",
      "Computer Style System",
    ],
    correctIndex: 2,
  },
  {
    question: "Which HTML tag is used for the largest heading?",
    answers: ["<h6>", "<head>", "<h1>", "<title>"],
    correctIndex: 2,
  },
  {
    question: "Which method converts JSON text into a JavaScript object?",
    answers: ["JSON.parse()", "JSON.stringify()", "Object.convert()", "Array.parse()"],
    correctIndex: 0,
  },
  {
    question: "Which array method adds an item to the end?",
    answers: ["shift()", "pop()", "push()", "slice()"],
    correctIndex: 2,
  },
];

const questionCounter = document.getElementById("questionCounter");
const scoreCounter = document.getElementById("scoreCounter");
const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const results = document.getElementById("results");

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswerIndex = null;
let answered = false;

function renderQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  answered = false;
  selectedAnswerIndex = null;

  questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
  scoreCounter.textContent = `Score: ${score}`;
  questionText.textContent = currentQuestion.question;
  feedback.textContent = "";
  feedback.className = "feedback";
  nextBtn.disabled = true;
  nextBtn.textContent = currentQuestionIndex === quizData.length - 1 ? "Finish" : "Next";
  restartBtn.classList.add("hidden");
  results.classList.add("hidden");
  results.innerHTML = "";
  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer";
    button.textContent = answer;
    button.addEventListener("click", () => selectAnswer(index, button));
    answersContainer.appendChild(button);
  });
}

function selectAnswer(index, button) {
  if (answered) return;

  answered = true;
  selectedAnswerIndex = index;
  const currentQuestion = quizData[currentQuestionIndex];
  const answerButtons = Array.from(answersContainer.querySelectorAll("button"));

  answerButtons.forEach((answerButton, answerIndex) => {
    answerButton.disabled = true;
    if (answerIndex === currentQuestion.correctIndex) {
      answerButton.classList.add("correct");
    }
  });

  if (selectedAnswerIndex === currentQuestion.correctIndex) {
    score += 1;
    feedback.textContent = "Correct answer.";
    feedback.classList.add("success");
  } else {
    button.classList.add("wrong");
    feedback.textContent = `Incorrect. The correct answer is ${currentQuestion.answers[currentQuestion.correctIndex]}.`;
    feedback.classList.add("error");
  }

  scoreCounter.textContent = `Score: ${score}`;
  nextBtn.disabled = false;
}

function showResults() {
  questionText.textContent = "Quiz completed";
  answersContainer.innerHTML = "";
  feedback.textContent = "";
  nextBtn.classList.add("hidden");
  restartBtn.classList.remove("hidden");

  const percentage = Math.round((score / quizData.length) * 100);
  results.classList.remove("hidden");
  results.innerHTML = `
    <h2>Results</h2>
    <p>You scored ${score} out of ${quizData.length}.</p>
    <p>Final score: ${percentage}%</p>
  `;
}

function goToNextQuestion() {
  currentQuestionIndex += 1;

  if (currentQuestionIndex >= quizData.length) {
    showResults();
    return;
  }

  renderQuestion();
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.classList.remove("hidden");
  renderQuestion();
}

nextBtn.addEventListener("click", goToNextQuestion);
restartBtn.addEventListener("click", restartQuiz);

renderQuestion();
