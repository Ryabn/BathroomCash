var strgLocDat = window.localStorage;

function timerTriggered(){
    if(strgLocDat.getItem("timerStart") == 0){
        startTimer();
        changeToStart();
    }else{
        endTimer();
        changeToEnd();
    }
}

function endTimer(){
    strgLocDat.setItem("timerStart", 0);
}
function changeToEnd(){
    var buttonStyle = document.getElementById('bathroomBreakButton');
    buttonStyle.style.backgroundColor = "#b71727";
    document.getElementsByTagName('h1')[0].innerHTML = "End";
}

function startTimer(){
    strgLocDat.setItem("timerStart", 1);
}
function changeToStart(){
    var buttonStyle = document.getElementById('bathroomBreakButton');
    buttonStyle.style.backgroundColor = null;
    document.getElementsByTagName('h1')[0].innerHTML = "Start";
}
function firstTimeLoad(){
    if(strgLocDat.getItem("loadedBefore") != 1){
        setUp();
    }else{
        restorePreviousSession();
    }
}
function setUp(){
    strgLocDat.setItem("timerStart", 0);
    
    strgLocDat.setItem("loadedBefore", 1);
    strgLocDat.setItem("h", -1);
    strgLocDat.setItem("payHourly", -1);
    
    strgLocDat.setItem("d", -1);
    strgLocDat.setItem("payDaily", -1);
    strgLocDat.setItem("dHoursPerDay", -1);
    
    strgLocDat.setItem("y", -1);
    strgLocDat.setItem("sdf", -1);
    strgLocDat.setItem("yHoursPerDay", -1);
    
    strgLocDat.setItem("loadedBefore", 1);
}
function restorePreviousSession(){
    
}
function redirectDetails(){
    window.location = "details.html";
}
function redirectSetup(){
    window.location = "setup.html";
}