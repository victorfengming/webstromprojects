// <script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>


var oPrev = document.getElementById('prev'),
// var oPrev = $('#prev')
    oNext = document.getElementById('next');
oMain = document.getElementsByClassName('main')[0];
// var oMain = $('.main')
oList = document.getElementsByClassName('list')[0];
oLi = document.getElementsByTagName('li');
// var oLi = $('li')
// jishiqi
var timer;
oLiLength = oLi.length;
index = 0;

// 设置定时器来进行图片的移动
function moveImg(dis) {
    // dis is the distance of img
    var time = 400;    // 每一笑次移动的时间；
    var eachTime = 20;  // meiyixiaoci yidong de shijian
    var eachDis = dis / (time / eachTime);
    var newLeft = oMain.offsetLeft + dis;
    console.log(oMain.offsetLeft);

    // console.log(typeof oMain.offsetLeft);
    function eachMove() {
        if (dis > 0 && oMain.offsetLeft < newLeft || dis < 0 && oMain.offsetLeft > newLeft) {
            console.log(newLeft);
            oMain.style.left = oMain.offsetLeft + eachDis + 'px';
        } else {
            clearInterval(timer);
            oMain.style.left = newLeft + 'px';

            if (newLeft == -3430) {
                oMain.style.left = -520 + 'px';
            }
            if (newLeft == 0) {
                oMain.style.left = -520 + 'px';
            }
        }

    }

    timer = setInterval(eachMove, eachTime)

}

oPrev.onclick = function () {
    moveImg(590);
};

oNext.onclick = function () {
    moveImg(-590);
};

function oLiStyle() {
    oList.getElementsByClassName('active')[0].className = "";
    oLi[i].className = 'active';
}

for (var i = 0; i < oLiLength; i++) {
    (function (j) {
        oLi[j].onclick = function () {
            index = j;
            oLiStyle();
            moveImg()
        }
    })(i);
}
