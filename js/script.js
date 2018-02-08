var strgLocDat = window.localStorage;
var updateTimeInterval;

function timerTriggered(){
    if(strgLocDat.getItem("timerStart") == 0){
        startTimer();
        changeToEnd();
    }else{
        endTimer();
        changeToStart();
    }
}
function endTimer(){
    strgLocDat.setItem("timerStart", 0);
    clearInterval(updateTimeInterval);
}
function changeToEnd(){
    var buttonStyle = document.getElementById('bathroomBreakButton');
    buttonStyle.style.backgroundColor = "#fffb31";
    buttonStyle.style.color = "black";
    document.getElementsByTagName('h1')[0].innerHTML = "End";
}
function startTimer(){
    strgLocDat.setItem("timerStart", 1);
    var date = new Date();
    strgLocDat.setItem("tHours", date.getHours());
    strgLocDat.setItem("tMinutes", date.getMinutes());
    strgLocDat.setItem("tSeconds", date.getSeconds());
    updateTimeInterval = setInterval(updateTime, 1000);
}
function updateTime(){
    var newTime = new Date();
    var hours = newTime.getHours() - strgLocDat.getItem("tHours");
    var minutes = newTime.getMinutes() - strgLocDat.getItem("tMinutes");
    var seconds = newTime.getSeconds() - strgLocDat.getItem("tSeconds");
    if(seconds < 0){
        seconds += 60;
        minutes--;
    }
    if(minutes < 0){
        minutes += 60;
        hours--;
    }
    if(hours < 0){
        hours += 24;
    }
    calculateMoney(hours, minutes, seconds);
    document.getElementById("timeElapsed").innerHTML = adjust(hours) + ":" + adjust(minutes) + ":" + adjust(seconds);
}
function calculateMoney(hours, minutes, seconds){
    var time = seconds + minutes*60 + hours*360;
    var money = strgLocDat.getItem("salary") * time;
    console.log(money);
    document.getElementById("moneyEarned").innerHTML = "You Earned: $" + Math.floor(money) + "." + adjust(Math.floor(money*100%100));
    
}
function adjust(number){
    if(number < 10){
        return "0" + number;
    }else{
        return number;
    }
}
function changeToStart(){
    var buttonStyle = document.getElementById('bathroomBreakButton');
    buttonStyle.style.backgroundColor = null;
    buttonStyle.style.color = null;
    document.getElementsByTagName('h1')[0].innerHTML = "Start";
}
//resets UI
function firstTimeLoad(){
    if(strgLocDat.getItem("loadedBefore") != 1){
        setUp();
    }else{
        restorePreviousSession();
    }
}
//
function setUp(){
    strgLocDat.setItem("timerStart", 0);
    strgLocDat.setItem("salary", 0.00291666);
    
    strgLocDat.setItem("loadedBefore", 1);
    strgLocDat.setItem("payHourly", -1);
    
    strgLocDat.setItem("payDaily", -1);
    
    strgLocDat.setItem("payYearly", -1);
    
    strgLocDat.setItem("loadedBefore", 1);
}
//needs work
function restorePreviousSession(){
    if(strgLocDat.getItem("timerStart") == 1){
        updateTimeInterval = setInterval(updateTime, 1000);
        changeToEnd();
    }
}
//needs work
//add so that if timer is still running, set as running UI
function redirectDetails(){
    window.location = "details.html";
}
//redirects page
function redirectSetup(){
    window.location = "setup.html";
}
//redirects page