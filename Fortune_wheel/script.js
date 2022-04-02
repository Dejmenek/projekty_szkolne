let root = document.documentElement.style;

//Zagadka i litery
const puzzleCategory = document.querySelector(".puzzle__category");
const letters = document.getElementsByClassName("letter-cell");

//Saldo gracza
const cashContainer = document.querySelector(".player__balance");
let cashBalance = 0;

let spins = 0;

//Przyciski
const btnSpin = document.querySelector(".btn-spin");
const btnBuy = document.querySelector(".btn-buy");
const btnStart = document.querySelector(".btn-start");
const btnEnd = document.querySelector(".btn-end");

//Animacja kola
const wheel = document.querySelector(".wheel_animation");
const picker = document.querySelector(".arrow");

//Tablica zagadek
const puzzles = ["SKIBA","EKONOMIK","CSS","MC CICHY","BAZA DANYCH"]

let puzzle = drawPuzzle();
let chars = puzzle.split('');

const slices = [
    {
        "deg": 11.25,
        "prize": 100
    },
    {
        "deg": 33.75,
        "prize": 1000
    },
    {
        "deg": 56.25,
        "prize": 500
    },
    {
        "deg": 78.75,
        "prize": 100
    },
    {
        "deg": 101.25,
        "prize": "BANKRUPT"
    },
    {
        "deg": 123.75,
        "prize": 500
    },
    {
        "deg": 146.25,
        "prize": 800
    },
    {
        "deg": 168.75,
        "prize": 300
    },
    {
        "deg": 191.25,
        "prize": 500
    },
    {
        "deg": 213.75,
        "prize": 400
    },
    {
        "deg": 236.25,
        "prize": 900
    },
    {
        "deg": 258.75,
        "prize": 300
    },
    {
        "deg": 281.25,
        "prize": 100
    },
    {
        "deg": 303.75,
        "prize": "BANKRUPT"
    },
    {
        "deg": 326.25,
        "prize": 300
    },
    {
        "deg": 348.75,
        "prize": 200 
    }
];

function drawSlice() {
    return slices[Math.floor(Math.random() * 16)]
}

function drawPuzzle() {
    return puzzles[Math.floor(Math.random() * puzzles.length)]
}

function start() {
    buttons();
    createPuzzle();
}

function createPuzzle() {
    for(let i = 0; i < chars.length; i++) {
        if(chars[i] == " ") {
            continue;
        } else {
            letters[i].style.backgroundColor = "white";
        }
    }

    // showCategory();

}

function spin() {
    let slice = drawSlice();

    button(btnSpin);
    button(btnBuy);
    button(btnEnd);

    root.setProperty('--rotate-end',`${slice.deg}deg`);

    resetAnimation();

    setTimeout(function(){
        updateBalance(slice);
        updateBoard();
        root.setProperty('--rotate-start',` ${slice.deg}deg`);

        button(btnSpin);
        button(btnBuy);
        button(btnEnd);
    },4000)
}

function updateBalance(slice) {
    if(slice.prize == "BANKRUPT"){
        cashBalance = 0;
    } else {
        cashBalance += slice.prize;
    }
    cashContainer.textContent = `Pieniądze: ${cashBalance}$`;
}

function button(btn) {
    if(btn.disabled){
        btn.disabled = false;
    }
    else {
        btn.disabled = true;
    }
}

function showCategory() {
    puzzleCategory.textContent = `Kategoria ${category}`;
}

function solve() {

}

function buyVowel() {

}

function updateBoard(letter) {
    letter = 'C';
    let position = chars.indexOf(letter);
    let results = [];

    if(position == -1) {
        alert("Nie ma takiej litery w słowie");
    } else {
        while (position != -1) {
            results.push(position);
            position = chars.indexOf(letter, position + 1);
        }

        for(let i = 0; i < results.length; i++) {
            letters[results[i]].textContent = chars[results[i]];
        }
    }
}

function resetAnimation() {
    wheel.classList.remove("spin");
    picker.classList.remove("pointer");
    void wheel.offsetWidth;

    setTimeout(function(){
        picker.classList.add("pointer");
        wheel.classList.add("spin");
    },1)
}

function chooseLetter() {

}

function buttons() {
    btnStart.style.display = "none";
    btnBuy.style.display = "block";
    btnSpin.style.display = "block";
    btnEnd.style.display = "block";
}