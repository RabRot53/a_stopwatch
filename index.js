const startbtn = document.querySelector("#startbtn");
const pausebtn = document.querySelector("#pausebtn");
const resetbtn = document.querySelector("#resetbtn");
const display = document.querySelector("#display");

let hours = 0;
let mins = 0;
let secs = 0;
let starttime = 0;
let elapsetime = 0;
let pause = true;
let checked;

startbtn.addEventListener("click",() =>{
    if(pause) {  
        pause = false;
        starttime = Date.now() - elapsetime;
        checked=setInterval(updatetime,1000);
    }}
);
pausebtn.addEventListener("click", () =>{
    if(!pause)  {
        pause=true;
        elapsetime = Date.now() - starttime;
        clearInterval(checked);
    }
});
resetbtn.addEventListener("click", () =>{
    pause = true;
    clearInterval(checked);
    starttime = 0;
    elapsetime = 0;
    hours = 0;
    mins = 0;
    secs = 0;
    display.textContent = " 00 : 00 : 00"
});

function updatetime() {
    elapsetime = Date.now() - starttime;
    secs = Math.floor((elapsetime / 1000) % 60);
    mins = Math.floor((elapsetime / (1000 * 60)) % 60);
    hours = Math.floor((elapsetime / (1000 * 60 * 60)) % 60);
    
    secs = format(secs);
    mins = format(mins);
    hours = format(hours);
    display.textContent = `${hours} : ${mins} : ${secs}`;

    function format(unit)   {
        unit = (("0" + unit)).length>2? unit : "0" + unit;
        return unit;
    }

}