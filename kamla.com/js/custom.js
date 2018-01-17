$(document).ready(function(){
  $(window).scroll(function(){
    const mq = window.matchMedia( "(max-width: 960px)" );
  	var scroll = $(window).scrollTop();
    if (mq.matches) {
      $(".jobs-top-nav").css("background" , "#29afbb");
        $(".jobs-top-nav").css("padding" , "5px 0"); 
         $(".dropdown-menu > li > a:focus, .dropdown-menu > li").css("background" , "#34c5d2");
         $(".ul li ul.dropdown-menu li").css("margin-bottom" , "2px");
         $(".dropdown-menu > li > a:focus, .dropdown-menu > li > a:hover").css("border-bottom", "1px solid #34C5D2");
         $(".dropdown-menu > li > a:focus, .dropdown-menu > li > a:hover").css("color", "#34C6D2");

    }
    else if(scroll>5) {
      $(".jobs-top-nav").css("background" , "#34c5d2");
        $(".jobs-top-nav").css("padding" , "5px 0"); 
         $(".dropdown-menu > li > a:focus, .dropdown-menu > li").css("background" , "#34c5d2");
         $(".ul li ul.dropdown-menu li").css("margin-bottom" , "2px");
         $(".dropdown-menu > li > a:focus, .dropdown-menu > li > a:hover").css("border-bottom", "1px solid #34C5D2");
         $(".dropdown-menu > li > a:focus, .dropdown-menu > li > a:hover").css("color", "#34C6D2");
      

    }

	  else{
		  $(".jobs-top-nav").css("background" , "transparent");
          $(".jobs-top-nav").css("padding" , "15px 0");
          
          $(".dropdown-menu > li > a:focus, .dropdown-menu > li").css("background" , "#000");
          $(".navbar-nav > li > a:hover, .navbar-nav > li > a:focus").css("border-bottom", "1px solid #34C5D2");
          $(".ul li ul.dropdown-menu li").css("margin-bottom" , "2px");
         $(".dropdown-menu > li > a:focus, .dropdown-menu > li > a:hover").css("background", "#34c5d2");
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

