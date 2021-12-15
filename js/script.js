$(document).ready(function(){ 
    $(function(){                                   //scroll
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
    });

    $( ".menu-button" ).hover(
        function() {
          $('.bar1, .bar2, .bar3').css('backgroundColor','#FFEA28');
        }, function() {
          $( this ).find('.bar1, .bar2, .bar3').css('backgroundColor','#fff');
        }
      );

    $('.fon-serv, .item-hs').hover(
      function() {
        $( this ).find('p, h4, h3').addClass('color-hover');
      }, function() {
        $( this ).find('p, h4, h3').removeClass('color-hover');
      }
    )    

    $('.menu-button').click(function(){       //вывод карты сайта
      $('.block-menu').slideToggle(300);
    }); 

    $('.trigger-btn').click(function(){       //
      if($('.inp-scr').css('display')===('none')) {
      $('.inp-scr').show();
      $('.scr-btn').css('color','#FFEA28');
      }
      else {
        $('.inp-scr').hide();
        $('.scr-btn').css('color','#fff');
           }
    }); 

    $('.art-btn').click(function(){
      $(this).next().slideToggle()
    });

    $('.scr-btn').click(function(){                  // вывод Поиска
      if($('.nav-menu').css('display')===('flex')) {
        $('.nav-menu').css('display','none');
        $('.inp-scr, .close-scr, .center-nav').css('display','flex');
        $('.center-nav').css('width','70%');
      } 
    }); 

    $('.close-scr').click(function(){
      $('.inp-scr, .close-scr').css('display','none');
      $('.center-nav').css('width','auto');
      $('.nav-menu').css('display','flex');
    });



    $('.slider-hero').owlCarousel({                // slider hero
      margin:0,
      dots:true,
      nav:true,
      loop:true,
      dotsEach: 1,
      responsiveClass:true,
      responsive:{
          0:{ items:1 },
          550:{ items:1 },
          1020:{ items:1 },
          1200:{ items:1 },
          1500:{ items:1 }               
       }
    });

    $('.slider-serv, .slider-work').owlCarousel({                // slider 
      margin:10,
      dots:true,
      nav:false,
      loop:true,
      dotsEach: 1,
      responsiveClass:true,
      responsive:{
          0:{ items:1 },
          550:{ items:1 },
          1020:{ items:1 },
          1200:{ items:1 },
          1500:{ items:1 }               
       }
    });


}); // end script