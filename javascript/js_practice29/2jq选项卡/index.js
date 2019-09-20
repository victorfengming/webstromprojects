$('document').ready(function () {

    $('#content>li').hide();

    $('#content>li').eq(0).show();

    $('#menu').children().addClass('menu-li');
    // 监听菜单点击事件
    $(".menu-li").click(function () {

        var index=$(".menu-li").index($(this));
        console.log(index);

        $('#content>li').hide();

        $('#content>li').eq(index).show();

    });
})