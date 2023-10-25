$(function(){//제이쿼리 방식
//수직으로 내렸을때 가로방향 슬라이드 코드

    let count1 = 0;             //슬라이드 이미지 첫 위치 변수
    let prev1 = $(".prev1");    //이전 버튼 영역
    let next1 = $(".next1");    //다음 버튼 영역
    let slide1 = $("#slide1");  //슬라이드 사진 영역

    let count2 = 0;             //2.슬라이드 이미지 첫 위치 변수
    let prev2 = $(".prev2");    //2.이전 버튼 영역
    let next2 = $(".next2");    //2.다음 버튼 영역
    let slide2 = $("#slide2");  //2.슬라이드 사진 영역

    let count3 = 0;             //3.슬라이드 이미지 첫 위치 변수
    let prev3 = $(".prev3");    //3.이전 버튼 영역
    let next3 = $(".next3");    //3.다음 버튼 영역
    let slide3 = $("#slide3");  //3.슬라이드 사진 영역

   

    
    
    prev1.click(function(){
        //클릭시 이벤트 발동 함수
        count1 +=100;
        //풀페이지 사이트 이기 때문에 복합대입연산자 사용해서 +=100 설정
        if(count1<=-100){
            
            slide1.animate({left:count1+"%"},100,function(){
                if(count1 == -200){
                $(".Men a").css("color","black");
                $(".Women a").css("color","black");
                $(".Kids a").css("color","black");
                $(".Codi a").css("color","black");      
                $("header h2").css("display","none");
                $("header h2").fadeIn(1000); 
                $(".Women").css("fontWeight","100");
                $(".Men").css("fontWeight","100");
                $(".Kids").css("fontWeight","bolder");
                $(".Codi").css("fontWeight","100");

                }else if(count1 == -100){
                    $("header h2").css("display","none");
                    $("header h2").fadeIn(1000);
                    $(".Women").css("fontWeight","bolder");
                    $(".Men").css("fontWeight","100");
                    $(".Kids").css("fontWeight","100");
                    $(".Codi").css("fontWeight","100");
                    $(".Men a").css("color","black");
                    $(".Women a").css("color","black");
                    $(".Kids a").css("color","black");
                    $(".Codi a").css("color","black");      
                    
                }
            });
            //px 값이 아닌 % 값으로 치환
            next1.show();
            //count1 값이 -100보다 작거나 같다면 다음 버튼 보이게 하기. 
        }  
        else if(count1>=0){
            $("header h2 ").css("display","none");
            $("header h2 ").fadeIn(1000);
            $("header h2 g").attr("fill","black");
            slide1.animate({left:count1+"%"},100);
            $(".Women").css("fontWeight","100");
            $(".Men").css("fontWeight","bolder");
            $(".Kids").css("fontWeight","100");
            $(".Codi").css("fontWeight","100");
            $(".Men a").css("color","black");
            $(".Women a").css("color","black");
            $(".Kids a").css("color","black");
            $(".Codi a").css("color","black");      
            //px 값이 아닌 % 값으로 치환
            prev1.hide();
            //count1 값이 0보다 크거나 같으면 이전 버튼 감추기.
        }
    });

    next1.click(function(){
        //클릭시 이벤트 발동 함수
        count1 -=100;
        //풀페이지 사이트 이기 때문에 복합대입연산자 사용해서 -=100 설정
        if(count1>=-200){
       
        slide1.animate({left:count1+"%"},100,function(){
            if(count1 == -100){
                $("header").css("display","none");
                $("header").fadeIn(1000);
                $(".Women").css("fontWeight","bolder");
                $(".Men").css("fontWeight","100");
                $(".Kids").css("fontWeight","100");
                $(".Codi").css("fontWeight","100");
                $("header h2 g").attr("fill","white");
            }else if(count1 == -200){
                $("header h2 ").css("display","none");
                $("header h2 ").fadeIn(1000);
                $(".Women").css("fontWeight","100");
                $(".Men").css("fontWeight","100");
                $(".Kids").css("fontWeight","bolder");
                $(".Codi").css("fontWeight","100");
                $("header h2 g").attr("fill","black");
            }
                
                
         
        });
        prev1.show(); 
        
        
        //px 값이 아닌 % 값으로 치환
       
        //count1 값이 -200보다 크거나 같으면 이전버튼 보이게 하기.
        }
        else if(count1 <=-200){
            $("header h2").css("display","none");
            $("header h2").fadeIn(1000);
            slide1.animate({left:count1+"%"},100);
            $(".Kids").css("fontWeight","100");
            $(".Women").css("fontWeight","100");
            $(".Men").css("fontWeight","100");
            $(".Codi").css("fontWeight","bolder");
            $(".Men a").css("color","black");
            $(".Women a").css("color","black");
            $(".Kids a").css("color","white");
            $(".Codi a").css("color","white");
            //px 값이 아닌 % 값으로 치환
            next1.hide();
        //count1 값이 -200보다 작거나 같으면 다음버튼 감추기.
        }
    });
    
    
    
    prev2.click(function(){
        count2 +=100;
        if(count2<=-100){
            slide2.animate({left:count2+"%"},100,function(){
                if(count2 == -200){
                    $("ul#infoMenu li a").css("color","black");
                    $("header h2 g").attr("fill","black");
                    $("header h2 ").css("display","none");
                    $("header h2 ").fadeIn(1000); 
                    $(".Women").css("fontWeight","100");
                    $(".Men").css("fontWeight","100");
                    $(".Kids").css("fontWeight","bolder");
                    $(".Codi").css("fontWeight","100");
                    $(".Men a").css("color","black");
                    $(".Women a").css("color","black");
                    $(".Kids a").css("color","black");
                    $(".Codi a").css("color","black");   
                    }else if(count2 == -100){
                        $("ul#infoMenu li a").css("color","black");
                        $("header h2 g").attr("fill","white");
                        $("header h2 ").css("display","none");
                        $("header h2 ").fadeIn(1000);
                        $(".Women").css("fontWeight","bolder");
                        $(".Men").css("fontWeight","100");
                        $(".Kids").css("fontWeight","100");
                        $(".Codi").css("fontWeight","100");
                        $(".Men a").css("color","white");
                        $(".Women a").css("color","white");
                        $(".Kids a").css("color","white");
                        $(".Codi a").css("color","white");      
                       
        
                    }

            });
            next2.show();
        }  
        else if(count2>=0){
            $("ul#infoMenu li a").css("color","white");
            $("header h2 g").attr("fill","white");
            $("header h2 ").css("display","none");
            $("header h2 ").fadeIn(1000);
            slide2.animate({left:count2+"%"},100);
            $(".Women").css("fontWeight","100");
            $(".Men").css("fontWeight","bolder");
            $(".Kids").css("fontWeight","100");
            $(".Codi").css("fontWeight","100");
            $(".Men a").css("color","white");
            $(".Women a").css("color","white");
            $(".Kids a").css("color","white");
            $(".Codi a").css("color","white");     
            // alert("ok");
            prev2.hide();
        }
    });
    next2.click(function(){
        count2 -=100;
        if(count2>=-200){
        slide2.animate({left:count2+"%"},100,function(){
            if(count2 == -100){
                $("ul#infoMenu li a").css("color","black");
                $("header h2 g").attr("fill","white");
                $(".Men a").css("color","white");
                $(".Women a").css("color","white");
                $(".Kids a").css("color","white");
                $(".Codi a").css("color","white");      
                $("header").css("display","none");
                $("header").fadeIn(1000);
                $(".Women").css("fontWeight","bolder");
                $(".Men").css("fontWeight","100");
                $(".Kids").css("fontWeight","100");
                $(".Codi").css("fontWeight","100");
            }else if(count2 == -200){
                $("ul#infoMenu li a").css("color","black");
                $("header h2 g").attr("fill","black");
                $("header h2 ").css("display","none");
                $("header h2 ").fadeIn(1000);
                $(".Women").css("fontWeight","100");
                $(".Men").css("fontWeight","100");
                $(".Kids").css("fontWeight","bolder");
                $(".Codi").css("fontWeight","100");
                $(".Men a").css("color","black");
                $(".Women a").css("color","black");
                $(".Kids a").css("color","black");
                $(".Codi a").css("color","black");      
            }

        });
        prev2.show();
        }
        else if(count2 <=-200){
            $("ul#infoMenu li a").css("color","black");
            $("header h2 g").attr("fill","white");
            $("header h2 ").css("display","none");
            $("header h2 ").fadeIn(1000);
            $(".Men a").css("color","white");
            $(".Women a").css("color","white");
            $(".Kids a").css("color","white");
            $(".Codi a").css("color","white");      
            slide2.animate({left:count2+"%"},100);
            $(".Kids").css("fontWeight","100");
            $(".Women").css("fontWeight","100");
            $(".Men").css("fontWeight","100");
            $(".Codi").css("fontWeight","bolder");
            next2.hide();
        }
    });
    

    prev3.click(function(){
        count3 +=100;
        if(count3<=-100){
            slide3.animate({left:count3+"%"},100,function(){
                if(count3 == -200){
                    $("ul#infoMenu li a").css("color","white");
                    $("header h2 g").attr("fill","white");
                    $("header h2 ").css("display","none");
                    $("header h2 ").fadeIn(1000); 
                    $(".Women").css("fontWeight","100");
                    $(".Men").css("fontWeight","100");
                    $(".Kids").css("fontWeight","bolder");
                    $(".Codi").css("fontWeight","100");
                    $(".Men a").css("color","white");
                    $(".Women a").css("color","white");
                    $(".Kids a").css("color","white");
                    $(".Codi a").css("color","white");    
    
                }else if(count3 == -100){
                    $("ul#infoMenu li a").css("color","white");
                    $("header h2 g").attr("fill","white");
                        $("header h2 ").css("display","none");
                        $("header h2 ").fadeIn(1000);
                        $(".Women").css("fontWeight","bolder");
                        $(".Men").css("fontWeight","100");
                        $(".Kids").css("fontWeight","100");
                        $(".Codi").css("fontWeight","100");
                        $(".Men a").css("color","white");
                        $(".Women a").css("color","white");
                        $(".Kids a").css("color","white");
                        $(".Codi a").css("color","white");    
        
                    }

            });
            next3.show();
        }  
        else if(count3>=0){
            $("ul#infoMenu li a").css("color","white");
            $("header h2 g").attr("fill","white");
            $("header h2 ").css("display","none");
            $("header h2 ").fadeIn(1000);          
            slide3.animate({left:count3+"%"},100);
            $(".Women").css("fontWeight","100");
            $(".Men").css("fontWeight","bolder");
            $(".Kids").css("fontWeight","100");
            $(".Codi").css("fontWeight","100");
            $(".Men a").css("color","white");
            $(".Women a").css("color","white");
            $(".Kids a").css("color","white");
            $(".Codi a").css("color","white");    
            prev3.hide();
            // alert("ok");

            // alert("ok");
            
        }
    });
    next3.click(function(){
        count3 -=100;
        if(count3>=-200){
        slide3.animate({left:count3+"%"},100,function(){
            if(count3 == -100){
                $("ul#infoMenu li a").css("color","white");
                $("header h2 g").attr("fill","white");
                $("header").css("display","none");
                $("header").fadeIn(1000);
                $(".Women").css("fontWeight","bolder");
                $(".Men").css("fontWeight","100");
                $(".Kids").css("fontWeight","100");
                $(".Codi").css("fontWeight","100");
                $(".Men a").css("color","white");
                $(".Women a").css("color","white");
                $(".Kids a").css("color","white");
                $(".Codi a").css("color","white");    
            }else if(count3 == -200){
                $("ul#infoMenu li a").css("color","white");
                $("header h2 g").attr("fill","white");
                $("header h2 ").css("display","none");
                $("header h2 ").fadeIn(1000);
                $(".Women").css("fontWeight","100");
                $(".Men").css("fontWeight","100");
                $(".Kids").css("fontWeight","bolder");
                $(".Codi").css("fontWeight","100");
                $(".Men a").css("color","white");
                $(".Women a").css("color","white");
                $(".Kids a").css("color","white");
                $(".Codi a").css("color","white");    
            }
        });
        prev3.show();
        }
        else if(count3 <=-200){
            $("ul#infoMenu li a").css("color","black");
            $("header h2 g").attr("fill","black");
            $("header h2 ").css("display","none");
            $("header h2 ").fadeIn(1000);
            slide3.animate({left:count3+"%"},100);
            $(".Kids").css("fontWeight","100");
            $(".Women").css("fontWeight","100");
            $(".Men").css("fontWeight","100");
            $(".Codi").css("fontWeight","bolder");
            $(".Men a").css("color","black");
            $(".Women a").css("color","black");
            $(".Kids a").css("color","black");
            $(".Codi a").css("color","black");    
            next3.hide();
          
        
        }
    });
}); 
    
   

    
    
    
  
    
      
         
    
    
    
    
            
    
        
      
    
    
    
        
    // let count = 0;//슬라이드이미지의 처음위치 
    // function prev1() {
    //     /*오른쪽방향으로 이동,이전이미지보기*/
    //         count += 100; 
         
    
    //         if(count <= 0){
    //             document.getElementById("slide1").style.left=count+"%";
    //             document.querySelector(".next1").style.display="block";
    //             alert(count+5);
    //         } else if(count > 0){
    //             // alert("마지막 페이지입니다.");
    //             document.querySelector(".prev1").style.display="none";
    //         } 
               
          
    //     }    
    // function next1() {
    //     count-=100;
    //     if(count>= -300){
    //         document.getElementById("slide1").style.left=count+"%";
    //         document.querySelector(".prev1").style.display="block";
         
    //     }
    //     else if(count < -300 ){
    //         document.querySelector(".next1").style.display="none";
    //     }
    // }
    
    
    // let count2 = -200;//슬라이드이미지의 처음위치 
    // function prev2() {
    //     /*오른쪽방향으로 이동,이전이미지보기*/
    //         count2 += 100; 
    //         if(count2 <= 0){
    //             document.getElementById("slide2").style.left=count2+"%";
               
    //            }
           
    //         else if(count2 > 0){
    //             // alert("마지막 페이지입니다.");
    //             document.querySelector(".prev2").style.display="none";
    //         }
    //     } 
        
    //     function next2() {
    //         count2-=100;
    //         if(count2>= -400){
    //             document.getElementById("slide2").style.left=count2+"%";
    //         }
    //         else if(count2 < -400 ){
                
    //         }
    //     }
        