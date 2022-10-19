//random function
//player 1 input
//player 2 input
//rules: winning , losing, and stalemate
//display results of who won/lost/drawn
//Charizard = Rock
//Venusaur = Scissors
//Blastoise = Paper

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function player1Input(){
    let player1Input = document.getElementById("input").value; 
    return player1Input;
}

function player2Input(){
    let computerInput = getRandomInt(3);
    if(computerInput === 0){
        return "Rock";
    }
    else if(computerInput === 1){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function rules(player1, player2){
    if(player1 === player2){
        return "Draw!";
    }

    else if((player1 === "Rock" && player2 === "Scissors" ) ||
            (player1 === "Paper" && player2 === "Rock") ||
            (player1 === "Scissors" && player2 === "Paper")){
        return "Player 1 Wins!";
    }

    else {
        return "Player 2 Wins!";
    }
}

function display(){
    recall();
    let player1Choice = player1Input();
    let player2Choice = player2Input();
    let result = rules(player1Choice, player2Choice);

    document.getElementById("Player1Input").innerHTML = "Player 1 chose " + player1Choice;
    document.getElementById("Player2Input").innerHTML = "Player 2 chose " + player2Choice;
    document.getElementById("FinalResult").innerHTML = result;

    show(player1Choice);
    show(player2Choice);
}

function show(choice) {
 
    /* Access image by id and change
    the display property to block*/
    
    if(choice === "Rock"){
        document.getElementById("Charizard").style.display = "inline";
    }

    if(choice === "Paper"){
        document.getElementById("Blastoise").style.display = "inline";
    }

    if(choice === "Scissors"){
        document.getElementById("Venusaur").style.display = "inline";
    }
}

function recall(){
    document.getElementById("Charizard").style.display = "none";
    document.getElementById("Blastoise").style.display = "none";
    document.getElementById("Venusaur").style.display = "none";

}

