var ox = 0;
var oy = 0;
function func(){

    if(oy==0){
        ox++;
    }
    if(ox>=400){
        oy++;
        ox=400;
    }
    if(oy>=400){
        ox--;
        oy=400;
    }
    if(ox==0){
        oy--;
    }

    $('#sm').css({
                   left:ox+"px",//移动后的left的值
                   top:oy + "px" //移动后y的值
            });
}

setInterval(func,5);
