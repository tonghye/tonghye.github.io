_satellite.pushAsyncScript(function(event, target, $variables){
  
	var el = $('.cm-breadcrumb__path span:not(#breadcrumb_title)');
	var arrText = [];
	var category = '';
	/* breadcrumb 있을 경우 카테고리 얻기 */
	if(el.size()){
		el.each(function(){arrText.push( $(this).text() ); });
		category = arrText.join(' / ');
	}

if(category != '') {
  fbq("trackCustom", "GlobalCategory", {
    global_category: category
  });
}
});
