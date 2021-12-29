$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if ($( ".page-body" ).hasClass( "home" )) {
        if (scroll >= 180) {
            $(".header-wrapper.fixed-top").addClass("animated-header");
        } else {
            $(".header-wrapper.fixed-top").removeClass("animated-header");
        }
    } else {
        if (scroll >= 50) {
            $(".header-wrapper.fixed-top").addClass("animated-header");
        } else {
            $(".header-wrapper.fixed-top").removeClass("animated-header");
        }
    }

    
});