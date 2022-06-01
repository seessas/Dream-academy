//*Menubar*//


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


//*share us*//

const viewBtn = document.querySelector(".view-modal"),
    popup = document.querySelector(".popup"),
    close = popup.querySelector(".close"),
    field = popup.querySelector(".field"),
    input = field.querySelector("input"),
    copy = field.querySelector("button");
    viewBtn.onclick = ()=>{
      popup.classList.toggle("show");
    }
    close.onclick = ()=>{
      viewBtn.click();
    }
    copy.onclick = ()=>{
      input.select(); //select input value
      if(document.commandId("copy")){ //if the selected text copy
        field.classList.add("active");
        copy.innerText = "Copied";
        setTimeout(()=>{
          window.getSelection().removeAllRanges(); //remove selection from document
          field.classList.remove("active");
          copy.innerText = "Copy";
        }, 3000);
      }
    }


