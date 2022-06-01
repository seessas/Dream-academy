var menuBtn = document.getElementById("menuBtn")
var menuBtn = document.getElementById("sideNav")
var menuBtn = document.getElementById("menu")

sideNav.style.rigt = "-250px";

menuBtn.onclick = function(){
    if(sideNav.style.right =="-250px"){
        sideNav.style.right="0";
        menuBtn.src ="images/x.png";
    }
    else{
        sideNav.style.right ="-250px";
        menuBtn.src ="images/menu.png";
    }

}
function on() {
    document.getElementById("overlay").style.display = "block";
  }
  