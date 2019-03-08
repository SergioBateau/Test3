$(function () {

    $(window).scroll(function () {
        if ((window.scrollY + window.innerHeight) >= 1000) {

            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }

    });

    $('#toTop').click(function () {

        $('body,html').animate({
            scrollTop: 0
        });

    });

});