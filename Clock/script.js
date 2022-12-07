const hourHand = document.getElementById("hour_hand");
const minuteHand = document.getElementById("minute_hand");
const secondHand = document.getElementById("second_hand");


function runClock(){
    const date = new Date();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();

    let hourDegrees = ((hour * 360) / 12) + ((minute * 6) / 12);
    let minuteDegrees = ((minute * 360) / 60) + ((seconds * 6) / 60);
    let secondsDegrees = ((seconds * 360) / 60);

    hourHand.style.transform = `rotate(${hourDegrees}deg)`
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
}

setInterval(runClock,1000);
runClock();