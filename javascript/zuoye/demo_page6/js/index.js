
    console.log(312);

$('document').ready(function () {
    // 初始化
    $('#lunbo_full').css({
        'left':'-5240px',
    });
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

setInterval(update_left,1);
setInterval(to_right,1000);

console.log(2);

function update_left(){

    if($('#lunbo_full').position().left<=-5764){
        $('#lunbo_full').css({
            'left':'-524px',
        });
        console.log('跳-524');
    }
    // if($('#lunbo_full').position().left>=0){
    //     $('#lunbo_full').css({
    //         'left':'-5764px',
    //     })
    //     console.log('跳5240');
    //
    // }
    console.log($('#lunbo_full').position().left);
    // console.log(typeof $('#lunbo_full').offset().left);
    // }
}