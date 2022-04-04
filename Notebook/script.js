const textContainer = document.querySelector(".notebook__text");
const headingContainer = document.querySelector(".notebook__heading");
const colorContainer = document.querySelector(".color-picker");
const fileContainer = document.querySelector(".picture");
const fontSizeContainer = document.querySelector(".font-size");
const fontFamilyContainer = document.querySelector(".font");

const notesArray = [];

let isBold = false
let isUnderlined = false;
let isItalic = false;

let textColor = colorContainer.value;

function Note(title,text) {
    this.title = title;
    this.text = text;
}

function createNote() {
    if(textContainer.textContent == "" && headingContainer.textContent == "") {
        alert("Wprowadź wszystkie dane");
    } else {
        let noteText = textContainer.textContent;
        let noteTitle = headingContainer.textContent;

        let note = new Note(noteTitle,noteText);
        notesArray.push(note);

        resetText();
    }
}

function chooseNote() {
    let chosenNote = parseInt(prompt("Wybierz notatke jako index: "))

    if(isNaN(chosenNote) || chosenNote > notesArray.length-1) {
        parseInt(prompt("Wprowadz prawidlowy index notatki :)"))
    } else {
        resetText();
        showNote(chosenNote);
    }
}

function showNote(chosenNote) {
    textContainer.textContent = notesArray[chosenNote].text;
    headingContainer.textContent = notesArray[chosenNote].title;
}

function resetText() {
    textContainer.textContent = "";
    headingContainer.textContent = "";
}

function deleteNote() {
    let chosenNote = parseInt(prompt("Wybierz notatke jako index: "))

    if(isNaN(chosenNote) || chosenNote > notesArray.length-1) {
        parseInt(prompt("Wprowadz prawidlowy index notatki :)"))
    } else {
        notesArray.splice(chosenNote,1);
        resetText();
    }
}

function boldText() {
    if(isBold) {
        textContainer.style.fontWeight = "inherit";
        isBold = false;
    } else {
        textContainer.style.fontWeight = "bold";
        isBold = true;
    }
}

function underlineText() {
    if(isUnderlined) {
        textContainer.style.textDecoration = "none";
        isUnderlined = false;
    } else {
        textContainer.style.textDecoration = "underline";
        isUnderlined = true;
    }
}

function italicText() {
    if(isItalic) {
        textContainer.style.fontStyle = "inherit";
        isItalic = false;
    } else {
        textContainer.style.fontStyle = "italic";
        isItalic = true;
    }
}

function centerText() {
    textContainer.style.textAlign = "center";
}

function leftText() {
    textContainer.style.textAlign = "left";
}

function rightText() {
    textContainer.style.textAlign = "right";
}

function changeFontSize() {
    textContainer.style.fontSize = `${this.value}px`;
}

fontSizeContainer.addEventListener("mouseout",changeFontSize);

function changeTextColor() {
    textContainer.style.color = `${this.value}`;
}

colorContainer.addEventListener("mouseout",changeTextColor);

function changeFontFamily() {
    textContainer.style.fontFamily = `${this.value}`
}

fontFamilyContainer.addEventListener("mouseout",changeFontFamily);
