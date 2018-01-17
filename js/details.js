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
    $(document).scroll(function(){
        var y=$(document).scrollTop();// 滑块移动距离
        //1.头部固定
        if(y>120){
            $("header div").addClass("ding");
            $("header").css({
                background: '#fff'
            });
        }else{
            $("header div").removeClass("ding");
            $("header").css({
                background: 'none'
            });
        }
    });

/* banner */
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
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
