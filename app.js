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

        seconds++
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
