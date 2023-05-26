/**
 * Project 1: Guess the Number
 * Gameplay:
 * Generate a random number between 1 and 100 and store it in a variable called "secretNumber".
 * Set the number of attempts allowed to 5 and store it in a variable called "attemptsLeft".
 * Ask the player to input a number between 1 and 100.
 * Compare the player's input to the secret number using a conditional expression:
 * a. If the player's input matches the secret number, display a message that the player has won and end the game.
 * b. If the player's input is higher than the secret number, display a message that the number is too high and decrement the "attemptsLeft" variable by 1.
 * c. If the player's input is lower than the secret number, display a message that the number is too low and decrement the "attemptsLeft" variable by 1.
 * If the player runs out of attempts, display a message that they have lost and reveal the secret number.
 * Ask the player if they want to play again.
 *
 * @format
 */

function guessTheNumber() {
  let secretNumber = Math.floor(Math.random() * 100 + 1);
  let attemptsLeft = 5;
  while (attemptsLeft > 0) {
    let guess = parseInt(prompt("Please enter a number between 1 and 100."));
    if (isNaN(guess) || guess < 0 || guess > 100) {
      alert("Number has to be between 1 and 100.");
    }
    if (guess === secretNumber) {
      alert("You have won!");
      break;
    } else if (guess !== secretNumber) {
      guess > secretNumber
        ? alert("The number is too high")
        : alert("The number is too low");
      attemptsLeft--;
    }
  }
  if (attemptsLeft === 0) {
    alert(
      "You failed guessing the number in max 5 attempts. The number was " +
        secretNumber
    );
  }
  let playAgain = confirm("Do you want to play again");

  if (playAgain) guessTheNumber();
}

/* ## Project2: Guess the Word

### Game play
- In this exercise, you will play a game called `Guess the Random Word`.  
- The game will select a random word from a predefined array and shuffle its letters. 
- Your task is to unscramble the letters and guess the word correctly within three attempts.

### Here's how to play:
1. The game will start by selecting a random word from a predefined array.
2. The letters of the word will be shuffled, and the scrambled word will be displayed on the screen.
3. You will have three attempts to guess the correct word.
4. To make a guess, type your answer into the input box and hit the submit button.
5. If your answer is correct, you win the game. If not, you will get a message indicating that your guess is incorrect, and you will have two more attempts to guess the word correctly.
6. The game will provide a hint after the first incorrect guess to help you guess the word more accurately.
7. If you use all three attempts and still cannot guess the correct word, the game will reveal the answer and end the game.
8. At the end of the game, you will have the option to play again with a new random word. */

function guessTheWord() {
  const words = ["football", "basketball", "running", "athletics", "swimming"];
  let randomWord = words[Math.floor(Math.random() * words.length)];
  let shuffledWord = shuffleWord(randomWord);
  let attemptsLeft = 3;
  while (attemptsLeft > 0) {
    let guess = prompt(
      "Guess the shuffled word " + shuffledWord + "!"
    ).toLowerCase();
    attemptsLeft--;
    if (guess === randomWord) {
      alert(
        `Congrats, you won the game! You correctly guessed the random word which was ${randomWord}.`
      );
      return; // Exit the function after winning
    } else {
      alert(
        `Your guess was incorrect. You have ${attemptsLeft} attempts left. Think again: Which word is this: ` +
          shuffledWord +
          "?"
      );
    }
    if (attemptsLeft === 0) {
      alert(`You have lost the game. The correct answer was ${randomWord}`);
      let playAgain = confirm("Do you want to play again?");
      if (playAgain) {
        guessTheWord();
        return; // Exit the function after playing again
      }
    }
  }
}

function shuffleWord(word) {
  let shuffledWord = "";
  let wordArr = word.split("");
  while (wordArr.length > 0) {
    let randomIndex = Math.floor(Math.random() * wordArr.length);
    shuffledWord += wordArr[randomIndex];
    wordArr.splice(randomIndex, 1);
  }
  return shuffledWord;
}
