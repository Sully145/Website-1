let clocksw = document.getElementById("clockswat");
let date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();

clocksw.innerHTML = hour + " : " + minutes;