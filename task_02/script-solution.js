// Define an array of objects representing the questions
const questions = [
  {
    question: "What is the capital of France?",
    options: ["A. Paris", "B. London", "C. Madrid"],
    answer: "A",
  },
  {
    question: "What is the largest country by area?",
    options: ["A. Russia", "B. China", "C. USA"],
    answer: "A",
  },
  {
    question: "What is the currency of Japan?",
    options: ["A. Yen", "B. Euro", "C. Dollar"],
    answer: "A",
  },
];

// Define a variable to keep track of the player's score
let score = 0;

// Define a function to start the game
function startGame() {
  // Iterate through the questions array and present each question to the player
  for (let i = 0; i < questions.length; i++) {
    const questionObj = questions[i];
    // const { question, options, answer } = questionObj;

    // Display question and Ask the player to enter their answer
    const playerAnswer = prompt(
      `Question ${i + 1}: ${questionObj.question} \n ${questionObj.options.join(`   `)}
        \n Enter your answer (A, B, or C):`
    );

    // Check if the player's answer is correct and update the score
    if (playerAnswer.toUpperCase() === questionObj.answer.toUpperCase()) {
      alert("Correct answer! 😀");
      score++;
    } else {
      alert("Incorrect answer 😞");
      score--;
    }
  }

  // Display the player's score and a message indicating how well they did
  alert(`Game over. Your score is ${score}.`);
  if (score >= Math.ceil(questions.length / 2)) {
    alert("Well done! You did great! 🎆");
  } else {
    alert("Better luck next time! 😉");
  }
}
