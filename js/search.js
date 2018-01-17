/*
    项目负责人：赵强
    项目创建日期:2017.7.29
    最新更新:2017.7.31
    修改人员:赵强
    修改日期:2017.7.31
    修改原因:
    修改代码行数区间: 
*/

$(document).ready(function(){
    var h=$(window).height();
    $(".menu").height(h-90+"px");
    $(".content").height(h+"px");
    $(".sousuo").height(h+"px");
    $(window).scroll(function(){
        var top = $(document).scrollTop();          //定义变量，获取滚动条的高度
        var menu = $(".menu");                      //定义变量，抓取#menu
        var items = $(".content").find(".item");    //定义变量，查找.item

        var curId = "";                             //定义变量，当前所在的楼层item #id 

        items.each(function(){
            var m = $(this);                        //定义变量，获取当前类
            var itemsTop = m.offset().top;        //定义变量，获取当前类的top偏移量
            if(top > itemsTop-190){
                curId = "#" + m.attr("id");
            }else{
                return false;
            }
        });

        //给相应的楼层设置cur,取消其他楼层的cur
        var curLink = menu.find(".cur");
        if( curId && curLink.attr("href") != curId ){
            curLink.removeClass("cur");
            menu.find( "[href=" + curId + "]" ).addClass("cur");
        }
    });

/* 点击弹出遮罩层 */
$(".inp").click(function(){
    $(".sousuo").show(400);
});
$(".top_tou .one").click(function(){
    $(".sousuo").hide(400);
});


});
