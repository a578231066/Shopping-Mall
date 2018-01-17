/*
    项目负责人：赵强
    项目创建日期:2017.8.23
    最新更新:2017.8.23
    修改人员:无
    修改日期:无
    修改原因:无
    修改代码行数区间:无
*/
$(function(){
    function page(p){
        var url="http://192.168.0.5/Wap/getlist?page="+p;
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
            },
            success: function(data){
                /*console.log(data);*/
                for(var i=0;i<data.data.length;i++){
                    /*console.log(i);*/
                    if(i%2!=0){
                        $("#main_two").append("<div class='fl left'><a href='detail/"+data.data[i].id+"'><div class='divImg'><img src='"+data.data[i].goods_pic+"' /></div><p class='top'>"+data.data[i].goods_title+"</p><p class='down'><span class='money'>￥</span>"+data.data[i].app_price+"<span class='fr'>详情</span></p></a></div>");
                    }else{
                        $("#main_two").append("<div class='fr left'><a href='detail/"+data.data[i].id+"'><div class='divImg'><img src='"+data.data[i].goods_pic+"' /></div><p class='top'>"+data.data[i].goods_title+"</p><p class='down'><span class='money'>￥</span>"+data.data[i].app_price+"<span class='fr'>详情</span></p></a></div>");
                    }
                }                   
            },
            /*error: function(xhr, type){
                alert('莫慌，别太心急！')
            }*/
        });
    }
});