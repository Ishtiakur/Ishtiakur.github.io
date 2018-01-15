$(document).ready(function(){
  $(window).scroll(function(){
    const mq = window.matchMedia( "(max-width: 760px)" );
  	var scroll = $(window).scrollTop();
    if (mq.matches) {
      $(".jobs-top-nav").css("background" , "#277DC7");
        $(".jobs-top-nav").css("padding" , "5px 0"); 
         $(".dropdown-menu > li > a:focus, .dropdown-menu > li").css("background" , "#277DC7");
         $(".ul li ul.dropdown-menu li").css("margin-bottom" , "2px");
         $(".dropdown-menu > li > a:focus, .dropdown-menu > li > a:hover").css("background", "#277DC7");
         $(".dropdown-menu > li > a:focus, .dropdown-menu > li > a:hover").css("color", "#34C6D2");

    }
    else if(scroll>5) {
      $(".jobs-top-nav").css("background" , "#277DC7");
        $(".jobs-top-nav").css("padding" , "5px 0"); 
         $(".dropdown-menu > li > a:focus, .dropdown-menu > li").css("background" , "#277DC7");
         $(".ul li ul.dropdown-menu li").css("margin-bottom" , "2px");
         $(".dropdown-menu > li > a:focus, .dropdown-menu > li > a:hover").css("background", "#277DC7");
         $(".dropdown-menu > li > a:focus, .dropdown-menu > li > a:hover").css("color", "#34C6D2");

    }

	  else{
		  $(".jobs-top-nav").css("background" , "transparent");
          $(".jobs-top-nav").css("padding" , "15px 0");
          $(".dropdown-menu > li > a:focus, .dropdown-menu > li").css("background" , "#000");
         $(".ul li ul.dropdown-menu li").css("margin-bottom" , "2px");
         $(".dropdown-menu > li > a:focus, .dropdown-menu > li > a:hover").css("background", "#277DC7");
         $(".dropdown-menu > li > a:focus, .dropdown-menu > li > a:hover").css("color", "#fff");
	  }
  })
});



$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#back-to-top').fadeIn(); 
        } else { 
            $('#back-to-top').fadeOut(); 
        } 
    }); 
    $('#back-to-top').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});

