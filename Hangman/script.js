const keyboardKeys = document.querySelectorAll('.key');
const passwordContainer = document.querySelector('.password');
const svgParts = document.querySelectorAll('.part');

const modalContainer = document.querySelector('.modal');
const modalText = document.querySelector('.modal__description');
const closeModalButton = document.querySelector('.close_modal');

const hintButtonContainer = document.querySelector('.btn--hint');
const hintTextContainer = document.querySelector('.hint');
const categoryText = document.querySelector('.category');

const restartButtonContainer = document.querySelector('.btn--restart');

let passwordLettersContainer;
let passwordLetters = passwordName.split('');
let currentSvgPart = 0;
let result = [];

function createPassword() {
    for (let letter of passwordLetters) {
        let div = document.createElement('div');
        div.classList.add('letter');

        if (letter === " ") {
            div.setAttribute('id','space');   
        }

        passwordContainer.appendChild(div);
    }

    passwordLettersContainer = document.querySelectorAll('.letter');
}

function addListenersToKeys() {
    keyboardKeys.forEach(key => {
        key.addEventListener('click', clickKey);
    }); 
}

function clickKey() {
    let isCorrect = checkLetter(this.textContent);

    if (isCorrect) {
        this.style.backgroundColor = "green";
    } else {
        this.style.backgroundColor = "red";
    }

    this.removeEventListener('click', clickKey);
}

function checkLetter(clickedLetter) {
    if (passwordName.includes(clickedLetter.toUpperCase())) {
        let foundLettersIndex = [];

        passwordLetters.forEach( (letter, index) => {
            if (clickedLetter.toUpperCase() == letter) foundLettersIndex.push(index);
        });

        foundLettersIndex.forEach(index => {
            passwordLettersContainer[index].textContent = passwordLetters[index];
            result[index] = passwordLetters[index];
        });

        checkWin();

        return true;
    } else {
        drawSvgPart();

        if (currentSvgPart == 10) {
            showModal(false);
        }

        currentSvgPart++;

        return false;
    }
}

function checkWin() {
    if (passwordName == result.join('')) showModal(true);
}

function drawSvgPart() {
    svgParts[currentSvgPart].classList.add("animate-part");
}

function showModal(isWin) {
    if (isWin) {
        modalText.textContent = "Gratulacje, wygrałeś!";
    } else {
        modalText.textContent = "Przegrałeś zagraj jeszcze raz";
    }
    
    modalContainer.showModal();
    blockButtons();
}

function blockButtons() {
    keyboardKeys.forEach( key => key.removeEventListener('click', clickKey));
}

closeModalButton.addEventListener('click', () => modalContainer.close());
hintButtonContainer.addEventListener('click', () => hintTextContainer.textContent = passwordHint);
restartButtonContainer.addEventListener('click', () => window.location.reload());


categoryText.textContent = `Kategoria: ${passwordCategory}`;
createPassword();
addListenersToKeys();