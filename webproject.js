$(function(){
 $("#line2").typed({
     strings: ["I'm Cpp_Phoenix","I'm a Programmer","I'm a traveler","I'm a food lover","I'm so much more!"],
     typeSpeed: 50,
     backSpeed: 30,
     backDelay:900,
     loop:true,
     loopCount: 100,
     showCursor: true,
     cursorChar: "|",
     attr:null,
 });
});
$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.scroll').hide();
        $('.introleft').fadeOut();
        $('.introright').fadeOut();
     }
    else
     {
      $('.introleft').fadeIn();
      if (window.innerWidth > 1100) {
        $('.introright').fadeIn();
        $('.scroll').fadeIn();
      }
     }
 });
