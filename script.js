const sec = document.querySelector('p #sec');
const min = document.querySelector('p #min');
const hour = document.querySelector('p #hour');

const start = document.querySelector('.container #start');
const stop = document.querySelector('.container #stop');
const reset = document.querySelector('.container #reset');

let Interval;
let ss = 00;
let mm = 00;
let hh = 00;

//Start Button Click Event
start.addEventListener("click", () =>{

    Interval = setInterval(() => {
        if (ss < 59) {
            ss += 1;
            sec.innerHTML = ss < 10 ? "0" + ss : ss;  
        }
        else{
            ss = 0;
            sec.innerHTML = ss < 10 ? "0" + ss : ss;         
            if (mm < 59) {      
                mm += 1;
                min.innerHTML = mm < 10 ? "0" + mm : mm ;          
            }
            else{
                hh += 1;
                hour.innerHTML = hh < 10 ? "0" + hh : hh;
            }
        }
    }, 1000);

    
    
}, {once : true});

//Stop Button Click Event
stop.addEventListener("click",() =>{
    clearInterval(Interval);
    
});

//Reset Button Click Event
reset.addEventListener("click", () =>{
    location.reload();
});
