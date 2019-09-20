$(document).ready(function(){
    //鼠标移动到图片显示预览区域和放大后的图片，移除隐藏 
    $(".img").hover(function(){
        $(".bimg").css("display","block");
        $("#move").css("display","block");
    },function(){
        $(".bimg").css("display","none");
        $("#move").css("display","none");
    });

    //底部图片切换，鼠标移动到小图，大图和放大后的大图对应该小图(用户把鼠标移动一个像素，就会发生一次 mousemove 事件)
    $(".fdj li img").mousemove(function(){
        $(".fdj .simg img").attr("src",$(this).attr("src"));
        $(".fdj li img").css("border","solid 0px");
        $(this).css("border","solid 2px #000");
        $(".fdj .bimg img").attr("src",$(this).attr("src"));
    });

    //放大区域移动，大图片移动
    $(".img").mousemove(function(event){
        var x = event.pageX;//定义一个变量表示当前鼠标在x轴位置
        var y = event.pageY;
        //offset() 方法返回或设置匹配元素相对于文档的偏移（位置）
        var nx = x - $(".img").offset().left-$("#move").width()/2;//预览区域左侧与放大前的大图左边的距离
        var ny = y - $(".img").offset().top-$("#move").height()/2;
    
        if(nx < 0){//鼠标距离大图左侧不到预览区域1/2处
            nx = 0;
        }

        if(nx > $(".img").width()-$("#move").width()){//鼠标距离大图右侧不到预览区域1/2处
            nx = $(".img").width()-$("#move").width();
        }

        if(ny < 0){
            ny = 0;
        }

        if(ny > $(".img").height()-$("#move").height()){
            ny = $(".img").height()-$("#move").height();
        }

        $("#move").css({//预览区样式
            left:nx+"px",
            top:ny+"px"
        })
    
        $(".bimg>img").css({//放大后的图片样式
            left:-nx*$(".bimg").width()/$("#move").width()+"px",
            top:-ny*$(".bimg").height()/$("#move").height()+"px"
        });
    
    });

}); 