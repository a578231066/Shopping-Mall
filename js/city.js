/*
    项目负责人：赵强
    项目创建日期:2017.8.4
    最新更新:2017.8.4
    修改人员:赵强
    修改日期:
    修改原因:
    修改代码行数区间: 
*/
$(function(){
    var h=$(window).height();
    $(".zhedang").height(h+"px");

    $(".dizhi_down button").click(function(){
        var oName=$(".name").val();
        var str=$(".telephone").val();
        var ret=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
        var ress=$("#trigger").html();
        var oAdd=$(".add").val();
    /* 验证姓名是否为空 */
        if(oName==""){
            $(".shouji").empty();
            $(".shouji").append("<span>姓名不能为空!</span>");
            $(".shouji").show(10);
            setTimeout(function(){
                $(".shouji").hide(400);
            },1000);
            return;
        }
        
    /* 验证手机号是否正确 */
        if(ret.test(str)){
            
        }else if(str==""){
            $(".shouji").empty();
            $(".shouji").append("<span>电话号不能为空!</span>");
            $(".shouji").show(10);
            setTimeout(function(){
                $(".shouji").hide(400);
            },1000);
            return;
        }else{
            $(".shouji").empty();
            $(".shouji").append("<span>电话号输入有误!</span>");
            $(".shouji").show(10);
            setTimeout(function(){
                $(".shouji").hide(400);
            },1000);
            return;
        }

    /* 验证地址是否为空 */
        if(ress==""){
            $(".shouji").empty();
            $(".shouji").append("<span>选择地区不能为空!</span>");
            $(".shouji").show(10);
            setTimeout(function(){
                $(".shouji").hide(400);
            },1000);
            return;
        }

    /* 验证地址是否为空 */
        if(oAdd==""){
            $(".shouji").empty();
            $(".shouji").append("<span>详细地址不能为空!</span>");
            $(".shouji").show(10);
            setTimeout(function(){
                $(".shouji").hide(400);
            },1000);
            return;
        }
    });

    $(".main_down button").click(function(){
        $(".zhedang").show(400);
        $(".dizhi").show(400);
    });
    
    $(".dizhi_top span").click(function(){
        $(".zhedang").hide(400);
        $(".dizhi").hide(400);
    });
});



