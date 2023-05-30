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