$(function(){
  
    var mHtml = $("html");
    var page = 1;
    mHtml.animate({scrollTop : 0},10);
    
    $(window).on("wheel", function(e) {
        if(mHtml.is(":animated")) return;
        if(e.originalEvent.deltaY > 0) {
            if(page == 4) return;
            page++;
        } else if(e.originalEvent.deltaY < 0) {
            if(page == 1) return;
            page--;
        }
        var posTop =(page-1) * $(window).height();
        mHtml.animate({scrollTop : posTop},1000,function(){
            if(page == 1){
                $("ul#infoMenu li a").css("color","black");
                $("header h2 g").attr("fill","black");
                $("header h2 ").css("display","none");
                $("header h2 ").fadeIn(1000); 
                $(".Men a").css("color","black");
                $(".Women a").css("color","black");
                $(".Kids a").css("color","black");
                $(".Codi a").css("color","black");
                
            }else if(page == 2){
                $("ul#infoMenu li a").css("color","white");
                $("header h2 ").css("display","none");
                $("header h2 ").fadeIn(1000); 
                $("header h2 g").attr("fill","white");
                $(".Men a").css("color","white");
                $(".Women a").css("color","white");
                $(".Kids a").css("color","white");
                $(".Codi a").css("color","white");
            }else if(page == 3){
                $("ul#infoMenu li a").css("color","white");
                $("header h2 ").css("display","none");
                $("header h2 ").fadeIn(1000); 
                $("header h2 g").attr("fill","white");
                $(".Men a").css("color","white");
                $(".Women a").css("color","white");
                $(".Kids a").css("color","white");
                $(".Codi a").css("color","white");
            }else if(page == 4){
                $("ul#infoMenu li a").css("color","black");
                $("header h2 ").css("display","none");
                $("header h2 ").fadeIn(1000);
                $("header h2 g").attr("fill","black"); 
                $(".Men a").css("color","black");
                $(".Women a").css("color","black");
                $(".Kids a").css("color","black");
                $(".Codi a").css("color","black");
            }


        });
    })

});
