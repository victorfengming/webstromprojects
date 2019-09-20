$(document).ready(function () {

    //鼠标移动到图片显示，移除隐藏
    $(".img").hover(function () {
        $(".bimg").css("display", "block");
        $("#move").css("display", "block");
    }, function () {
        $(".bimg").css("display", "none");
        $("#move").css("display", "none");
    });
    //放大区域移动，大图片移动
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

});