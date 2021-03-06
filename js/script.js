{const printMessage = function(msg){
	const div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

const clearMessages = function(){
	document.getElementById('messages').innerHTML = '';
}

let playRock = document.getElementById('play-rock');
let playPaper = document.getElementById('play-paper');
let playScissors = document.getElementById('play-scissors');

let playerScore = 0;
let computerScore = 0;

const getMoveName = function(argMoveId){
        if(argMoveId == 1){
        return 'kamień';
        }else if(argMoveId == 2){
            return 'papier';
        }else if(argMoveId == 3){
            return 'nożyce';
        }else{
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
}

const displayResult = function(argComputerMove, argPlayerMove){
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
        if(argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'papier' && argPlayerMove == 'nożyce' || argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
		playerScore++;
        } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce' || argComputerMove == 'papier' && argPlayerMove == 'kamień' || argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
            printMessage('Przegrałeś');
            computerScore++
        } else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień' || argComputerMove == 'papier' && argPlayerMove == 'papier' || argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
            printMessage('Remis');
        }
 }

const displayScore = function(){
	const msg = playerScore + " : " + computerScore;
	document.getElementById('results').innerHTML = msg;
}

const playGame = function(playerInput){
    clearMessages();
    console.log('Gracz wpisał: ' + playerInput);
    const argPlayerMove = getMoveName(playerInput);
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    const argComputerMove = getMoveName(randomNumber);
    console.log('moves:', argComputerMove, argPlayerMove);
    displayResult(argComputerMove, argPlayerMove);
	  displayScore();
}

const playRockClicked = function(){ playGame(1); }
playRock.addEventListener('click', playRockClicked);

const playPaperClicked = function(){ playGame(2); }
playPaper.addEventListener('click', playPaperClicked);

const playScissorsClicked = function(){ playGame(3);}
playScissors.addEventListener('click', playScissorsClicked);
}






