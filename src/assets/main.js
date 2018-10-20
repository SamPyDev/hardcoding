 $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        var s = top - 40;
        $('body,html').animate({scrollTop: s}, 1000);
    });
});