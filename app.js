alert("Hello user!")
var timer;
var hours = 0;
var minutes = 0;
var seconds = 0;
function hourUp() {
    var hour = document.getElementById("hour");
    hour.innerHTML = parseInt(hour.innerHTML)+1;
    if(parseInt(hour.innerHTML)>59){
        hour.innerHTML = 0;
    }
}
function hourDown() {
    var hour = document.getElementById("hour");
    hour.innerHTML = parseInt(hour.innerHTML)-1;
    if(parseInt(hour.innerHTML)<0){
        hour.innerHTML = 59;
    }
}
function minuteUp() {
    var minute = document.getElementById("minute");
    minute.innerHTML = parseInt(minute.innerHTML)+1;
    if(parseInt(minute.innerHTML)>59){
        minute.innerHTML = 0;
    }
}
function minuteDown() {
    var minute = document.getElementById("minute");
    minute.innerHTML = parseInt(minute.innerHTML)-1;
    if(parseInt(minute.innerHTML)<0){
        minute.innerHTML = 59;
    }
}
function secondUp() {
    var second = document.getElementById("second");
    second.innerHTML = parseInt(second.innerHTML)+1;
    if(parseInt(second.innerHTML)>59){
        second.innerHTML = 0;
    }
}
function secondDown() {
    var second = document.getElementById("second");
    second.innerHTML = parseInt(second.innerHTML)-1;
    if(parseInt(second.innerHTML)<0){
        second.innerHTML = 59;
    }
}
function StartTimer() {
    var buttons = document.getElementsByTagName("button");
    for(var i = 0; i<buttons.length-1;i+=1){
        buttons[i].style.display="none";
    }
    hours = parseInt(document.getElementById ("hour").innerHTML);
    minutes = parseInt(document.getElementById ("minute").innerHTML);
    seconds = parseInt(document.getElementById ("second").innerHTML);
    timer = setInterval(Countdown,1000);
}
function Countdown(){
    seconds-=1;
    if(seconds<0){
        minutes-=1;
        seconds=59;
        if(minutes<0){
            hours-=1;
            minutes=59;
            if(hours<0){
                hours=0;
                minutes=0;
                seconds=0;
            }
        }
    }
    if(seconds==0 && minutes==0 && hours==0){
        document.getElementById("mymoldal").style.display="block";
        clearInterval(timer);
    }
    document.getElementById("second").innerHTML=seconds;
    document.getElementById("minute").innerHTML=minutes;
    document.getElementById("hour").innerHTML=hours;
}
function ResetTimer() {
    var hour = document.getElementById("hour");
    hour.innerHTML=0;
    var minute = document.getElementById("minute");
    minute.innerHTML=0;
    var second = document.getElementById("second");
    second.innerHTML=0;
}
function closemoldal(){
    location.reload();
}