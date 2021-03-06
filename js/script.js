var updateTimeInterval, money;

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
    var finalTime = new Date();
    var jsonData = {
        "hours": strgLocDat.getItem("tHours"),
        "minutes":  strgLocDat.getItem("tMinutes"),
        "seconds": strgLocDat.getItem("tSeconds"),
        "fHours": finalTime.getHours(),
        "fMinutes": finalTime.getMinutes(),
        "fSeconds": finalTime.getSeconds(),
        "pay": money
    }
    userDataJSON['days'][dayCodes[finalTime.getDay()]].push(jsonData);
    if(finalTime.getDay() >= 6){
        userDataJSON['days'][dayCodes[0]].length = 0;
    }else{
        userDataJSON['days'][dayCodes[finalTime.getDay()+1]].length = 0;
    }
    storeNewBreaks(userDataJSON);
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
    money = strgLocDat.getItem("salary") * time;
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
//needs work
function restorePreviousSession(){
    if(strgLocDat.getItem("timerStart") == 1){
        updateTime();
        updateTimeInterval = setInterval(updateTime, 1000);
        changeToEnd();
    }
}
function redirectDetails(){
    window.location = "details.html";
}
//redirects page
function redirectSetup(){
    window.location = "setup.html";
}
//redirects page