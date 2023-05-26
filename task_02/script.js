/** @format */

const quizQuestions = [
  {
    question:
      "How long did it take Robert Lewandowski to score 5 goals in one Bundesliga match?",
    answers: ["A: 9", "B: 71", "C: 43", "D: 89"],
    solution: "A",
  },
  {
    question:
      "How many Bundesliga matches did Arjen Robben play for Bayern Munich?",
    answers: ["A: 120", "B: 201", "C: 249", "D: 156"],
    solution: "B",
  },
  {
    question: "Who is the all-time leading goal scorer for Bayern Munich?",
    answers: [
      "A: Robert Lewandowski",
      "B: Mario Gomez",
      "C: Roy Makaay",
      "D: Gerd Müller",
    ],
    solution: "D",
  },
  {
    question:
      "Which coach led Bayern Munich to their historic treble-winning season in 2012-2013?",
    answers: [
      "A: Jupp Heynckes",
      "B: Louis van Gaal",
      "C: Ottmar Hitzfeld",
      "D: Pep Guardiola",
    ],
    solution: "A",
  },
];

function startGame() {
  let score = 0;
  for (const question of quizQuestions) {
    const userAnswer = prompt(
      question.question + "\n" + question.answers.join("\n")
    );
    if (userAnswer.toUpperCase() === question.solution) {
      score++;
    } else {
      score--;
    }
  }
  alert(
    `You scored ${score} points answering ${quizQuestions.length} questions!`
  );
}
