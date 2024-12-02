const quizzes = [];

// Store quiz data (quiz questions, answers, and correct answers)
function storeQuiz(event) {
  event.preventDefault();
  const question = document.getElementById("question").value;
  const option1 = document.getElementById("option1").value;
  const option2 = document.getElementById("option2").value;
  const option3 = document.getElementById("option3").value;
  const option4 = document.getElementById("option4").value;
  const correctOption = document.getElementById("correctOption").value;

  const quiz = {
    question,
    options: [option1, option2, option3, option4],
    correctOption: correctOption
  };

  quizzes.push(quiz);
  alert("Quiz created successfully!");
  document.getElementById("quizForm").reset();
}

document.getElementById("quizForm").addEventListener("submit", storeQuiz);

// Display available quizzes on the quiz listing page
function displayQuizzes() {
  const quizListContainer = document.getElementById("quiz-items");
  quizzes.forEach((quiz, index) => {
    const quizElement = document.createElement("div");
    quizElement.innerHTML = `
      <h3>Quiz ${index + 1}</h3>
      <p>${quiz.question}</p>
      <a href="quiz-taking.html?quiz=${index}" class="btn">Take Quiz</a>
    `;
    quizListContainer.appendChild(quizElement);
  });
}

window.onload = displayQuizzes;
