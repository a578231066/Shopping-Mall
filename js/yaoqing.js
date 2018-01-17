/*
    项目负责人：赵强
    项目创建日期:2017.8.1
    最新更新:2017.8.1
    修改人员:赵强
    修改日期:
    修改原因:
    修改代码行数区间: 
*/

$(function(){
var h=$(window).height();
$(".main img").height(h+"px");

$(".zhedang").height(h+"px");
$(".zhedang1").height(h+"px");

/* 点击规则 */
$(".size_button .one").click(function(){
    $(".zhedang").show(400);
    $(".rules").show(400);
});

$(".zhedang,.rules_top span").click(function(){
    $(".zhedang").hide(400);
    $(".rules").hide(400);
});

/* 点击分享 */
$(".size_button button").click(function(){
    $(".zhedang1").show(400);
    $(".share").show(400);
});
$(".zhedang1,.share_down").click(function(){
    $(".zhedang1").hide(400);
    $(".share").hide(400);
});

});