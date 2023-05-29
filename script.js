/* Global Variables */

/* /Global Variables */
 

/* Function randomNumber expects max and min (default 0) returns a random number between them inclusive */
function calcRandomNumber (max, min = 0){
    return Math.floor(Math.random() * (max - min +1)) + min;
}

/* Function getRandomChoice expects no input randomly choses between "rock" "paper" or "scissor"  */
/* PCODE use randomNumber to get a number between 1 and 3 uses that number to choose "rock", "paper", or "scissors"

/* Possibly generate


/* Function playRPS plays a single round of rock papers scissors expects p1Choice and p2Choice returns p1Choice, p2Choice, and result */
/* PCODE
    
    Possibly generate, sanitize, and error check p1Choice
        if p1Choice is empty set it to getRandomChoice
        else turn it into lower case
        if p1Choice is not rock, paper, or scissors, error "player 1 must choose rock paper or scissors." return error
    
    Possibly generate, sanitize, and error check p2Choiceg
        if p2Choice is empty set it to getRandomChoice
        else turn it into lower case
        if p2Choice is not rock, paper, or scissors, error "player 2 must choose rock paper or scissors." return error
    
    If p1Choice is p2Choice return p1Choice, p2Choice, "tie"

    Switch case with p1Choice and p2Choice
    p1Choice "rock" and p2Choice "scissors"
    p1Choice "scissors" and p2Choice "paper"
    p1Choice "paper" and p2Choice "rock"
    return p1Choice, p2Choice, "player 1 2ins"

    Switch case with p1Choice and p2Choice
    p1Choice "rock" and p2Choice "paper"
    p1Choice "scissors" and p2Choice "rock"
    p1Choice "paper" and p2Choice "scissors"
    return p1Choice, p2Choice, "player 2 wins"
*/