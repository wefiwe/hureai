$(document).ready(function() {
    $("#goto_top").hide();
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#goto_top').fadeIn();
            } else {
                $('#goto_top').fadeOut();
            }
        });

        $('#goto_top a').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
});
$(".openbtn").click(function() {
    $(this).toggleClass('active');
    $(".menu").toggleClass('panelactive');
});
$(".menu a").click(function() {
    $(".openbtn").removeClass('active');
    $(".menu").removeClass('panelactive');
});