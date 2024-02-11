$(window).on("load", function() {

    $(".loader .innerLoader").fadeOut(500, function() {
        $(".loader").fadeOut(750);
    });

    $('.items').isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

});



$(document).ready(function() {

  $('#slides').superslides({
    animation: 'fade',
    play: 3000
  });

  var typed = new Typed('.typed', {
    strings: ['Chemical Engineering Student', 'Self-Teacher', 'Energy Enthusiast', 'Chemical Engineering Student'],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000
  });

  $('.owl-carousel').owlCarousel({
        loop:true,
        margin:50,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });


    $("#filters a").click(function() {

        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");
        $('.items').isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {

        const body = $("body");

        if ($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() - 50 + "px");
            body.addClass("fixedNav");
        } else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }

    }

});
