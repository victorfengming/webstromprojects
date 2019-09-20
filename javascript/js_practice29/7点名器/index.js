$('document').ready(function () {

    // 获取标签
    var begin = document.getElementById('begin');
    var end = document.getElementById('end');
    var name = document.getElementById('name');

    // 定义变量
    var intervalID = null;
    var nameArr = ['凤明','天凯','齐健','曹阳','曹阳','何杰','维甲','宇鹏','杨鑫','张旭','岳阳','张杰','泽斌','佳兴'];

    // 监听点击
    begin.onclick = function (ev1) {
        clearInterval(intervalID);
        intervalID = setInterval(function () {
            // 随机数
            var s_index = parseInt(Math.random()*nameArr.length);

            var s_name = nameArr[s_index];

            name.innerText = s_name;
        },20)

    }
    // 监听点击
    end.onclick = function (ev1) {
        clearInterval(intervalID);

    }

})