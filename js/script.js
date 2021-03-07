function playGame(playerInput){
    clearMessages(); 
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

        if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
        } if( argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
            printMessage('Mamy remis');
        } if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            printMessage('Ja wygrywam');
        } if( argComputerMove == 'papier' && argPlayerMove == 'papier') {
            printMessage('Mamy remis');
        } if( argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            printMessage('Ja wygrywam');
        } if( argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('Ty wygrywasz');
        } if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Ty wygrywasz');
        } if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
            printMessage('Mamy remis');
        } if( argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            printMessage('Ja wygrywam');
        } if( argPlayerMove == 'nieznany ruch'){
            printMessage('Wybrałeś zły ruch pajacu');
        }
    }


    /* let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); */

    console.log('Gracz wpisał: ' + playerInput);

    let argPlayerMove = getMoveName(playerInput);
    /*
    if(playerInput == '1'){
    playerMove = 'kamień';
    } else if (playerInput == '2'){
        playerMove = 'papier';
    } else if (playerInput == '3'){
        playerMove = 'nożyce';
    }

    printMessage('Twój ruch to: ' + argPlayerMove);
    */
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let argComputerMove = getMoveName(randomNumber);
    console.log('moves:', argComputerMove, argPlayerMove);
    displayResult(argComputerMove, argPlayerMove);
    /*
    if(randomNumber == '1'){
    computerMove = 'kamień';
    } else if (randomNumber == '2'){
    computerMove = 'papier';
    } else if (randomNumber == '3'){
    computerMove = 'nożyce';
    }
    */
    /*
    printMessage('Mój ruch to: ' + argComputerMove);

    /*
    if(computerMove == 'kamień' && playerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    } if(computerMove == 'kamień' && playerMove == 'nożyce'){
        printMessage('Ja wygrywam!');
    } if(computerMove == 'kamień' && playerMove == 'kamień'){
        printMessage('Mamy remis');
    } if(computerMove == 'papier' && playerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    } if(computerMove == 'papier' && playerMove == 'papier'){
        printMessage('Mamy remis');
    } if(computerMove == 'papier' && playerMove == 'kamień'){
        printMessage('Ja wygrywam');
    } if(computerMove == 'nożyce' && playerMove == 'papier'){
        printMessage('Ja wygrywam');
    } if(computerMove == 'nożyce' && playerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    } if(computerMove == 'nożyce' && playerMove == 'nożyce'){
        printMessage('Mamy remis');
    }
    if(playerMove == 'nieznany ruch'){
        printMessage('Wpisałeś złą liczbe cymbale');
    }
    */
}
function playRockClicked(){
    playGame(1);
  }
let playRock = document.getElementById('play-rock');

playRock.addEventListener('click', playRockClicked);

function playPaperClicked(){
    playGame(2);
  }
let playPaper = document.getElementById('play-paper');

playPaper.addEventListener('click', playPaperClicked);
function playScissorsClicked(){
    playGame(3);
  }
let playScissors = document.getElementById('play-scissors');

playScissors.addEventListener('click', playScissorsClicked);
