var inputType = 1;
var names = ["hour", "day", "month", "year"];

function changeFields(inputType){
    hideAll();
    document.getElementById(inputType).style.display = "block";
}
function hideAll(){
    for(i = 0; i < names.length; i++){
        document.getElementById(names[i]).style.display = "none";
    }
}

function setValues(){
    
}
function checkChange(){
    changeFields(document.getElementById('select').value);
}