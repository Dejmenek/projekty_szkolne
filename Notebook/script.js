const textContainer = document.querySelector(".notebook__text");
const headingContainer = document.querySelector(".notebook__heading");

const accessPanel = document.querySelector(".access-panel__content");
const accessOpen = document.querySelector(".access-panel__open");
const accessClose = document.querySelector(".access-panel__close");

const boldButton = document.querySelector("#bold-text");
const italicButton = document.querySelector("#italic-text");
const underlineButton = document.querySelector("#underline-text");
const lineButton = document.querySelector("#line");

const listButton = document.querySelector("#list");

const fontSizeContainer = document.querySelector(".font-size");
const fontFamilyContainer = document.querySelector(".font");

const colorContainer = document.querySelector(".color-picker");
const imageButton = document.querySelector(".image");

const notesArray = [];

let isItalic = false;
let isLine = false

let textColor = colorContainer.value;

function Note(title,text) {
    this.title = title;
    this.text = text;
}

function createNote() {
    if(textContainer.textContent == "" && headingContainer.textContent == "") {
        alert("Wprowadź wszystkie dane");
    } else {
        let noteText = textContainer.innerHTML;
        let noteTitle = headingContainer.textContent;

        let note = new Note(noteTitle,noteText);
        notesArray.push(note);

        resetText();
    }
}

function chooseNote() {
    let chosenNote = parseInt(prompt("Wybierz numer notatki:"))

    if(isNaN(chosenNote) || chosenNote >= notesArray.length) {
        alert("Wprowadz prawidlowy numer notatki :)");
    } else {
        resetText();
        showNote(chosenNote);
    }
}

function showNote(chosenNote) {
    textContainer.innerHTML = notesArray[chosenNote].text;
    headingContainer.textContent = notesArray[chosenNote].title;
}

function resetText() {
    textContainer.textContent = "";
    headingContainer.textContent = "";
}

function deleteNote() {
    let chosenNote = parseInt(prompt("Wybierz numer notatki:"))

    if(isNaN(chosenNote) || chosenNote >= notesArray.length) {
        alert("Wprowadz prawidlowy numer notatki :)");
    } else {
        notesArray.splice(chosenNote,1);
        resetText();
    }
}

boldButton.addEventListener("click", () => {
    textContainer.classList.toggle("bold");
})

underlineButton.addEventListener("click", () => {
    textContainer.classList.toggle("underline");
})


italicButton.addEventListener("click", () => {
    textContainer.classList.toggle("italic");
})

lineButton.addEventListener("click", () => {
    textContainer.classList.toggle("line-through");
})

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

fontSizeContainer.addEventListener("change",changeFontSize);

function changeTextColor() {
    textContainer.style.color = `${this.value}`;
}

colorContainer.addEventListener("change",changeTextColor);

function changeFontFamily() {
    textContainer.style.fontFamily = `${this.value}`
}

fontFamilyContainer.addEventListener("change",changeFontFamily);

function createBulletList() {
    let list = document.createElement("ul");
    textContainer.appendChild(list);
}

function addImg() {
    if(imageButton.value != "") {
        let img = document.createElement('img');
        let link = imageButton.value;
        img.setAttribute('src',link);
        textContainer.appendChild(img);
    } else {
        alert("Wypełnij pole linkiem do zdjęcia");
    }
}

 accessOpen.addEventListener("click", () => {
    accessOpen.style.display = "none";
    accessPanel.style.width = "300px";
});

accessClose.addEventListener("click", () => {
    accessOpen.style.display = "block";
    accessPanel.style.width = "0";
});