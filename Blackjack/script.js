
const cardsContainers = document.querySelectorAll(".card");
const buttons = document.getElementById("buttons");

const cardsArray = [
    "ace_clubs",
    "ace_diamond",
    "ace_heart",
    "ace_spades",
    "eight_spades",
    "eight_clubs",
    "eight_diamond",
    "eight_heart",
    "five_clubs",
    "five_diamond",
    "five_heart",
    "five_spades",
    "four_clubs",
    "four_heart",
    "four_diamond",
    "four_spades",
    "three_clubs",
    "three_heart",
    "three_diamond",
    "three_spades",
    "two_heart",
    "two_clubs",
    "two_diamond",
    "two_spades",
    "six_heart",
    "six_spades",
    "six_diamond",
    "six_clubs",
    "seven_clubs",
    "seven_diamond",
    "seven_heart",
    "seven_spades",
    "nine_heart",
    "nine_spades",
    "nine_clubs",
    "nine_diamond",
    "ten_diamond",
    "ten_spades",
    "ten_heart",
    "ten_clubs",
    "jack_clubs",
    "jack_heart",
    "jack_spades",
    "jack_diamond",
    "queen_diamond",
    "queen_heart",
    "queen_spades",
    "queen_clubs",
    "king_clubs",
    "king_diamond",
    "king_heart",
    "king_spades"
]

function createCards() {
    for(let i = 0; i < cardsContainers.length; i++){
        let img = document.createElement("img");
        img.classList.add("card__img");
        img.src = `./assets/cards/card_back.svg`;

        let random_card = Math.floor(Math.random() * 52);

        setTimeout(function() {
            cardsContainers[i].appendChild(img);
            img.classList.add("flip");
        },i * 500)
    }
}

function start() {
    buttons.style.visibility = "visible";
    document.getElementById("start-button").style.visibility = "hidden";

    createCards();

}

function drawCard() {

}

function stand() {
    buttons.style.pointerEvents = "none";
}

function double() {

}