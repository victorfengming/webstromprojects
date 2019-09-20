$('document').ready(function () {

    var n = 1;
    function move(){
        $('#tu').css({
            'left':n+'px',
        });

        if (n<-1823){
            n = 0;
        }else{
            n--;
        }
        console.log(n);

    }

    setInterval(move,1)
});
