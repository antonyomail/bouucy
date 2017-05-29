(function ($) {

    $(window).scroll(function() {

        if($(this).scrollTop() >= 500) {

            $('#toTop').fadeIn();

        } else {

            $('#toTop').fadeOut();

        }

    });

    $('#toTop').click(function() {

        $('body,html').animate({scrollTop:0},800);

    });

})(jQuery);
/**
 * Created by antondotsenko on 29.05.17.
 */
