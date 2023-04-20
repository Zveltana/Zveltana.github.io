require('./app.scss');

$(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
        $('#chevron').removeClass('hidden');
    } else {
        $('#chevron').addClass('hidden');
    }
});
