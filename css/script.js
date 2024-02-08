let start= document.getElementById("start-btn");
let stop= document.getElementById("stop-btn");
let reset= document.getElementById("reset-btn");

let hour =  0;
let minute = 0;
let second = 0;

    document.getElementById("hour").innerHTML = "00";
    document.getElementById("minute").innerHTML = "00";
    document.getElementById("second").innerHTML = "00";

start.addEventListener("click",function(){
    timer = true;
    stopWatch();
});
stop.addEventListener("click",function(){
    timer = false;
});
reset.addEventListener("click",function(){
    timer = false;
    hour = 0 ;
    minute = 0 ;
    second = 0 ;
   
    document.getElementById("hour").innerHTML = "00";
    document.getElementById("minute").innerHTML = "00";
    document.getElementById("second").innerHTML = "00";
   
});

function stopWatch(){
   
    if(timer==true){
        second++;
        if(second == 60){
            minute++;
             second = 0;
        }
        if (minute == 60) { 
            hour++; 
            minute = 0; 
            second = 0; 
        }  
    }
       
    let h = hour;
    let m = minute;
    let s = second;

    if(hour < 10){
        h = "0" + h;
    }
    if(minute < 10){
        m = "0" + m;
    }
    if(second < 10){
        s = "0" + s;
    }

    document.getElementById("hour").innerHTML = h ;
    document.getElementById("minute").innerHTML = m ;
    document.getElementById("second").innerHTML = s ;
     
}
setInterval(stopWatch,1000);

