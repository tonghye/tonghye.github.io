jQuery(function($){
	// Frequently Asked Question
	var article = $('.faq>.faqBody>li');
	article.addClass('hide');
	article.find('.a').hide();
	$('.faq>.faqBody>li>.q>a').click(function(){
		var myArticle = $(this).parents('li:first');
		var isNew = "";
		if($(this).parent().parent().hasClass("articlenew")){
			isNew = "show_new";
		}else{
			isNew = "show";
		}
		if(myArticle.hasClass('hide')){
			article.addClass('hide').removeClass('show').removeClass('show_new');
			article.find('.a').hide();
			myArticle.removeClass('hide').addClass(isNew);
			myArticle.find('.a').show();
		} else {
			myArticle.removeClass('show').removeClass('show_new').addClass('hide');
			myArticle.find('.a').hide();
		}
//		var posY = $(this).parents('li:first').position();
//		$('html, body').animate({scrollTop:posY.top},500);
		return false;
	});
});

// GNB slide up(or down)
jQuery(function($){
	var $gnbDepth1 = $(".gnb .depth1");
	var $gnbDepth2 = $(".gnb .depth2");
	var $gnbDim2 = $(".gnb_dim2");

	$gnbDepth1.on("focusin mouseover",function () {
		//$(".gnb .depth2, .gnb_dim2").css({height : 0});
		$(".gnb .depth2, .gnb_dim2").show();
		//$gnbDim2.show();

		$gnbDim2.stop().animate({height : 193}, 300);
		$gnbDepth2.stop().animate({height : 193}, 300);
		//$gnbDim2.slideDown(300);
		//$gnbDepth2.slideDown(300);
	});
	$(".gnb > ul").on("mouseleave",function () {

		$gnbDim2.stop().animate({height : 0}, 300);
		$gnbDepth2.stop().animate({height : 0}, 300, function(){
			$(".gnb .depth2, .gnb_dim2").hide();
		});

		//$(".gnb .depth2, .gnb_dim2").hide();

		//$gnbDim2.slideUp(300);
		//$gnbDepth2.slideUp(300);
	});
	$(".gnb .last").on("focusout",function () {
		$gnbDim2.stop().animate({height : 0}, 300);
		$gnbDepth2.stop().animate({height : 0}, 300, function(){
			$(".gnb .depth2, .gnb_dim2").hide();
		});
	});
});

// top search toggle button
jQuery(function($){
	var $btnSrch = $(".top_search .btn_search");
	var $inputSrch = $(".top_search .ipt02");
	var $btnClose = $(".top_search .btn_close");
	$inputSrch.hide();
	$btnSrch.click(function(){
		var inputWidth = $(".top_search .ipt02").width();
		if(inputWidth == 0){
			$inputSrch.show().animate({width:'155px'},200);
			$btnClose.fadeIn();
		}
	});
	$btnClose.click(function(){
		$inputSrch.animate({width:'0'},200, function(){
			$inputSrch.hide();
		});
		$btnClose.fadeOut(0);
	});
});

// product item over
jQuery(function($){
	$(".item_wrap > a").on("focusin",function(){
		$(".item_wrap .over").css("opacity","0");
		$(this).next(".over").css("opacity","0.95");
	});
});

// 창업안내 bxslider 2017-02-10
jQuery(function($){
	$(".cont-intro-visual .bxslider .slider").bxSlider({
			pager : true,
			speed : 200,
			infiniteLoop : false,
			hideControlOnEnd : true
		});
});
