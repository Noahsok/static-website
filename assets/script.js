$(document).ready(function(){

  /* hamburger glyphicon */

  var menu = $(".menu");
  var hamburger = $(".hamburger");
  var line = $(".line");
  var menuOpen;

  function openMenu(){
    menu.css("left", "0px");
    line.css("background", "#8A828A");
    menuOpen = true;
  }

  function closeMenu(){
    menu.css("left", "-520px");
    line.css("background", "#8A828A");
    menuOpen = false;
  }

  function toggleMenu(){
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  hamburger.on({
    mouseenter: function(){
      openMenu();
    }
  });

  menu.on({
    mouseleave: function(){
      closeMenu();
    }

  });

  hamburger.on({
    click: function(){
      toggleMenu();
    }
  })

  /* modal */

function openModal() {
  el = document.getElementById("openModal");
  el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visibile";
}

});
