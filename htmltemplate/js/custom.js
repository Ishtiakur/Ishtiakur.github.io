/*==================
       Work
==================*/
$(document).ready(function() {
  $("#work").magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
      gallery:{
    enabled:true
  }
  });
});



/*==================
       Team
==================*/

$(function(){
  $("#team-members").owlCarousel({
  
      items: 3,
      autoplay: true,
      smartSpeed:700,
      loop:true,
      autoplayHoverPause:true
  
  });
});

/*==================
       Testimonial
==================*/

$(function(){
 $("#customers-testimonials").owlCarousel({
 
     items:1,
     autoplay:true,
     smartSpeed:700,
     loop:true,
     autoplayHoverPause:true,
 
 });

});

/*==================
       STATS
==================*/
$(function(){
    
     $('.counter').counterUp({
                delay: 10,
                time: 3000
            });
      })
/*==================
       CLIENT
==================*/

$(function(){
  $("#clients-list").owlCarousel({
  
      items: 6,
      autoplay: true,
      smartSpeed:700,
      loop:true,
      autoplayHoverPause:true
  
  });
});

/*==================
      NAVIGATIO 
==================*/
$(function(){
 $(window).scroll(function(){
 
     if($(this).scrollTop()<60){
        
        $("nav").removeClass("vesco-top-nav");
     
        }
    else{
        $("nav").addClass("vesco-top-nav");
        
        }
        
 });


});

/*==================
    SMOTH LIST
==================*/
$(function(){
$("a.smooth-scroll").click(function(Event){

Event.preventDefault();
    var section =$(this).attr("href");
    $('html,body').animate({
     scrollTop:$(section).offset().top -64
    },1250);
});

});

 
























