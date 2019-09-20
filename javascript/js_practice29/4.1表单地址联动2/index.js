// 定义一个字典
var content = {

    '北京':{
        '海淀区':{
            '辖水磨':{},'成府':{},'大成坊':{},'善元桥':{},'海淀路':{},'大胡同':{},'西大街':{},'新区':{},
        },
        '东城区':{
            '东华门街道':{},'景山街道':{},'交道口街道':{},'安定门街道':{},'北新桥街道':{},'东四街道':{},'朝阳门街道':{},'建国门街道':{},'东直门街道':{},'和平里街道':{},'前门街道':{},'崇文门外街道':{},'东花市街道':{},
        },
        '西城区':{},
        '门头沟区':{},
        '房山区':{},
        '密云区':{},
        '延庆区':{},
        '朝阳区':{},
        '丰台区':{},
        '石景山区':{},
        '通州区':{},
        '顺义区':{},
        '昌平区':{},
        '大兴区':{},
        '怀柔区':{},
        '平谷区':{},
        },
    '天津':{
        '和平区':{},'河西区':{},'河北区':{},'河东区':{},'南开区':{},'红桥区':{},'滨海新区':{},'东丽区':{},'西青区':{},'津南区':{},'北辰区':{},'武清区':{},'宝坻区':{},'蓟州区':{},'静海区':{},'宁河区':{}
    },
    '沈阳':{'沈河区':{},'和平区':{},'皇姑区':{},'大东区':{},'铁西区':{},'浑南区':{},'沈北区':{},'于洪区':{},'苏家屯区':{},'辽中区':{},'康平区':{},'法库区':{},'新民市':{}},
    '上海':{
        '黄浦区':{},'徐汇区':{},'长宁区':{},'静安区':{},'普陀区':{},'虹口区':{},'杨浦区':{},'闵行区':{},'宝山区':{},'嘉定区':{},'浦东新区':{},'金山区':{},'松江区':{},'青浦区':{},'奉贤区':{},'崇明区':{}
    },
    '深圳':{
        '罗湖区':{},'福田区':{},'南山区':{},'盐田区':{},'宝安区':{},'龙岗区':{},'光明新区':{},'坪山新区':{}
    },
}

var i = 1;

// 通用更新函数
function add_sel(curr_arr, curr_id) {
    // qignchu 清除之前的select
    console.log('添加');

    console.log('currarr'+curr_arr);

    console.log('currid'+curr_id);
    // 创建一个select
    $('#sel').append('<select id='+curr_id+' class="form-control"></select>');

    curr_obj = $('#'+curr_id);

    // 清空之前的option 初始化操作
    curr_obj.children().remove();

    // 定义一个当前遍历对象
    // var curr_arr = content[curr_choice];

    for (var con in curr_arr) {
        // 添加option的值
        curr_obj.append("<option>"+con+"</option>");
    }

}
//

//
$(document).ready(function () {
    add1();

    // curr_arr = content['北京'];

    // curr_id = '2';
    //
    // console.log(1);
    //
    // add_sel(curr_arr, curr_id);

    //
    $('select').change(function () {

        // console.log(this);
        console.log($(this));

        // 获取select选中的值
        // curr_choice = $("this option:selected").text();
        curr_choice = $(this).eq(0).val();
        console.log(curr_choice);

        $('#sel>select').eq(1).remove();

        // 更新市的select中的option的内容
        var curr_arr = content[curr_choice];

        curr_id = '2';

        add_sel(curr_arr, curr_id)

        // $('#sel').append('<select id='+curr_id+' class="form-control"></select>');

    })

});

function add1(){

    curr_arr = content;

    curr_id = '1';

    console.log(1);

    add_sel(curr_arr, curr_id);


}