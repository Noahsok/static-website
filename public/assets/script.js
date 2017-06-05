$(document).ready(function(){

  /* hamburger glyphicon */

  var menu = $(".menu");
  var hamburger = $(".hamburger");
  var line = $(".line");
  var menuOpen;

  function openMenu(){
    menu.css("left", "0px");
    line.css("background", "##8A828A");
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

});


/* google-analytics */
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-100577407-1', 'auto');
  ga('send', 'pageview');

</script>

/* google-analytics */
