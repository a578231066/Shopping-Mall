/*
    项目负责人：赵强
    项目创建日期:2017.8.2
    最新更新:2017.8.2
    修改人员:赵强
    修改日期:
    修改原因:
    修改代码行数区间: 
*/
$(function(){
var h=$(window).height();
$("body").height(h+"px");
$(".zhedang").height(h+"px");

/* 评价 */
$(".we").click(function(){
    $(".zhedang").show(400);
    $(".guli").show(400);
});

$(".zhedang,.guli .guan").click(function(){
    $(".zhedang").hide(400);
    $(".guli").hide(400);
});

/* 清除缓存 */
$(".del").click(function(){
    dele();
});

function dele(){
    $(".zhedang").show(400);
    $(".end").show(400);
    $(".end_top").append("<p>确认清除缓存?</p>");

    $(".zhedang,.glay").click(function(){
        $(".end_top").empty();
        $(".zhedang").hide(400);
        $(".end").hide(400);
    });
}

$(".main button").click(function(){
    end();
});

function end(){
    $(".zhedang").show(400);
    $(".end").show(400);
    $(".end_top").append("<p>确认退出登录?</p>");

    $(".zhedang,.glay").click(function(){
        $(".end_top").empty();
        $(".zhedang").hide(400);
        $(".end").hide(400);
    });
}


});