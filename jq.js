$(function(){
	$(".loading").delay(2000).fadeOut(2500);
	$(".cube1","cube2").delay(1000).fadeOut(1000);
	if($("body").width()<786){
		$(".navbar-default .navbar-nav>li>a").css("font-size","12px");
		$(".navbar-default .navbar-nav>li").css("display","inline-block");
		$(".products .row div").css("margin-top","8%");
		$(".products .row").css("padding-bottom","5%");
		$(".products .row").css("max-width","103%");
		$(".star-rating span").css("font-size","13px");
		$(".star-rating").css("padding-left","55px");
	}
	if($("body").width()<600){
		$(".navbar-default .navbar-nav>li").css("margin-left","1%");
		$(".navbar-default .navbar-nav>li>a").css("font-size","11px");
		$(".star-rating span").css("font-size","11px");
		$(".star-rating").css("margin-left","-26px");
		$(".row h4").css("font-size","12px");
		$(".row").css("margin-left","0");
		$(".row .col-xs-12 p").css("font-size","12px");
		$(".row .col-xs-12 p").css("margin-left","-42px");
		$(".row .col-xs-12 p").css("margin-top","5px");
	}
  $(window).scroll(function() {
    if ($(document).scrollTop() > 5) {
      $(".img-responsive").fadeIn(2000);
    }
  });

});