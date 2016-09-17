var duoshuoQuery = {short_name:"vansia"};
  (function() {
    var ds = document.createElement('script');
    ds.type = 'text/javascript';ds.async = true;
    ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
    ds.charset = 'UTF-8';
    (document.getElementsByTagName('head')[0] 
     || document.getElementsByTagName('body')[0]).appendChild(ds);
  })();
$(document).ready(function(){
  window.onload=function(){  
                 changeDivHeight();  
            }  
            //当浏览器窗口大小改变时，设置显示内容的高度  
            window.onresize=function(){  
                 changeDivHeight();  
            }  
            function changeDivHeight(){               
                var w = document.documentElement.clientWidth;//获取页面可见高度  
                if (w<768) {
                  $(".text").css("width",w);
                  $(".time").css("width",w);
                  $(".ph").css("width",w);
                  $(".footer").css("width",w);
                  $(".welcome").css("width",w);
                  $(".siderbar").css("position","static");
                  $(".main").css("margin-left","0");
                } 
                if(w>=768){
                 $(".text").css("width","910px");
                  $(".time").css("width","910px");
                  $(".ph").css("width","910px");
                  $(".footer").css("width","910px");
                  $(".welcome").css("width","910px");
                  $(".main").css("position","absolute");
                  $(".main").css("margin-left","390px");
                  $(".siderbar").css("position","fixed");
               
                }
}
});