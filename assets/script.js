// practice to understand javascript better: write vanilla JS from Jquery.




//most comments with "//" are jquery:
  //$(document).ready(function(){
document.addEventListener("DOMContentLoaded",function(){

  /* hamburger glyphicon */
//$=jquery
//".menu" ""= string .menu = selector
  //var menu = $(".menu");
  var menu = document.getElementsByClassName("menu")[0];
  //var hamburger = $(".hamburger");
  var hamburger = document.getElementsByClassName("hamburger")[0];
  //var line = $(".line");
  var line = document.getElementsByClassName("line")[0];

  var menuOpen;

  function setCss(element, property, value){
    element.style[property] = value;
  }



  function closeMenu(){
    setCss(menu, "left", "-520px");
    //menu.style.left = '-520px';
    setCss(line, "background", "#8A828A");
    //line.style.background = '#8A828A';
    menuOpen = false;
  }

  function toggleMenu(){
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

//excute openMenu on mouseenter of hamburger

  hamburger.addEventListener("mouseenter", openMenu);

  //hamburger.on({
    //mouseenter: function(){
      //openMenu();
    //}
  //});

  menu.addEventListener("mouseleave", closeMenu);

  //menu.on({
    //mouseleave: function(){
      //closeMenu();
    //}
  //});

  hamburger.addEventListener("click", toggleMenu);
  //hamburger.on({
    //click: function(){
      //toggleMenu();
    //}
  //})


  /* modal */

function openModal() {
  el = document.getElementById("openModal");
  el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visibile";
}


//}); this is from jQuery

});
