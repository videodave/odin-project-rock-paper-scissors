
let humanScore = 0;
let computerScore = 0;

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
        return console.log("You tied")
    }else if(humanChoice === "rock"){
        if(computerChoice === "paper"){
            computerScore++
            console.log(`You lose - ${computerChoice} beats ${humanChoice}`)
        }else{
            humanScore++
            console.log(`You win! - ${humanChoice} beats ${computerChoice}`)
        }
    }else if(humanChoice === "paper"){
        if(computerChoice === "scissors"){
            computerScore++
            console.log(`You lose - ${computerChoice} beats ${humanChoice}`)
        }else{
            humanScore++
            console.log(`You win! - ${humanChoice} beats ${computerChoice}`)
        }
    }else if(humanChoice === "scissors"){
        if(computerChoice === "rock"){
            computerScore++
            console.log(`You lose - ${computerChoice} beats ${humanChoice}`)
        }else{
            humanScore++
            console.log(`You win! - ${humanChoice} beats ${computerChoice}`)
        }
    }else{
        return console.log("error")
    }
    document.getElementById("selection").style.display = "none"
    document.getElementById("score").style.display = "block"
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
