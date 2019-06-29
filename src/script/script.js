$(function(){
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;

        $('html, body').animate({scrollTop: dn}, 1000);
        document.getElementById('menu').style.display = '';
    });
});

$(document).ready(function() {

    $("#form").submit(function() {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize()
        }).done(function() {
            alert("Спасибо! Ваша заявка успешно отправлена. Мы скоро ответим.");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    $(".burger").click(function (e) {
        var menu = document.getElementById('menu').style.display;

        if (menu === '')
            document.getElementById('menu').style.display = 'block';
        if (menu === 'block')
            document.getElementById('menu').style.display = '';
    })
});

