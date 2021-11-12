
  const options = document.querySelectorAll(".options");
  let playerScore = 0;
  let computorscore = 0;

  options.forEach((option) => {
    option.addEventListener("click", function () {
      const player = this.value;

      const computorplay = ["Rock", "Paper", "Scissors"];
      const computor = computorplay[Math.floor(Math.random() * 3)];
      
      updateMoves(player, computor);
      compareInputs(player, computor);
      updateScore();

    });
  });

  function updateMoves(player, computor){
    document.getElementById("p-move").src = `${player}.jpg`;
    document.getElementById("c-move").src = `${computor}.jpg`;
  }



  function compareInputs(player, computor) {
    const match = `${player} vs ${computor}`;
    if (player === computor) {
      alert(`${match} is a Tie`);
      return;
    }

    if (player === "Rock") {
      if (computor === "Scissors") {
        alert(`${match} = You Win`);
        playerScore++;
      }
        else {
        alert(`${match} = Computer Wins`);
        computorscore++;
      }
    }


    else if (player === "Paper") {
      if (computor === "Rock") {
        alert(`${match} = You Win`);
        playerScore++;
      } 
        else {
        alert(`${match} = Computer Wins`);
        computorscore++;
      }
    }

    else {
      if (computor === "Paper") {
        alert(`${match} = You Win`);
        playerScore++;
      } 
        else {
        alert(`${match} = Computer Wins`);
        computorscore++;
      }
    }
  }

  function updateScore() {
    document.getElementById("p-score").textContent = playerScore;
    document.getElementById("c-score").textContent = computorscore;
  }
