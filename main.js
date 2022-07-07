var playerChoice = NaN;
var botChoice = NaN;
var choices = ["pedra", "papel", "tesoura"];
var playerPoints = 0;
var botPoints = 0;
var tesoura;

function playerWin() {
  playerPoints++;
  document.getElementById("placar").innerText = playerPoints + " x " + botPoints;
 document.getElementById("resultado").placeholder="vitória"
}

function botWin() {
  botPoints++
  document.getElementById("placar").innerText = playerPoints + " x " + botPoints;
  document.getElementById("resultado").placeholder="derrota"
}

const Pedra = () => {
  playerChoice = "pedra";
  document.getElementById("imgp").src = "imgs/pedra.png";

}

const Papel = () => {
  playerChoice = "papel";
  document.getElementById("imgp").src = "imgs/papel.png";
  console.log(playerChoice)
}

const Tesoura = () => {
  playerChoice = "tesoura";
  document.getElementById("imgp").src = "imgs/tesoura.png";
}

const Jogar = () => {
  console.log(playerChoice);
  if (playerChoice == "papel" || playerChoice == "pedra" || playerChoice == "tesoura") {
    let randomPicker = Math.floor(Math.random() * 3);
    let botChoice = choices[randomPicker];
    
    if (botChoice === "papel") {
      document.getElementById("imgb").src="imgs/papel.png"
    } else if (botChoice === "pedra") 
    {
      document.getElementById("imgb").src="imgs/pedra.png"
    } else if (botChoice === "tesoura") {
      document.getElementById("imgb").src="imgs/tesoura.png"
    }
    
    if (playerChoice == "pedra" && botChoice == "papel") {
      console.log("derrota");
      botWin();
    } else if (playerChoice == "pedra" && botChoice == "tesoura") {
      console.log("vitoria");
      playerWin();
    } else if (playerChoice == "papel" && botChoice == "pedra") {
      console.log("vitoria");
      playerWin();
    } else if (playerChoice == "papel" && botChoice == "tesoura") {
      console.log("derrota");
      botWin();
    } else if (playerChoice == "tesoura" && botChoice == "pedra") {
      console.log("derrota");
      botWin();
    } else if (playerChoice == "tesoura" && botChoice == "papel") {
      console.log("vitoria");
      playerWin();
    } else {
      console.log("empate");
      document.getElementById("resultado").placeholder="empate"
    }
  }

}
