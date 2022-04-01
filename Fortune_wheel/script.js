// let root = document.querySelector(":root");
let root = document.documentElement.style;

let turn = "player"

let player = document.querySelector(".player_one");

let letters = document.getElementsByClassName("letter");

const cashContainer = document.querySelector(".player__balance");
let cashBalance = 0;

let spins = 0;

let btnSpin = document.querySelector(".btn-spin");

const wheel = document.querySelector(".wheel_animation");
const picker = document.querySelector(".arrow");

const slices = [
    {
        "deg": 0,
        "prize": 100
    },
    {
        "deg": 22.5,
        "prize": 100
    },
    {
        "deg": 45,
        "prize": 100
    },
    {
        "deg": 67.5,
        "prize": 100
    },
    {
        "deg": 90,
        "prize": 100
    },
    {
        "deg": 112.5,
        "prize": 100
    },
    {
        "deg": 135,
        "prize": 100
    },
    {
        "deg": 157.5,
        "prize": 100
    },
    {
        "deg": 180,
        "prize": 100
    },
    {
        "deg": 202.5,
        "prize": 100
    },
    {
        "deg": 225,
        "prize": 100
    },
    {
        "deg": 247.5,
        "prize": 100
    },
    {
        "deg": 270,
        "prize": 100
    },
    {
        "deg": 292.5,
        "prize": 100
    },
    {
        "deg": 315,
        "prize": 100
    },
    {
        "deg": 337.5,
        "prize": 100 
    }
];

function drawSlice() {
    return slices[Math.floor(Math.random() * 16)]
}

function start() {
    spin();
}

function spin() {
    button();

    let slice = drawSlice();

    root.setProperty('--rotate-end',`${slice.deg}deg`);

    wheel.classList.remove("spin");
    picker.classList.remove("pointer");
    void wheel.offsetWidth;

    setTimeout(function(){
        picker.classList.add("pointer");
        wheel.classList.add("spin");
    },1)

    setTimeout(function(){
        updateBalance(slice);
        root.setProperty('--rotate-start',` ${slice.deg}deg`);
        button();
    },4000)

    spins += 1;
}

function updateBalance(slice) {
    if(slice.prize == "BANKRUPT"){
        cashBalance = 0
    } else {
        cashBalance += slice.prize;
    }
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