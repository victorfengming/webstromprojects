$('document').ready(function () {


    // 设置输入框placeholder属性
    $('#shuru').attr('placeholder','这就是默认值');

    $('#shuru').focus(function () {

        $('#shuru').css({
            'font-size':'150px',

        });

        $('#tishi').css({
            'color':'red',

        })
    })

})