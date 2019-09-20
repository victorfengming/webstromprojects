dir = 'r';


$('document').ready(function () {

    var x = 0;
    var y = 0;
    time = setInterval(update,1)
})

function update(){
    console.log(dir)
    if (dir=='r'){
        $("#inner").animate({left:"+=30px"});
        // x++;
    }
    if (dir=='b'){
        // console.log('b');
        $("#inner").animate({top:"+=30px"});
        // x--;
    }
    if (dir=='l'){
        $("#inner").animate({left:"-=30px"});
        
    }

    if(dir=='t'){
        $("#inner").animate({top:"-=30px"});
        
    }
}

// function move2l() {
//     console.log('左边');
//     dir = 'l';
//     // $("#inner").animate({left:"-=30px"});

// }

// function move2r() {
//     console.log('右边');
//     // $("#inner").animate({left:"+=3px"});
//     dir = 'r';

// }

// function move2b() {
//     console.log('下边');
//     // $("#inner").animate({top:"+=3px"});
//     dir = 'b';

// }

// function move2t() {
//     console.log('上边');
//     // $("#inner").animate({top:"-=30px"});
//     dir = 't';

// }


// 监听键盘事件
$(document).keydown(function(){  

    if (event.keyCode == 87) {  
        dir = 't';
    }  
    if (event.keyCode == 83) {  
        // console.log(83);
        dir = 'b';
    }  
    if (event.keyCode == 65) {  
        // console.log(83);
        dir = 'l';
    }  
    if (event.keyCode == 68) {  
        // console.log(83);
        dir = 'r';
    }  
    
})

/*
        87  

    65  83  68
*/