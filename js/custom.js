$(function () {
    // ==========banner sec============
    $(".gellery-bg .container .gellery-menu ul li").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.banner-slider').slick({
        autoplay: true,
        arrows: true,
        prevArrow: '<i class="slick-prev fas fa-chevron-left prev_arrow"></i>',
        nextArrow: '<i class="slick-next fas fa-chevron-right next_arrow "></i>',
        dots: true,

    });

    var mixer = mixitup('.gellery-contant');
    // ====================veno box=============
    $('.venobox').venobox({
        arrowsColor: '#709DCA',
        closeColor: 'red',
        spinner: 'rotating-plane',
    });
    // =============type js================ 

    var typed = new Typed('.element', {
        strings: ["web designer^1500", "web developer^1500", "digital marketer^1500"],
        typeSpeed: 50,
        smartBackspace: true,
        loop: true,
        showCursor: false,
        backSpeed: 80,
        backDelay: 1000,
    });
    
     //   ============counter js==========
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // ===========counter down==========
    
    $('#countdown').countdown({
        
            year: 2022,// YYYY Format
            month: 6,// 1-12
            day: 20,// 1-31
            hour: 0,// 24 hour format 0-23
            minute: 0,// 0-59
            second: 0,// 0-59
        
          });
        //   paralax background
        $('#bg').parallax({
            imageSrc: 'images/women-para-bac.jpg'
        });
        new WOW().init();
    

});



