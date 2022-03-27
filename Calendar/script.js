const daysContainer = document.querySelector(".days");
const namesContainer = document.querySelector(".names");
const names = ["Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota","Niedziela"];

function getDays(monthIndex, year) {
    return new Date(year, monthIndex + 1, 0).getDate();
}

function getFirstDay(monthIndex,year) {
    return new Date(year,monthIndex,0).getDay();
}


function createMonth() {
    let date = new Date(document.getElementById("data").value)

    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    let monthStart = getFirstDay(monthIndex,year);
    
    daysContainer.innerHTML = "";
    namesContainer.innerHTML = "";

    for(let j = 0; j < 7; j++) {
        let dayName = names[j];
        let name = document.createElement("div");
        name.classList.add("day__name");

        name.textContent = dayName;
        namesContainer.appendChild(name);
    }

    for(let k = 0; k < monthStart; k++) {
        let day = document.createElement("div");
        day.classList.add("day");
        daysContainer.appendChild(day);
    }

    for(let i = 1; i <= getDays(monthIndex,year); i++) {
        let day = document.createElement("div");
        day.classList.add("day");
        day.textContent = i;
        if((i + monthStart) % 7 == 0) {
            day.style.backgroundColor = "#CC2936";
            daysContainer.appendChild(day);
        } else {
            daysContainer.appendChild(day); 
        }
    }
}