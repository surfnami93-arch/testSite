$(function() {
    setTimeout(function () {
        $("#loader-wrapper").fadeOut();
    }, 1000);

    $(".left-links i").hover(
        function () {
            $(this).stop().animate(
                { opacity: 0.5 },
                200
            );
        },
        function () {
            $(this).stop().animate(
                { opacity: 1 },
                200
            );
        }
    );
});