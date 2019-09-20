$('document').ready(function () {

  var currDate, currTime, nextTime, allTime;
        var time = document.getElementById('time');
        // 1.定义将来的时间,
        var nextDate = new Date('2019/10/06 00:00:00');
        // 开启定时器
        setInterval(function () {
            //获取当前的时间
            currDate = new Date();

            // 获取毫秒数
            currTime = currDate.getTime();
            nextTime = nextDate.getTime();
            // console.log(currTime,nextTime);

            // 转换
            allTime = nextTime - currTime;
            var allSecond = parseInt(allTime/1000);

            allday = parseInt(allSecond/24/3600);

            allhours = parseInt(allSecond/3600%24);

            allminute = parseInt(allSecond/60%60);

            allsecond = parseInt(allSecond%60);

            console.log(allday);
            console.log(allhours);

            document.getElementById('time').innerHTML = '距离二阶段考试还有' + allday + '天' + allhours + '小时' + allminute + '分钟' + allsecond + '秒';
        },1000)
})