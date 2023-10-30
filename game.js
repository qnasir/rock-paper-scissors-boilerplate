var computerImage=document.getElementById("computer");
let operator
var personImage=document.getElementById("person");
function computerOutput(){
  operator = Math.ceil(Math.random()*3)
  switch(operator){
      case 1:
        computerImage.setAttribute("src","./assets/paper-hand.png")
          break;
          
          case 2:
        computerImage.setAttribute("src","./assets/rock-hand.png")
          break;
          
          case 3:
        computerImage.setAttribute("src","./assets/scissors-hand.png")
          break;
          
  }
}
let rockButton = document.getElementById("rock")
let paperButton = document.getElementById("paper")
let scissorsButton = document.getElementById("scissors")
let personScore = 0
let computerScore = 0
let personScoreBox = document.getElementById("score_1")
let computerScoreBox = document.getElementById("score_2")

paperButton.onclick = ()=>{
  personImage.setAttribute("src","./assets/paper-hand.png")
  computerOutput()
  if (operator==2){
      personScore++
      personScoreBox.textContent = personScore;
      
  }else if(operator==3){
      computerScore++
      computerScoreBox.textContent = computerScore;;
  }
  gameEnd()
}

scissorsButton.onclick = ()=>{
  personImage.setAttribute("src","./assets/scissors-hand.png")
  computerOutput()
  if (operator==1){
      personScore++
      personScoreBox.textContent = personScore
  }else if(operator==2){
      computerScore++
      computerScoreBox.textContent = computerScore
  }
  gameEnd()
}

rockButton.onclick = ()=>{
  personImage.setAttribute("src","./assets/rock-hand.png")
  computerOutput()
  
  if (operator==3){
      personScore++
      personScoreBox.textContent = personScore
  }else if(operator==1){
      computerScore++
      computerScoreBox.textContent = computerScore
  }
  gameEnd()
}
let winning = document.getElementById("won_text")
let body = document.querySelector("body")
let playAgainButton = document.getElementById("play_again_button")
let gameEndPage = document.getElementById("game_end")
function gameEnd(){
    if (personScore==5 || computerScore==5){
        rockButton.style.visibility = "hidden"
        paperButton.style.visibility = "hidden"
        scissorsButton.style.visibility = "hidden"
    }
    if (personScore==5){
        winning.textContent = "You won the game"
        body.style.overflowY = "scroll"
        gameEndPage.style.visibility = "visible"
    }else if (computerScore==5){
        winning.textContent = "Computer won the game"
        body.style.overflowY = "scroll"
        gameEndPage.style.visibility = "visible"
    }
    playAgainButton.onclick = ()=>{
        window.open("./game.html","_self")
    }

}