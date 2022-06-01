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
// Get the modal
var modal = document.getElementsByClassName('modal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
btn[0].onclick = function() {
    modal[0].style.display = "block";
}

btn[1].onclick = function() {
    modal[1].style.display = "block";
}

btn[2].onclick = function() {
    modal[2].style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
    modal[0].style.display = "none";
}

span[1].onclick = function() {
    modal[1].style.display = "none";
}

span[2].onclick = function() {
    modal[2].style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal[0]) {
         modal[0].style.display = "none";
     }
   else if (event.target == modal[1]) {
         modal[1].style.display = "none";
     }  
     else if (event.target == modal[2]) {
        modal[2].style.display = "none";
    } 
}