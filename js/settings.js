var paySelected;
var names = ["hour", "day", "month", "year"];

function startCheck(){
    setInterval(checkChange, 1000);
}
function changeFields(inputType){
    hideAll();
    paySelected = inputType;
    document.getElementById(inputType).style.display = "block";
}
function hideAll(){
    for(i = 0; i < names.length; i++){
        document.getElementById(names[i]).style.display = "none";
    }
}
function setValues(num){
    resetPay();
    switch(num){
        case 0:
            getHour();
            break;
        case 1:
            getDay();
            break;
        case 2:
            getMonth();
            break;
        case 3:
            getYear();
            break;
    }
}
function checkChange(){
    changeFields(document.getElementById('select').value);
}
function getHour(){
    var val = parseFloat(document.getElementById('hourly').value);
    var salary = val/3600;
    calculateSalary(salary);
}
function getDay(){
    var val = parseFloat(document.getElementById('daily').value);
    var hoursWorked = parseFloat(document.getElementById('hourDay').value);
    if(isNaN(hoursWorked)){
        hoursWorked = 9;
    }
    var salary = val / (hoursWorked*3600);
    calculateSalary(salary);
}
function getMonth(){
    var val = parseFloat(document.getElementById('monthly').value);
    var daysWorked = parseFloat(document.getElementById('mDays').value);
    var hoursWorked = parseFloat(document.getElementById('mHours').value);
    if(isNaN(daysWorked)){
        daysWorked = 5;
    }
    if(isNaN(hoursWorked)){
        hoursWorked = 9;
    }
    var salary = val / ((4.348) * daysWorked * hoursWorked * 3600);
    calculateSalary(salary);
}
function getYear(){
    var val = parseFloat(document.getElementById('yearly').value);
    var daysWorked = parseFloat(document.getElementById('yDays').value);
    var hoursWorked = parseFloat(document.getElementById('yHours').value);
    if(isNaN(daysWorked)){
        daysWorked = 5;
    }
    if(isNaN(hoursWorked)){
        hoursWorked = 9;
    }
    var salary = val / ((4.348) * 12 * daysWorked * hoursWorked * 3600);
    calculateSalary(salary);
}

function calculateSalary(salarySecond){
    strgLocDat.setItem("salary", salarySecond);
    alert("Salary Updated!");
    redirect();
}
function redirect(){
    window.location = 'index.html';
    return false;
}