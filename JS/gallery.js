mainImg = document.getElementById('mainImg');


thumb1 = document.getElementById('thumb1');
thumb1Src = document.getElementById('thumb1').src;
thumb2 = document.getElementById('thumb2');
thumb2Src = document.getElementById('thumb2').src;
thumb3 = document.getElementById('thumb3');
thumb3Src = document.getElementById('thumb3').src;
thumb4 = document.getElementById('thumb4');
thumb4Src = document.getElementById('thumb4').src;
thumb5 = document.getElementById('thumb5');
thumb5Src = document.getElementById('thumb5').src;


thumb1.addEventListener("click", function(){
    mainImg.src=thumb1Src
})
thumb2.addEventListener("click", function(){
    mainImg.src=thumb2Src
})
thumb3.addEventListener("click", function(){
    mainImg.src=thumb3Src
})
thumb4.addEventListener("click", function(){
    mainImg.src=thumb4Src
})
thumb5.addEventListener("click", function(){
    mainImg.src=thumb5Src
})

function myFunction() {
    var x = document.getElementById("container");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


  function thumb_img_list() {
    document.getElementById('container').style.display = "block";
 }


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
   


   $("thumb_img_list").click(function(){

    $("thumb_img_list").removeClass('active');
    $(this).addClass('figure img');

  });
  

  //Border//
  
  function mark(currentEl) {
    // Retreives the id of current element that is clicked
    var id = currentEl.id;

    // Apply the border 
    document.getElementById(id).style.border="2px solid orange";
}

var previousEl;

function mark(currentEl) {

    // Retrieves the id of current element that is clicked
    var id = currentEl.id;

    /**
    * Checks to see if a previous element has been clicked
    * if it was, it will remove the border from the previous and apply it to the current element
    */
    if(previousEl){
        previousEl.style.border = "unset"; // css unset border
        currentEl.style.border = "4px solid orange"; // apply border to current element
        previousEl = document.getElementById(id); // assign current element id to previousEl variable 
    } else {
        currentEl.style.border = "4px solid orange";
        previousEl = document.getElementById(id);
    }
}


