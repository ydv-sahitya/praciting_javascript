const timerDayEL = document.querySelector(".timer__day");
const timerHourEL = document.querySelector(".timer__hour");
const timerMinEL = document.querySelector(".timer__min");
const timeSecEL = document.querySelector(".timer__sec");

function getTimeDifference(start, end) {
    let milliseconds = Math.floor(end - start);
    let seconds = Math. floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours = hours - (days * 24);
    minutes = minutes - (days * 24 * 60) - (hours * 60)
    seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
    
    return {
        rDays: days,
        rHours: hours,
        rMintues: minutes,
        rSeconds: seconds
    }
}

let timer = setInterval(function() {
    const startdate = new Date();
    const endDate = new Date("April 24, 2024 09:11:00");

    let timeDifferenceObj = getTimeDifference(startdate, endDate);
    timerDayEL.textContent = timeDifferenceObj.rDays;
    timerDayEL.textContent = timeDifferenceObj.rHours;
    timerDayEL.textContent = timeDifferenceObj.rMintues;
    timerDayEL.textContent = timeDifferenceObj.rSeconds;

},1000)
