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
// get initial position of the element
//var fixmeTop = $('.introleft').offset().top;
// $(window).scroll(function() {                  // assign scroll event listener
//
//     var currentScroll = $(this).scrollTop(); // get current position
//
//     if (currentScroll >= fixmeTop) {           // apply position: fixed if you
//         $('.introleft').fadeOut();
//     } else {                                   // apply position: static
//         $('.introleft').fadeIn();
//     }
//
// });

$(window).scroll(function() {
    var introleftvar = $('.introleft').offset().top;
    var scroll = this.scrollY;
    var currentScroll = $(this).scrollTop();
    if(scroll>=7400 && scroll<=16200) {
        $('.Iwantto').css({display:'block',position: 'fixed', top:'50%'});
        if(scroll>=7600 && scroll<=9600) {
          $('.sleep').fadeOut();
          $('.sco').fadeOut();
          $('.moon').fadeOut();
        $('.sky').css({display:'block',position: 'fixed',margin:'10px' ,top:'50%',});
        }
        else if(scroll>=9800 && scroll<=11800) {
          $('.sky').fadeOut();
          $('.sleep').fadeOut();
          $('.moon').fadeOut();
        $('.sco').css({display:'block',position: 'fixed',margin:'10px' ,top:'50%',});
        }
        else if(scroll>=12000 && scroll<=14000) {
          $('.sky').fadeOut();
          $('.sco').fadeOut();
          $('.sleep').fadeOut();
        $('.moon').css({display:'block',position: 'fixed',margin:'10px' ,top:'50%',});
        }
        else if(scroll>=14200 && scroll<=16200) {
          $('.sky').fadeOut();
          $('.sco').fadeOut();
          $('.moon').fadeOut();
        $('.sleep').css({display:'block',position: 'fixed',margin:'10px' ,top:'50%',});
        }
        else {
        $('.sleep').fadeOut();
        $('.moon').fadeOut();
        $('.sco').fadeOut();
        $('.sky').fadeOut();
        }
    } else {
        $('.sleep').fadeOut();
        $('.moon').fadeOut();
        $('.sco').fadeOut();
        $('.sky').fadeOut();
        $('.Iwantto').fadeOut();
    }
    if(currentScroll==introleftvar) {
      $('.introleft').fadeIn();
      if (window.innerWidth > 1100) {
        $('.introright').fadeIn();
        $('.scroll').fadeIn();
      }
    }
    else if (currentScroll>introleftvar)
     {
        $('.scroll').hide();
        $('.introleft').fadeOut();
        $('.introright').fadeOut();
        if (currentScroll >= fixmeTop) {           // apply position: fixed if you
        $('.fixme').css({                      // scroll to that element or below it
            position: 'fixed',
            top: '0',
            left: '0'
        });
      }
     }
 });
