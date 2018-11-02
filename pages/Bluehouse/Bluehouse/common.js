/* 20170718 작성자 송지수 */

function funLoad() {
    var Cheight = $(window).height();
    $('.fullheight').css({'height': Cheight + 'px'});
}
window.onload = funLoad;
window.onresize = funLoad;

$(window).scroll(function () {
    var scTop = $(window).scrollTop();
    head_nav(scTop);
});
function head_nav(scTop) {
    if (scTop > 1) {
        $('#header').removeClass('on');
        $('#header').addClass('on')
        $('#contents.c_sub').removeClass('on');
        $('#contents.c_sub').addClass('on')
    } else {
        $('#header').removeClass('on');
        $('#contents.c_sub').removeClass('on');
    }
}

(function ($, window, document) {
    $('#mainmenu_btn').click(function () {
        $('.h_gnb').stop().toggleClass('on');
        $('.h_search').stop().removeClass('on');
        $('.h_logo').stop().toggleClass('on');
        $('.h_logo').stop().removeClass('color');
        $('.h_gnb').stop().removeClass('color');
        $('.cs_navi').stop().toggleClass('off');
    });

    $('#search_btn').click(function () {
        $('.h_search').stop().toggleClass('on');
        $('.h_gnb').stop().removeClass('on');
        $('.h_logo').stop().toggleClass('color');
        $('.h_logo').stop().removeClass('on');
        $('.h_gnb').stop().toggleClass('color');
    });

    $('#heromore_btn').click(function () {
        $('.cmh_more').stop().toggleClass('on');
    });

    $('#sitemap .s_btn').click(function () {
        $('#sitemap').stop().toggleClass('on');
    });

    $('#cmb_play').click(function () {
        $('.cm_briefing .cmb_wrap').stop().toggleClass('on');
    });
}(jQuery, window, document));

(function ($, window, document) {
    $('.h_gnb .depth1 li.hg_president button').click(function () {
        $('.hg_president').stop().toggleClass('on');
        $('.hg_newsroom').stop().removeClass('on');
        $('.hg_policy').stop().removeClass('on');
        $('.hg_community').stop().removeClass('on');
        $('.hg_cheongwadae').stop().removeClass('on');
    });
    $('.h_gnb .depth1 li.hg_newsroom button').click(function () {
        $('.hg_president').stop().removeClass('on');
        $('.hg_newsroom').stop().toggleClass('on');
        $('.hg_policy').stop().removeClass('on');
        $('.hg_community').stop().removeClass('on');
        $('.hg_cheongwadae').stop().removeClass('on');
    });
    $('.h_gnb .depth1 li.hg_policy button').click(function () {
        $('.hg_president').stop().removeClass('on');
        $('.hg_newsroom').stop().removeClass('on');
        $('.hg_policy').stop().toggleClass('on');
        $('.hg_community').stop().removeClass('on');
        $('.hg_cheongwadae').stop().removeClass('on');
    });
    $('.h_gnb .depth1 li.hg_community button').click(function () {
        $('.hg_president').stop().removeClass('on');
        $('.hg_newsroom').stop().removeClass('on');
        $('.hg_policy').stop().removeClass('on');
        $('.hg_community').stop().toggleClass('on');
        $('.hg_cheongwadae').stop().removeClass('on');
    });
    $('.h_gnb .depth1 li.hg_cheongwadae button').click(function () {
        $('.hg_president').stop().removeClass('on');
        $('.hg_newsroom').stop().removeClass('on');
        $('.hg_policy').stop().removeClass('on');
        $('.hg_community').stop().removeClass('on');
        $('.hg_cheongwadae').stop().toggleClass('on');
    });
}(jQuery, window, document));

(function ($) {
    $(window).on("load", function () {
        $(".hg_wrap").mCustomScrollbar({
            axis: "y",
            theme: "minimal"
        });
    });
})(jQuery);

$(window).load(function () {
    $('.cmhm_slider').flexslider({
        animation: "slide",
        animationLoop: true,
        slideshow: false,
        smoothHeight: true,
        itemWidth: 210,
        itemMargin: 0,
        minItems: 1,
        maxItems: 3
    });
});

$(window).load(function () {
    $('.cmj_frame').flexslider({
        animation: "slide",
        animationLoop: true,
        slideshow: false,
        smoothHeight: true
    });
});

$(window).load(function () {
    $('.cms_slider').flexslider({
        animation: "slide",
        animationLoop: true,
        slideshow: false,
        smoothHeight: true
    });
});

$(document).ready(function () {
    $('#cmb_play').on('click', function () {
        if ($('#cmh_video')[0]) {
            $('#cmh_video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        }
        if ($('#cmb_video')[0]) {
            $('#cmb_video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
        }
    });

    $(".cst_subject").click(function() {
        $(this).next(".cst_contents").slideToggle().children(".cst_contents").hide();
        return false;
    });
});

/* 170722 추가 - 이지연 */
$(document).ready(function () {

    // animation
    $('.motion').appear(function () {
        var elem = $(this);
        var animation = elem.data('animation');
        if (!elem.hasClass('visible')) {
            var animationDelay = elem.data('animation-delay');
            if (animationDelay) {
                setTimeout(function () {
                    elem.addClass(animation + " visible");
                }, animationDelay);
            } else {
                elem.addClass(animation + " visible");
            }
        }
    });

    //scroll motion
    $("#contents .cm_hero").each(function () {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } else if (event.detail) delta = -event.detail / 3;
            var moveTop = null;
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(this).next() != undefined) {
                    moveTop = $(this).next().offset().top - 70;
                }
                // 마우스휠을 아래에서 위로
            } else {
                if ($(this).prev() != undefined) {
                    moveTop = $(this).offset().top;
                }
            }
            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 500, complete: function () {
                }
            });
        });
    });

    $(".m_scroll").click(function (event) {
        event.preventDefault();
        if ($(this).hasClass('ms_last') === true) {
            $('html,body').animate({scrollTop: $('#sitemap').offset().top}, 500);
        } else {
            $('html,body').animate({scrollTop: $(this).parent().next().offset().top}, 500);
        }
    });

    // gallery focus view
    $('.motion a').focusout(function () {
        $('.motion').removeClass('on');
    });
    $('.motion a').focus(function () {
        $(this).closest('.motion').addClass('on');
    });

    $('.btn_close').click(function(){
        $('.popup_content').removeClass('on');
        $('.popup_wrap').removeClass('open').addClass('close');
        $('.popup').delay(300).removeClass('open').addClass('close');
    });
    $(document).mousedown(function (e) {
        $('.popup_wrap').each(function () {
            if ($(this).hasClass('open') == true) {
                var l_position = $(this).offset();
                l_position.right = parseInt(l_position.left) + ($(this).width());
                l_position.bottom = parseInt(l_position.top) + parseInt($(this).height());


                if (( l_position.left <= e.pageX && e.pageX <= l_position.right )
                    && ( l_position.top <= e.pageY && e.pageY <= l_position.bottom )) {
                }
                else {
                    $('.popup_content').removeClass('on');
                    $('.popup_wrap').toggleClass('close open');
                    $('.popup').delay(300).toggleClass('close open');
                }
            }
        });
    });

    // main hero slider
    $('.iam-flexslider').flexslider({
        animation: "slide",
        slideshow: false
    });

    // mobile main slider
    $('.m_slider').flexslider({
        animation: "slide",
        slideshow: false
    });

});