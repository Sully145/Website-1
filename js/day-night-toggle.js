function toggleNightMode() {
    
  let backgroundColor = document.getElementById('mydiv').style.backgroundColor;
  let togButton = document.getElementById('togBut').innerHTML; 
  let lushcolour = document.getElementById('lush').style.color;
  let tourcolour = document.getElementById('tour').style.color;
  let desknava = document.getElementById('a').style.color;
  let desknavb = document.getElementById('b').style.color;
  let desknavc = document.getElementById('c').style.color;
  let desknavd = document.getElementById('d').style.color;
  let desknave = document.getElementById('e').style.color;

  if (backgroundColor == "white") {
        document.getElementById('mydiv').style.backgroundColor="rgba(3, 2, 2, 0.69)";
        document.getElementById('togBut').innerHTML = "Day";
        document.getElementById("lush").style.color = "#ffffff";
        document.getElementById("tour").style.color = "#ffffff"
        document.getElementById("a").style.color = "#ffffff";
        document.getElementById("b").style.color = "#ffffff";
		document.getElementById("c").style.color = "#ffffff";
		document.getElementById("d").style.color = "#ffffff";
		document.getElementById("e").style.color = "#ffffff";
    } else {
        document.getElementById('mydiv').style.backgroundColor="white";
        document.getElementById('togBut').innerHTML = "Night";
        document.getElementById("lush").style.color = "#211922";
        document.getElementById("tour").style.color = "#211922"
        document.getElementById("a").style.color = "#211922";
        document.getElementById("a").style.color = "#211922";
        document.getElementById("b").style.color = "#211922";
		document.getElementById("c").style.color = "#211922";
		document.getElementById("d").style.color = "#211922";
		document.getElementById("e").style.color = "#211922";

    }
}
