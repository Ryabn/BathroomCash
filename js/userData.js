var strgLocDat = window.localStorage;
var userDataJSON;

var dayCodes = ["sun", "mon", "tues", "wed", "thur", "fri", "sat"];

var breaksTemplate = {
	"days": {
		"mon": [],
		"tues": [],
        "wed": [],
        "fri": [],
        "sat": [],
        "sun": []
	}
}
function firstTimeLoad(){
    if(strgLocDat.getItem("loadedBefore") != 1){
        setUp();
        userDataJSON = getPastBreaks();
        alert("It looks like this is the first time you're using this app! Click on the settings button to first set your salary so we can calculate your earnings while using the restroom. ")
    }else{
        restorePreviousSession();
        userDataJSON = getPastBreaks();
    }
}
function setUp(){
    strgLocDat.setItem("loadedBefore", 1);
    strgLocDat.setItem("timerStart", 0);
    strgLocDat.setItem("salary", 0.00291666);
    strgLocDat.setItem("breakNum", 0);
    
    strgLocDat.setItem("loadedBefore", 1);
    storeNewBreaks(breaksTemplate);
    
    resetPay();
}
function resetPay(){
    strgLocDat.setItem("hPay", -1);
    
    strgLocDat.setItem("dPay", -1);
    strgLocDat.setItem("dHours", -1);
    
    strgLocDat.setItem("mPay", -1);
    strgLocDat.setItem("mDay", -1);
    strgLocDat.setItem("mHours", -1);
    
    strgLocDat.setItem("yPay", -1);
    strgLocDat.setItem("yDay", -1);
    strgLocDat.setItem("yHours", -1);
}
function storeNewBreaks(jsonObj){
    strgLocDat.setItem("breaksJSON", JSON.stringify(jsonObj));
}
function getPastBreaks(){
    return JSON.parse(strgLocDat.getItem("breaksJSON"));
}