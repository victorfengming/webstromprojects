$('document').ready(function () {

    // 监听side点击事件
    $('#side>span:nth-child(1)').click(function () {
        to_left();
    });

    $('#side>span:nth-child(2)').click(function () {
        to_right();
    });

});

function to_right(){
    // if$("#full").position().left;
    $('#full').animate({left:"-=687px"},600);
}


function to_left(){
    $('#full').animate({left:"+=687px"},600);
}

a= 3;