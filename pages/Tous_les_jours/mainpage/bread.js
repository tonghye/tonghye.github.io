(function($){
	$.fn.extend({
		breadVodControl : function(){
			var $this = $(this),
				vodVisual = $this.find(".vod-visual"),
				vodSlide = vodVisual.find(".vod-slide"),
				btnPlay = $this.find(".btn-play"),
				firVod = vodSlide.find("li").eq(0),
				vodList = vodSlide.find("li"),
				btnCaption = vodSlide.find(".btn-caption"),
				txtWrap = vodSlide.find(".caption"),
				txtCont = vodSlide.find(".inner > div"),
				thisIdx,
				oldLordIdx,
				loadSlide = false,
				breadVisual,
				vodDirection,
				vodEnded,
				mouseEnterCheck = true,
				checkNum = 0,
				vodReady,
				loadSlide;

			if (!$this.get(0)){return false};
			if(Modernizr.video){
				if (loadSlide == false){
					breadVisual = vodSlide.bxSlider({
						infiniteLoop: false,
						hideControlOnEnd: true,
						pager: true,
						responsive: true,
						onSliderLoad: function(idx){
							thisIdx = idx;
							vodDirection = vodVisual.find(".bx-controls-direction");
							vodDirection.find("a").attr("href", "#content");
							if (vodList.eq(idx).find("video").length == 0){
								vodList.eq(idx).find(".default-img").after('<video poster="/static/images/bread/video_thumb'+ (idx + 1) +'.jpg"><source src="/static/images/bread/video/video'+ (idx + 1) +'.mp4" type="video/mp4" /></video>');
							}
							vodList.eq(idx).find("video").on("loadedmetadata", function() {
								$(this).addClass("metaload").parent().addClass("active").find("video").get(0).play();
							});

							if (vodList.eq(idx).find("video").is(".metaload")){
								vodList.eq(idx).find("video").get(0).play();
							}

							// vod ended
							vodList.eq(idx).find("video").on("ended", function(){
								checkNum = 0;
								vodDirection.find(".bx-next").addClass("active").fadeOut(500, function(){
									$(this).delay(300).fadeIn(500);
								});
								vodEnded = setInterval(function(){
									if (checkNum >= 1){
										clearInterval(vodEnded);
										vodDirection.find(".bx-next").fadeOut(500, function(){
											$(this).delay(300).fadeIn(500);
										});
									} else {
										vodDirection.find(".bx-next").fadeOut(500, function(){
											$(this).delay(300).fadeIn(500);
										});
										checkNum++
									}
								},1330);
							})
						},
						onSlideBefore: function($elm, oldIdx, newIdx){
							thisIdx = newIdx;
							oldLordIdx = newIdx;
							vodList.removeClass("active");
							btnPlay.removeClass("pause");
							if (vodList.eq(newIdx).find("video").length == 0){
								vodList.eq(newIdx).find(".default-img").after('<video poster="/static/images/bread/video_thumb'+ (newIdx + 1) +'.jpg"><source src="/static/images/bread/video/video'+ (newIdx + 1) +'.mp4" type="video/mp4" /></video>');
							}
							if (vodList.eq(oldIdx).find("video").length > 0){
								vodList.eq(oldIdx).find("video").get(0).pause();
								if (vodList.eq(oldIdx).find("video").is(".metaload")){
									vodList.eq(oldIdx).find("video").get(0).currentTime = 0;
								}
							}

							vodList.eq(newIdx).find("video").on("loadedmetadata", function() {
								$(this).parent().prev().find("video").get(0).pause();
								if ($(this).parent().prev().find("video").is(".metaload")){
									$(this).parent().prev().find("video").get(0).currentTime = 0;
								}
								$(this).addClass("metaload").parent().addClass("active").find("video").get(0).play();
							});

							if (vodList.eq(newIdx).find("video").is(".metaload")){
								vodList.eq(newIdx).find("video").get(0).play();
							}
							vodDirection.find(".bx-next").removeClass("active");
							// vod ended
							vodList.eq(newIdx).find("video").on("ended", function(){
								clearInterval(vodEnded);
								checkNum = 0;
								vodDirection.find(".bx-next").addClass("active").fadeOut(500, function(){
									$(this).delay(300).fadeIn(500);
								});
								vodEnded = setInterval(function(){
									if (checkNum >= 1){
										clearInterval(vodEnded);
										vodDirection.find(".bx-next").fadeOut(500, function(){
											$(this).delay(300).fadeIn(500);
											checkNum = 0;
										});
									} else {
										vodDirection.find(".bx-next").fadeOut(500, function(){
											$(this).delay(300).fadeIn(500);
										});
										checkNum++
									}
								},1330);
							})
						}
					});
					loadSlide = true;
				}

				$(window).load(function(){
					$("html, body").animate({
						scrollTop: $("#content").offset().top+"px"
					}, 300);
					vodVisual.find(".bx-controls").fadeIn(500);
					btnPlay.fadeIn(500);
				})

				btnPlay.on("click",function(e){
					e.preventDefault();
					var targetVod = vodList.eq(thisIdx).find("video");
					if($(this).is(".pause")){
						$(this).removeClass("pause").text("pause(멈춤)");
						targetVod.get(0).play();
					} else {
						$(this).addClass("pause").text("play(재생)");
						targetVod.get(0).pause();
					}
				});
			} else {
				vodSlide.bxSlider({
					infiniteLoop: false,
					hideControlOnEnd: true,
					pager: true,
					responsive: true,
					onSliderLoad: function(idx){
						thisIdx = idx;
					},
					onSlideBefore: function($elm, oldIdx, newIdx){
						thisIdx = newIdx;
					}
				});

				vodList.append('<a href="#" target="_blank" title="새창 열림" class="btn-play-link"><img src="/static/images/bread/btn_play_link.png" alt="영상 보러가기" /></a>')
				vodList.each(function(idx){
					var target =$(this).find(".btn-play-link");
					switch (idx){
						case 0 :
							target.attr("href", "https://youtu.be/y-Il3ZLVHRg");
							break;
						case 1 :
							target.attr("href", "https://youtu.be/SfppoZzrZp0");
							break;
						case 2 :
							target.attr("href", "https://youtu.be/2Sc1OLyw5pc");
							break;
						case 3 :
							target.attr("href", "https://youtu.be/P_EaUKkNQkg");
							break;
						case 4 :
							target.attr("href", "https://youtu.be/TgR5zwAVwug");
							break;
						case 5 :
							target.attr("href", "https://youtu.be/tkxzSc6VhqA");
							break;
						case 6 :
							target.attr("href", "https://youtu.be/_BzK09UEJss");
							break;
						case 7 :
							target.attr("href", "https://youtu.be/OXm2aLHP7rw");
							break;
						case 8 :
							target.attr("href", "https://youtu.be/V0BeZVBnGZA");
							break;
						default:
							break;
					}
				});

				btnPlay.remove();
				txtWrap.remove();
			}

			btnCaption.on("click", function(){
				if ($(this).is(".close")) {
					$(this).removeClass("close").find(".blind").text("자막보기");
					$(this).next(".text").animate({
						width: 0
					}, 300);
				} else {
					$(this).addClass("close").find(".blind").text("자막닫기");
					$(this).next(".text").animate({
						width: 470
					}, 300);
				}
			});

			$(window).resize(function(){
				setTimeout(function(){
					vodSlide.parent(".bx-viewport").height(vodList.find(".default-img").height());
				},50);
				vodList.css("width", vodSlide.parent(".bx-viewport").width());
				if (oldLordIdx){
					clearTimeout(loadSlide);
					loadSlide = setTimeout(function(){
						breadVisual.reloadSlider();
						breadVisual.goToSlide(oldLordIdx);
					}, 300);
				}
			})
		}
	});
	$(document).ready(function(){
		$(".bread-wrap").breadVodControl();
	});
})(jQuery)