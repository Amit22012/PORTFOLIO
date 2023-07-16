$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20)
        {
            $('.navigation-bar').addClass("sticky");
        } else{
            $('.navigation-bar').removeClass("sticky");
        }
    });
    /*toggle menu/navigation bar */
    $('.side-menu-button').click(function(){
        $('.navigation-bar .menu').toggleClass("active");
        $('.side-menu-button i').toggleClass("active");
    });
    // owl crousel
    $('.webd1').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
