var browser = {
versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {         //移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase();
}

if (browser.versions.mobile) {//判断是否是移动设备打开。browser代码在下面
    var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        //在微信中打开
        $('header').show();
        $('footer').show();
    }
    if (ua.match(/WeiBo/i) == "weibo") {
        //在新浪微博客户端打开
        $('header').show();
        $('footer').show();
    }
    if (ua.match(/QQ/i) == "qq") {
        //在QQ空间打开
        $('header').show();
        $('footer').show();
    }
    if(/alipay/ig.test(ua)){
        $('header').show();
        $('footer').show();
    }
    if (browser.versions.ios) {
        //是否在IOS浏览器打开
        $('header').show();
        $('footer').show();
    } 
    if(browser.versions.android){
        //是否在安卓浏览器打开
        $('header').show();
        $('footer').show();
    }
} else {
    //否则就是PC浏览器打开
    $('header').hide();
    $('footer').hide();
}