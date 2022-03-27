// let root = document.querySelector(":root");
let root = document.documentElement.style;

let player = document.querySelector(".player_one");

let letters = document.getElementsByClassName("letter");

const cashContainer = document.querySelector(".balance");
let cashBalance = 0;

let spins = 0;

let btnSpin = document.querySelector(".btn-spin");

const slices = [
    {
        "deg": "0",
        "prize": 100
    },
    {
        "deg": "22.5",
        "prize": 100
    },
    {
        "deg": "45",
        "prize": 100
    },
    {
        "deg": "67.5",
        "prize": 100
    },
    {
        "deg": "90",
        "prize": 100
    },
    {
        "deg": "112.5",
        "prize": 100
    },
    {
        "deg": "135",
        "prize": 100
    },
    {
        "deg": "157.5",
        "prize": 100
    },
    {
        "deg": "180",
        "prize": 100
    },
    {
        "deg": "202.5",
        "prize": 100
    },
    {
        "deg": "225",
        "prize": 100
    },
    {
        "deg": "247.5",
        "prize": 100
    },
    {
        "deg": "270",
        "prize": 100
    },
    {
        "deg": "292.5",
        "prize": 100
    },
    {
        "deg": "315",
        "prize": 100
    },
    {
        "deg": "337.5",
        "prize": 100 
    }
];

function drawSlice() {
    return slices[Math.floor(Math.random() * 16)]
}

function start() {
    addClickEvent();
    if(spins < 3){
        player.classList.add("active_player");
        spin();
    } else {
        alert("Zakreciłeś kołem 3 razy");
    }
}

function spin() {
    button();

    const object = document.querySelector("#test").contentDocument; //TO DO: dodanie tych zmiennych po zaladowaniu pliku svg
    const wheel = object.querySelector(".wheel_animation");
    const picker = object.querySelector(".arrow");
    let slice = drawSlice();

    root.setProperty('--rotate-end',` ${slice.deg}deg`);

    wheel.classList.remove("spin");
    picker.classList.remove("pointer");
    void wheel.offsetWidth;

    setTimeout(function(){
        picker.classList.add("pointer");
        wheel.classList.add("spin");
    },1)

    setTimeout(function(){
        // updateBalance(slice);
        // root.setProperty('--rotate-start',` ${slice.deg}deg`);
        button();
    },3000)

    spins += 1;
}

function updateBalance(slice, player) {
    cashBalance += slice.prize;
    cashContainer.textContent = `Pieniądze: ${cashBalance}$`;
}

function button() {
    if(btnSpin.disabled){
        btnSpin.disabled = false;
    }
    else {
        btnSpin.disabled = true;
    }
}

// function changePlayer() {

// }

// function changeBackground(player) {
//     player.classList.add("active_player");
// }

function addClickEvent() {
    for(let i = 0; i < letters.length; i++){
        letters[i].addEventListener("click",function(){
            changeLetterState(i);
        },false)
    }
}

function removeClickEvent() {
    for(let i = 0; i < letters.length; i++){
        letters[i].removeEventListener("click",function(){
            changeLetterState(i);
        },false)
    }
}

function changeLetterState(letter) {
    letters[letter].classList.add("letter-disabled");
}