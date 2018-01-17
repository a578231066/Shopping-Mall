/*
    项目负责人：赵强
    项目创建日期:2017.8.3
    最新更新:2017.8.3
    修改人员:赵强
    修改日期:
    修改原因:
    修改代码行数区间: 
*/
$(function(){
/* 编辑 */
    $("header span.bj").click(function(){
        $(".yearDown .inp").show();
        $(".yearDown p").addClass("w");
        $(".yearDown .dang").show();
        $("header span.bj").hide();
        $("header span.ok").show();
        $("footer").show();
    });

/* 完成 */
    $("header span.ok").click(function(){
        $(".yearDown .inp").hide();
        $(".yearDown p").removeClass("w");
        $(".yearDown .dang").hide();
        $("header span.bj").show();
        $("header span.ok").hide();
        $("footer").hide();
    });

/* 取消 */
    $(".quxiao").click(function(){
        $(".yearDown .inp").hide();
        $(".yearDown p").removeClass("w");
        $(".yearDown .dang").hide();
        $("header span.bj").show();
        $("header span.ok").hide();
        $("footer").hide();
    });
    
/* 返回顶部 */
    $(document).scroll(function(){
        var y=$(document).scrollTop();// 滑块移动距离
        if(y>200){
            $("#go").fadeIn();
        }else{
            $("#go").fadeOut();
        }
    });

});




