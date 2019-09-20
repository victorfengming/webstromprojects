

// 定义一个字典
var content = {

    '北京':{
        '海淀区':{},'东城区':{},'西城区':{},'门头沟区':{},'房山区':{},'密云区':{},'延庆区':{},'朝阳区':{},'丰台区':{},'石景山区':{},'通州区':{},'顺义区':{},'昌平区':{},'大兴区':{},'怀柔区':{},'平谷区':{}
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



function update(curr_arr, curr_obj){

    // 清空之前的option 初始化操作
    curr_obj.children().remove();

    // 定义一个当前遍历对象
    // var curr_arr = content[curr_choice];

    for (var con in curr_arr) {
        // 添加option的值
        curr_obj.append("<option>"+con+"</option>");
    }

}


// 这两个方法都能获取长度,咱也不知道有啥区别
// console.log($("#sheng > option").length);

// console.log($("#sheng > option").size());

function sheng_change(){

        // 获取select选中的值
        curr_choice = $("#sheng option:selected").text();

        console.log(curr_choice);

        // 更新市的select中的option的内容
        var curr_arr = content[curr_choice];

        curr_obj = $('#shi');

        update(curr_arr,curr_obj);




        // 这些花里胡哨的都没有用
        // 获取当前选择的那个
        // var options=$("#sheng option:selected");
        // // 获取索引值
        // var index = $('#sheng').children().index($(options));
        //
        // console.log(index);

        // ----------------字典靠键来获取值,傻啊,索引才是真的没用
        // ----------------在js中好像不叫字典,叫关联数组,就像PHP一样

        // 一个属性直接搞定select的索引
        // var suoyin=this.selectedIndex;
        //
        // console.log(suoyin);

        // var text = content['北京'][suoyin];

        // $('#index').innerHTML = text
        // update_shi(index);
}

function __init__(){
    //
    // $("select").focus(function () {


        /*

        // 初始化操作

        // 直接就设置select的内容
        // 遍历字典中的键
        */

        // 初始化省的select中的option
        for (var key in content) {
            // 添加option的值
            $("#sheng").append("<option>"+key+"</option>");
            console.log(key);
        }

        // 设置初始化的市的内容
        // curr_choice = $("#sheng option:selected").text();
        // update_shi(curr_choice);

        // 这些花里胡哨的都没有用
        // 直接就一个手动change事件
        // $("#sheng").trigger("change");



        /*
        curr_choice = $("#sheng option:selected").text();
        // 构建当前便利数组
        var curr_arr = content[curr_choice];
        // 更新市的select中的option的内容
        update(curr_arr,$("#shi"));

        */

        // 这就有瑕疵了,你这些代码和上面change函数是一样的,那还写个毛线啊
        // 直接就一个手动触发时间就OK了

        // $("#sheng").trigger("change");
        // 又进行了一次封装,就不用手动触发改变时间了
        sheng_change();
    // })
}

$('document').ready(function () {


    // 监听select的改变事件
    $('#sheng').change(function(){
        sheng_change();
    });

    // 监听按钮点击提交事件

    $('#commit').click(function () {

        // 构建提示信息
        mess = '你选择的地址是:'+$("#sheng option:selected").text()+'  '+$("#shi option:selected").text();
        // 弹出提示信息
        alert(mess);
    });


    __init__();
})