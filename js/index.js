/*
A quick mock-up I made after seeing the nav bar at this site: http://snipcart.com/
*/


var $window   = $(window),
    height    = $window.height(),
    width     = $window.width(),
    navheight = $('#nav_wrap').height();

function sticky(){
  var scrollTop = $window.scrollTop();
  if (scrollTop > (height - navheight)) {
    $('#nav_wrap').addClass('sticky');
    $('nav').addClass('nav_animate');
    setTimeout(function(){
      $('#logo').css({
        'left': 3 + '%', 
        'transition':'.5s'
      });     
      $('#social').css({
        'right': 5 + '%', 
        'transition':'.5s'
      });
    }, 200);
    
  } else {
    $('#nav_wrap').removeClass('sticky');
    $('nav').removeClass('nav_animate');
    setTimeout(function(){
      $('#logo').css({
        'left':-150, 
        'transition':'.5s'
      });     
      $('#social').css({
        'right':-150, 
        'transition':'.5s'
      });
    }, 200);
  }
} 

$window.on('scroll', sticky);  

//Navigational Menu
$('nav a').click(function(a){
  var menuPlace = $(this).href();
  a.preventDefault();
  $('html, body').animate({
    scrollTop : $('section').eq(menuPlace).offset().top - $('nav').height()
  }, 700);
});