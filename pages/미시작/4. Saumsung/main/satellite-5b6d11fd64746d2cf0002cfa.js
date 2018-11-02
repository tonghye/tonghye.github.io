_satellite.pushAsyncScript(function(event, target, $variables){
  $.getScript( "//t1.daumcdn.net/adfit/static/kp.js", charset='UTF-8', function( data, textStatus, jqxhr ) {
    kakaoPixel('8632737926816088998').pageView();
});
});
