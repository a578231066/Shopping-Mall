/*
    项目负责人：赵强
    项目创建日期:2017.7.20
    最新更新:2017.7.20
    修改人员:无
    修改日期:无
    修改原因:无
    修改代码行数区间:无
*/
window.onload=function(){
/* nav */
    var swiper = new Swiper('.swiper-container_nav', {
        slidesPerView: 7.5,
        paginationClickable: true,
        spaceBetween: 0,
        freeMode: true
    });
/* banner */
    var swiper = new Swiper('.swiper-container_banner', {
        pagination: '.one',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });

/* 两排图标 */
    var swiper = new Swiper('.swiper-container_one', {
        slidesPerView: 4.5,
        slidesPerColumn: 2,
        paginationClickable: true,
    });

/* touch 内容 */
    var page='pagenavi';
    var mslide='slider';
    var mtitle='emtitle';
    arrdiv = 'arrdiv';

    var as=document.getElementById(page).getElementsByTagName('a');

    var tt=new TouchSlider({id:mslide,'auto':'-1',fx:'ease-out',direction:'left',speed:600,timeout:5000,'before':function(index){
        var as=document.getElementById(this.page).getElementsByTagName('a');
        as[this.p].className='';
        as[index].className='active';
        this.p=index;
        var txt=as[index].innerText;
        $("#"+this.page).parent().find('.emtitle').text(txt);
        var txturl=as[index].getAttribute('href');      
        var turl=txturl.split('#');
        $("#"+this.page).parent().find('.go_btn').attr('href',turl[1]);
    }});

    tt.page = page;
    tt.p = 0;
    //console.dir(tt); console.dir(tt.__proto__);
    for(var i=0;i<as.length;i++){
        (function(){
            var j=i;
            as[j].tt = tt;
            as[j].onclick=function(){
                this.tt.slide(j);
                return false;
            }
        })();
    }
}


/* jQuery banner */
$(function(){
    var timejpg=1000; //轮播时间
    var num=$('.box .box_img li').size(); //获取li中图片的数量
    for(var i=1; i<=num; i++){
        $(".box_tab").append("<a href='javascript:(void)'>"+" "+"</a>");
    }   

//初始化
    $(".box_img li").eq(0).show();
    $(".box_tab a").eq(0).addClass("active");

//轮播基本功能(鼠标点击按钮轮播)  
    $(".box_tab a").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var index=$(this).index();
        i=index;
        /***
            1.解决点击按钮后,无法按顺序轮播的bug
            2.原理: 将鼠标经过按钮的下标值,传给自动轮播move的按钮下标.
        ***/
        $(".box_img li").eq(index).stop().fadeIn(400).siblings().stop().fadeOut(400);
    });

//自动轮播 
    var i=0; //图片|按钮的数组下标
    var timer=setInterval(move,timejpg);
    function move(){
        i++;
        if(i==num){
            i=0;
        }
        if(i<0){
            i=num-1;
        }
        $(".box_tab a").eq(i).addClass("active").siblings().removeClass();
        $(".box_img li").eq(i).stop().fadeIn(400).siblings().stop().fadeOut(400);
    }
//鼠标经过停止
    $(".box").hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(move,timejpg);
    });

//左右 方向键
    $(".pLeft").click(function(){
        i-=2;//减去 i++然后在减去一个
        move();
        
    });
    $(".pRight").click(function(){
        
        move();
        
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









