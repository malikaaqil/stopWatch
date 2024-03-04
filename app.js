let timer = document.getElementById("timer");

let startBtn = document.getElementById("startBtn");
let pauseBtn = document.getElementById("pauseBtn");
let resetBtn = document.getElementById("resetBtn");

let hours = 0;
let minutes = 0;
let seconds = 0;

let flag = true;

startBtn.addEventListener("click", () => {
    if(flag){
        flag = false
        console.log(flag);
    }
})

pauseBtn.addEventListener("click", () => {
    if (flag == false) {

        flag = true
        console.log(flag);
        
    }
})
