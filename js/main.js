
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 600) {
          $(".black").css("background" , "#fff");
          $(".text-color").css("color" , "rgb(0,0,0)");
          $(".text-color a").css("color" , "rgb(0,0,0)");
          $(".navbar").css("padding-top" , "10px");
          $(".navbar").css("padding-bottom" , "10px");
          $(".navbar-scroll").css("box-shadow" , "20px 30px 50px rgb(0 0 0 / 10%)");
          
        }
        
        else{
          $(".black").css("background" , "rgba(0, 0, 0, 0)");  	
          $(".text-color").css("color" , "#fff");
          $(".text-color a").css("color" , "#fff");
          $(".navbar").css("padding-top" , "30px");
          $(".navbar-scroll").css("box-shadow" , "none");
        }
    })
  })