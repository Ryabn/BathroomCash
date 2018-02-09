function restorePreviousSession(){
    loadVariables();
    loadMoneyGraph();
    displayTextInfo();
}

function loadVariables(){
    for(i = 0; i < 7; i++){
        dayCodesMoney[i] = userDataJSON['days'][dayCodes[i]].map(a => a.pay).reduce((a, b) => a + b, 0);
    }
}

function loadMoneyGraph(){
    var ctx = document.getElementById("moneyMade").getContext("2d");
    var moneyChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dayCodes,
            datasets: [{
                label: 'Money Earned',
                data: dayCodesMoney,
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
    for(i = 0; i < 7; i++){
        document.getElementById('extraInformation').innerHTML +=
            "<div style=\"border: 1px solid grey; padding: 1vh; margin: 1vh; border-radius: 1vh\">" +
            dayCodes[i] + " : Money Earned = $" + dayCodesMoney[i] + "</div>";
    }
}
function redirectHome(){
    window.location.href = "index.html";
}
function redirectSettings(){
    window.location.href = "setup.html";
}