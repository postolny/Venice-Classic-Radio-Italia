$("document").ready(function() {
    // Записываем в переменную url адрес xml
    var url = "https://www.veniceclassicradio.eu/live1/nowplaying.xml";
    var auto_refresh = setInterval(function() {
        $('#art,#art1').load(url + ' ' + '#Current Artista');
        $('#tit,#tit1').load(url + ' ' + '#Current Titolo');
        $('#mov').load(url + ' ' + '#Current Movimenti');
        $('#int').load(url + ' ' + '#Current Interpreti');
        $('#dur').load(url + ' ' + '#Current Durata');
        $('#art-next').load(url + ' ' + '#Next1 Artista');
        $('#tit-next').load(url + ' ' + '#Next1 Titolo');
        $('#mov-next').load(url + ' ' + '#Next1 Movimenti');
        $('#int-next').load(url + ' ' + '#Next1 Interpreti');
        $('#dur-next').load(url + ' ' + '#Next1 Durata');
    }, 3000);
    var audio = $("#player")[0];
    // Громкость 20%;
    audio.volume = 0.2;
    //$(audio).prop("volume", 0.2);
    $('.btn-info').hide();
    $(".muted").click(function(e) {
        event.preventDefault();
        $('#inv').slideToggle("fast");
        if (audio.paused) {
            audio.play;
            $(this).addClass('pause');
            $('.btn-info').fadeIn();
        } else {
            audio.pause;
            $(this).removeClass('pause');
            $('.btn-info').fadeOut();
        }
    });
    $('.btn-info').click(function(e) {
        event.preventDefault();
        $(this).toggleClass('opened').toggleClass('closed');
        $('#info').toggle();
        if ($(this).hasClass('opened')) {
            $(this).addClass('btn-info-close');
        } else {
            $(this).removeClass('btn-info-close');
        }
    });
    // Закрываем панель по клику на ней и меняем вид спрайта .btn-info
    $('#info').click(function() {
        $('.btn-info').toggleClass('opened').toggleClass('closed');
        $(this).hide();
        if ($('.btn-info').hasClass('opened')) {
            $('.btn-info').add('btn-info-close');
        } else {
            $('.btn-info').removeClass('btn-info-close');
        }
    });
    $("#btn-plus").click(function(e) {
        event.preventDefault();
        $('#player')[0].volume += 0.1;
    });
    $("#btn-minus").click(function(e) {
        event.preventDefault();
        $('#player')[0].volume -= 0.1;
    });
});
