/* 
* @Author: anchen
* @Date:   2017-08-31 17:02:44
* @Last Modified by:   anchen
* @Last Modified time: 2017-08-31 17:05:18
*/

$(document).ready(function(){
    function is_weixin() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {              
            return true;
        } else {
            return false;
        }
    }
    var checkweixin=is_weixin();
        if(checkweixin){
            $('header').show();
            $('footer').show();
            $('.weixin_logo').show();
            $('.better_change').show();
        }else{
            $('header').hide();
            $('footer').hide();
            $('.weixin_logo').hide();
            $('.better_change').hide();
        }
    $(window).scroll(function(){
        $('.drop-down-content-tag').css('display','none');
        $('.drop-down-bg img').attr('src','/static/nc_mobile/drop-down-bg.png');
        $('.drop-down-bg').attr('bg_id',1);
        if($(window).scrollTop()>300){
            $('#nav-wrap').css('position','fixed');
            $('#nav-wrap').css('top','0px');
            $('#nav-wrap').css('z-index','2');
        }else{
            $('#nav-wrap').css('position','');
            $('#nav-wrap').css('top','');
        }   
    })
    $('#app_foot_close').click(function(){
        $('.app_foot_load').css('display','none');
    });
    $('.drop-down-bg').click(function(){
        var bgid=$(this).attr('bg_id');
        if(bgid==1){
            $('.drop-down-content-tag').css('display','block');
            $('.drop-down-bg img').attr('src','/static/nc_mobile/drop-up-bg.png');
            $(this).attr('bg_id',2);
        }else{
            $('.drop-down-content-tag').css('display','none');
            $('.drop-down-bg img').attr('src','/static/nc_mobile/drop-down-bg.png');
            $(this).attr('bg_id',1);
        }
    });
});