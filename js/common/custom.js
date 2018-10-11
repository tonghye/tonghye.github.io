$(document).ready(function () {
	/* jQuery.fn Method */
	$('.section').pageHeight();//Section Height Method

	/* Icon Menu */
	var totalLi = 0;
	var $navLiSet = $('.nav li')
	$navLiSet.each(function(){
		totalLi = totalLi + $(this).width()*1.2;
	})
	$('.nav').css('width',totalLi + 'px');
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
		$('.navi').toggleClass('active');
	});

	/* Portfolio Plugin Slick-Slider */
	$('.slider').slick({
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 5,
		dots: true,
		responsive: [
		{
			breakpoint: 1440,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '0px',
				slidesToShow: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '0px',
				slidesToShow: 1
			}
		}]
	});

	/* Plugin Pagepiling intialization */
	var mainPage = $('#mainPage').pagepiling({
		menu: '#menu',
		anchors: ['page1', 'page2', 'page3', 'page4'],
		navigation: {
			'position': 'right',
			//'tooltips': ['HOME', 'Portfolio', 'Skills', 'Contact']
		},
		scrollingSpeed: 300,
		//normalScrollElements: '.page2, .page4',
		normalScrollElementTouchThreshold: 5,
		touchSensitivity: 5,
		afterRender: function(){
			$('#pp-nav').addClass('custom');
		},
		afterLoad: function(anchorLink, index){
			if(index>1){
				$('#pp-nav').removeClass('custom');
			}else{
				$('#pp-nav').addClass('custom');
			}
		},
		onLeave: function(index, nextIndex, direction){
			//after leaving section 2
			if(index == 2 && direction =='down'){
				console.log("Going to section 3!");
			}
			else if(index == 2 && direction == 'up'){
				console.log("Going to section 1!");
			}
		}
	});
	$('#pp-nav').addClass('dotnav');
});

/* Section Height Method */
jQuery.fn.pageHeight = function () { 
	var ww = $(window).width();
	var wh = $(window).height();
	$.each($('.section'), function () {
		$(this).css({
			height:wh + 'px'
		});
		if ($(this).width() <= 1340) {
			$('.pagewrap').addClass('wsize');
		} else {
			$('.pagewrap').removeClass('wsize');
		}
		if ($(this).height() <= 960) {
			$('.pagewrap').addClass('hsize');
			$('.slickwrap').addClass('mt-10');
		} else {
			$('.pagewrap').removeClass('hsize');
			$('.slickwrap').removeClass('mt-10');
		}
		if ($(this).height() <= 720) {
			$('.page2').addClass('bgnone');
			$('.slickwrap').addClass('mtop5');
		} else {
			$('.page2').removeClass('bgnone');
			$('.slickwrap').removeClass('mtop5');
		}
		if ($(this).height() <= 600) {
			$('.page2 .slider').addClass('h360px');
			$('.page3').addClass('h360px');
		} else {
			$('.page2 .slider').removeClass('h360px');
			$('.page3').removeClass('h360px');
		}
	})
}

/* Window Resizing Control */
$(window).resize(function () {
	$('.section').pageHeight();
}).trigger('resize');
