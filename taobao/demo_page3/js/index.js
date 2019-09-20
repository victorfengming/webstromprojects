    console.log(2);

$('document').ready(function () {
    console.log(2);
    // 监听side点击事件
    $('#lunbo_side>span:nth-child(1)').click(function () {
        console.log(1);
        to_left();
    });

    $('#lunbo_side>span:nth-child(2)').click(function () {
        to_right();
    });

});

function to_right(){
    // if$("#full").position().left;
    $('#lunbo_full').animate({left:"-=524px"},300);
}


function to_left(){
    $('#lunbo_full').animate({left:"+=524px"},300);
}

setInterval(to_right,2000);

console.log(2);