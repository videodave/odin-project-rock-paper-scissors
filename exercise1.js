
let humanScore = 0;
let computerScore = 0;

let round = 1

let whoWon

let result = Math.round(Math.random() * 3)
console.log("this is the result - ", result)


function playRound(humanChoice){
    let computerChoice
    let randomNum = Math.random()
    if(randomNum <= 0.33){
        computerChoice= "rock"
    }else if(randomNum <= 0.66){
        computerChoice= "paper"
    }else{
        computerChoice= "scissors"
    }
    if(humanChoice === computerChoice){
        whoWon = "You tied"
    }else if(humanChoice === "rock"){
        if(computerChoice === "paper"){
            computerScore++
            whoWon = `You lose - ${computerChoice} beats ${humanChoice}`
            console.log(`You lose - ${computerChoice} beats ${humanChoice}`)
        }else{
            humanScore++
            whoWon = `You win! - ${humanChoice} beats ${computerChoice}`
            console.log(`You win! - ${humanChoice} beats ${computerChoice}`)
        }
    }else if(humanChoice === "paper"){
        if(computerChoice === "scissors"){
            computerScore++
            whoWon = `You lose - ${computerChoice} beats ${humanChoice}`
            console.log(`You lose - ${computerChoice} beats ${humanChoice}`)
        }else{
            humanScore++
            whoWon = `You win! - ${humanChoice} beats ${computerChoice}`
            console.log(`You win! - ${humanChoice} beats ${computerChoice}`)
        }
    }else if(humanChoice === "scissors"){
        if(computerChoice === "rock"){
            computerScore++
            whoWon = `You lose - ${computerChoice} beats ${humanChoice}`
            console.log(`You lose - ${computerChoice} beats ${humanChoice}`)
        }else{
            humanScore++
            whoWon = `You win! - ${humanChoice} beats ${computerChoice}`
            console.log(`You win! - ${humanChoice} beats ${computerChoice}`)
        }
    }else{
        return console.log("error")
    }

    if(humanScore === 5){
        endGame("human")
        return
    }else if (computerScore === 5){
        endGame("computer")
        return
    }


    document.getElementById("selection").style.display = "none"
    document.getElementById("whoWonText").textContent = whoWon
    document.getElementById("whoWonContainer").style.display = "block"
    document.getElementById("humanScore").textContent = humanScore
    document.getElementById("computerScore").textContent = computerScore
    document.getElementById("score").style.display = "block"
    document.getElementById("nextRound").style.display = "flex"
}


function playGame(){
    // for (let index = 1; index <= 5; index++) {
    //     console.log(`Welcome to Round ${index}`)
    //     console.log(`The score is You-${humanScore} to Computer-${computerScore}`)
    //     playRound(getHumanChoice(), getComputerChoice())
    //     if(index === 5){
    //         console.log(`GAME OVER ---------- Final Score - You-${humanScore} to Computer-${computerScore}`)
    //     }
    // }
}


function getComputerChoice(){
    let randomNum = Math.random()
    if(randomNum <= 0.33){
        return "rock"
    }else if(randomNum <= 0.66){
        return "paper"
    }else{
        return "scissors"
    }
}


function errorCheckForHuman(e){
    if (e === "paper" || e == "scissors" || e === "rock"){
        return true
    }else{
        return false
    }    
}

function getHumanChoice(){
    let humanChoice = prompt("Choose Rock, Paper, or Scissors")
    if(errorCheckForHuman(humanChoice.toLowerCase())){
        return humanChoice
    } else{
        return getHumanChoice()
    }
}

playGame()

function buttonTest(){
    console.log("it works!")
}

function startGame(){
    document.getElementById("selection").style.display = "block"
    document.getElementById("startGameBtn").style.display = "none"
}

function playAgain(){
    round = 1
    document.getElementById("roundNum").textContent = round
    humanScore = 0;
    computerScore = 0;
    document.getElementById("startGameBtn").style.display = "flex"
    document.getElementById("whoWonContainer").style.display = "none"
      document.getElementById("score").style.display = "none"
       document.getElementById("playAgain").style.display = "none"


}

function nextRound(){
    round++
    console.log("this is the round - ", round)
    document.getElementById("roundNum").textContent = round
    document.getElementById("whoWonContainer").style.display = "none"
    document.getElementById("selection").style.display = "block"
    document.getElementById("nextRound").style.display = "none"
}

function endGame(winner){
    if (winner === "human"){
        document.getElementById("whoWonText").textContent = "You were the first to 5 and WIN!"
     
    }else{
        document.getElementById("whoWonText").textContent = "You LOST - Computer was the first to 5"
    }
        document.getElementById("playAgain").style.display = "flex"
        document.getElementById("selection").style.display = "none"
        document.getElementById("whoWonContainer").style.display = "block"
        document.getElementById("humanScore").textContent = humanScore
        document.getElementById("computerScore").textContent = computerScore
        document.getElementById("score").style.display = "block"
}
