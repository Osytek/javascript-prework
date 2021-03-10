function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let playRock = document.getElementById('play-rock');
let playPaper = document.getElementById('play-paper');
let playScissors = document.getElementById('play-scissors');

let playerScore = 0;
let computerScore = 0;

function getMoveName(argMoveId){
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

function displayResult(argComputerMove, argPlayerMove){
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
        /* zrobiłbym ifa i 2 else ify */
        /* 3 opcje w jednym ifie połączone za pomocą () || () || () */
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

function displayScore(){
	let msg = playerScore + " : " + computerScore;
	document.getElementById('results').innerHTML = msg;
}

function playGame(playerInput){
    clearMessages();
    console.log('Gracz wpisał: ' + playerInput);
    let argPlayerMove = getMoveName(playerInput);
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    let argComputerMove = getMoveName(randomNumber);
    console.log('moves:', argComputerMove, argPlayerMove);
    displayResult(argComputerMove, argPlayerMove);
	  displayScore();
}

function playRockClicked(){ playGame(1); }
playRock.addEventListener('click', playRockClicked);

function playPaperClicked(){ playGame(2); }
playPaper.addEventListener('click', playPaperClicked);

function playScissorsClicked(){ playGame(3);}
playScissors.addEventListener('click', playScissorsClicked);






