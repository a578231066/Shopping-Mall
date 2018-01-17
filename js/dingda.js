/*
    项目负责人：赵强
    项目创建日期:2017.9.4
    最新更新:2017.9.4
    修改人员:赵强
    修改日期:
    修改原因:
    修改代码行数区间: 
*/
$(function(){
    var i=1;
    $("#main .tianjia").click(function(){
        $("#main .neirong").append("<div>添加商品"+i+"</div>");
        i++;
        $("#main .neirong div").show(500);
    });
});