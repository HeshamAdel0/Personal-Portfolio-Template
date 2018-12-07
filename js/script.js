/*global $, jQuery, console, alert, prompt */

$(function () {
    "use strict"
    
      /*** Start nav Active****/
    $(".navbar-nav li").click(function () {
        
        $(this).addClass("active").siblings().removeClass("active");
    });  
    
      /*** Start Header****/

      var winH = $(window).height(),
      navH = $('.navbar').innerHeight();
     $('.slider, .carousel-item').height(winH - navH);

     /*** Start carousel****/
     $('.carousel').carousel();


     /*** Start Typewriter ***/
    
     var typed = new Typed('#typed', {
      strings: ["welcome in my Portfolio", "I am a Web Design" ,"And a Web Developer", "And a Graphic Design", "I am Very Hard Worker","I have Great Experience",], 
       typeSpeed: 75,
       backSpeed: 40,
       smartBackspace: true, 
       loop: true
 });
     
     /*** Start Portfolio imge-hover***/
  
  $(".imge-hover").hover(function () {
        
    $(this).children(".img-text").css("top", "0").fadeToggle(500);
    
}); 

/*** Start Shuffle  ***/
    

    
$('#shuffel-container').mixItUp();
    
    
$('.shuffle li').click(function () {
   
    $(this).addClass('active').siblings().removeClass('active');
    
});

/*** Start Scroll To top ****/

var scrollTop = $(".scroll-top");
    
$(window).scroll(function () {

    if ($(window).scrollTop() >= 500) {

        if ((scrollTop).is(":hidden"))
            
               scrollTop.fadeIn(800);
            
        } else{
             
             scrollTop.fadeOut(800);
        } 
    
});

//click Scroll To top

scrollTop.click(function (event){
    
    event.preventDefault();
    
    $("html, body").animate({
        
        scrollTop: 0
  
    }, 1500);
});

/*** End Scroll To top ***/


/*** End Smooth Scroll To Div ****/
    
$(".navbar-nav li a").click(function (e) {
       
    e.preventDefault();
    
    $("html, body").animate({
        
        scrollTop: $("#" + $(this).data("scroll")).offset().top
        
    }, 1500);
    
    
});
});