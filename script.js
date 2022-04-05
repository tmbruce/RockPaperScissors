let playerScore = document.querySelector('#human-score');
let computerScore = document.querySelector('#computer-score');
let outputMessage = document.querySelector('.message');

let rockButton = document.querySelector('.rock');
let paperButton = document.querySelector('.paper');
let scissorButton = document.querySelector('.scissors');

let gameRound = 0;

let scoreBoard = { player: 0, computer: 0 };

const options = ['rock', 'paper', 'scissors'];

rockButton.addEventListener('click', () => {
  playGame(options[0]);
});

paperButton.addEventListener('click', () => {
  playGame(options[1]);
});

scissorButton.addEventListener('click', () => {
  playGame(options[2]);
})

const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const computerPlay = () => {
  let randomNum = Math.floor(Math.random() * 3);
  return options[randomNum];
};

const playRound = (playerSelection, computerSelection) => {
  let output = "";
  if (playerSelection == computerSelection) {
    output = "Tie! Try again!";
  } else {
    if (playerSelection == "rock") {
      if (computerSelection == "paper") {
        output = `You lose! ${capitalize(
          computerSelection
        )} beats ${capitalize(playerSelection)}`;
        scoreBoard.computer += 1;
      } else {
        output = `You Win! ${capitalize(
          playerSelection
        )} beats ${capitalize(computerSelection)}`;
        scoreBoard.player += 1;
      }
    }
    if (playerSelection == "paper") {
      if (computerSelection == "scissors") {
        output = `You lose! ${capitalize(
          computerSelection
        )} beats ${capitalize(playerSelection)}`;
        scoreBoard.computer += 1;
      } else {
        output = `You Win! ${capitalize(
          playerSelection
        )} beats ${capitalize(computerSelection)}`;
        scoreBoard.player += 1;
      }
    }
    if (playerSelection == "scissors") {
      if (computerSelection == "rock") {
        output = `You lose! ${capitalize(
          computerSelection
        )} beats ${capitalize(playerSelection)}`;
        scoreBoard.computer += 1;
      } else {
        output = `You Win! ${capitalize(
          playerSelection
        )} beats ${capitalize(computerSelection)}`;
        scoreBoard.player += 1;
      }
    }
  }
  playerScore.textContent = scoreBoard.player;
  computerScore.textContent = scoreBoard.computer;
  outputMessage.textContent = output;
};

const playGame = (playerSelection) => {
  playRound(playerSelection, computerPlay());
  gameRound = Math.max(scoreBoard.player, scoreBoard.computer);

  if (gameRound > 4) {
    if(scoreBoard.player > scoreBoard.computer) {
      outputMessage.textContent = 'Congratulations, you won the game! Make a new selection to play again!';
    } else {
      outputMessage.textContent = 'Bummer! You lost! Make a new selection to play again!'
    }
    scoreBoard.player = 0;
    scoreBoard.computer = 0;
  }
}