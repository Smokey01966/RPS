/* Global Variables */

/* /Global Variables */
 

/* Function calcRandomNumber expects max and min (default 0) returns a random number between them inclusive */
function calcRandomNumber (max, min = 0){
    return Math.floor(Math.random() * (max - min +1)) + min;
}

/* Function getRandomChoice expects no input randomly choses between "rock" "paper" or "scissor"  */
function getRandomChoice() {
    let choiceNumber = calcRandomNumber(3,1)
    switch (true){
        case (choiceNumber === 1) :
            return "rock" ;
        case (choiceNumber === 2) :
            return "paper" ;
        case (choiceNumber === 3) :
            return "scissors" ;
        default :
            console.error("there was a problem with the getRandomChoice function") ;
            return "error" ;
    }
}   


/* Function playRPS plays a single" round of rock papers scissors expects p1Choice and p2Choice returns p1Choice, p2Choice, and result */
function playRPS (p1Choice = "", p2Choice = "") {
    let result = "error";
    /* Possibly generate, sanitize, and error check p1Choice */
    if (p1Choice === "") {
        p1Choice = getRandomChoice() ;
    }
    else{
        p1Choice = p1Choice.toLowerCase() ;
        if (p1Choice === "rock"|| p1Choice ==="paper"|| p1Choice ==="scissors"){}else{
            console.error("player 1 must choose rock paper or scissors") ;
            return "error" ;
        }
    }
    
    /* Possibly generate, sanitize, and error check p2Choice */
    if (p2Choice === "") {
        p2Choice = getRandomChoice() ;
    }
    else{
        p2Choice = p2Choice.toLowerCase() ;
        if (p2Choice === "rock"|| p2Choice ==="paper"|| p2Choice ==="scissors"){}else{
            console.error("player 2 must choose rock paper or scissors") ;
            return "error" ;
        }
    }

    /* Determine the result */
    switch (true) {
        /* tie case */
        case (p1Choice === p2Choice) :
            result = "tie" ;
            break ;
        /* Player 1 win cases */
        case (p1Choice === "rock" && p2Choice === "scissors") :
        case (p1Choice === "paper" && p2Choice === "rock") :       
        case (p1Choice === "scissors" && p2Choice === "paper") :  
            result = "player 1 wins" ;
            break ;     
        /* Player 2 win cases */
        case (p1Choice === "rock" && p2Choice === "paper") :       
        case (p1Choice === "scissors" && p2Choice === "rock") :       
        case (p1Choice === "paper" && p2Choice === "scissors") :
            result = "player 2 wins" ;
            break ;       
    }
    return{p1Choice, p2Choice, result}
}


/* game function expects number of rounds returns nothing */
/* Pcode
declare playerScore as 0
declare computerScore as 0
declare current round as 1
declare constant winningScore as floor maxRounds/2 +1
for while current round is less than maxRounds + 1
    let round = playRPS(prompt("Choose Rock, Paper, or Scissors"),)
    if the result of the round is error
        consol log looks like there was an error let play round currentRound again
        break
    else if the result is player 1 winning 
        increment player's score by 1 then
        log to the console for round currentRound you chose round.p1Choice the computer chose round.p2Choice
        log to the console You win this round
        increment currentRound by 1
    else
        increment computer's score by 1 then
        log to the console for round currentRound you chose round.p1Choice the computer chose round.p2Choice
        log to the console The computer won this round
        increment currentRound by 1
    Round ends here check for end game
    if playerScore is equal to winningScore
        console log You have won best out of maxRounds with a score of player: playerScore computer: computerScore congratulations
        console log type game((max number of rounds)) to play again
        return
    else if computerScore is equal to winningScore
        console log The computer has won best out of maxRounds with a score of computer: computerScore player: playerScore better luck next time
        console log type game((max number of rounds)) to play again
        return
    else if 
        current round is === maxRound +1
        console log this game ended in a draw with a score of player: playerScore computer: computerScore
        console log type game((max number of rounds)) to play again
        return
    else
        console log your score is playerScore the computer's score is computerScore first to winningScore wins on to round currrentRound
