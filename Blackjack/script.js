const buttons = document.getElementById("buttons");
const startButton = document.getElementById("start-btn");
const hitButton = document.getElementById("hit-btn");
const doubleButton = document.getElementById("double-btn");
const standButton = document.getElementById("stand-btn");

const chips = document.querySelectorAll(".chip");

const messageTextContainer = document.getElementById("message");
const messageText = document.getElementById("message-text");

let gameWinner;
let winnerText;

const balanceText = document.getElementById("balance-info");
let money = parseInt(sessionStorage.getItem('playerMoney')) || 1000;

let currentWager = 0;

let turn = "player";
let dealerStatus = "start";

const dealerHand = [];
const playerHand = [];

const playerScoreText = document.getElementById("player-score");
const dealerScoreText = document.getElementById("dealer-score");
let playerScore = 0;
let dealerScore = 0;

const dealerBoard = document.getElementById("dealer");
const playerBoard = document.getElementById("player");

const cardsArray = [
    {
        "src": "two_heart.svg",
        "value": 2
    },
    {
        "src": "two_heart.svg",
        "value": 2
    },
    {
        "src": "two_clubs.svg",
        "value": 2
    },
    {
        "src": "two_diamond.svg",
        "value": 2
    },
    {
        "src": "two_spades.svg",
        "value": 2
    },
    {
        "src": "three_clubs.svg",
        "value": 3
    },
    {
        "src": "three_heart.svg",
        "value": 3
    },
    {
        "src": "three_diamond.svg",
        "value": 3
    },
    {
        "src": "three_spades.svg",
        "value": 3
    },
    {
        "src": "four_clubs.svg",
        "value": 4
    },
    {
        "src": "four_heart.svg",
        "value": 4
    },
    {
        "src": "four_diamond.svg",
        "value": 4
    },
    {
        "src": "four_spades.svg",
        "value": 4
    },
    {
        "src": "five_clubs.svg",
        "value": 5
    },
    {
        "src": "five_diamond.svg",
        "value": 5
    },
    {
        "src": "five_heart.svg",
        "value": 5
    },
    {
        "src": "five_spades.svg",
        "value": 5
    },
    {
        "src": "six_heart.svg",
        "value": 6
    },
    {
        "src": "six_spades.svg",
        "value": 6
    },
    {
        "src": "six_diamond.svg",
        "value": 6
    },
    {
        "src": "six_clubs.svg",
        "value": 6
    },
    {
        "src": "seven_clubs.svg",
        "value": 7
    },
    {
        "src": "seven_diamond.svg",
        "value": 7
    },
    {
        "src": "seven_heart.svg",
        "value": 7
    },
    {
        "src": "seven_spades.svg",
        "value": 7
    },
    {
        "src": "eight_spades.svg",
        "value": 8
    },
    {
        "src": "eight_clubs.svg",
        "value": 8
    },
    {
        "src": "eight_diamond.svg",
        "value": 8
    },
    {
        "src": "eight_heart.svg",
        "value": 8
    },
    {
        "src": "nine_heart.svg",
        "value": 9
    },
    {
        "src": "nine_spades.svg",
        "value": 9
    },
    {
        "src": "nine_clubs.svg",
        "value": 9
    },
    {
        "src": "nine_diamond.svg",
        "value": 9
    },
    {
        "src": "ten_diamond.svg",
        "value": 10
    },
    {
        "src": "ten_spades.svg",
        "value": 10
    },
    {
        "src": "ten_heart.svg",
        "value": 10
    },
    {
        "src": "ten_clubs.svg",
        "value": 10
    },
    {
        "src": "jack_clubs.svg",
        "value": 10
    },
    {
        "src": "jack_heart.svg",
        "value": 10
    },
    {
        "src": "jack_spades.svg",
        "value": 10
    },
    {
        "src": "jack_diamond.svg",
        "value": 10
    },
    {
        "src": "queen_diamond.svg",
        "value": 10
    },
    {
        "src": "queen_heart.svg",
        "value": 10
    },
    {
        "src": "queen_spades.svg",
        "value": 10
    },
    {
        "src": "queen_clubs.svg",
        "value": 10
    },
    {
        "src": "king_clubs.svg",
        "value": 10
    },
    {
        "src": "king_diamond.svg",
        "value": 10
    },
    {
        "src": "king_heart.svg",
        "value": 10
    },
    {
        "src": "king_spades.svg",
        "value": 10
    },
    {
        "src": "ace_clubs.svg",
        "value": 11
    },
    {
        "src": "ace_diamond.svg",
        "value": 11
    },
    {
        "src": "ace_heart.svg",
        "value": 11
    },
    {
        "src": "ace_spades.svg",
        "value": 11
    }
];

function disableButton(buttonName) {
    buttonName.disabled = true;
}

function disableChips() {
    for(let i = 0; i < chips.length; i++) {
        chips[i].setAttribute("onclick","");
    }
}

function getCard() {
    return cardsArray[Math.floor(Math.random() * 52)];
}

function start() {
    if(currentWager == 0){
        alert("Musisz coś postawić, żeby zagrać");
    }
    else if(currentWager > money) {
        alert("Masz za mało pieniędzy, wybierz niższą stawkę");
    }
    else {
        disableChips();
        startButton.style.visibility = "hidden";
        buttons.style.visibility = "visible";
        money -= currentWager;
        updateBalanceText();

        dealCards();
    }
}

function selectWager(amount) {
    currentWager = amount;
}

function dealCards() {
    for(let i = 0; i <= 1; i++){

        setTimeout(function() {
            turn = "player";
            drawCard(playerHand,playerBoard);
            turn = "dealer";
            drawCard(dealerHand,dealerBoard);
            turn = "player";
        },i * 1100)
    }
}

function createCard(index, board, hand) {
    let cardImg = document.createElement("img");

    cardImg.src = `./assets/cards/${hand[index].src}`
    cardImg.setAttribute("id",`${turn}-card-${index}`);
    
    if(dealerHand.length == 2 && turn == "dealer") {
        cardImg.src = "./assets/cards/card_back.svg";
    }

    if(index == 0) {
        board.appendChild(cardImg);
    }
    else {
        board.appendChild(cardImg);
    }

}

function drawCard(hand, board) {
    let cardDrawn = getCard();
    hand.push(cardDrawn);

    let cardIndex = hand.length - 1;

    createCard(cardIndex, board, hand);
    updateScore(cardIndex, hand);
    moveCards(hand, board);

    if(playerScore >= 21 && turn == "player") {
        flipHiddenCard();
        checkWin();
    }
    
    updateTextScore();
    updateGame();
}

function moveCards(hand, board) {
    if(hand.length > 2) {
        let cardsMarginValue = parseInt(board.style.marginLeft) || 0;
        board.style.marginLeft = `${cardsMarginValue - 60}px`;
    }
}

function dealerPlay() {
    flipHiddenCard();
    disableButton(hitButton);
    disableButton(standButton);

    if(dealerScore < 17) {
        setTimeout(function(){
            drawCard(dealerHand, dealerBoard);
        },1400);
    }
    else if(dealerScore >= 21) {
        setTimeout(function(){
            checkWin();
        },1100);
    }
    else if(dealerScore >= 17) {
        setTimeout(function(){
            checkWin();
        },1100);
    }
}

function flipHiddenCard() {
    if(dealerHand.length == 2){
        document.getElementById("dealer-card-1").classList.add("flip");

        setTimeout(function(){
            document.getElementById("dealer-card-1").setAttribute("src",`./assets/cards/${dealerHand[1].src}`);
            updateTextScore();
        }, 700);
    }
}

function hit() {
    if(turn == "player") {
        drawCard(playerHand, playerBoard);
    }
}

function stand() {
    if(turn == "player") {
        changeHand();
        dealerPlay();
    }
}

function double() {
    if(money - currentWager <= 0){
        alert("Masz za mało pieniędzy");
        disableButton(doubleButton);
    }
    else {
        money -= currentWager;
        currentWager = currentWager * 2;

        updateBalanceText();
        disableButton(hitButton);
        disableButton(standButton);
        drawCard(playerHand,playerBoard);
        changeHand();
        dealerPlay();
    }
}

function changeHand() {
    if(turn == "player") {
        disableButton(doubleButton);
        
        turn = "dealer";
        dealerStatus = "hit";
    }
}

function checkWin() {
    if(dealerScore == 21) {
        if(playerScore == 21 && dealerScore == 21) {
            gameWinner = "tie";
            winnerText = "Remis";
        }
        else {
            gameWinner = "dealer";
            winnerText = "Wygrał krupier!";
        }
    }
    else if(dealerScore > 21) {
        if(playerScore <= 21){
            gameWinner = "player";
            winnerText = "Wygrał gracz!";
        }
        else {
            gameWinner = "tie";
            winnerText = "Remis";
        }
    }
    else if(dealerScore < 21) {
        if(playerScore <= 21 && playerScore > dealerScore) {
            gameWinner = "player";
            winnerText = "Wygrał gracz!";
        }
        else if(playerScore == dealerScore) {
            gameWinner = "tie";
            winnerText = "Remis";
        }
        else {
            gameWinner = "dealer";
            winnerText = "Wygrał krupier!";
        }
    }
    setTimeout(function(){
        showWinner();
        updateMoneyBalance();
    },1200);
}

function updateGame() {
    if(playerHand.length == 3 || dealerStatus == "hit") {
        disableButton(doubleButton);
    }
    if(turn == "dealer" && dealerStatus == "hit") {
        dealerPlay();
    }
}

function updateMoneyBalance() {
    if(gameWinner == "player") {
        money += currentWager * 2;
    }

    if(gameWinner == "tie") {
        money += currentWager;
    }

    updateBalanceText();
}

function updateBalanceText() {
    balanceText.textContent = `${money}$`;
    sessionStorage.setItem('playerMoney', money);
}

function showWinner() {
    messageTextContainer.style.visibility = "visible";
    messageText.innerHTML = winnerText;
}

function updateTextScore() {
    playerScoreText.innerHTML = `Wynik gracza: ${playerScore}`;

    if(dealerHand.length == 2 && dealerStatus == "start"){
        dealerScoreText.innerHTML = `Wynik krupiera: ${dealerScore - dealerHand[1].value}`;
    }
    else {
        dealerScoreText.innerHTML = `Wynik krupiera: ${dealerScore}`;
    }
}

function updateScore(index, hand) {
    if(turn == "player") {
        playerScore += hand[index].value;
    }

    if(turn == "dealer") {
        dealerScore += hand[index].value;
    }
}

function restartGame() {
    window.location.reload();
}

updateBalanceText();