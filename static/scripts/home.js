$(document).ready( function() {
  setTimeout( function() {
	  $("body").addClass("ready");
  }, 3000);
  setTimeout( function() {
    $(".splash h1").html("Invadegraphics");
    setTimeout( function() {
      $(".splash h1").html("Get your overlays here");
    }, 1000);
  }, 1300);
});
