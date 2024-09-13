$(document).ready(function () {
    // menu dropdown
    $('.dropdown').click(function (e) { 
        e.preventDefault();
        $('.dropdown-open').slideToggle();
    });

    // banner swiper
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
          delay: 5000
        },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
    });

        //gotop
        function showBtnCondition() {
          if ($(this).scrollTop() > 1000) {
            $('.gotop a').fadeIn()    
          } else {
            $('.gotop a').fadeOut();
          }
        }
        $(window).scroll(showBtnCondition);
        
        $('.gotop a').click(function (e) { 
          e.preventDefault();
          $('html,body').animate({scrollTop: 0}, 1000);     
    });
});



 