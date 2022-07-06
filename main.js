var playerChoice = NaN;
var botChoice = NaN;
var choices = ["pedra", "papel", "tesoura"];
var playerPoints = 0;
var botPoints = 0;

function Jogar(choice) {
  let playerChoice = choice;
  let randomPicker = Math.floor(Math.random() * 3);
  let botChoice = choices[randomPicker];
  if (playerChoice == "papel" || playerChoice == "pedra" || playerChoice == "tesoura") {
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
      playerWin()
    } else {
      console.log("empate");
    }
  }
}

function playerWin() {
  playerPoints++;
  document.getElementById("placar").innerText = playerPoints + " x " + botPoints;

}

function botWin() {
  botPoints++
  document.getElementById("placar").innerText = playerPoints + " x " + botPoints;
}
