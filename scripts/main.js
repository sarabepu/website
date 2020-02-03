"use strict"
(function ($) {


    /*--/ Navbar Menu Reduce /--*/
    $("body").scrollspy({ target: "#mainNav" });
    $(window).on("scroll", function () {
        var section = $("#about").offset().top;

        if ($(window).scrollTop() > section - 30) {
            $(".navbar-expand-md").addClass("navbar-reduce");
            $(".navbar-expand-md").removeClass("navbar-trans");
        } else {
            $(".navbar-expand-md").addClass("navbar-trans");
            $(".navbar-expand-md").removeClass("navbar-reduce");
        }

    });

    /*--/ Star Typed /--*/

    var typed_strings = "Web Developer,Programmer,Pianist,Hip-Hop Dancer,Salsa lover,Latina,Worshiper";

    var options = {
        strings: typed_strings.split(","),
        typeSpeed: 80,
        loop: true,
        backSpeed: 30
    };

    // eslint-disable-next-line no-undef
    new Typed(".text-slider", options);
})(jQuery);