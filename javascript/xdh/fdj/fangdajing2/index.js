$(document).ready(function () {


    $(".img").hover(function () {
        $(".bimg").css("display", "block");
        $("#move").css("display", "block");
    }, function () {
        $(".bimg").css("display", "none");
        $("#move").css("display", "none");
    });



    $(".img").mousemove(function (event) {
        var x = event.pageX;
        var y = event.pageY;
        var nx = x - $(".img").offset().left - $("#move").width() / 2;
        var ny = y - $(".img").offset().top - $("#move").height() / 2;
        if (nx < 0) {
            nx = 0;
        }
        if (nx > $(".img").width() - $("#move").width()) {
            nx = $(".img").width() - $("#move").width();
        }
        if (ny < 0) {
            ny = 0;
        }
        if (ny > $(".img").height() - $("#move").height()) {
            ny = $(".img").height() - $("#move").height();
        }
        $("#move").css({
            left: nx + "px",
            top: ny + "px"
        });
        $(".bimg>img").css({
            left: -nx * $(".bimg").width() / $("#move").width() + "px",
            top: -ny * $(".bimg").height() / $("#move").height() + "px"
        });
    })


    list_img = $('.ssimg');
    // 遍历图片
    for(var i=0; i<4; i++){

        (function (i) {
            var img = list_img[i];

            img.onclick = function () {
                $('.simg').children[0].src = "img/pic00"+(i + 1)+".jpg";
                $('.bimg').src = "img/pic0"+(i + 1)+".jpg";
                // 完美实现功能
            }
        })(i);
    }

});