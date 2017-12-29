let navopenbutton = document.getElementById("navbutton");
let navclosebutton = document.getElementById("navclose");

navopenbutton.addEventListener("click", openNav);
navclosebutton.addEventListener("click", closeNav);


function openNav() {
    document.getElementById("Sidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "250px";
    navopenbutton.style.display = "none";
}

function closeNav() {
    document.getElementById("Sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    navopenbutton.style.display = "";
}