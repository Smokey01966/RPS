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
            return {p1Choice, p2Choice, result:"error"} ;
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
            return {p1Choice, p2Choice, result:"error"} ;
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

/* game function expects number of rounds returns nothing plays rock paper scissors best of number of rounds against a computer opponent */
function game(maxRounds = 1){
    let playerScore = 0 ;
    let computerScore = 0 ;
    let currentRound = 1 ;
    const winningScore = Math.floor(maxRounds/2) + 1 ;
    while (currentRound < maxRounds+1){
        let round = new playRPS(prompt("Choose Rock, Paper, or Scissors"),);
        if (round.result === "error")/* playRPS results in an error */ {
            console.log(`Looks like there was and error let's play round ${currentRound} again`) ;
            console.log("") ;
            console.log("") ;
            continue;
        } else if (round.result ==="player 1 wins")/* player wins round */{
            playerScore++ ;
            console.log(`For round ${currentRound} you chose ${round.p1Choice} and the computer chose ${round.p2Choice}`) ;
            console.log("You win this round") ;
            currentRound++ ;
        } else if (round.result ==="player 2 wins")/* computer wins round */{
            computerScore++ ;
            console.log(`For round ${currentRound} you chose ${round.p1Choice} and the computer chose ${round.p2Choice}`) ;
            console.log("The computer won this round") ;
            currentRound++ ;
        } else if (round.result ==="tie")/* round is a tie */{
            console.log(`For round ${currentRound} you chose ${round.p1Choice} and the computer chose ${round.p2Choice}`) ;
            console.log("It's a tie") ;
            currentRound++ ;
        } else/* catch for unexpected result */ {
            console.log("Something went wrong") ;
            console.log("") ;
            console.log("") ;
            continue ;
        }
        
        /* round ends check for endgame */
        if (playerScore === winningScore)/* Player reaches winning score */{ 
            console.log(`You have won best out of ${maxRounds} with a score of:`) ;
            console.log(`Player: ${playerScore}`) ;
            console.log(`Computer: ${computerScore}`) ;
            console.log("Congratulations!") ;
            console.log("Type game((max number of rounds)) to play again") ;
            return ;
        } else if (computerScore === winningScore)/* Computer reaches winning score */ {
            console.log(`The computer has won best out of ${maxRounds} with a score of:`) ;
            console.log(`Computer: ${computerScore}`) ;
            console.log(`Player: ${playerScore}`) ;
            console.log("Better luck next time") ;
            console.log("Type game((max number of rounds)) to play again") ;
            return ;
        } else if (currentRound === maxRounds + 1)/* No winner after last round */{
            console.log("This game ended in a draw with a score of:") ;
            console.log(`Player: ${playerScore}`) ;
            console.log(`Computer: ${computerScore}`) ;
            console.log("Type game((max number of rounds)) to play again") ;
            return ;
        } else /*move on to next round */ {
            console.log("The score is:")
            if (playerScore >= computerScore){
                console.log(`Player: ${playerScore}`) ;
                console.log(`Computer: ${computerScore}`) ;
            } else {
                console.log(`Computer: ${computerScore}`) ;
                console.log(`Player: ${playerScore}`) ;
            }
            console.log(`On to round ${currentRound}`) ;
            console.log("") ;
            console.log("") ;
        }
    }
}
