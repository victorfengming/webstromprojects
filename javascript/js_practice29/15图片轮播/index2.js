$('document').ready(function () {

    w = $('#main').outerWidth();

    // 监听side点击事件
    $('#side>span:nth-child(1)').click(function () {
        console.log(123);
        chan('right');
    });
    $('#side>span:nth-child(2)').click(function () {
        console.log(123);
        chan('left');
    });

    // chan(false);
    // chan(2);


});


function chan(dir) {
    direc = dir=='left';
    // direc为 方向 true为向右,flase为向左
    diff = direc?0-w:w;
    // console.log('diff---',diff);
    // 获取当前的位置left值  这个是直接获取值的属性方法
    // 要是想获取css属性的内容使用 css('left')就ok了
    // lef 为当前的位置
    var lef = $("#full").position().left;

    // des_lef 表示 要到的位置
    var des_lef = lef + diff;
    console.log(lef);
    // 设置定时器 移动图片div
    i = 0;
    t = setInterval(function () {
        // console.log(n);
        $("#full").css({
            'left':lef+'px'
        });

        // 更新位置
        // console.log('direc---',direc);
        dis = Math.abs(lef-des_lef);

        i++;
        if(dis<w/2){
            i--;
        }

        lef = direc?lef-i:lef+i;
        // lef = parseInt(lef);
        console.log('lef---',lef);
        console.log('des_lef---',des_lef);
        if (dis<=1){
            // lef = des_lef;
            // 清楚定时器并且退出
            clearInterval(t);
            return true;

        }
    },1)
}

