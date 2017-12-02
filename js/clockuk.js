let clockuk = document.getElementById("clockuk");
let date1 = new Date();
let hour1 = date1.getHours();
let minutes1 = date1.getMinutes();

clockuk.innerHTML = hour1 + " : " + minutes1;