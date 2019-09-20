$('document').ready(function () {


    // 定义更新哈数
    function change(i){
        cont = "javascript";
        $('#before').text(cont.substring(0,i));
        $('#effect').text(cont.substr(i,1));
        $('#after').text(cont.substring(i+1));
    }

    var i = 0;

    // 设定定时器
    setInterval(function () {
        // 在匿名哈数中调用哈数
        change(i);
        i++;
        // 边界值限制,实现循环动画
        if (i>=cont.length){
            i = 0;
        }
    },200);

    // 监听鼠标进入事件
    $('#ev').mouseenter(function () {
        console.log('进来了<br>老弟');
        this.innerHTML = '进来了<br>老弟';
    });

    // 监听鼠标了离开事件
    $('#ev').mouseleave(function () {
        console.log('别走啊<br>老弟');
        this.innerHTML = '别走啊<br>老弟';
    })


})