let root = document.documentElement.style;

//Zagadka i litery
const puzzleCategory = document.querySelector(".puzzle__category");
const letters = document.getElementsByClassName("letter-cell");

//Saldo gracza
const cashContainer = document.querySelector(".player__balance");
let cashBalance = 0;

let isFound = false;

//Przyciski
const btnSpin = document.querySelector(".btn-spin");
const btnBuy = document.querySelector(".btn-buy");
const btnStart = document.querySelector(".btn-start");
const btnEnd = document.querySelector(".btn-end");

//Animacja kola
const wheel = document.querySelector(".wheel_animation");
const picker = document.querySelector(".arrow");

//Tablica zagadek
const puzzles = [
    {
        "solution": "wiking",
        "category": "Tytuł filmu"
    },
    {
        "solution": "morbius",
        "category": "Tytuł filmu"
    },
    {
        "solution": "batman",
        "category": "Tytuł filmu"
    },
    {
        "solution": "maciej cichoń",
        "category": "Osoba"
    },
    {
        "solution": "johny deep",
        "category": "Osoba"
    },
    {
        "solution": "diamonds",
        "category": "Tytuł piosenki"
    },
    {
        "solution": "the lazy song",
        "category": "Tytuł piosenki"
    },
    {
        "solution": "laugh now cry later",
        "category": "Tytuł piosenki"
    },
    {
        "solution": "krzyżacy",
        "category": "Tytuł książki"
    },
    {
        "solution": "jądro ciemności",
        "category": "Tytuł książki"
    },
    {
        "solution": "ludzie bezdomni",
        "category": "Tytuł książki"
    }
];

let puzzle = drawPuzzle();
let chars = puzzle.solution.toUpperCase().split('');

//Tablica pól
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
    return slices[Math.floor(Math.random() * slices.length)]
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

    showCategory();
}

function spin() {
    let slice = drawSlice();

    button(btnSpin);
    button(btnBuy);
    button(btnEnd);

    root.setProperty('--rotate-end',`${slice.deg}deg`);

    resetAnimation();

    setTimeout(function(){
        let letter;
        isFound = false;

        while(true) {
            letter = prompt("Wprowadz spółgłoskę: ");
            if(/[^aeiouyąę]{1}/.test(letter)) {
                break;
            }
        }

        updateBoard(letter);

        if(isFound == true) updateBalance(slice);

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
    puzzleCategory.textContent = `Kategoria: ${puzzle.category}`;
}

function solve() {
    let answer = prompt("Wprowadz odpowiedz: ");
    answer.toLowerCase() == puzzle.solution ? showWinner() : alert("Nie udało ci się zgadnąć hasła");
}

function showWinner() {
    alert("Zgadłeś hasło!!");
    showPuzzleSolution();
    setTimeout(() => {
        window.location.reload();
    },3000);
}

function showPuzzleSolution() {
    for(let i = 0; i < chars.length; i++) {
        if(chars[i] == " ") {
            continue;
        } else {
            letters[i].textContent = chars[i];
        }
    }
}

function buyVowel() {
    if(cashBalance >= 100) {
        let vowel;
        cashBalance -= 100;
        cashContainer.textContent = `Pieniądze: ${cashBalance}$`;

        while(true) {
            vowel = prompt("Wprowadz samogłoskę: ");
            if(/[aeiouyąę]{1}/.test(vowel)) {
                break;
            }
        }
        updateBoard(vowel);   
    } else {
        alert("Masz za mało pieniędzy");
    }
}

function updateBoard(letter) {
    let regex = new RegExp(`${letter}`,'gi');
    let matches = [...puzzle.solution.matchAll(regex)];

    if(matches.length == 0) {
        alert("Nie ma takiej litery w słowie");
        isFound = false;
    } else {
        isFound = true;
        matches.forEach(match => {
            letters[match.index].textContent = chars[match.index];
        });
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

function buttons() {
    btnStart.style.display = "none";
    btnBuy.style.display = "block";
    btnSpin.style.display = "block";
    btnEnd.style.display = "block";
}