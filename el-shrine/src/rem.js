(function () {
    function recaculate() {
        var zzw = 375; //制作宽
        var sjw = 750; //设计宽
        var htmlw = document.documentElement.clientWidth; //获取当前可见屏幕大小 ;
        if (!htmlw) return; //如果没有width return ;
        htmlw = (htmlw > sjw) ? sjw : htmlw; //设置屏幕款最大为750
        document.documentElement.style.fontSize = (htmlw / zzw) * 20 + "px"; //原始html font-size 大小 * (当前屏幕宽度 / 设计稿宽度) ;
    }
    recaculate();
    var resizeEvt = "orientationchange" in window ? "orientationchange" : "resize";
    // document.addEventListener("DOMContentLoaded", recaculate, false);
    window.addEventListener(resizeEvt, recaculate, false);
})();
