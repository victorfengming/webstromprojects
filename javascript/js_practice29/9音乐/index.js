
$('document').ready(function () {

    // $("#box").rotate(45);

    leng = $("#box>div").size();

    function upd() {

        for(var i=0;i<leng;i++){

            curr_div = $('#box').children().eq(i);

            var randomNum1 = Math.random();

            var hei = 300*randomNum1 + 'px';

            curr_div.css('height',hei);
        }

    }

    setInterval(upd,500)

})