let scoreBoard = { player: 0, computer: 0 };
      const options = ["Rock", "Paper", "Scissors"];
      const playerSelection = () => {
        let options = "Rock, Paper, or Scissors?";
        let choice = prompt(options);
        return choice;
      };

      const computerPlay = () => {
        let randomNum = Math.floor(Math.random() * 3);
        return options[randomNum];
      };
      const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

      const playRound = (playerSelection, computerSelection) => {
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();
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
        console.log(scoreBoard);
        return output;
      };

      const game = (rounds) => {
        let output = "";
        for (let i = 0; i < rounds; i++) {
          if (
            scoreBoard.player > Math.floor(rounds / 2) ||
            scoreBoard.player > Math.floor(rounds / 2)
          ) {
            i = rounds;
          } else {
            playRound(playerSelection(), computerPlay());
          }
        }
        if (scoreBoard.computer > scoreBoard.player) {
          output = `You Loose! Computer: ${scoreBoard.computer} You: ${scoreBoard.player}}`;
        } else {
          output = `You Won! Your score: ${scoreBoard.player} Computer score: ${scoreBoard.computer}`;
        }

        return output;
      };
      //console.log(game(5));