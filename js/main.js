// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

$(document).ready(function(){

// slides



var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000); 
}




//scroll up & down
  
    console.log('Window Height is: ' + $(window).height());
  console.log('Document Height is: ' + $(document).height());

  var previousScroll = 0;

  $(window).scroll(function(){

    var currentScroll = $(this).scrollTop();

    /*
      If the current scroll position is greater than 0 (the top) AND the current scroll position is less than the document height minus the window height (the bottom) run the navigation if/else statement.
    */
    if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()){
      /*
        If the current scroll is greater than the previous scroll (i.e we're scrolling down the page), hide the nav.
      */
      if (currentScroll > previousScroll){
        window.setTimeout(hideNav, 100);
        $("nav").removeClass("topped");
      /*
        Else we are scrolling up (i.e the previous scroll is greater than the current scroll), so show the nav.
      */
      } else {
        window.setTimeout(showNav, 100);
      }
      /* 
        Set the previous scroll value equal to the current scroll.
      */
      previousScroll = currentScroll;
    }

  });

  function hideNav() {
    $(".showHideNav").hide(700);
  }
  function showNav() {
    $(".showHideNav").show(700);
  }





$(".bg-change-findAfreelancer").click(function(){
  $(".bg-change-findAfreelancer").css({"background-color":"#ff0000" , "color" : "#ffffff"});
  $(".bg-change-findAmission").css({"background-color":"#dcdcdc" , "color":""});


});


$(".bg-change-findAmission").click(function(){
  $(".bg-change-findAmission").css({"background-color":"#ff0000" , "color" : "#ffffff"});
  
  $(".bg-change-findAfreelancer").css({"background-color":"#dcdcdc" , "color":""});

});




$(".freeLancers").mouseenter(function(){
	$("h3",this).addClass("red-h3");
});


$(".freeLancers").mouseleave(function(){
	$("h3",this).removeClass("red-h3").addClass("red-h3-out");
});







});


