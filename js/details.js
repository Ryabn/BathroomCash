
function load(){
    loadVariables();
    loadBreakGraph();
    //loadMoneyGraph();
    displayTextInfo();
}
function restorePreviousSession(){
    
}

function loadVariables(){
    breakVariables();
    moneyVariables();
}

function loadBreakGraph(){
    var ctx = document.getElementById("breakTimes").getContext("2d");
    var breakChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"],
            datasets: [{
                label: 'Breaks Taken',
                data: [2, 3, 8, 2, 4, 1, 6],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(125, 259, 24, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(125, 259, 24, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        max: 24,
                        stepSize: 4, 
                        beginAtZero: true
                    }
                }]
            }
        }
    }); 
}
function loadMoneyGraph(){
    var ctx = document.getElementById("moneyMade").getContext("2d");
    var moneyChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [day1, day2, day3, day4, day5, day6, dayCurrent],
            datasets: [{
                label: 'Money Earned',
                data: [day1Money, day2Money, day3Money, day4Money, day5Money, day6Money, dayCurrentMoney],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(125, 259, 24, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(125, 259, 24, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    }); 
}
function displayTextInfo(){
    var day = "Mon", breakNum = 4, money = 5.32;
    for(i = 0; i < 7; i++){
        document.getElementById('extraInformation').innerHTML +=
            "<div style=\"border: 1px solid grey; padding: 1vh; margin: 1vh; border-radius: 1vh\">" +
            dayCodes[i] + " : Breaks = " + breakNum + ", Money Earned = $" + money + "</div>";
    }
}

function breakVariables(){
    
}
function moneyVariables(){
    
}