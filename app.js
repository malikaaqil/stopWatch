let timer = document.getElementById("timer");

let startBtn = document.getElementById("startBtn");
let pauseBtn = document.getElementById("pauseBtn");
let resetBtn = document.getElementById("resetBtn");

let hours = 0;
let minutes = 0;
let seconds = 0;

let flagTimeStop = true;

startBtn.addEventListener("click", () => {
    if (flagTimeStop) {
        flagTimeStop = false
        runTime()
        startBtn.innerHTML = "Start"
    }
})

function runTime() {
    if(flagTimeStop == false){

        hours = Number(hours)
        minutes = Number(minutes)
        seconds = Number(seconds)

        seconds++

        if(seconds == 60){
            minutes++;
            seconds = 0;
        }

        if(minutes == 60){
            hours++;
            minutes = 0;
            seconds = 0;
        }

        if(seconds < 10){
            seconds = `0${seconds}`
        }
        
        if(minutes < 10){
            minutes = `0${minutes}`
        }

        if(hours < 10){
            hours = `0${hours}`
        }

        timer.innerHTML = `${hours} : ${minutes} : ${seconds}`

        setTimeout("runTime()", 1000)

    }

}

pauseBtn.addEventListener("click", () => {
    if(flagTimeStop == false){
        flagTimeStop = true
        startBtn.innerHTML = "Resume"
    }
})

resetBtn.addEventListener("click", () => {
    flagTimeStop = true;
    timer.innerHTML = `00 : 00 : 00`;
    startBtn.innerHTML = "Start"

    hours = 0;
    minutes = 0;
    seconds = 0;
})