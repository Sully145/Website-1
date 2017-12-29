let clocksw = document.getElementById("clockswat");
let date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();
minutes = checkTime(minutes);

clocksw.innerHTML = hour + 5 + " : " + minutes;

let clockuk = document.getElementById("clockuk");
let date1 = new Date();
let hour1 = date1.getHours();
let minutes1 = date1.getMinutes();
minutes1 = checkTime(minutes1);

clockuk.innerHTML = hour1 + " : " + minutes1;

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function checkTime1(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}