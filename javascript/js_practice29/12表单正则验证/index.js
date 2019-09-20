
$('document').ready(function () {

    // 初始化操作
    init();

    $('#user-ini').blur(function () {

        check($(this),check_email);

    });

    $('#pw-ini').blur(function () {

        check($(this),check_pw);

    });

    $('#pw2-ini').blur(function () {

        check($(this),check_pw2);

    });


});



function check_email(inp){

    return inp.match(/^[\w-]+@[\w-]+(\.[\w]+){1,3}$/) != null;

}

function check_pw(inp){

    fir_pw = inp;
    console.log(inp.length);
    // return 6 <= inp.length && inp.length <= 18;
    return false;

}

function check_pw2(inp){

    return inp == fir_pw;

}

function init() {


    $('#user-res').hide();
    $('#pw-res').hide();
    $('#pw2-res').hide();

}



function check(get_dom,func) {

    curr_dom = get_dom.parent().next().children().eq(0);

    console.log(curr_dom);
    curr_dom.show();

    if (func(get_dom.val())){

        console.log('检查成了');
        curr_dom.removeClass();
        curr_dom.addClass("alert alert-success");
        curr_dom.html('成了！输入的没毛病')

    }else{

        console.log('检查瑕疵');
        curr_dom.removeClass();
        curr_dom.addClass("alert alert-danger");
        curr_dom.html('错误！输入格式不对')
    }

}


