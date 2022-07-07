var playerChoice = NaN;
var botChoice = NaN;
var choices = ["pedra", "papel", "tesoura"];
var playerPoints = 0;
var botPoints = 0;
var tesoura;

function playerWin() {
  playerPoints++;
  document.getElementById("placar").innerText = playerPoints + " x " + botPoints;
  document.getElementById("resultado").placeholder = "VITÓRIA"
}

function botWin() {
  botPoints++
  document.getElementById("placar").innerText = playerPoints + " x " + botPoints;
  document.getElementById("resultado").placeholder = "DERROTA"
}

const Pedra = () => {
  playerChoice = "pedra";
  document.getElementById("imgp").src = "imgs/pedra.png";
  document.getElementById("imgb").src = "imgs/interroga.png";

}

const Papel = () => {
  playerChoice = "papel";
  document.getElementById("imgp").src = "imgs/papel.png";
  document.getElementById("imgb").src = "imgs/interroga.png";
}

const Tesoura = () => {
  playerChoice = "tesoura";
  document.getElementById("imgp").src = "imgs/tesoura.png";
  document.getElementById("imgb").src = "imgs/interroga.png";
}

const Jogar = () => {
  if (playerChoice == "papel" || playerChoice == "pedra" || playerChoice == "tesoura") {
    let randomPicker = Math.floor(Math.random() * 3);
    let botChoice = choices[randomPicker];

    if (botChoice === "papel") {
      document.getElementById("imgb").src = "imgs/papel.png"
    } else if (botChoice === "pedra")
    {
      document.getElementById("imgb").src = "imgs/pedra.png"
    } else if (botChoice === "tesoura") {
      document.getElementById("imgb").src = "imgs/tesoura.png"
    }

    if (playerChoice == "pedra" && botChoice == "papel") {
      botWin();
    } else if (playerChoice == "pedra" && botChoice == "tesoura") {
      playerWin();
    } else if (playerChoice == "papel" && botChoice == "pedra") {
      playerWin();
    } else if (playerChoice == "papel" && botChoice == "tesoura") {
      botWin();
    } else if (playerChoice == "tesoura" && botChoice == "pedra") {
      botWin();
    } else if (playerChoice == "tesoura" && botChoice == "papel") {
      playerWin();
    } else {
      document.getElementById("resultado").placeholder = "EMPATE";
    }
  }
}
