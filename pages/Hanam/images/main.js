//lnb
$(function (){
	var total=$('#lnb .dep1').length;
	for(i=1;i<=total;i++){
		$('#lnb .dep1:nth-child('+i+')').addClass('rule0'+i);
	};
	$('.lnb_open').on('click',function(event){
		var $target=$(event.target);
		if($target.is('.on')){
			$(this).removeClass('on');
			$('#lnb').fadeOut(function(){
				$('#lnb').removeClass('web_lnb');
			});
		}else{
			$(this).addClass('on');
			$('#lnb').fadeIn().addClass('web_lnb').find('.dep2').hide();
		};
	});


	$('.all_lnb_open').on('click',function(event){
		var box_width=$('#footer .wrap').innerWidth();
		var $target=$(event.target);

		$('.lnb_open').removeClass('on');
		if(box_width<=768){
			if($target.is('.m_on')){
				$(this).removeClass('m_on').next('#lnb').slideUp(function(){
					$('.dep2, .dep3').hide();
				});
			}else{
				$(this).addClass('m_on').next('#lnb').slideDown();
			};
		}else{
			$('.lnb_box').css({'z-index':12}).find('#lnb').show().removeClass('web_lnb').addClass('all_lnb').find('.dep2').show().find('.dep3').hide();
			$('#lnb .dep1:nth-child(even)').after('<li class="line"></li>');
		};
	});

	$('.lnb_close').on('click',function(){
		$('.all_lnb_open').removeClass('m_on');
		$('.lnb_box').css({'z-index':10}).find('#lnb').hide().removeClass('all_lnb');
		$('#lnb li.line').remove();	
	});

	$('#lnb .dep2,#lnb .dep3').prev('a').on('click',function(){
		var box_width=$('#footer .wrap').innerWidth();
		if(box_width<=768){
			$(this).parents('li').siblings().find('>a').removeClass('on').next('div').hide();
			$(this).addClass('on').next('div').show();
			return false;
		}else{
			return true;
		};
	});

	var d_width=$('#footer .wrap').innerWidth(),
			reHead='',
			head_height=400;
	if(d_width<=768){
		reHead=1;
	}else{
		reHead=0;
	};

	$(window).resize(function(){
		d_width=$('#footer .wrap').innerWidth();

		if(d_width<=768){
			if(reHead!=1){
				$('.lnb_open').removeClass('on');
				$('.all_lnb_open').removeClass('m_on');
				$('#lnb').removeClass('all_lnb web_lnb').hide().find('.dep2').hide();
				reHead=1;
			}else{
				return false;
			};
		}else{
			if(reHead!=0){
				$('.all_lnb_open').removeClass('m_on');
				$('#lnb').hide().find('a').removeClass('on');
				reHead=0;
			}else{
				return false;
			};
		};
	});

});

//검색영역
function header_search(){
	var totalSearch = $('#header .search'),
		totalSearch_m_btn =$('.search_m_btn');
	if ($(window).width() > 768) {
		totalSearch.show();
	} else{
		var searchAvtice = false;
		totalSearch.hide();
	}

	totalSearch_m_btn.click(function() {
		if(searchAvtice){
			searchAvtice = false;
			totalSearch.hide();
		} else {
			searchAvtice = true;
			totalSearch.show();
		}
	});
}

// 탭메뉴 공통적으로 사용
function tabOn(tab,num,img) {
	var $tab,$tab_btn;
	var tabid=tab, n=num-1, btn_img=img;

	$tab = $(tabid+'> ul > li');
	$tab_btn = $(tabid+'> ul > li > a');

	$tab_btn.siblings().hide();
	$tab.eq(n).addClass('active');
	$tab.eq(n).children('a').siblings().show();

	if(btn_img =='img'){
		var btn = $tab.eq(n).children('a').find("img");
		btn.attr("src",btn.attr("src").replace("_off","_on"));
	}

	$tab_btn.on("click",function(event){
		var realTarget = $(this).attr('href');

		if(realTarget != "#"){
			return
		}
		if(btn_img =='img'){
			for(var i=0;i<$tab.size();i++){
				var btn = $tab.eq(i).children('a').find("img");
				btn.attr("src",btn.attr("src").replace("_on","_off"));
			}
			var active = $(this).parent().attr('class');
			if(active != 'active'){
				var btn_img_off = $(this).find('img')[0];
				btn_img_off.src =  btn_img_off.src.replace('_off','_on');
			}
		}
		$tab_btn.siblings().hide();
		$tab_btn.parent().removeClass('active');

		$(this).siblings().show();
		$(this).parent().addClass('active');

		event.preventDefault();
	});
}

function tabOrg(tabid,a,img) {
	var $tab, $tab_btn,$obj,$obj_view;
	var tabid = tabid, num = a, btn_img = img;

	$tab = $(tabid+' .tab_item  > li');
	$tab_btn = $(tabid+' .tab_item > li > a');
	$obj = $(tabid+' .tab_obj');
	$obj_view = $(tabid+' .tab_obj.n'+num);

	$tab.eq(num-1).addClass('active');
	$obj_view.show();

	if(btn_img =='img'){
		var btn = $tab.eq(num-1).children('a').find("img");
		btn.attr("src",btn.attr("src").replace("_off","_on"));
	}

	$tab.bind("click",function(event){
		if(btn_img =='img'){
			for(var i=0;i<$tab.size();i++){
				var btn = $tab.eq(i).children('a').find("img");
				btn.attr("src",btn.attr("src").replace("_on","_off"));
			}
			var active = $(this).parent().attr('class');
			if(active != 'active'){
				var btn_img_off = $(this).find('img')[0];
				btn_img_off.src =  btn_img_off.src.replace('_off','_on');
			}
		}

		var this_eq = $tab.index( $(this) );
		$tab.removeClass('active');
		$tab.eq(this_eq).addClass('active');

		$obj.hide();
		$(tabid+' .tab_obj.n'+(this_eq+1)).show();

		event.preventDefault ();
	});
}

$(document).ready(function(){
	//이미지 롤오버 
	 $(".overimg").mouseover(function (){
		var file = $(this).attr('src').split('/');
		var filename = file[file.length-1];
		var path = '';
		for(i=0 ; i < file.length-1 ; i++){
		 path = ( i == 0 )?path + file[i]:path + '/' + file[i];
		}
		$(this).attr('src',path+'/'+filename.replace('_off.','_on.'));
		
	 }).mouseout(function(){
		var file = $(this).attr('src').split('/');
		var filename = file[file.length-1];
		var path = '';
		for(i=0 ; i < file.length-1 ; i++){
		 path = ( i == 0 )?path + file[i]:path + '/' + file[i];
		}
		$(this).attr('src',path+'/'+filename.replace('_on.','_off.'));
	 });
});

$(function (){
	//language
	$('.language a.tit').on('click',function(event){
		var $target=$(event.target);
		if($target.is('.on')){
				$(this).removeClass('on').next('.cont_box').slideUp(300);
		}else{
			$('.language a.tit').addClass('on').next('.cont_box').slideDown(300);
		};
		return false;
	});
	$('.language .cont_box li:last-child a').on('focusout',function(){
		$('.language a.tit').removeClass('on').next('.cont_box').slideUp(300);
	});
	


	// 배너 바로가기
		$('.banner a.tit').on('click',function(event){
		var $target=$(event.target);
		if($target.is('.on')){
			if($target.is('a')){
				$(this).removeClass('on').next('.cont_box').slideUp(300);
			}else{
				$(this).parents('a.tit').removeClass('on').next('.cont_box').slideUp(300);
			};
		}else{
			$('.banner a.tit').removeClass('on').next('.cont_box').slideUp(300);
			if($target.is('a')){
				$(this).addClass('on').next('.cont_box').slideDown(300);
			}else{
				$(this).parents('a.tit').addClass('on').next('.cont_box').slideDown(300);
			};			
		};
		return false;
	});
	$('.banner .cont_box li:last-child a').on('focusout',function(){
		$(this).parents('.cont_box').slideUp(300).prev('.tit').removeClass('on');
	});
});








/* common.js end */






;(function($){
    $.fn.images_slide=function(options){
        var opts=$.extend({},$.fn.images_slide.defaults,options);
        return this.each(function(){
    var slide_boxs=opts.slide_box,
		slide_box=$(slide_boxs),
        viewer_area=slide_box.find('.viewer_area'),
        viewer_w=viewer_area.width(),
        viewer_h='',
        item=viewer_area.find('li'),
        items=new Array,
        total_leng=item.length,
        item_total=total_leng-1,
        buttons_area=slide_box.find('.buttons_area'),
        buttons=buttons_area.find('a'),
        thumb_presence=slide_box.find('div').hasClass('thumb_area'),
        thumb_presence2=slide_box.find('span').hasClass('thumb_box'),// 썸네일 옆에 재생,정지 버튼이 있는 경우 thumb_area 안에 <span class="thumb_box"></span> 추가
        thumb_area=slide_box.find('.thumb_area'),
        thumb_set='',
        thumb_src=opts.thumb_src,//썸네일 이미지 경로
        cnt=opts.first,//처음 선택 될 이미지(첫번째 이미지 일 경우 0)
        next=cnt+1,
        prev=cnt-1,
        auto_play=opts.auto_play,//재생 설정 (true,false)
        auto_btn='',
		onoff='',
        auto_speed=opts.auto_speed,//자동 재생 속도
        item_speed=450;//슬라이드 속도 제어
        setting();
    var thumb=thumb_area.find('a'),
        thumb_img_on='';
        thumb.eq(cnt).addClass('on');
    auto(auto_play);

function setting(){//초기 세팅
    if(thumb_presence==true){
        for(i=0;i<total_leng;i++){
            var j=i+1;
            items[i]=item.eq(i).find('img').height();
            thumb_set+='<a href=""><img src="'+thumb_src+'" alt="'+j+'번 이미지 보기" /></a>';
        };
        var thumb_confirm=thumb_area.find('div').is('.wrap');
        if(thumb_confirm==true){
            if(thumb_presence2==true){
                thumb_area.find('.thumb_box').html(thumb_set);
            }else{
                thumb_area.find('.wrap').html(thumb_set);
            };
        }else{
            if(thumb_presence2==true){
                thumb_area.find('.thumb_box').html(thumb_set);
            }else{
                thumb_area.html(thumb_set);
            };
        };
        var thumb_img_on=thumb_area.find('img')[cnt];
        thumb_img_on.src=thumb_img_on.src.replace('_off','_on');
        if(thumb_presence2==true){
            var ctrls=buttons_area.find('.ctrl').clone(true);
            thumb_area.find('.thumb_box').append(ctrls);
        };
    }else{
        for(i=0;i<total_leng;i++){
            items[i]=item.eq(i).find('img').height();
        };
    };
    var items_max = Math.max.apply(null, items),
        viewer_h=items_max;
    //buttons.css('top',viewer_h/2);버튼 css에 top으로 조정할 경우 주석
    item.css({left:'1000%'});
    item.eq(cnt).addClass('active').css('left',0);
    viewer_area.css({'height':viewer_h});//이미지 로딩이 느려 이미지가 잘릴 경우 css에 있는 .viewer_area min-height 값 조정
};
function img_on(on){//썸네일 변경
    if(thumb_presence==true){
        var img_on=on;
        thumb_img_on=thumb_area.find('img')[img_on];
        thumb_img_on.src=thumb_img_on.src.replace('_off','_on');
        thumb.eq(img_on).addClass('on');
    };
};
function reset(){//슬라이드 전 초기화
    if(thumb_presence==true){
        for(i=0;i<total_leng;i++){
            var thumb_img=thumb_area.find('img')[i];
            thumb_img.src=thumb_img.src.replace('_on','_off');
        };
        thumb.removeClass('on');
    };
    viewer_w=viewer_area.width();
    item.removeClass('active');
};
function cnt_controll(){//순서 조정

	prev=cnt-1,
	next=cnt+1;
	if(cnt==item_total){
		next=0;
	}else if(cnt>item_total){
		cnt=0,
		prev=item_total,
		next=cnt+1;
	}else if(cnt==0){
		prev=item_total;
	}else if(cnt<0){
		cnt=item_total,
		prev=cnt-1;
	};
};
function auto(e){//재생 설정
    auto_play=e;
    if(auto_play==true){
        if(total_leng!=1){
            auto_button(true)
            onoff=setInterval(automatic,auto_speed);
        };
    }else{
        auto_button();
        clearInterval(onoff);
    };
};
function automatic(){//자동 재생
	reset();
	cnt_controll();
	img_on(next);
	slide_next();
};
function auto_button(e){//재생 버튼 변경
    var plays=e,
        presence=buttons.hasClass('ctrl');
    if(total_leng!=1){
        if(presence==true){
            if(buttons_area.find('img').length>0){
                auto_btn=buttons_area.find('.ctrl').find('img')[0];
                if(plays==true){
                    auto_btn.src=auto_btn.src.replace('_play','_stop');
                    auto_btn.alt=auto_btn.alt.replace('재생','멈춤');
                }else{
                    auto_btn.src=auto_btn.src.replace('_stop','_play');
                    auto_btn.alt=auto_btn.alt.replace('멈춤','재생');
                };
            };
        };
        if(thumb_presence2==true){
            var ctrls=buttons_area.find('.ctrl').clone(true);
            thumb_area.find('.ctrl').remove();
            thumb_area.append(ctrls);
        };
    };
};
function slide_prev(){//이전 보기
    item.css({left:'1000%'});
    item.eq(cnt).css({left:0}).stop().animate({'left':viewer_w},item_speed);
    item.eq(prev).css({left:-viewer_w}).stop().animate({'left':0},item_speed).addClass('active');
    cnt--;
};
function slide_next(){//다음 보기
    item.css({left:'1000%'});
    item.eq(cnt).css({left:0}).stop().animate({'left':-viewer_w},item_speed);
    item.eq(next).css({left:viewer_w}).stop().animate({'left':0},item_speed).addClass('active');
    cnt++;
};
buttons.on('click',function(event){//이전, 다음 보기 버튼 클릭
    var $target=$(event.target);
    if(item.is(':animated')){
        return false;
    };
	if(total_leng!=1){
        if($target.is('.ctrl,.ctrl >')){
            var plays=auto_btn=buttons_area.find('.ctrl').find('img')[0].alt;
            if(plays=='재생'){
                auto(true);
            }else{
                auto();
            };
        }else{
            reset();
            cnt_controll();
            if($target.is('.prev,.prev >')){
                img_on(prev);
                slide_prev();
            }else{
                img_on(next);
                slide_next();
            };
            auto();
        };
	};
	return false;
});

thumb.on('click',function(event){//썸네일 버튼 클릭
    var $target=$(event.target),
        thumb_num=$(this).index(),
        thumb_cnt=viewer_area.find('.active').index();
    auto();
    if(item.is(':animated')){
        return false;
    };
    if(total_leng!=1){
        if(thumb_num!=thumb_cnt){
            reset();
            img_on(thumb_num);
            if(thumb_num<thumb_cnt){
                item.css({left:'1000%'});
                item.eq(thumb_cnt).css({left:0}).stop().animate({'left':viewer_w},item_speed);
                item.eq(thumb_num).css({left:-viewer_w}).stop().animate({'left':0},item_speed).addClass('active');
            }else{
                item.css({left:'1000%'});
                item.eq(thumb_cnt).css({left:0}).stop().animate({'left':-viewer_w},item_speed);
                item.eq(thumb_num).css({left:viewer_w}).stop().animate({'left':0},item_speed).addClass('active');
            };
            cnt=thumb_num;
        };
    };
    return false;
});

thumb_area.find('.ctrl').on('click',function(){
	var plays=auto_btn=buttons_area.find('.ctrl').find('img')[0].alt;
	if(plays=='재생'){
			auto(true);
	}else{
			auto();
	};
	return false;
});


$(window).resize(function() {
	if(viewer_w<=640){
		var viewer_h=item.eq(0).innerHeight();
    viewer_area.css({'height':viewer_h});
	};
});

	    });
	};
    $.fn.images_slide.defaults={'first':0,'auto_play':true,'slide_box':'.images_slide','thumb_src':'','auto_speed':4000};
})(jQuery);



//popupzone
(function($){	
	$.fn.PopupZone = function(options) {
		var settings = {
			prevBtn : '',
			nextBtn : '',
			playBtn : '',
			waitingTime : ''
		};
		
		$.extend(settings, options);
		settings.areaDiv = $(this).find('.popup_wrap');
		settings.prevBtn = $(settings.prevBtn);
		settings.nextBtn = $(settings.nextBtn);
		settings.playBtn = $(settings.playBtn);
		
		settings.cnt = settings.areaDiv.find('li').length;		
		settings.waitingTime = parseInt(settings.waitingTime);
		settings.nowNum = 0;
		settings.moveFlag = true; 
		settings.moveType;
		settings.setTimeOut;
		var status=true;
		
		function emptySetting() {
			settings.areaDiv.find('.count').html(settings.nowNum+1);
			settings.areaDiv.find('.all').html(settings.cnt);
			settings.areaDiv.find('li').hide();
			//settings.areaDiv.find('img').hide();
		}
		function setRolling(aniFlag) {
			if(!settings.moveFlag){
				if(settings.moveType=="next" || settings.moveType == null){ 
					settings.nowNum++;
					if(settings.nowNum == settings.cnt) settings.nowNum = 0;
				} else if(settings.moveType=="prev") {
					settings.nowNum--;
					if(settings.nowNum < 0) settings.nowNum = (settings.cnt-1);
				}
			}			
			emptySetting();
			if( settings.cnt < 2 ) {
				aniFlag = true;
			}
			
			if(aniFlag) settings.areaDiv.find('li').eq(settings.nowNum).show();
			else settings.areaDiv.find('li').eq(settings.nowNum).fadeIn('normal');
			 // 기본 : aniFlag 설정 없으면 fade 효과 - 조정
			
			aniFlag = false;
			settings.moveFlag = false;
			if(status){
				if( settings.cnt > 1 ) {
					settings.setTimeOut= setTimeout(setRolling , settings.waitingTime);
				}
			}
		}
		function playRolling(){
			if(status){
				console.log('a')
				clearTimeout(settings.setTimeOut);
				settings.playBtn.attr('class',"btn_play").html("팝업 롤링 재생");
				status = false;
			}else{
				console.log('b')
				settings.playBtn.attr('class',"btn_pause").html("팝업 롤링 정지");
				status = true;
				setRolling();
			}
			return false;
		}
		function prevRolling(){
			clearTimeout(settings.setTimeOut);
			settings.moveType = "prev";
			setRolling();
			return false;
		}
		function nextRolling() {
			clearTimeout(settings.setTimeOut);
			settings.moveType = "next";
			setRolling();
			return false;
		}
		setRolling();
		settings.prevBtn.click(prevRolling);
		settings.nextBtn.click(nextRolling);
		settings.playBtn.click(playRolling);
		
	};

})(jQuery);

$(document).ready(function(){
	 $('.popup').PopupZone({
		prevBtn : '.popup_control .btn_prev',
		nextBtn : '.popup_control .btn_next',
		playBtn : '.popup_control .btn_pause',
		waitingTime : '4000'
	});
});

jQuery(function($) {
	$('.visual').images_slide({'first':0,'auto_play':true,'slide_box':'.visual','thumb_src':'/site/test/images/main/visual_num_off.png','auto_speed':5000});

	$('.inner_box01').find('.inner_tit').addClass('on').next('.inner_cont').show();
	$('.main_control .prev span').html('맞춤 하남');
	$('.main_control .next span').html('소통 하남');
	$('.inner_tit').on('click',function(event){
		var $target=$(event.target);

		$('.inner_tit').removeClass('on').next('.inner_cont').hide();
		$(this).addClass('on').next('.inner_cont').show();
		if($target.is('.inner_box01 .inner_tit')){
			$('.main_control .prev span').html('맞춤 하남');
			$('.main_control .next span').html('소통 하남');
			$('.shortcut .slide_box').slick('setPosition');
		}else if($target.is('.inner_box02 .inner_tit')){
			$('.main_control .prev span').html('청정 하남');
			$('.main_control .next span').html('맞춤 하남');
		}else{
			$('.main_control .prev span').html('소통 하남');
			$('.main_control .next span').html('청정 하남');
		};
	});

	$('.main_control button').on('click',function(){
		var current_text=$(this).text()

		$('.inner_tit').removeClass('on').next('.inner_cont').hide();
		if(current_text=='청정 하남'){
			$('.inner_box01 .inner_tit').addClass('on').next('.inner_cont').show();
			$('.main_control .prev span').html('맞춤 하남');
			$('.main_control .next span').html('소통 하남');
			$('.shortcut .slide_box').slick('setPosition');
		}else if(current_text=='소통 하남'){
			$('.inner_box02 .inner_tit').addClass('on').next('.inner_cont').show();
			$('.main_control .prev span').html('청정 하남');
			$('.main_control .next span').html('맞춤 하남');
		}else{
			$('.inner_box03 .inner_tit').addClass('on').next('.inner_cont').show();
			$('.main_control .prev span').html('소통 하남');
			$('.main_control .next span').html('청정 하남');
		};
	});

	$('.popup').on('mouseenter focusin',function(){
		$('.popup').addClass('on');
	});
	$('.popup').on('mouseleave',function(){
		$('.popup').removeClass('on');
	});
	$('.popup .popup_list a').on('focusout',function(){
		$('.popup').removeClass('on');
	});
	$('.popup .btn_more').on('click',function(){
		$('.popup .more_box').addClass('open');
	});
	$('.popup .more_close').on('click',function(){
		$('.popup .more_box').removeClass('open');
	});

	var more_box=$('.popup .more_box'),
			more_list=more_box.find('.more_list'),
			more_item=more_list.find('li'),
			more_cut=5,
			more_totals=more_item.length,
			more_total=Math.ceil(more_totals/more_cut),
			more_control=more_box.find('.more_control'),
			more_count=more_control.find('.more_count'),
			more_prev=more_control.find('.more_prev'),
			more_next=more_control.find('.more_next');
more_setting();

more_prev.on('click',function(){	
	var counting=Number(more_count.text());
	counting=counting-1;
	if(counting<1){
		counting=Number(more_total);
	};
	var num=(counting-1)*more_cut,
			more_max=counting*more_cut;
	more_item.hide();
	for(i=num;i<more_max;i++){
		more_item.eq(i).show();
	};	
	more_count.html(counting);	
});

more_next.on('click',function(){
	var counting=Number(more_count.text());
	if(counting==more_total){
		counting=Number(0);
		more_cnt=Number(0);
	};
	var num=counting*more_cut,
			more_max=(counting+1)*more_cut;
	more_item.hide();
	console.log(counting)
	for(i=num;i<more_max;i++){
		more_item.eq(i).show();
	};
	more_count.html(counting+1);
});

function more_setting(){
	more_count.html(1);
	more_control.find('.more_total').html(more_total);
	for(i=0;i<more_cut;i++){
		more_item.eq(i).show();
	};
};

	var $shortcut_box = $('.shortcut'),
		$shortcut = $shortcut_box.find('.slide_box'),
		slideCount = null,
		currentSlide = null,
		nextCount = null,
		shortcutLength = $shortcut.find('.cont_box').length;

	$shortcut.on('init', function(event, slick){
		var show_num = slick.slickGetOption('slidesToShow');
			slideCount = Math.ceil(slick.slideCount/show_num);
			currentSlide = Math.ceil((slick.currentSlide+1)/show_num);
		
		setSlideCount(slideCount);
		setCurrentSlideNumber(currentSlide);
	});
	$shortcut.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		 var show_num = slick.slickGetOption('slidesToShow');
			slideCount = Math.ceil(slick.slideCount/show_num);
			nextCount = Math.ceil((nextSlide+1)/show_num);

		setSlideCount(slideCount);
		setCurrentSlideNumber(nextCount);
	});
	function setSlideCount(el) {
		var slideCount=el;
		var $el = $('.count_box').find('.total');
		
		$el.text(slideCount);
	};

	function setCurrentSlideNumber(currentSlide) {
		var box_width=$('#footer .wrap').innerWidth();
		var $el = $('.count_box').find('.current');
		
		$el.text(currentSlide);
	};

	$('.shortcut .slide_box').slick({
		dots: true,
		infinite: true,
		speed: 300,
		lazyLoad: 'ondemand',
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
					
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	});


	$('.shortcut .more_box a').on('click',function(event){
		var box_width=$('#footer .wrap').innerWidth();
		var $target=$(event.target);

		$('.lnb_open').removeClass('on');

		$($(this).attr('href')).find('img').each(function(index, element) {
			var $this = $(element);
			
			$this.attr('src', $this.attr('data-lazy')).removeAttr('data-lazy');
		});
		if(box_width<=640){
			return false;
		}else{
			$('.more_contents').show().find('li:first-child a').focus();
		};
		return false;
	});

	$('.more_contents .more_close').on('click',function(){
		$('.more_contents').hide();
		$('.shortcut .more_box a').focus();
	});

	$('.favorites .cont_box').on('mouseenter focusin',function(){
		$(this).addClass('on');
	});
	$('.favorites .cont_box').on('mouseleave focusout',function(){
		$(this).removeClass('on');
	});
});

var vbm = 100;
function plus() {
	vbm = vbm + 20;
	if(vbm >= 500) vbm = 500;
	processes();
};
function processes(){
	document.body.style.zoom = vbm + '%';
};
function reset(){
	vbm = 100;
	processes();
};
function minus() {
	vbm = vbm - 10;
	processes();
};