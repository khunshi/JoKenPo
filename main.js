var playerChoice = NaN;
var botChoice = NaN;
var choices = ["pedra", "papel", "tesoura"];
var playerPoints = 0;
var botPoints = 0;
var tesoura;

// PLACAR CHANGES//


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


// ONCLICK FUNCTIONS TO SELECT CHOICE//


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
    
    
  // INNER IMG CHOICE ON SCREEN//
  
  
    if (botChoice === "papel") {
      document.getElementById("imgb").src = "imgs/papel.png"
    } else if (botChoice === "pedra")
    {
      document.getElementById("imgb").src = "imgs/pedra.png"
    } else if (botChoice === "tesoura") {
      document.getElementById("imgb").src = "imgs/tesoura.png"
    }
    
    
  // MATCH RESULT //
  
  
    if (playerChoice == "pedra" && botChoice == "papel" || playerChoice == "papel" && botChoice == "tesoura" || playerChoice == "tesoura" && botChoice == "pedra" ) {
      
      botWin();
      
    } else if (playerChoice == "pedra" && botChoice == "tesoura" || playerChoice == "papel" && botChoice == "pedra" || playerChoice == "tesoura" && botChoice == "papel") {
      
      playerWin();
      
    } else {
      document.getElementById("resultado").placeholder = "EMPATE";
    }
  }
}
