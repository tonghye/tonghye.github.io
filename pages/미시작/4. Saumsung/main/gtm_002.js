
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"24",
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"\"!=digitalData.page.pageInfo.pageTrack)return\"support landing\"==digitalData.page.pageInfo.pageTrack?\"support home\":$.trim(digitalData.page.pageInfo.pageTrack);var a=window.location.href.split(\"\/\").length;return a=window.location.href.split(\"\/\")[a-2]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003C$(\"#no_result_view \\x3e\").length?\"no result\":\"result\"})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"INPUT\"==$(",["escape",["macro",2],8,16],").prop(\"tagName\")\u0026\u0026\"checkbox\"==$(",["escape",["macro",2],8,16],").attr(\"type\")\u0026\u0026$(",["escape",["macro",2],8,16],").is(\":checked\"))return\"check\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=$(",["escape",["macro",2],8,16],").closest(\"button\").hasClass(\"disable\")?\"checked\":\"INPUT\"!=$(",["escape",["macro",2],8,16],").prop(\"tagName\")||$(",["escape",["macro",2],8,16],").is(\":checked\")?\"checked\"==$(\"input[type\\x3dradio]\",",["escape",["macro",2],8,16],").attr(\"checked\")?\"checked\":\"filter-sort__reset-button\"==$(",["escape",["macro",2],8,16],").closest(\"div\").attr(\"class\")?\"checked\":\"unchecked\":\"checked\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(window).width();return 768\u003E=a?\"mobile\":\"desktop\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(",["escape",["macro",2],8,16],").attr(\"ga-ca\")?$(",["escape",["macro",2],8,16],").attr(\"ga-ca\"):null==$(",["escape",["macro",2],8,16],").attr(\"ga-ca\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().attr(\"ga-ca\")?$(",["escape",["macro",2],8,16],").parent().attr(\"ga-ca\"):null==$(",["escape",["macro",2],8,16],").parent().attr(\"ga-ca\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().parent().attr(\"ga-ca\")?$(",["escape",["macro",2],8,16],").parent().parent().attr(\"ga-ca\"):null==$(",["escape",["macro",2],8,16],").parent().parent().attr(\"ga-ca\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().parent().parent().attr(\"ga-ca\")?\n$(",["escape",["macro",2],8,16],").parent().parent().parent().attr(\"ga-ca\"):null==$(",["escape",["macro",2],8,16],").parent().parent().parent().attr(\"ga-ca\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().parent().parent().parent().attr(\"ga-ca\")?$(",["escape",["macro",2],8,16],").parent().parent().parent().parent().attr(\"ga-ca\"):\"n\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.location.href.split(\"\/\").length,b=window.location.href.split(\"\/\")[a-1];\"\"!=b\u0026\u0026\"?\"!=b.charAt(0)||--a;b=digitalData.page.pageInfo.siteCode;return 4==a?window.location.href.split(\"\/\")[3]+\":home\":\"product storelocator\"==digitalData.page.pageInfo.pageTrack?digitalData.page.pageInfo.pageName.replace(\/\\s\/gi,\"\"):\"microsite\"==digitalData.page.pageInfo.pageTrack||\"product finder\"==digitalData.page.pageInfo.pageTrack?(a=b,\"\"!=digitalData.page.pathIndicator.depth_2\u0026\u0026(a+=\":\"+digitalData.page.pathIndicator.depth_2),\n\"\"!=digitalData.page.pathIndicator.depth_3\u0026\u0026(a+=\":\"+digitalData.page.pathIndicator.depth_3),\"\"!=digitalData.page.pathIndicator.depth_4\u0026\u0026(a+=\":\"+digitalData.page.pathIndicator.depth_4),\"\"!=digitalData.page.pathIndicator.depth_5\u0026\u0026(a+=\":\"+digitalData.page.pathIndicator.depth_5),a):\"flagship pdp\"==digitalData.page.pageInfo.pageTrack\u0026\u0026window.location.href.split(\"\/\")[4]!=digitalData.page.pathIndicator.depth_2?(a=b,\"\"!=digitalData.page.pathIndicator.depth_2\u0026\u0026(a+=\":\"+digitalData.page.pathIndicator.depth_2),\n\"\"!=digitalData.page.pathIndicator.depth_3\u0026\u0026(a+=\":\"+digitalData.page.pathIndicator.depth_3),\"\"!=digitalData.page.pathIndicator.depth_4\u0026\u0026(a+=\":\"+digitalData.page.pathIndicator.depth_4),\"\"!=digitalData.page.pathIndicator.depth_5\u0026\u0026(a+=\":\"+digitalData.page.pathIndicator.depth_5),\"\"!=window.location.href.split(\"\/\")[6]\u0026\u0026void 0!=window.location.href.split(\"\/\")[6]\u0026\u0026\"?\"!=window.location.href.split(\"\/\")[6].charAt(0)\u0026\u0026\"#\"!=window.location.href.split(\"\/\")[6].charAt(0)\u0026\u0026(a+=\":\"+window.location.href.split(\"\/\")[6]),\n\"\"!=window.location.href.split(\"\/\")[7]\u0026\u0026void 0!=window.location.href.split(\"\/\")[7]\u0026\u0026\"?\"!=window.location.href.split(\"\/\")[7].charAt(0)\u0026\u0026\"#\"!=window.location.href.split(\"\/\")[7].charAt(0)\u0026\u0026(a+=\":\"+window.location.href.split(\"\/\")[7]),a.toLowerCase()):\"business marketing pdp\"==digitalData.page.pageInfo.pageTrack\u0026\u0026digitalData.product.pvi_type_name?(a=b,\"\"!=digitalData.page.pathIndicator.depth_2\u0026\u0026(a+=\":\"+digitalData.page.pathIndicator.depth_2),\"\"!=digitalData.page.pathIndicator.depth_3\u0026\u0026(a+=\":\"+digitalData.page.pathIndicator.depth_3),\n\"\"!=digitalData.page.pathIndicator.depth_4\u0026\u0026(a+=\":\"+digitalData.page.pathIndicator.depth_4),\"\"!=digitalData.page.pathIndicator.depth_5\u0026\u0026(a+=\":\"+digitalData.page.pathIndicator.depth_5),\"\"!=digitalData.page.pathIndicator.depth_6\u0026\u0026(a+=\":\"+digitalData.page.pathIndicator.depth_6),\"\"!=window.location.href.split(\"\/\")[7]\u0026\u0026void 0!=window.location.href.split(\"\/\")[7]\u0026\u0026\"?\"!=window.location.href.split(\"\/\")[7].charAt(0)\u0026\u0026\"#\"!=window.location.href.split(\"\/\")[7].charAt(0)\u0026\u0026(a+=\":\"+window.location.href.split(\"\/\")[7]),\na):\"vd marketing page\"==digitalData.page.pageInfo.pageTrack\u0026\u0026\"\"!=window.location.href.split(\"\/\")[6]\u0026\u0026void 0!=window.location.href.split(\"\/\")[6]\u0026\u0026window.location.href.split(\"\/\")[6]!=digitalData.page.pathIndicator.depth_4\u0026\u0026\"?\"!=window.location.href.split(\"\/\")[6].charAt(0)\u0026\u0026\"#\"!=window.location.href.split(\"\/\")[6].charAt(0)?digitalData.page.pageInfo.pageName+\":\"+window.location.href.split(\"\/\")[6]:digitalData.page.pageInfo.pageName})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").attr(\"data-omni\"))return $(",["escape",["macro",2],8,16],").attr(\"data-omni\");if(null==$(",["escape",["macro",2],8,16],").attr(\"data-omni\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\"))return $(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",2],8,16],").closest(\"div.gb-gnb__drop-desktop\").prev().attr(\"data-omni\");return\"banner:\"+a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").parent().hasClass(\"s-btn-utility js-ico-search\"))var a=\"search\";else $(",["escape",["macro",2],8,16],").parent().hasClass(\"s-btn-utility js-empty-cart\")||$(",["escape",["macro",2],8,16],").parent().hasClass(\"s-btn-utility js-cart\")?a=\"cart\":$(",["escape",["macro",2],8,16],").parent().parent().hasClass(\"s-depth2-col s-col-imagepromo\")?(a=$(",["escape",["macro",2],8,16],").closest(\"div.gb-gnb__drop-desktop\").prev().attr(\"data-omni\"),a=\"banner:\"+a):a=$(",["escape",["macro",2],8,16],").hasClass(\"s-ico-login\")||\n$(",["escape",["macro",2],8,16],").hasClass(\"s-ico-logout\")?\"login\":",["escape",["macro",2],8,16],".getAttribute(\"data-omni\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",2],8,16],").attr(\"data-omni\");return-1!=a.indexOf(\"footer:\")?a.split(\":\")[1]:a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"_\")[1];return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"localist\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",2],8,16],").closest(\"div\");if(a.hasClass(\"gb-gnb__search-history\"))return $(",["escape",["macro",2],8,16],").text()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",2],8,16],").closest(\"div\");if(a.hasClass(\"gb-gnb__search-product\"))return a=$(",["escape",["macro",2],8,16],").closest(\"a\").attr(\"data-omni\").split(\"|\"),\"STRONG\"==$(",["escape",["macro",2],8,16],").prop(\"tagName\")?(a=a[0].replace(\"image\/text\",\"text\"),a=a.split(\":\")[1]):(a=a[0].replace(\"image\/text\",\"image\"),a=a.split(\":\")[1]),a;if($(",["escape",["macro",2],8,16],").closest(\"ul\").hasClass(\"gb-gnb__search-suggest-list-select\")||$(",["escape",["macro",2],8,16],").closest(\"ul\").hasClass(\"gb-gnb__search-suggest-list-category\"))return $(",["escape",["macro",2],8,16],").text();\na=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"|\")[0];return a=a.split(\":\")[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(",["escape",["macro",2],8,16],").closest(\"ul\").hasClass(\"gb-gnb__search-suggest-list-category\")?\"recommended search_shop\":$(",["escape",["macro",2],8,16],").closest(\"ul\").hasClass(\"gb-gnb__search-suggest-list-select\")?\"recommended search_keyword\":\"recommended search_product\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003C$(\"#no_result_view \\x3e\").length?\"Search Result_no\":\"Search Result_yes\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").hasClass(\"ico_grid\")||$(",["escape",["macro",2],8,16],").hasClass(\"ico_list\"))return\"view by\";if($(",["escape",["macro",2],8,16],").parent().hasClass(\"category__option-lst\"))return\"filter\";if($(",["escape",["macro",2],8,16],").hasClass(\"view-all\"))return\"view more\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(",["escape",["macro",2],8,16],").attr(\"nm\").toLowerCase()+\"_\"+$(",["escape",["macro",2],8,16],").attr(\"data-omni\").toLowerCase()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").hasClass(\"ico_grid\"))return\"grid\";if($(",["escape",["macro",2],8,16],").hasClass(\"ico_list\"))return\"list\";if($(",["escape",["macro",2],8,16],").hasClass(\"view-all\"))return $(",["escape",["macro",2],8,16],").attr(\"data-omni\").toLowerCase()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"SPAN\"==$(",["escape",["macro",2],8,16],").prop(\"tagName\")){var a=$(",["escape",["macro",2],8,16],").closest(\"button\");a=a.attr(\"onclick\").split(\"'\");a=a[9].toLowerCase()}else a=$(",["escape",["macro",2],8,16],").attr(\"onclick\").split(\"'\"),a=a[9].toLowerCase();return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(",["escape",["macro",2],8,16],").closest(\"ul\").hasClass(\"result-pagination__pages\")?$(",["escape",["macro",2],8,16],").text():\"arrow\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",2],8,16],").closest(\".result--banner\").find(\".banner-title\");return a.text()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(void 0==$(",["escape",["macro",2],8,16],").closest(\"div.result-group\").find(\"div.group-header\").attr(\"data-omni\")\u0026\u0026\"detailPageLink\"!=$(",["escape",["macro",2],8,16],").attr(\"name\")){if(\"A\"==$(",["escape",["macro",2],8,16],").prop(\"tagName\"))return $(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"|\")[0];if(\"IMG\"==$(",["escape",["macro",2],8,16],").prop(\"tagName\"))return $(",["escape",["macro",2],8,16],").closest(\"a.product-img__link\").attr(\"data-omni\").split(\"|\")[0];if($(",["escape",["macro",2],8,16],").hasClass(\"btn-ico-zoom\"))return $(",["escape",["macro",2],8,16],").closest(\"li.search-result--product\").find(\".product-img__link\").attr(\"data-omni\").split(\"|\")[0]}else{if(\"detailPageLink\"==\n$(",["escape",["macro",2],8,16],").attr(\"name\")){var a=$(",["escape",["macro",2],8,16],").closest(\"div.product-details__title\").attr(\"data-omni\").split(\"|\")[0];return a}return $(",["escape",["macro",2],8,16],").closest(\"div.result-group\").find(\"div.group-header\").attr(\"data-omni\")}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").closest(\"li\").hasClass(\"search-result--product\")||\"detailPageLink\"==$(",["escape",["macro",2],8,16],").attr(\"name\")||$(",["escape",["macro",2],8,16],").closest(\"li\").hasClass(\"search-result--article\")||$(",["escape",["macro",2],8,16],").hasClass(\"btn-find-online\")||$(",["escape",["macro",2],8,16],").closest(\"li\").hasClass(\"search-result--video\")||$(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"group-header\")){if($(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"article-details__title\")){var a=$(",["escape",["macro",2],8,16],").closest(\"a\").attr(\"href\");\nreturn a}if($(",["escape",["macro",2],8,16],").closest(\"li\").hasClass(\"search-result--article\")\u0026\u0026$(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"product-img\"))return a=$(",["escape",["macro",2],8,16],").closest(\"a\").attr(\"href\");if(\"detailPageLink\"==$(",["escape",["macro",2],8,16],").attr(\"name\"))return a=$(",["escape",["macro",2],8,16],").closest(\"li.search-result--product\").find(\".product-details__title\").attr(\"data-omni\").split(\"|\")[2];if($(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"product-details__title\")||\"Specs\"==$(",["escape",["macro",2],8,16],").attr(\"title\")||\n$(",["escape",["macro",2],8,16],").closest(\"a\").hasClass(\"video-details__link\")||$(",["escape",["macro",2],8,16],").closest(\"a\").hasClass(\"product-img__link js-video js-pop-btn\")||$(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"group-header\"))return a=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"|\")[0];if(\"Specs\"!=$(",["escape",["macro",2],8,16],").attr(\"title\")||$(",["escape",["macro",2],8,16],").hasClass(\"btn-ico-zoom\"))return a=$(",["escape",["macro",2],8,16],").closest(\"li.search-result--product\").find(\".product-img__link\").attr(\"data-omni\").split(\"|\")[2]}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").closest(\"div.result-group\").hasClass(\"popular-products-area\"))return\"popular products\";if($(",["escape",["macro",2],8,16],").closest(\"div.result-group\").hasClass(\"recently-products-area\"))return\"recently viewed\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",2],8,16],").closest(\".search-result--product\").find(\".product-details__title\").attr(\"data-omni\").split(\"|\");return a=a[2]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"SPAN\"==$(",["escape",["macro",2],8,16],").prop(\"tagName\")){var a=$(",["escape",["macro",2],8,16],").closest(\"button\");a=a.attr(\"onclick\").split(\"'\");a=a[9].toLowerCase()}else a=$(",["escape",["macro",2],8,16],").attr(\"onclick\").split(\"'\"),a=a[9].toLowerCase();return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",2],8,16],").text().toLowerCase();return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",2],8,16],").prop(\"id\");\"s-tab-1\"==a?a=\"buy online\":\"s-tab-2\"==a?a=\"buy in-store\":\"onlineStoreList\"==$(",["escape",["macro",2],8,16],").closest(\"div\").prop(\"id\")?(a=$(",["escape",["macro",2],8,16],").attr(\"onclick\"),a=a.substring(a.indexOf(\",'\")+2,a.indexOf(\"')\")),a=\"buy online:\"+a.toLowerCase()):a=$(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"s-btn-location\")?\"store locator\":$(",["escape",["macro",2],8,16],").hasClass(\"s-shop-btn-location\")?\"where to buy\":-1!=$(",["escape",["macro",2],8,16],").prop(\"class\").indexOf(\"js-cta-buy\")?\n\"buy now\":\"anchorWhereToBuy\"==a||\"anchorWhereToBuy\"==$(",["escape",["macro",2],8,16],").parent().prop(\"id\")?\"buy now\":$(",["escape",["macro",2],8,16],").hasClass(\"product-details__cta-text\")?\"where to buy\":\"buy now\";return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=$(",["escape",["macro",2],8,16],").prop(\"id\"),d=_satellite.getVar(\"Page Track\"),b=\"\",a=_satellite.getVar(\"Product Model Name\");\"s-tab-1\"==c?\"\"!=a\u0026\u0026(b=a):\"s-tab-2\"==c?\"\"!=a\u0026\u0026(b=a):\"onlineStoreList\"==$(",["escape",["macro",2],8,16],").closest(\"div\").prop(\"id\")?\"\"!=a\u0026\u0026(b=a):$(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"s-btn-location\")?\"\"!=a\u0026\u0026(b=a):-1!=$(",["escape",["macro",2],8,16],").prop(\"class\").indexOf(\"js-cta-buy\")?\"product search\"==d||\"product finder\"==d||\"product offer\"==d||\"my account\"==d?(c=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"|\"),\nb=c[0]):(a=_satellite.getVar(\"Product Model Name\"),\"\"!=a\u0026\u0026(b=a)):\"SPAN\"==$(",["escape",["macro",2],8,16],").prop(\"tagName\")\u0026\u0026$(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"other-shops-button\")?(c=$(",["escape",["macro",2],8,16],").closest(\"div\").attr(\"data-omni\").split(\"|\"),a=c[1].replace(\/;\/g,\"\"),b=a.toLowerCase()):b=a;return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",2],8,16],").parents(\"div.par-sec \\x3e div.section\");a=$(\"div.par-sec \\x3e div.section\").index(a)+1;return a=\"kv \"+a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").toLowerCase().split(\":\");return a=a[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=digitalData.page.pathIndicator.depth_2,a=digitalData.page.pathIndicator.depth_4,e=digitalData.page.pathIndicator.depth_5;if(\"\"!=e)b=b+\":\"+a+\":\"+e;else if(\"\"!=a)b=b+\":\"+a;else if(\"\"==b)return!1;a=$(",["escape",["macro",2],8,16],").parents().children(\"ul.slick-dots\").length;if(\"A\"==$(",["escape",["macro",2],8,16],").prop(\"tagName\")){var c=$(",["escape",["macro",2],8,16],").attr(\"data-omni\")?$(",["escape",["macro",2],8,16],").attr(\"data-omni\"):\"image\";console.log(\"slick : \"+a);e=$(",["escape",["macro",2],8,16],").parents(\"div.pr-carousel-container\").index();\nvar d=$(",["escape",["macro",2],8,16],").parents(\"div.section\");a=-1!=e?0\u003Ca?$(",["escape",["macro",2],8,16],").parents().children(\"ul.slick-dots\").children(\"li.slick-active\").index()+1:$(\"div.pr-carousel-container div.section\").index(d)+1:0\u003Ca?$(",["escape",["macro",2],8,16],").parents().children(\"ul.slick-dots\").children(\"li.slick-active\").index()+1:$(\"div.par div.section\").index(d)+1;c=b+\":kv\"+a+\":\"+c}else $(",["escape",["macro",2],8,16],").parent().hasClass(\"shop-header__btn\")\u0026\u0026$(",["escape",["macro",2],8,16],").closest(\"section\").hasClass(\"section-pfs-header\")?\n(d=$(",["escape",["macro",2],8,16],").parents(\".shop-header__ct\"),a=0\u003Ca?$(",["escape",["macro",2],8,16],").parents().children(\"ul.slick-dots\").children(\"li.slick-active\").index()+1:$(\"div.par div.shop-header__ct.slick-slide\").index(d),c=b+\":kv\"+a+\":play video\"):$(",["escape",["macro",2],8,16],").parent().hasClass(\"video-group__ct-inner\")?(d=$(",["escape",["macro",2],8,16],").parents(\"div.video-group__ct-inner\"),a=$(\"div.par div.video-group__ct-inner\").index(d)+5,c=b+\":kv\"+a+\":play video\"):$(",["escape",["macro",2],8,16],").parent().hasClass(\"shop-header__btn\")\u0026\u0026\n$(",["escape",["macro",2],8,16],").closest(\"section\").hasClass(\"shop-header\")?(d=$(",["escape",["macro",2],8,16],").parents(\"div.section.pr-g-header\"),a=0\u003Ca?$(",["escape",["macro",2],8,16],").parents().children(\"ul.slick-dots\").children(\"li.slick-active\").index()+1:$(\"div.par div.section\").index(d),c=b+\":kv\"+a+\":play video\"):$(",["escape",["macro",2],8,16],").parent().hasClass(\"pr-video-thumbnail-group__ct-inner\")?(d=$(",["escape",["macro",2],8,16],").parents(\"div.pr-video-thumbnail-group__ct-inner\"),a=0\u003Ca?$(",["escape",["macro",2],8,16],").parents().children(\"ul.slick-dots\").children(\"li.slick-active\").index()+\n1:$(\"div.par div.video-group__ct-inner\").index(d)+5,c=b+\":kv thumbnail\"+a+\":play video\"):$(",["escape",["macro",2],8,16],").hasClass(\"slick-arrow\")?(b=$(",["escape",["macro",2],8,16],").attr(\"class\").split(\" \"),b=b[0].split(\"-\"),c=\"next\"==b[1]?\"arrow_right\":\"arrow_left\"):$(",["escape",["macro",2],8,16],").parent().parent().hasClass(\"slick-dots\")\u0026\u0026(d=$(",["escape",["macro",2],8,16],").parents(),a=$(\"div.par ul.slick-dots \\x3e li\").index(d)+1,$(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"js-pd-viewer-carousel\")?c=b2b_str+\"gallery:rolling index_\"+\na:$(",["escape",["macro",2],8,16],").hasClass(\"s-autoplay-pause\")?c=\"kv rolling:index_stop\":$(",["escape",["macro",2],8,16],").hasClass(\"s-autoplay-play\")?c=\"kv rolling:index_play\":(a\u003E$(\"div.par ul.slick-dots \\x3e li.slick-dots-autoplay\").index(\"div.par ul.slick-dots \\x3e li\")\u0026\u0026--a,c=\"kv rolling:index_\"+a));return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\").toLowerCase().split(\":\");return a=a[2]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=digitalData.page.pathIndicator.depth_3;var b=digitalData.page.pathIndicator.depth_4,c=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").toLowerCase().split(\":\");return a=\"\"==b?a+\":\"+c[1]:b+\":\"+c[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a,b=digitalData.page.pathIndicator.depth_3,c=digitalData.page.pathIndicator.depth_4;$(",["escape",["macro",2],8,16],").parent().parent().hasClass(\"slick-dots\")?a=\"rolling\":$(",["escape",["macro",2],8,16],").hasClass(\"slick-arrow\")?a=\"arrow\":\"A\"==$(",["escape",["macro",2],8,16],").prop(\"tagName\")?a=\"\"==c?b+\":kv1:image\":b+\":\"+c+\":kv1:image\":\"BUTTON\"==$(",["escape",["macro",2],8,16],").prop(\"tagName\")\u0026\u0026(a=b+\":\"+c+\":kv1:play video\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=digitalData.page.pathIndicator.depth_3;var b=digitalData.page.pathIndicator.depth_4,c=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").toLowerCase().split(\":\");return a=\"\"==b?$(",["escape",["macro",2],8,16],").parent().hasClass(\"primary-selection__title\")?a+\":see all\":a+\":\"+c[1]:$(",["escape",["macro",2],8,16],").parent().hasClass(\"primary-selection__title\")?b+\":see all\":b+\":\"+c[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",2],8,16],").closest(\"div\");return a=a.hasClass(\"filter-sort__sub-wrap\")||a.hasClass(\"filter-sort__filter-select-mo\")?\"sort\":$(",["escape",["macro",2],8,16],").hasClass(\"s-btn-filter-list\")||$(",["escape",["macro",2],8,16],").hasClass(\"s-btn-filter-grid\")?\"view by\":\"filter\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=$(",["escape",["macro",2],8,16],").closest(\"div\");if(b.hasClass(\"filter-sort__checkbox\")){b=$(",["escape",["macro",2],8,16],").closest(\"div.filter-sort__item\").prev().attr(\"data-omni\").toLowerCase();var a=$(",["escape",["macro",2],8,16],").closest(\"div.filter-sort__checkbox\").attr(\"data-omni\").toLowerCase();a=b+\"_\"+a}else b.hasClass(\"filter-sort__reset-button\")?a=\"reset\":b.hasClass(\"filter-sort__list\")?(a=b.children().attr(\"data-omni\").toLowerCase(),a=b.hasClass(\"active\")?a+\"_close\":a+\"_open\"):b.hasClass(\"filter-sort__sub-wrap\")?\na=$(",["escape",["macro",2],8,16],").closest(\"a\").attr(\"data-omni\"):b.hasClass(\"filter-sort__filter-select-mo\")?a=$(",["escape",["macro",2],8,16],").val():b.hasClass(\"filter-sort__head\")?a=b.children(\"button.filter-sort__head-title\").hasClass(\"active\")?\"close\":\"open\":b.hasClass(\"filter-sort__type\")?$(",["escape",["macro",2],8,16],").hasClass(\"s-btn-filter-list\")?a=\"list\":$(",["escape",["macro",2],8,16],").hasClass(\"s-btn-filter-grid\")\u0026\u0026(a=\"grid\"):b.hasClass(\"filter-sort__results-button\")?$(",["escape",["macro",2],8,16],").hasClass(\"s-btn-result\")?\na=\"veiw result\":$(",["escape",["macro",2],8,16],").hasClass(\"s-btn-white\")\u0026\u0026(a=\"cancel\"):a=$(",["escape",["macro",2],8,16],").attr(\"data-omni\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=$(",["escape",["macro",2],8,16],").hasClass(\"picker-option\")||$(",["escape",["macro",2],8,16],").hasClass(\"colorpicker-color\")?\"Product grid_option\":\"Product grid_product\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a,b=navigator.userAgent.toLowerCase();$(",["escape",["macro",2],8,16],").hasClass(\"picker-option\")||$(",["escape",["macro",2],8,16],").hasClass(\"colorpicker-color\")?(\"Netscape\"==navigator.appName\u0026\u0026-1!=navigator.userAgent.search(\"Trident\")||-1!=b.indexOf(\"msie\")?(b=$(\".product-card__js-picker\").eq(0).children(),console.log(\"IE\")):(b=$(",["escape",["macro",2],8,16],").closest(\"ul\"),console.log(\"Chrome\")),b.hasClass(\"color\")?a=\"color\":b.hasClass(\"tv-size\")?a=\"size\":b.hasClass(\"Capacity\")||b.hasClass(\"capacity\")?a=\n\"capacity\":b.hasClass(\"memory\")\u0026\u0026(a=\"memory\")):(a=$(",["escape",["macro",2],8,16],").closest(\"div.product-card\").attr(\"data-omni\").split(\"|\"),a=a[0]);return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;if($(",["escape",["macro",2],8,16],").hasClass(\"product-details__link\"))$(",["escape",["macro",2],8,16],").find(\"img\").hasClass(\"product-details__images\")\u0026\u0026(a=\"image\");else if($(",["escape",["macro",2],8,16],").hasClass(\"product-details__thumb-btn\")||$(",["escape",["macro",2],8,16],").hasClass(\"product-details__thumb-arrow\"))a=\"image arrow\";else if($(",["escape",["macro",2],8,16],").hasClass(\"s-btn-zoom\")||$(",["escape",["macro",2],8,16],").parent().hasClass(\"s-btn-zoom\"))a=$(",["escape",["macro",2],8,16],").text().toLowerCase();else if($(",["escape",["macro",2],8,16],").parent().hasClass(\"s-btn-up\")||\n$(",["escape",["macro",2],8,16],").hasClass(\"s-btn-up\")||$(",["escape",["macro",2],8,16],").parent().hasClass(\"s-btn-down\")||$(",["escape",["macro",2],8,16],").hasClass(\"s-btn-down\")||$(",["escape",["macro",2],8,16],").parent().hasClass(\"s-btn-left\")||$(",["escape",["macro",2],8,16],").hasClass(\"s-btn-left\")||$(",["escape",["macro",2],8,16],").parent().hasClass(\"s-btn-right\")||$(",["escape",["macro",2],8,16],").hasClass(\"s-btn-right\"))a=\"zoom arrow\";return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){dataOmni=$(",["escape",["macro",2],8,16],").parent().parent().find(\".product-details__value-name\").attr(\"data-omni\").split(\"|\");return dataOmni[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;$(",["escape",["macro",2],8,16],").closest(\"ul\").hasClass(\"product-details__share-ico\")?a=$(",["escape",["macro",2],8,16],").parent().attr(\"class\").replace(\"product-details__item s-ico-\",\"\"):$(",["escape",["macro",2],8,16],").closest(\"ul\").hasClass(\"sc-page-title__share-list\")\u0026\u0026(a=$(",["escape",["macro",2],8,16],").attr(\"class\").replace(\"sc-page-title__share-link s-ico-\",\"\"));return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(",["escape",["macro",2],8,16],").closest(\"li\").children().attr(\"data-omni\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;$(",["escape",["macro",2],8,16],").hasClass(\"s-ico-down\")?a=\"see all\":$(",["escape",["macro",2],8,16],").hasClass(\"s-ico-up\")\u0026\u0026(a=\"hide all\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").parent().hasClass(\"product-support__resource-section-btn\")){var a=$(",["escape",["macro",2],8,16],").attr(\"data-omni\");a=\"go to support pdp\"==a?\"go to support\":a}else $(",["escape",["macro",2],8,16],").parent().hasClass(\"product-support__faq-inner\")?(a=$(",["escape",["macro",2],8,16],").attr(\"href\").split(\"\/\"),a=a[a.length-1],a=\"faq:\"+a):$(",["escape",["macro",2],8,16],").parent().hasClass(\"product-support__more\")\u0026\u0026(a=\"go to support\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").hasClass(\"slick-arrow\")){$(",["escape",["macro",2],8,16],").hasClass(\"slick-prev\");var a=\"arrow\"}else if($(",["escape",["macro",2],8,16],").hasClass(\"picker-option\")||$(",["escape",["macro",2],8,16],").hasClass(\"colorpicker-color\")){var b=$(",["escape",["macro",2],8,16],").closest(\"ul\");b.hasClass(\"product-card__colorpicker\")?a=\"option:color\":b.hasClass(\"size\")?a=\"option:size\":b.hasClass(\"Capacity\")?a=\"option:capacity\":b.hasClass(\"device-memory\")?a=\"option:memory\":b.hasClass(\"carrier\")\u0026\u0026(a=\"option:carrier\")}else $(",["escape",["macro",2],8,16],").parent().hasClass(\"product-card__img-link\")?\na=\"image\":$(",["escape",["macro",2],8,16],").hasClass(\"product-card__name\")?a=\"text\":$(",["escape",["macro",2],8,16],").hasClass(\"s-btn-encased\")\u0026\u0026(a=\"button\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=$(",["escape",["macro",2],8,16],").hasClass(\"slick-next\")?\"arrow\":$(",["escape",["macro",2],8,16],").hasClass(\"slick-prev\")?\"arrow\":\"rolling\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",2],8,16],").parent().parent().attr(\"data-omni\").split(\"|\");return a=a[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").parent().hasClass(\"related-products-img\")){var a=$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\").split(\"|\");a=a[0]}else $(",["escape",["macro",2],8,16],").hasClass(\"related-products-info__title\")\u0026\u0026(a=$(",["escape",["macro",2],8,16],").parent().parent().children().attr(\"data-omni\").split(\"|\"),a=a[0]);return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").hasClass(\"s-btn-filter\"))var a=\"Filter\";else if(\"filter\"==$(",["escape",["macro",2],8,16],").prop(\"id\"))a=\"Filter\";else if($(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"s-filter-select-sub-wrap\"))a=\"Sort\";else if($(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"s-img-wrap\")||$(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"s-info-wrap\"))a=\"Offer detail\";return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").hasClass(\"s-btn-filter\")){var a=$(",["escape",["macro",2],8,16],").attr(\"data-omni\");a=\"archive\"==a?\"current\":\"archive\"}else\"filter\"==$(",["escape",["macro",2],8,16],").prop(\"id\")?(a=$(",["escape",["macro",2],8,16],").attr(\"data-omni\"),a=\"archive\"==a?\"current\":\"archive\"):$(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"s-filter-select-sub-wrap\")?a=$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\").toLowerCase():$(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"s-img-wrap\")?a=$(",["escape",["macro",2],8,16],").attr(\"title\"):\n$(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"s-info-wrap\")\u0026\u0026(a=$(",["escape",["macro",2],8,16],").parent().parent().parent().children().children().children().attr(\"title\"));return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").parent().parent().hasClass(\"slick-dots\"))var a=\"rolling\";else if($(",["escape",["macro",2],8,16],").hasClass(\"slick-arrow\"))a=\"arrow\";else if($(",["escape",["macro",2],8,16],").hasClass(\"s-btn-encased\")){a=$(",["escape",["macro",2],8,16],").parents(\".slick-slide\").index()+1;var b=$(",["escape",["macro",2],8,16],").attr(\"data-omni\");if(void 0==b||\"\"==b)b=\"none\";a=\"kv\"+a+\":\"+b+\":view details\"}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=digitalData.page.pathIndicator.depth_2;return\"\"!=a?(\"store locator\"==a\u0026\u0026(a=a.replace(\/\\s\/gi,\"\")),digitalData.page.pageInfo.siteCode+\":\"+a):digitalData.page.pageInfo.siteCode})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"\"!=digitalData.page.pathIndicator.depth_3?digitalData.page.pageInfo.siteCode+\":\"+digitalData.page.pathIndicator.depth_2+\":\"+digitalData.page.pathIndicator.depth_3:digitalData.page.pathIndicator.depth_2?digitalData.page.pageInfo.siteCode+\":\"+digitalData.page.pathIndicator.depth_2:digitalData.page.pageInfo.siteCode})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=digitalData.page.pageInfo.siteCode,b=$(\"#hiddenModelCode\").val(),c=$(\"#hiddenIaUrlNamePath\").val().replace(\/\\|\/g,\":\");return a=a+\":support:\"+c+\":\"+b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=digitalData.page.pathIndicator.depth_4,b=digitalData.page.pageInfo.pageTrack;return\"\"!=a?(\"cid\"==a.substring(0,3)\u0026\u0026\"product finder\"==b\u0026\u0026(digitalData.page.pathIndicator.depth_4=\"all\"),digitalData.page.pageInfo.siteCode+\":\"+digitalData.page.pathIndicator.depth_2+\":\"+digitalData.page.pathIndicator.depth_3+\":\"+digitalData.page.pathIndicator.depth_4):digitalData.page.pathIndicator.depth_3?digitalData.page.pageInfo.siteCode+\":\"+digitalData.page.pathIndicator.depth_2+\":\"+digitalData.page.pathIndicator.depth_3:\ndigitalData.page.pathIndicator.depth_2?digitalData.page.pageInfo.siteCode+\":\"+digitalData.page.pathIndicator.depth_2:digitalData.page.pageInfo.siteCode})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"\"!=digitalData.page.pathIndicator.depth_5?digitalData.page.pageInfo.siteCode+\":\"+digitalData.page.pathIndicator.depth_2+\":\"+digitalData.page.pathIndicator.depth_3+\":\"+digitalData.page.pathIndicator.depth_4+\":\"+digitalData.page.pathIndicator.depth_5:digitalData.page.pathIndicator.depth_4?digitalData.page.pageInfo.siteCode+\":\"+digitalData.page.pathIndicator.depth_2+\":\"+digitalData.page.pathIndicator.depth_3+\":\"+digitalData.page.pathIndicator.depth_4:digitalData.page.pathIndicator.depth_3?\ndigitalData.page.pageInfo.siteCode+\":\"+digitalData.page.pathIndicator.depth_2+\":\"+digitalData.page.pathIndicator.depth_3:digitalData.page.pathIndicator.depth_2?digitalData.page.pageInfo.siteCode+\":\"+digitalData.page.pathIndicator.depth_2:digitalData.page.pageInfo.siteCode})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_ga"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",61],8,16],".split(\".\");return a[2]+\".\"+a[3]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(\"#shop-storeYN\").val();return\"Y\"==a?\"sale\":\"N\"==a?\"no sale\":\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=digitalData.page.pageInfo.siteSection,c=digitalData.page.pageInfo.siteCode,a=$.trim(digitalData.page.pageInfo.pageTrack);if(\"flagship pdp\"==a||\"product detail\"==a||\"vd marketing page\"==a)b=c+\":consumer\";\"product storelocator\"==a?b=c+\":storelocator\":\"microsite\"==a\u0026\u0026(b=c+\":campaign\");return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(\"#useLogin\").val(),b=_satellite.readCookie(\"isStoreLogedIn\");return\"N\"==a?\"logged out\":\"Y\"==b?\"logged in\":\"logged out\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=digitalData.product.displayName;a=a.replace(\/\u0026amp;\/gi,\"\\x26\");a=a.replace(\/\u0026#37;\/gi,\"%\");a=a.replace(\/\u0026#39;\/gi,\"'\");a=a.replace(\/\u0026#40;\/gi,\"(\");a=a.replace(\/\u0026#41;\/gi,\")\");a=a.replace(\/\u0026#42;\/gi,\"*\");a=a.replace(\/\u0026#61;\/gi,\"\\x3d\");a=a.replace(\/\u0026#34;\/gi,'\"');a=a.replace(\/\u0026lt;\/gi,\"\\x3c\");return a=a.replace(\/\u0026gt;\/gi,\"\\x3e\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=_satellite.getVar(\"GUID\");return void 0!=a\u0026\u0026\"\"!=a?a:\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").attr(\"ga-ac\"))return $(",["escape",["macro",2],8,16],").attr(\"ga-ac\");if(null==$(",["escape",["macro",2],8,16],").attr(\"ga-ac\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().attr(\"ga-ac\"))return $(",["escape",["macro",2],8,16],").parent().attr(\"ga-ac\");if(null==$(",["escape",["macro",2],8,16],").parent().attr(\"ga-ac\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().parent().attr(\"ga-ac\"))return $(",["escape",["macro",2],8,16],").parent().parent().attr(\"ga-ac\");if(null==$(",["escape",["macro",2],8,16],").parent().parent().attr(\"ga-ac\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().parent().parent().attr(\"ga-ac\"))return $(",["escape",["macro",2],8,16],").parent().parent().parent().attr(\"ga-ac\");\nif(null==$(",["escape",["macro",2],8,16],").parent().parent().parent().attr(\"ga-ac\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().parent().parent().parent().attr(\"ga-ac\"))return $(",["escape",["macro",2],8,16],").parent().parent().parent().parent().attr(\"ga-ac\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").attr(\"ga-la\"))return $(",["escape",["macro",2],8,16],").attr(\"ga-la\");if(null==$(",["escape",["macro",2],8,16],").attr(\"ga-la\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().attr(\"ga-la\"))return $(",["escape",["macro",2],8,16],").parent().attr(\"ga-la\");if(null==$(",["escape",["macro",2],8,16],").parent().attr(\"ga-la\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().parent().attr(\"ga-la\"))return $(",["escape",["macro",2],8,16],").parent().parent().attr(\"ga-la\");if(null==$(",["escape",["macro",2],8,16],").parent().parent().attr(\"ga-la\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().parent().parent().attr(\"ga-la\"))return $(",["escape",["macro",2],8,16],").parent().parent().parent().attr(\"ga-la\");\nif(null==$(",["escape",["macro",2],8,16],").parent().parent().parent().attr(\"ga-la\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().parent().parent().parent().attr(\"ga-la\"))return $(",["escape",["macro",2],8,16],").parent().parent().parent().parent().attr(\"ga-la\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(\"#hiddenModelName\").val();return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=_satellite.getVar(\"Page URL\"),a=$(\"#hiddenModelCode\").val();-1!=b.indexOf(\"\/support\/generic\")\u0026\u0026(a=$(\"#hiddenGenericCode\").val());return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(\"#hiddenIaUrlNamePath\").val().split(\"|\")[2]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(\"#hiddenIaUrlNamePath\").val().split(\"|\")[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"control\"))return\"pagenation\";if($(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"content\"))return\"promotion banner\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").closest(\"div.control\").hasClass(\"prev\"))return\"galaxy s8:previous\";if($(",["escape",["macro",2],8,16],").closest(\"div.control\").hasClass(\"next\"))return\"galaxy s8:next\";if($(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"content\"))return\"galaxy s8:financing\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a,c=$(",["escape",["macro",2],8,16],").attr(\"data-omni-type\"),b=$(",["escape",["macro",2],8,16],").attr(\"data-omni\");-1!=c.indexOf(\"buyAction\")?a=\"Buy now\":-1!=b.indexOf(\":tab:\")?a=\"sticky menu_click\":-1!=b.indexOf(\":body:section-to:\")\u0026\u0026(a=\"feature\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a,d=$(",["escape",["macro",2],8,16],").attr(\"data-omni-type\"),c=$(",["escape",["macro",2],8,16],").attr(\"data-omni\"),b=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\":\");-1!=d.indexOf(\"buyAction\")?a=\"c_btn_pre-type2 order-button buy\"==$(",["escape",["macro",2],8,16],").attr(\"class\")?\"galaxy s8:kv\":\"c_btn_pre-type2 order-button\"==$(",["escape",["macro",2],8,16],").attr(\"class\")?\"galaxy s8:bottom banner\":\"galaxy s8:sticky menu\":-1!=c.indexOf(\":tab:\")?a=\"galaxy s8:\"+b[4]:-1!=c.indexOf(\":body:section-to:\")\u0026\u0026(a=\"galaxy s8:\"+\nb[1]+\":learn more_\"+b[4]);return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"galaxy-s8:gallery:image_galaxy s8 plus\"==$(",["escape",["macro",2],8,16],").attr(\"data-omni\"))return\"galaxy s8:tab_galaxy s8 plus\";if(\"galaxy-s8:gallery:image_galaxy s8\"==$(",["escape",["macro",2],8,16],").attr(\"data-omni\"))return\"galaxy s8:tab_galaxy s8\";if($(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"m_product-color\")||$(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"m_ly_thumnail\"))return\"galaxy s8:image\";if($(",["escape",["macro",2],8,16],").parent().hasClass(\"c_paging-type\"))return\"galaxy s8:color\";\nif($(",["escape",["macro",2],8,16],").closest(\"a\").hasClass(\"m_btn_type2-prev\")||$(",["escape",["macro",2],8,16],").closest(\"a\").hasClass(\"m_btn_type2-next\"))return\"galaxy s8:arrow\";if($(",["escape",["macro",2],8,16],").parent().hasClass(\"zoom-area\"))return\"galaxy s8:image zoom\";if($(",["escape",["macro",2],8,16],").hasClass(\"c_btn_close-type1\"))return\"galaxy s8:close\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",2],8,16],").attr(\"data-omni-type\");return-1!=a.indexOf(\"scAdd\")||-1!=a.indexOf(\"cartandshop\")?\"y\":\"n\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=digitalData.page.pageInfo.pageTrack;return-1!=a.indexOf(\"product family showcase\")||-1!=a.indexOf(\"product category details\")||-1!=a.indexOf(\"product finder\")?\"y\":\"n\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=$(",["escape",["macro",2],8,16],").parent().parent().hasClass(\"gb-gnb__my-layer\")?\"gnb menu\":$(",["escape",["macro",2],8,16],").parent().parent().parent().hasClass(\"gb-gnb__shop-layer\")?\"gnb menu\":\"gnb\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=$(",["escape",["macro",2],8,16],").parent().parent().hasClass(\"gb-gnb__my-layer\")?\"account\":$(",["escape",["macro",2],8,16],").parent().parent().parent().hasClass(\"gb-gnb__shop-layer\")?\"account\":\"gnb\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"addToCart\";return $(",["escape",["macro",2],8,16],").attr(\"data-omni\")?(a=$(",["escape",["macro",2],8,16],").text(),a=$.trim(a)):-1!=$(",["escape",["macro",2],8,16],").prop(\"id\").indexOf(\"viewCart\")?\"view cart\":a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=\"product-details__view\"==$(",["escape",["macro",2],8,16],").parent().parent().parent().parent().attr(\"class\")?\"product detail\":\"Recently View\"})();"]
    },{
      "function":"__j",
      "vtp_name":"digitalData.product.model_name"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=digitalData.page.pageInfo.pageTrack;if(null==a||\"\"==a)a=\"nopage\";if(-1\u003Ca.indexOf(\"flagship\")){if($(",["escape",["macro",2],8,16],").attr(\"data-omni\")?dataOmni=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").replace(\/;\/gi,\"\").split(\"|\"):$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\")?dataOmni=$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\").split(\"|\"):$(",["escape",["macro",2],8,16],").closest(\"div.shop-grid-col\").attr(\"data-omni\")\u0026\u0026(dataOmni=$(",["escape",["macro",2],8,16],").closest(\"div.shop-grid-col\").attr(\"data-omni\").split(\"|\")),\n$(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"fc-content__preview-summary-btn\")?dataOmni=$(",["escape",["macro",2],8,16],").closest(\"button\").attr(\"data-omni\").replace(\/;\/gi,\"\").split(\"|\"):\"promotionAddCart_sh_g_offer_list_bund\"==$(",["escape",["macro",2],8,16],").attr(\"id\")?dataOmni=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").replace(\/;\/gi,\"\").split(\"|\"):$(",["escape",["macro",2],8,16],").hasClass(\"account-wishlist__option-add\")\u0026\u0026(dataOmni=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"|\")),a=dataOmni[0].replace(\/;\/gi,\n\",\"),null==a||\"\"==a)a=",["escape",["macro",85],8,16],"}else if(-1\u003Ca.indexOf(\"product finder\")){if(0\u003C$(",["escape",["macro",2],8,16],").closest(\"div.bv_stars_component_container\").length||0\u003C$(",["escape",["macro",2],8,16],").closest(\"div.bv_numReviews_component_container\").length||0\u003C$(",["escape",["macro",2],8,16],").closest(\"div.reevoomark_badge\").length?dataOmni=$(",["escape",["macro",2],8,16],").parents(\"div.product-card\").attr(\"data-omni\").split(\"|\"):$(",["escape",["macro",2],8,16],").attr(\"data-omni\")?dataOmni=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"|\"):\n$(",["escape",["macro",2],8,16],").parents().attr(\"data-omni\")\u0026\u0026(dataOmni=$(",["escape",["macro",2],8,16],").parents().attr(\"data-omni\").split(\"|\")),a=dataOmni[0].replace(\/;\/gi,\",\"),null==a||\"\"==a)a=",["escape",["macro",85],8,16],"}else a=",["escape",["macro",85],8,16],";return a})();"]
    },{
      "function":"__j",
      "vtp_name":"digitalData.product.model_code"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=digitalData.page.pageInfo.pageTrack;if(null==a||\"\"==a)a=\"nopage\";if(-1\u003Ca.indexOf(\"flagship\")){if($(",["escape",["macro",2],8,16],").attr(\"data-omni\")?dataOmni=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").replace(\/;\/gi,\"\").split(\"|\"):$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\")?dataOmni=$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\").split(\"|\"):$(",["escape",["macro",2],8,16],").closest(\"div.shop-grid-col\").attr(\"data-omni\")\u0026\u0026(dataOmni=$(",["escape",["macro",2],8,16],").closest(\"div.shop-grid-col\").attr(\"data-omni\").split(\"|\")),\n$(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"fc-content__preview-summary-btn\")?dataOmni=$(",["escape",["macro",2],8,16],").closest(\"button\").attr(\"data-omni\").replace(\/;\/gi,\"\").split(\"|\"):\"promotionAddCart_sh_g_offer_list_bund\"==$(",["escape",["macro",2],8,16],").attr(\"id\")?dataOmni=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").replace(\/;\/gi,\"\").split(\"|\"):$(",["escape",["macro",2],8,16],").hasClass(\"account-wishlist__option-add\")\u0026\u0026(dataOmni=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"|\")),a=dataOmni[1].replace(\/;\/gi,\n\",\"),null==a||\"\"==a)a=",["escape",["macro",87],8,16],"}else if(-1\u003Ca.indexOf(\"product finder\")){if(0\u003C$(",["escape",["macro",2],8,16],").closest(\"div.bv_stars_component_container\").length||0\u003C$(",["escape",["macro",2],8,16],").closest(\"div.bv_numReviews_component_container\").length||0\u003C$(",["escape",["macro",2],8,16],").closest(\"div.reevoomark_badge\").length?dataOmni=$(",["escape",["macro",2],8,16],").parents(\"div.product-card\").attr(\"data-omni\").split(\"|\"):$(",["escape",["macro",2],8,16],").attr(\"data-omni\")?dataOmni=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"|\"):\n$(",["escape",["macro",2],8,16],").parents().attr(\"data-omni\")\u0026\u0026(dataOmni=$(",["escape",["macro",2],8,16],").parents().attr(\"data-omni\").split(\"|\")),a=dataOmni[1].replace(\/;\/gi,\",\"),null==a||\"\"==a)a=",["escape",["macro",87],8,16],"}else a=",["escape",["macro",87],8,16],";return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a,b=$(",["escape",["macro",2],8,16],").closest(\"div\");b.hasClass(\"product-card__img-view-item\")?a=\"product grid_product\":b.hasClass(\"btn-view-more\")?a=\"view more\":$(",["escape",["macro",2],8,16],").parents().hasClass(\"product-card__reevoo-de\")?a=\"product grid_review\":0\u003C$(",["escape",["macro",2],8,16],").closest(\"div.bv_stars_component_container\").length||0\u003C$(",["escape",["macro",2],8,16],").closest(\"div.bv_numReviews_component_container\").length?a=\"product grid_review\":$(",["escape",["macro",2],8,16],").hasClass(\"js-buy-now\")||$(",["escape",["macro",2],8,16],").parent().hasClass(\"js-buy-now\")?\na=\"buy now\":b.hasClass(\"product-card__cta-btns\")?a=$(",["escape",["macro",2],8,16],").closest(\"a\").hasClass(\"js-cta-stock\")?\"stock alert\":\"product grid_product\":\"getStockAlertSubmit\"==$(",["escape",["macro",2],8,16],").attr(\"id\")?a=\"stock alert\":0\u003C$(",["escape",["macro",2],8,16],").closest(\"p.s-energy-label\").length\u0026\u0026(a=\"product fiche\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"getStockAlertSubmit\"==$(",["escape",["macro",2],8,16],").attr(\"id\")){var a=\/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\/;var b=$(\"#getStockAlertEmailInput\").val();a=0==a.test(b)?!1:!0}else a=!0;return a})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",91],8,16],";switch(a){case \"start\":return\"Play\";case \"pause\":return\"Pause\";case \"seek\":return\"Seeking\";case \"progress\":return+",["escape",["macro",92],8,16],"+\"% Watched\";case \"complete\":return\"100% Watched\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"\",b=$(",["escape",["macro",2],8,16],").closest(\"div\");b.hasClass(\"product-card__img-view-item\")?(a=$(",["escape",["macro",2],8,16],").closest(\"div\").parent().parent().parent().attr(\"data-omni\").split(\"|\"),a=a[0].toLowerCase()):b.hasClass(\"s-btn-more\")?a=\"\":$(",["escape",["macro",2],8,16],").parents().hasClass(\"product-card__reevoo-de\")?a=\"read\":0\u003C$(",["escape",["macro",2],8,16],").closest(\"div.bv_stars_component_container\").length||0\u003C$(",["escape",["macro",2],8,16],").closest(\"div.bv_numReviews_component_container\").length?a=$(",["escape",["macro",2],8,16],").closest(\"button\").hasClass(\"bv_text\")?\n\"0\"==$(",["escape",["macro",2],8,16],").parent().children(\"meta\").attr(\"content\")?\"write\":\"read\":-1\u003CString($(",["escape",["macro",2],8,16],").closest(\"button.bv_stars_button_container\").attr(\"aria-label\")).indexOf(\"0.0\")?\"write\":\"0\"==$(",["escape",["macro",2],8,16],").children(\"meta\").attr(\"content\")?\"write\":\"read\":$(",["escape",["macro",2],8,16],").parent().hasClass(\"js-buy-now\")?a=$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\").split(\"|\")[0]:$(",["escape",["macro",2],8,16],").hasClass(\"js-buy-now\")?a=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"|\")[0]:\nb.hasClass(\"product-card__cta-btns\")?(a=$(",["escape",["macro",2],8,16],").hasClass(\"cta-btn__txt\")?$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\").split(\"|\"):$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"|\"),a=a[0]):\"getStockAlertSubmit\"==$(",["escape",["macro",2],8,16],").attr(\"id\")\u0026\u0026(a=$(",["escape",["macro",2],8,16],").closest(\"div\").attr(\"data-omni\").split(\"|\"),a=a[1]);return a})();"]
    },{
      "function":"__e"
    },{
      "function":"__j",
      "vtp_name":"digitalData.page.pageInfo.siteCode"
    },{
      "function":"__j",
      "vtp_name":"digitalData.product.category"
    },{
      "function":"__u",
      "vtp_component":"URL"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__j",
      "vtp_name":"digitalData.product.pvi_type_name"
    },{
      "function":"__j",
      "vtp_name":"digitalData.product.pvi_subtype_name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtmServerType"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",102],
      "vtp_defaultValue":"UA-100137701-4",
      "vtp_map":["list",["map","key","live","value","UA-100137701-4"],["map","key","staging","value","UA-101298876-1"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",96]],["map","index","2","group",["macro",56]],["map","index","3","group",["macro",57]],["map","index","4","group",["macro",59]],["map","index","5","group",["macro",60]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","title","value",["macro",7]],["map","fieldName","userId","value",["macro",67]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",96]],["map","index","2","dimension",["macro",64]],["map","index","3","dimension",["macro",0]],["map","index","4","dimension",["macro",97]],["map","index","5","dimension",["macro",65]],["map","index","6","dimension",["macro",98]],["map","index","7","dimension",["macro",99]],["map","index","8","dimension",["macro",62]],["map","index","10","dimension",["macro",100]],["map","index","11","dimension",["macro",101]],["map","index","12","dimension",["macro",63]],["map","index","13","dimension",["macro",87]],["map","index","14","dimension",["macro",66]],["map","index","15","dimension",["macro",85]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",103],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchKeyword"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchSortAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchSort"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"scrollComp"
    },{
      "function":"__u",
      "vtp_component":"PATH"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",58],8,16],".split(\":\"),b=\"\";void 0!=a[0]\u0026\"\"!=a[0]\u0026\u0026(b+=a[0]);void 0!=a[1]\u0026\"\"!=a[1]\u0026\u0026(b+=\":\"+a[1]);void 0!=a[2]\u0026\"\"!=a[2]\u0026\u0026(b+=\":\"+a[2]);return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",58],8,16],".split(\":\"),b=\"\";void 0!=a[0]\u0026\"\"!=a[0]\u0026\u0026(b+=a[0]);void 0!=a[1]\u0026\"\"!=a[1]\u0026\u0026(b+=\":\"+a[1]);void 0!=a[2]\u0026\"\"!=a[2]\u0026\u0026(b+=\":\"+a[2]);void 0!=a[3]\u0026\"\"!=a[3]\u0026\u0026(b+=\":\"+a[3]);return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",58],8,16],".split(\":\"),b=\"\";void 0!=a[0]\u0026\"\"!=a[0]\u0026\u0026(b+=a[0]);void 0!=a[1]\u0026\"\"!=a[1]\u0026\u0026(b+=\":\"+a[1]);void 0!=a[2]\u0026\"\"!=a[2]\u0026\u0026(b+=\":\"+a[2]);void 0!=a[3]\u0026\"\"!=a[3]\u0026\u0026(b+=\":\"+a[3]);void 0!=a[4]\u0026\"\"!=a[4]\u0026\u0026(b+=\":\"+a[4]);return b})();"]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","title","value",["macro",58]],["map","fieldName","userId","value",["macro",67]]],
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",96]],["map","index","2","group",["macro",56]],["map","index","3","group",["macro",110]],["map","index","4","group",["macro",111]],["map","index","5","group",["macro",112]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",96]],["map","index","2","dimension",["macro",64]],["map","index","3","dimension",["macro",0]],["map","index","4","dimension",["macro",97]],["map","index","5","dimension",["macro",65]],["map","index","6","dimension",["macro",98]],["map","index","7","dimension",["macro",99]],["map","index","8","dimension",["macro",62]],["map","index","10","dimension",["macro",73]],["map","index","11","dimension",["macro",72]],["map","index","13","dimension",["macro",71]],["map","index","14","dimension",["macro",70]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",103],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"accountVal"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",2],8,16],").parent();return a=a.hasClass(\"s-btn-top\")||a.hasClass(\"btn-view-more\")?\"contents interaction\":a.hasClass(\"js-buy-now\")||$(",["escape",["macro",2],8,16],").hasClass(\"js-buy-now\")?\"where to buy\":\"getStockAlertSubmit\"==$(",["escape",["macro",2],8,16],").attr(\"id\")?\"Request submit\":",["escape",["macro",0],8,16],"})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"searchvalue"
    },{
      "function":"__j",
      "vtp_name":"document.URL"
    },{
      "function":"__j",
      "vtp_name":"digitalData.page.pageInfo.pageURL"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"sdsat_session"
    },{
      "function":"__u",
      "vtp_component":"HOST"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.videoProvider",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoDuration",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoVisible",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoCurrentTime",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",82],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":["macro",81],
      "vtp_eventLabel":["macro",10],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"contents interaction",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"back to top",
      "vtp_eventLabel":"back to top",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":2
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"social",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"follow",
      "vtp_eventLabel":["macro",11],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":3
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"footer",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"footer",
      "vtp_eventLabel":["macro",11],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":4
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"footer",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"footer bottom",
      "vtp_eventLabel":["macro",12],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":5
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"footer",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"footer bottom",
      "vtp_eventLabel":["macro",13],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":6
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"scroll",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"bottom",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":7
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"search layer",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"Recent keyword",
      "vtp_eventLabel":["macro",14],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":9
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"search layer",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":["macro",16],
      "vtp_eventLabel":["macro",15],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":10
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Site Search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":["macro",17],
      "vtp_eventLabel":["macro",105],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":11
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"search result page function",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":["macro",18],
      "vtp_eventLabel":["macro",20],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":13
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"search result page function",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"filter",
      "vtp_eventLabel":["macro",19],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":14
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"search result page function",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"option",
      "vtp_eventLabel":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":15
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"search result page function",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"pagenation",
      "vtp_eventLabel":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":16
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"search result page function",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":["macro",106],
      "vtp_eventLabel":["macro",107],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":17
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"search result click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"best match",
      "vtp_eventLabel":["macro",23],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":19
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"search result click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":["macro",24],
      "vtp_eventLabel":["macro",25],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":20
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"no result search click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":["macro",26],
      "vtp_eventLabel":["macro",27],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":21
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"no result search click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"option",
      "vtp_eventLabel":["macro",28],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":22
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Bread Crumb",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"Breadcrumb",
      "vtp_eventLabel":["macro",29],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":23
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Where to buy",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":["macro",30],
      "vtp_eventLabel":["macro",31],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":24
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"home kv",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":["macro",32],
      "vtp_eventLabel":["macro",8],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":25
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product family showcase",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"feature",
      "vtp_eventLabel":["macro",33],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":26
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",0],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"key visual",
      "vtp_eventLabel":["macro",34],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":27
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product family showcase",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"secondary menu",
      "vtp_eventLabel":["macro",35],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":28
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product category detail",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"feature",
      "vtp_eventLabel":["macro",36],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":29
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product category detail",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"product section",
      "vtp_eventLabel":["macro",38],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":31
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product finder",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":["macro",39],
      "vtp_eventLabel":["macro",40],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":32
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product finder",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":["macro",41],
      "vtp_eventLabel":["macro",42],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":33
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product details",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"sticky menu_click",
      "vtp_eventLabel":["macro",46],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":34
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product details",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"gallery",
      "vtp_eventLabel":["macro",43],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":36
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product details",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"option",
      "vtp_eventLabel":["macro",44],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":38
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product details",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"sticky menu_scroll",
      "vtp_eventLabel":["macro",108],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":39
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"social",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"share",
      "vtp_eventLabel":["macro",45],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":40
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product details",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"support",
      "vtp_eventLabel":["macro",48],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":41
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product details",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"spec",
      "vtp_eventLabel":["macro",47],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":42
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product details",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"sar information",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":43
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product details",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"compare",
      "vtp_eventLabel":["macro",49],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":44
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",84],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":["macro",50],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":45
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Recently View",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"product",
      "vtp_eventLabel":["macro",51],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":46
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"accessories",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"product",
      "vtp_eventLabel":["macro",52],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":47
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"accessories",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"see more",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":48
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Flagship pdp",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":["macro",76],
      "vtp_eventLabel":["macro",77],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":51
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Offer page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":["macro",53],
      "vtp_eventLabel":["macro",54],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":52
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Offer page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"key visual",
      "vtp_eventLabel":["macro",55],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":53
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",6],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":["macro",68],
      "vtp_eventLabel":["macro",69],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":54
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",6],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":["macro",68],
      "vtp_eventLabel":["macro",69],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":55
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",104],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":56
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",113],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":57
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"login success",
      "vtp_eventLabel":["macro",114],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":58
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":59
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Flagship pdp",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":["macro",74],
      "vtp_eventLabel":["macro",75],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":64
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Flagship pdp",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"Gallery",
      "vtp_eventLabel":["macro",78],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":65
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"addToCart",
      "vtp_eventLabel":["macro",83],
      "vtp_dimension":["list",["map","index","13","dimension",["macro",88]],["map","index","15","dimension",["macro",86]]],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":68
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":"detail",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":72
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "tag_id":73
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"YouTube",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":["macro",93],
      "vtp_eventLabel":["macro",116],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":74
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["macro",117],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":["macro",89],
      "vtp_eventLabel":["macro",94],
      "vtp_dimension":["list",["map","index","13","dimension",["macro",88]],["map","index","15","dimension",["macro",86]]],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":75
    },{
      "function":"__cl",
      "tag_id":76
    },{
      "function":"__cl",
      "tag_id":77
    },{
      "function":"__cl",
      "tag_id":78
    },{
      "function":"__cl",
      "tag_id":79
    },{
      "function":"__cl",
      "tag_id":80
    },{
      "function":"__cl",
      "tag_id":81
    },{
      "function":"__cl",
      "tag_id":82
    },{
      "function":"__cl",
      "tag_id":83
    },{
      "function":"__cl",
      "tag_id":84
    },{
      "function":"__cl",
      "tag_id":85
    },{
      "function":"__cl",
      "tag_id":86
    },{
      "function":"__cl",
      "tag_id":87
    },{
      "function":"__cl",
      "tag_id":88
    },{
      "function":"__cl",
      "tag_id":89
    },{
      "function":"__cl",
      "tag_id":90
    },{
      "function":"__cl",
      "tag_id":91
    },{
      "function":"__cl",
      "tag_id":92
    },{
      "function":"__cl",
      "tag_id":93
    },{
      "function":"__cl",
      "tag_id":94
    },{
      "function":"__cl",
      "tag_id":95
    },{
      "function":"__cl",
      "tag_id":96
    },{
      "function":"__cl",
      "tag_id":97
    },{
      "function":"__cl",
      "tag_id":98
    },{
      "function":"__cl",
      "tag_id":99
    },{
      "function":"__cl",
      "tag_id":100
    },{
      "function":"__cl",
      "tag_id":101
    },{
      "function":"__cl",
      "tag_id":102
    },{
      "function":"__cl",
      "tag_id":103
    },{
      "function":"__cl",
      "tag_id":104
    },{
      "function":"__cl",
      "tag_id":105
    },{
      "function":"__cl",
      "tag_id":106
    },{
      "function":"__cl",
      "tag_id":107
    },{
      "function":"__cl",
      "tag_id":108
    },{
      "function":"__cl",
      "tag_id":109
    },{
      "function":"__cl",
      "tag_id":110
    },{
      "function":"__cl",
      "tag_id":111
    },{
      "function":"__cl",
      "tag_id":112
    },{
      "function":"__cl",
      "tag_id":113
    },{
      "function":"__cl",
      "tag_id":114
    },{
      "function":"__cl",
      "tag_id":115
    },{
      "function":"__cl",
      "tag_id":116
    },{
      "function":"__cl",
      "tag_id":117
    },{
      "function":"__cl",
      "tag_id":118
    },{
      "function":"__cl",
      "tag_id":119
    },{
      "function":"__cl",
      "tag_id":120
    },{
      "function":"__cl",
      "tag_id":121
    },{
      "function":"__cl",
      "tag_id":122
    },{
      "function":"__cl",
      "tag_id":123
    },{
      "function":"__cl",
      "tag_id":124
    },{
      "function":"__cl",
      "tag_id":125
    },{
      "function":"__cl",
      "tag_id":126
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"25,50,75",
      "vtp_captureComplete":true,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":true,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"7322547_102",
      "tag_id":127
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eif(document.getElementById(\"content\"))var scrollBottom=new Waypoint({element:document.getElementById(\"content\"),handler:function(a){\"down\"==a\u0026\u0026dataLayer.push({event:\"home_scroll\",eventNonInteraction:!0})},offset:\"bottom-in-view\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":8
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E$(document).ready(function(){setTimeout(function(){dataLayer.push({event:\"search_result\",searchKeyword:",["escape",["macro",118],8,16],",eventNonInteraction:!0})},2E3)});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":12
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$(\"#sortBy\").change(function(){var a=$(\"#sortBy option:selected\").val();dataLayer.push({event:\"search_sortby\",searchSort:a,searchSortAction:\"sort by\",eventNonInteraction:!0})});$(\"#resultsPerPage\").change(function(){var a=$(\"#resultsPerPage option:selected\").val();dataLayer.push({event:\"search_sortby\",searchSort:a,searchSortAction:\"view by\",eventNonInteraction:!0})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":18
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Evar featureYN=document.getElementById(\"featureEmptyYn\"),specYN=document.getElementById(\"specEmptyYn\"),reviewYN=document.getElementById(\"reviewsEmptyYn\"),supportYN=document.getElementById(\"supportEmptyYn\"),compareYN=document.getElementById(\"compareEmptyYn\"),relatedYN=document.getElementsByClassName(\"related-products js-related-products-pd\"),comp_arr=[];featureYN\u0026\u0026\"N\"==featureYN.value\u0026\u0026comp_arr.push(\"benefits\");specYN\u0026\u0026\"N\"==specYN.value\u0026\u0026comp_arr.push(\"specs\");reviewYN\u0026\u0026\"N\"==reviewYN.value\u0026\u0026comp_arr.push(\"reviews\");\nsupportYN\u0026\u0026\"N\"==supportYN.value\u0026\u0026comp_arr.push(\"support\");compareYN\u0026\u0026\"N\"==compareYN.value\u0026\u0026comp_arr.push(\"compare\");relatedYN\u0026\u0026comp_arr.push(\"related\");\nif(document.getElementsByClassName(\"feature-benefit\")[0]\u0026\u0026featureYN\u0026\u0026\"N\"==featureYN.value)var feature=new Waypoint({element:document.getElementsByClassName(\"feature-benefit\")[0],handler:function(a){\"down\"==a?dataLayer.push({event:\"pd_scroll\",scrollComp:\"benefits\",eventNonInteraction:!0}):0\u003Ccomp_arr.indexOf(\"benefits\")\u0026\u0026(a=comp_arr[comp_arr.indexOf(\"benefits\")-1],dataLayer.push({event:\"pd_scroll\",scrollComp:a,eventNonInteraction:!0}))},offset:150});\nif(document.getElementsByClassName(\"product-specs\")[0]\u0026\u0026specYN\u0026\u0026\"N\"==specYN.value)var spec=new Waypoint({element:document.getElementsByClassName(\"product-specs\")[0],handler:function(a){\"down\"==a?dataLayer.push({event:\"pd_scroll\",scrollComp:\"specs\",eventNonInteraction:!0}):0\u003Ccomp_arr.indexOf(\"specs\")\u0026\u0026(a=comp_arr[comp_arr.indexOf(\"specs\")-1],dataLayer.push({event:\"pd_scroll\",scrollComp:a,eventNonInteraction:!0}))},offset:150});\nif(document.getElementsByClassName(\"review-highlights\")[0]\u0026\u0026reviewYN\u0026\u0026\"N\"==reviewYN.value)var review=new Waypoint({element:document.getElementById(\"reviewsContainer\"),handler:function(a){console.log(\"direction\\x3d \"+a);\"down\"==a?dataLayer.push({event:\"pd_scroll\",scrollComp:\"reviews\",eventNonInteraction:!0}):0\u003Ccomp_arr.indexOf(\"reviews\")\u0026\u0026(a=comp_arr[comp_arr.indexOf(\"reviews\")-1],dataLayer.push({event:\"pd_scroll\",scrollComp:a,eventNonInteraction:!0}))},offset:150});\nif(document.getElementsByClassName(\"product-support\")[0]\u0026\u0026supportYN\u0026\u0026\"N\"==supportYN.value)var support=new Waypoint({element:document.getElementsByClassName(\"product-support\")[0],handler:function(a){\"down\"==a?dataLayer.push({event:\"pd_scroll\",scrollComp:\"support\",eventNonInteraction:!0}):0\u003Ccomp_arr.indexOf(\"support\")\u0026\u0026(a=comp_arr[comp_arr.indexOf(\"support\")-1],dataLayer.push({event:\"pd_scroll\",scrollComp:a,eventNonInteraction:!0}))},offset:150});\nif(document.getElementsByClassName(\"product-compare\")[0]\u0026\u0026compareYN\u0026\u0026\"N\"==compareYN.value)var compare=new Waypoint({element:document.getElementsByClassName(\"product-compare\")[0],handler:function(a){\"down\"==a?dataLayer.push({event:\"pd_scroll\",scrollComp:\"compare\",eventNonInteraction:!0}):0\u003Ccomp_arr.indexOf(\"compare\")\u0026\u0026(a=comp_arr[comp_arr.indexOf(\"compare\")-1],dataLayer.push({event:\"pd_scroll\",scrollComp:a,eventNonInteraction:!0}))},offset:150});\nif(document.getElementsByClassName(\"related-products\")[0])var related=new Waypoint({element:document.getElementsByClassName(\"related-products\")[0],handler:function(a){\"down\"==a?dataLayer.push({event:\"pd_scroll\",scrollComp:\"related\",eventNonInteraction:!0}):0\u003Ccomp_arr.indexOf(\"related\")\u0026\u0026(a=comp_arr[comp_arr.indexOf(\"related\")-1],dataLayer.push({event:\"pd_scroll\",scrollComp:a,eventNonInteraction:!0}))},offset:150});\n$(\"a\").on(\"click\",function(){void 0!=spec\u0026\u0026spec.disable();void 0!=review\u0026\u0026review.disable();void 0!=feature\u0026\u0026feature.disable();void 0!=support\u0026\u0026support.disable();void 0!=compare\u0026\u0026compare.disable();void 0!=related\u0026\u0026related.disable()});$(\"html, body\").on(\"mousewheel DOMMouseScroll\",function(a){void 0!=spec\u0026\u0026spec.enable();void 0!=review\u0026\u0026review.enable();void 0!=feature\u0026\u0026feature.enable();void 0!=support\u0026\u0026support.enable();void 0!=compare\u0026\u0026compare.enable();void 0!=related\u0026\u0026related.enable()});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":35
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Evar featureYN=document.getElementById(\"featureEmptyYn\"),specYN=document.getElementById(\"specEmptyYn\"),reviewYN=document.getElementById(\"reviewsEmptyYn\"),supportYN=document.getElementById(\"supportEmptyYn\"),compareYN=document.getElementById(\"compareEmptyYn\"),relatedYN=document.getElementsByClassName(\"related-products js-related-products-pd\"),comp_arr=[];featureYN\u0026\u0026\"N\"==featureYN.value\u0026\u0026comp_arr.push(\"benefits\");specYN\u0026\u0026\"N\"==specYN.value\u0026\u0026comp_arr.push(\"specs\");reviewYN\u0026\u0026\"N\"==reviewYN.value\u0026\u0026comp_arr.push(\"reviews\");\nsupportYN\u0026\u0026\"N\"==supportYN.value\u0026\u0026comp_arr.push(\"support\");compareYN\u0026\u0026\"N\"==compareYN.value\u0026\u0026comp_arr.push(\"compare\");relatedYN\u0026\u0026comp_arr.push(\"related\");\nif(document.getElementsByClassName(\"feature-benefit\")[0]\u0026\u0026featureYN\u0026\u0026\"N\"==featureYN.value)var feature=new Waypoint({element:document.getElementsByClassName(\"feature-benefit\")[0],handler:function(a){\"down\"==a?dataLayer.push({event:\"pd_scroll\",scrollComp:\"benefits\",eventNonInteraction:!0}):0\u003Ccomp_arr.indexOf(\"benefits\")\u0026\u0026(a=comp_arr[comp_arr.indexOf(\"benefits\")-1],dataLayer.push({event:\"pd_scroll\",scrollComp:a,eventNonInteraction:!0}))}});\nif(document.getElementsByClassName(\"product-specs\")[0]\u0026\u0026specYN\u0026\u0026\"N\"==specYN.value)var spec=new Waypoint({element:document.getElementsByClassName(\"product-specs\")[0],handler:function(a){\"down\"==a?dataLayer.push({event:\"pd_scroll\",scrollComp:\"specs\",eventNonInteraction:!0}):0\u003Ccomp_arr.indexOf(\"specs\")\u0026\u0026(a=comp_arr[comp_arr.indexOf(\"specs\")-1],dataLayer.push({event:\"pd_scroll\",scrollComp:a,eventNonInteraction:!0}))}});\nif(document.getElementsByClassName(\"review-highlights\")[0]\u0026\u0026reviewYN\u0026\u0026\"N\"==reviewYN.value)var review=new Waypoint({element:document.getElementById(\"reviewsContainer\"),handler:function(a){\"down\"==a?dataLayer.push({event:\"pd_scroll\",scrollComp:\"reviews\",eventNonInteraction:!0}):0\u003Ccomp_arr.indexOf(\"reviews\")\u0026\u0026(a=comp_arr[comp_arr.indexOf(\"reviews\")-1],dataLayer.push({event:\"pd_scroll\",scrollComp:a,eventNonInteraction:!0}))}});\nif(document.getElementsByClassName(\"product-support\")[0]\u0026\u0026supportYN\u0026\u0026\"N\"==supportYN.value)var support=new Waypoint({element:document.getElementsByClassName(\"product-support\")[0],handler:function(a){\"down\"==a?dataLayer.push({event:\"pd_scroll\",scrollComp:\"support\",eventNonInteraction:!0}):0\u003Ccomp_arr.indexOf(\"support\")\u0026\u0026(a=comp_arr[comp_arr.indexOf(\"support\")-1],dataLayer.push({event:\"pd_scroll\",scrollComp:a,eventNonInteraction:!0}))}});\nif(document.getElementsByClassName(\"product-compare\")[0]\u0026\u0026compareYN\u0026\u0026\"N\"==compareYN.value)var compare=new Waypoint({element:document.getElementsByClassName(\"product-compare\")[1],handler:function(a){\"down\"==a?dataLayer.push({event:\"pd_scroll\",scrollComp:\"compare\",eventNonInteraction:!0}):0\u003Ccomp_arr.indexOf(\"compare\")\u0026\u0026(a=comp_arr[comp_arr.indexOf(\"compare\")-1],dataLayer.push({event:\"pd_scroll\",scrollComp:a,eventNonInteraction:!0}))}});\nif(document.getElementsByClassName(\"related-products\")[0])var related=new Waypoint({element:document.getElementsByClassName(\"related-products\")[0],handler:function(a){\"down\"==a?dataLayer.push({event:\"pd_scroll\",scrollComp:\"related\",eventNonInteraction:!0}):0\u003Ccomp_arr.indexOf(\"related\")\u0026\u0026(a=comp_arr[comp_arr.indexOf(\"related\")-1],dataLayer.push({event:\"pd_scroll\",scrollComp:a,eventNonInteraction:!0}))}});\n$(\"a\").on(\"click\",function(){void 0!=spec\u0026\u0026spec.disable();void 0!=review\u0026\u0026review.disable();void 0!=feature\u0026\u0026feature.disable();void 0!=support\u0026\u0026support.disable();void 0!=compare\u0026\u0026compare.disable();void 0!=related\u0026\u0026related.disable()});$(\"html, body\").on(\"mousewheel DOMMouseScroll\",function(a){void 0!=spec\u0026\u0026spec.enable();void 0!=review\u0026\u0026review.enable();void 0!=feature\u0026\u0026feature.enable();void 0!=support\u0026\u0026support.enable();void 0!=compare\u0026\u0026compare.enable();void 0!=related\u0026\u0026related.enable()});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":37
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"login_account\",accountVal:\"samsung account\",eventNonInteraction:!0});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":60
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{var gaProdName=",["escape",["macro",66],8,16],",gaProdSKU=",["escape",["macro",85],8,16],".toLowerCase();dataLayer.push({event:\"addToCart\",ecommerce:{currencyCode:\"KRW\",add:{products:[{name:gaProdSKU,id:gaProdSKU,dimension9:gaProdSKU.substring(0,8),quantity:1}]}}})}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":69
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{var dataOmni=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"|\"),gaProdSKU=dataOmni[0].toLowerCase();dataLayer.push({event:\"addToCart\",ecommerce:{currencyCode:\"KRW\",add:{products:[{name:gaProdSKU,id:gaProdSKU,dimension9:gaProdSKU.substring(0,8),quantity:1}]}}})}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{var gaProdSKU=digitalData.product.model_code?digitalData.product.model_code:digitalData.product.model_name;dataLayer.push({event:\"detail\",ecommerce:{detail:{products:[{name:gaProdSKU,id:gaProdSKU}]}}})}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":71
    }],
  "predicates":[{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"li.s-depth1-wrap a.s-btn-toggler,  li.s-depth1-wrap a.s-btn-link,  div.s-depth2-col a,  div.gb-gnb__drop-mobile-wrap a,  span.s-svg.s-ico-search,  .gb-gnb__utility \u003E li .s-btn-utility, div.s-col-imagepromo a img, a.s-btn-login, a.s-btn-utility.js-empty-cart, span.s-svg.s-ico-cart-empty, span.s-svg.s-ico-cart, span.s-svg.s-ico-login, ul.gb-gnb__my-layer a, div.gb-gnb__shop-layer a, span.s-svg.s-ico-logout, span.s-svg.s-ico-login"
    },{
      "function":"_eq",
      "arg0":["macro",95],
      "arg1":"gtm.click"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":".gb-footer__btn-top a, div.btn-to-top a, button.s-btn-gotop, div.f_backtotop a"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":".gb-footer__sns-list li a"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":".gb-footer__nav-link a,  .s-support-link li a"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":".gb-footer__list .gb-footer__item a"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":".gb-footer__link, .gb-footer__flag"
    },{
      "function":"_eq",
      "arg0":["macro",95],
      "arg1":"home_scroll"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.gb-gnb__search-history a, div.gb-gnb__search-history ul li a"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"a.gb-gnb__search-product-title strong,a.gb-gnb__search-product-title span img, div.gb-gnb__search-product-links a.s-btn, div.gb-gnb__search-suggest-list a"
    },{
      "function":"_eq",
      "arg0":["macro",95],
      "arg1":"search_result"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"button.ico_grid, button.ico_list, a.view-all, div.result-filter__option a.result-filter__option-all"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"result"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"li.category__option-lst input"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"check"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"button[onclick*=fmyChipchange], button[onclick*=fmyChipchange]\u003Espan"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"a.btn-arrow.btn-next.active\u003Espan, a.btn-arrow.btn-next.active, a.btn-arrow.btn-prev.active\u003Espan, a.btn-arrow.btn-prev.active, ul.result-pagination__pages li a"
    },{
      "function":"_eq",
      "arg0":["macro",95],
      "arg1":"search_sortby"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.result--banner a, div.result--banner a img"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"li.search-result--product a.product-img__link, li.search-result--product a.product-img__link img, li.search-result--product div.product-details__title, li.search-result--product div.product-details__title a, li.search-result--article a, div.product-links a[name=detailPageLink], li.search-result--video a, button.btn-ico-zoom, li.search-result--article a.product-img__link, li.search-result--article a.product-img__link img"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"result"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"li.search-result--product a.product-img__link, li.search-result--product a.product-img__link img, li.search-result--product div.product-details__title, li.search-result--article a, a.btn-find-online, div.product-links a[name=detailPageLink], li.search-result--video a, div.group-header a, div.result-filter__option a.result-filter__option-all, button.btn-ico-zoom"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"no result"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"button[onclick*=fmyChipchange], button[onclick*=fmyChipchange] span"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"ul.cm-breadcrumb__path a, ul.cm-breadcrumb__path a span"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"ul.s-layer-tab a.s-tab-link,  span.s-link a,  div.s-btn-location a,  a.product-anchor-nav__link,  a.product-anchor-nav-mo__link, a.product-anchor-nav-nonprice__link,  a.product-anchor-nav-nonprice-mo__link,  div.hp-header__btn-primary a[class=s-btn-encased],  a.js-cta-buy-etc, button.js-cta-buy-etc,  a.js-cta-buy, button.js-cta-buy,  a#anchorWhereToBuy, a#anchorWhereToBuy span,  a#anchorWhereToBuy.product-anchor-nav__link.js-cta-buy span, div.other-shops-button span.s-ico-location, div.other-shops-button span.product-details__cta-text, button.product-details__link span.product-details__cta-text, a[config-url*=buy], a[config-url*=buy] \u003E span"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.home-unpacked-teasing__cta a.s-btn-encased, div.hp-onetile-cluster__btn-wrap button.s-btn-cluster, div.hp-onetile-cluster__btn-wrap a.s-btn-cluster, .story-cluster\u003Ea, a.videoKVBtn, div.s-marketing-cta a.s-btn-encased, section.sec-home-three-column ul.slick-dots button, p.btns a, ul.home-shopping-keyword__tag-list .s-btn-tag, div.home-shopping-keyword__button .s-btn-encased, div.home-cover-story__cta .s-btn-encased, ul.home-life-gallery__list .home-life-gallery__cta, div.indicate-area a, div.ho-product-3column-group__img-wrap a, div.ho-product-3column-group__img-wrap button, a.videoKVBtn \u003E span, div.cm-g-static-content div.txt a, div.cm-g-static-content div.txt a \u003E span,  div.home-shopping-keyword__button \u003E a, .home-life-gallery__cta \u003E .js-img-src, div.ho-product-3column-group__ct-inner a, div.ho-product-3column-group__ct-inner button"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"home"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.feature-benefit__desc-wrap a.s-btn-encased,button.feature-benefit__btn-play, section.feature-benefit button.slick-arrow,section.feature-benefit ul.slick-dots button"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"product family showcase"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div:not([class*=recently]) \u003E ul.slick-dots li button, div:not([class*=recently]) \u003E button.slick-arrow, div.shop-header__btn \u003E a.s-btn-encased, .shop-header__ico-play, .video-group__btn-play, .pr-video-thumbnail-group__btn-play, div.pr-flagship-header__btn-wrap \u003E a.s-btn-encased, div.shop-header__btn \u003E button.s-btn-play-round,div.pr-video-thumbnail-group \u003E div \u003E ul.slick-dots \u003E li \u003E button"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"n"
    },{
      "function":"_eq",
      "arg0":["macro",80],
      "arg1":"y"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"a.secondary-menu__item-link span"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.feature-benefit__desc-wrap a"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"product category details"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.primary-selection__product-btn a, div.primary-selection__title a"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"product finder"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.filter-sort__sub-wrap a span, div.filter-sort__checkbox input, div.filter-sort__radio,  div.filter-sort__reset-button button, div.filter-sort__reset-button button span,  div.filter-sort__list\u003Ea.filter-sort__list-title, div.filter-sort__list\u003Ea.filter-sort__list-title span, div.filter-sort__filter-select-mo select, div.filter-sort__head\u003Ebutton.filter-sort__head-title, div.filter-sort__head\u003Ebutton.filter-sort__head-title span, div.filter-sort__results-button button, div.filter-sort__type\u003E*, div.filter-sort__sub-wrap a"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"unchecked"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"a.picker-option,  a.colorpicker-color, span.product-card__img-inner img, p.product-card__name"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"a.product-anchor-nav__item-link span,  a.product-anchor-nav-mo__item-link span,  a.product-anchor-nav-nonprice__item-link span,  a.product-anchor-nav-nonprice-mo__item-link span, a.product-anchor-nav__item-link,  a.product-anchor-nav-mo__item-link,  a.product-anchor-nav-nonprice__item-link,  a.product-anchor-nav-nonprice-mo__item-link"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"product detail"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.product-details__thumb-list a.product-details__link, button.product-details__thumb-arrow,  span.product-details__thumb-btn,  button.s-btn-zoom span,  div.s-btn-arrow button,  button.s-btn-up span,  button.s-btn-down span,  button.s-btn-left span, button.s-btn-right span,  .product-details__zoom-btn .s-btn-zoom"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.s-color-wrap span, ul.product-details__list li a"
    },{
      "function":"_eq",
      "arg0":["macro",95],
      "arg1":"pd_scroll"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"ul.product-details__share-ico a.product-details__link, ul.sc-page-title__share-list li a"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.product-support__faq-inner a.s-btn-text,div.product-support__resource-section-btn a, div.product-support__more a"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.product-specs__btn-wrap a.s-btn-text.show_btn, div.product-specs__btn-wrap a.s-btn-text.s-ico-up"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.product-specs__more-wrap a"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"ul.product-card__picker a, div.product-card__btn-wrap a, a.product-card__img-link img, div.product-card__prd-info a p,section.product-compare button.slick-arrow, ul.product-card__colorpicker a"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.recently-viewed__slide-wrap button.slick-next.slick-arrow,  div.recently-viewed__slide-wrap button.slick-prev.slick-arrow, div.recently-viewed__slide-wrap ul.slick-dots li button"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.recently-viewed__slide-wrap button, ul.slick-dots li button"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.recently-viewed__img-wrap img"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"a.related-products-img img, a.related-products-info__title, div.related-products-info a"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"button.s-btn-text.s-btn-text--pd"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.subnav-menus div.inside ul li a, a.order-button.buy, div.f_header-inner a, ul.nav.navbar-nav li a,   button.btn.btn-primary.hidden-xs, .f_header-type1 a, div.m_banner_header.buy a, .m_banner_article a.c_btn_pre-type2, div.nav-list ul li a"
    },{
      "function":"_cn",
      "arg0":["macro",98],
      "arg1":"smartphones\/galaxy-s8"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"product offer"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.s-tit-filter button.s-btn-filter,  button#filter,  div.s-filter-select-sub-wrap a span, div.s-img-wrap a img, div.s-info-wrap p a"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.s-btn-primary a,  ul.slick-dots button,  button.slick-next.slick-arrow,  button.slick-prev.slick-arrow"
    },{
      "function":"_re",
      "arg0":["macro",109],
      "arg1":"^.*\/support\/model\/.*$|^.*\/support\/app\/.*$|^.*\/support\/generic\/.*$"
    },{
      "function":"_sw",
      "arg0":["macro",7],
      "arg1":"vn:campaign:savina:"
    },{
      "function":"_eq",
      "arg0":["macro",95],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",95],
      "arg1":"login_account"
    },{
      "function":"_re",
      "arg0":["macro",109],
      "arg1":"^.*\/support\/.*$"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.control.prev a, div.control.next a, div.control.prev a span, div.control.next a span, div.control.prev a strong, div.control.next a strong, div.content a"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":".m_btn_type2-prev, .m_btn_type2-next, .m_btn_type2-prev span, .m_btn_type2-next span, .m_product-gallery ul li a img, .m_gallery-title a.s882, .m_gallery-title a#s881,  div.c_paging-type a,  div.color-chip a, button.c_btn_close-type1, a.zoom-area img, div.m_ly_thumnail img, div.m_gallery-title a"
    },{
      "function":"_eq",
      "arg0":["macro",95],
      "arg1":"addToCart"
    },{
      "function":"_eq",
      "arg0":["macro",95],
      "arg1":"detail"
    },{
      "function":"_eq",
      "arg0":["macro",95],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",95],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",115],
      "arg1":"(^$|((^|,)7322547_102($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"a.product-card-pdp-link img, a.cta-default, a.cta-default span, #getStockAlertSubmit, div.reevoomark_badge a.reviews, a.bv_main_container *, div.btn-view-more a, p.s-energy-label *, a.bv_main_container"
    },{
      "function":"_eq",
      "arg0":["macro",90],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"product search"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"product search"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"desktop"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"mobile"
    },{
      "function":"_eq",
      "arg0":["macro",95],
      "arg1":"login"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"a.product-anchor-nav-mo__link span, #anchorAddCart, div.product-details__info a.detailAddCart:not(.js-cta-stock):not([config-url*=buy]),div.product-details__info a.detailAddCart:not(.js-cta-stock):not([config-url*=buy])\u003Espan, p.product-anchor-nav__link-wrap a.detailAddCart:not([config-url*=buy]), a.detailAddCart:not([config-url*=buy])\u003Espan, div.pd-pop-content-cta button#viewCart, a.js-buy-now, a.js-buy-now span"
    },{
      "function":"_eq",
      "arg0":["macro",79],
      "arg1":"y"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^product detail$|^flagship pdp$"
    }],
  "rules":[
    [["if",0,1],["add",0]],
    [["if",1,2],["add",1]],
    [["if",1,3],["add",2]],
    [["if",1,4],["add",3]],
    [["if",1,5],["add",4]],
    [["if",1,6],["add",5]],
    [["if",7],["add",6]],
    [["if",1,8],["add",7]],
    [["if",1,9],["add",8]],
    [["if",10],["add",9]],
    [["if",1,11,12],["add",10]],
    [["if",1,12,13,14],["add",11]],
    [["if",1,12,15],["add",12]],
    [["if",1,12,16],["add",13]],
    [["if",17],["add",14]],
    [["if",1,12,18],["add",15]],
    [["if",1,19,20],["add",16]],
    [["if",1,21,22],["add",17]],
    [["if",1,22,23],["add",18]],
    [["if",1,24],["add",19]],
    [["if",1,25],["add",20]],
    [["if",1,26,27],["add",21]],
    [["if",1,28,29],["add",22]],
    [["if",1,30,31,32],["add",23]],
    [["if",1,29,33],["add",24]],
    [["if",1,34,35],["add",25]],
    [["if",1,35,36],["add",26]],
    [["if",1,37,38,39],["add",27]],
    [["if",1,37,40],["add",28]],
    [["if",1,41,42],["add",29]],
    [["if",1,42,43],["add",30]],
    [["if",1,42,44],["add",31]],
    [["if",45],["add",32]],
    [["if",1,46],["add",33]],
    [["if",1,42,47],["add",34]],
    [["if",1,42,48],["add",35]],
    [["if",1,42,49],["add",36]],
    [["if",1,42,50],["add",37]],
    [["if",1,37,51],["add",38]],
    [["if",1,42,52],["add",38]],
    [["if",1,42,53],["add",39]],
    [["if",1,37,53],["add",39]],
    [["if",1,42,54],["add",40]],
    [["if",1,42,55],["add",41]],
    [["if",1,56,57],["add",42]],
    [["if",1,58,59],["add",43]],
    [["if",1,58,60],["add",44]],
    [["if",1],["unless",31,61],["add",45]],
    [["if",1,61],["unless",31],["add",46]],
    [["if",63],["unless",61,62],["add",47]],
    [["if",61,63],["add",48]],
    [["if",64],["add",49]],
    [["if",63],["unless",65],["add",50]],
    [["if",1,57,66],["add",51]],
    [["if",1,57,67],["add",52]],
    [["if",68],["add",53]],
    [["if",69],["add",54]],
    [["if",70],["add",55,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109]],
    [["if",71,72],["add",56]],
    [["if",1,37,73,74],["add",57]],
    [["if",27,63],["add",110]],
    [["if",63,75],["add",111]],
    [["if",63,76],["add",112]],
    [["if",42,63,77],["add",113]],
    [["if",42,63,78],["add",114]],
    [["if",79],["add",115]],
    [["if",1,80],["add",116]],
    [["if",1,81],["add",117]],
    [["if",70,82],["add",118]]]
},
"runtime":[
[],[]
]};

var aa=this,fa=function(){if(null===ca){var a;a:{var b=aa.document,c=b.querySelector&&b.querySelector("script[nonce]");if(c){var d=c.nonce||c.getAttribute("nonce");if(d&&da.test(d)){a=d;break a}}a=null}ca=a||""}return ca},da=/^[\w+/_-]+[=]{0,2}$/,ca=null,ha=function(a,b){function c(){}c.prototype=b.prototype;a.cf=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ne=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,
d)}};var g=function(a,b){this.A=a;this.sd=b};g.prototype.Fd=function(){return this.A};g.prototype.getType=g.prototype.Fd;g.prototype.getData=function(){return this.sd};g.prototype.getData=g.prototype.getData;var ja=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ka=function(){this.ja={};this.Ba=!1};ka.prototype.get=function(a){return this.ja["dust."+a]};ka.prototype.set=function(a,b){!this.Ba&&(this.ja["dust."+a]=b)};ka.prototype.has=function(a){return this.ja.hasOwnProperty("dust."+a)};var la=function(a){var b=[],c;for(c in a.ja)a.ja.hasOwnProperty(c)&&b.push(c.substr(5));return b};
ka.prototype.remove=function(a){!this.Ba&&delete this.ja["dust."+a]};ka.prototype.L=function(){this.Ba=!0};var v=function(a){this.ma=new ka;this.h=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ja(b)?this.h[Number(b)]=a[Number(b)]:this.ma.set(b,a[b]))};v.prototype.toString=function(){for(var a=[],b=0;b<this.h.length;b++){var c=this.h[b];null===c||void 0===c?a.push(""):a.push(c.toString())}return a.join(",")};v.prototype.set=function(a,b){if("length"==a){if(!ja(b))throw"RangeError: Length property must be a valid integer.";this.h.length=Number(b)}else ja(a)?this.h[Number(a)]=b:this.ma.set(a,b)};
v.prototype.set=v.prototype.set;v.prototype.get=function(a){return"length"==a?this.length():ja(a)?this.h[Number(a)]:this.ma.get(a)};v.prototype.get=v.prototype.get;v.prototype.length=function(){return this.h.length};v.prototype.T=function(){for(var a=la(this.ma),b=0;b<this.h.length;b++)a.push(b+"");return new v(a)};v.prototype.getKeys=v.prototype.T;v.prototype.remove=function(a){ja(a)?delete this.h[Number(a)]:this.ma.remove(a)};v.prototype.remove=v.prototype.remove;v.prototype.pop=function(){return this.h.pop()};
v.prototype.pop=v.prototype.pop;v.prototype.push=function(a){return this.h.push.apply(this.h,Array.prototype.slice.call(arguments))};v.prototype.push=v.prototype.push;v.prototype.shift=function(){return this.h.shift()};v.prototype.shift=v.prototype.shift;v.prototype.splice=function(a,b,c){return new v(this.h.splice.apply(this.h,arguments))};v.prototype.splice=v.prototype.splice;v.prototype.unshift=function(a){return this.h.unshift.apply(this.h,Array.prototype.slice.call(arguments))};
v.prototype.unshift=v.prototype.unshift;v.prototype.has=function(a){return ja(a)&&this.h.hasOwnProperty(a)||this.ma.has(a)};var ma=function(){function a(a,b){c[a]=b}function b(){c={};e=!1}var c={},d={},e=!1,f={add:a,Vb:function(a,b,c){d[a]||(d[a]={});d[a][b]=c},create:function(d){var f={add:a,request:function(a,b){return e?!0:c[a]?c[a].apply(d,Array.prototype.slice.call(arguments,1)):!1},reset:b};f.add=f.add;f.request=f.request;f.reset=f.reset;return f},sc:function(a){return d[a]?(b(),c=d[a],!0):!1},reset:b,Dc:function(a){e=a}};f.add=f.add;f.addToCache=f.Vb;f.loadFromCache=f.sc;f.reset=f.reset;f.setPermitAllRequests=f.Dc;
return f};var na=function(){function a(a,c){if(b[a]){if(b[a].Oa+c>b[a].max)throw Error("Quota exceeded");b[a].Oa+=c}}var b={},c=void 0,d=void 0,e={be:function(a){c=a},Wb:function(){c&&a(c,1)},ce:function(a){d=a},X:function(b){d&&a(d,b)},xe:function(a,c){b[a]=b[a]||{Oa:0};b[a].max=c},Ed:function(a){return b[a]&&b[a].Oa||0},reset:function(){b={}},md:a};e.onFnConsume=e.be;e.consumeFn=e.Wb;e.onStorageConsume=e.ce;e.consumeStorage=e.X;e.setMax=e.xe;e.getConsumed=e.Ed;e.reset=e.reset;e.consume=e.md;return e};var oa=function(a,b,c){this.M=a;this.K=b;this.aa=c;this.h=new ka};oa.prototype.add=function(a,b){this.h.Ba||(this.M.X(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b))};oa.prototype.add=oa.prototype.add;oa.prototype.set=function(a,b){this.h.Ba||(this.aa&&this.aa.has(a)?this.aa.set(a,b):(this.M.X(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b)))};oa.prototype.set=oa.prototype.set;
oa.prototype.get=function(a){return this.h.has(a)?this.h.get(a):this.aa?this.aa.get(a):void 0};oa.prototype.get=oa.prototype.get;oa.prototype.has=function(a){return!!this.h.has(a)||!(!this.aa||!this.aa.has(a))};oa.prototype.has=oa.prototype.has;oa.prototype.J=function(){return this.M};oa.prototype.L=function(){this.h.L()};var pa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},qa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1};var w=function(a,b){ka.call(this);this.uc=a;this.Cd=b};ha(w,ka);var sa=function(a,b){for(var c,d=0;d<b.length&&!(c=ra(a,b[d]),c instanceof g);d++);return c},ra=function(a,b){var c=a.get(String(b[0]));if(!(c&&c instanceof w))throw"Attempting to execute non-function "+b[0]+".";return c.m.apply(c,[a].concat(b.slice(1)))};w.prototype.toString=function(){return this.uc};w.prototype.getName=function(){return this.uc};w.prototype.getName=w.prototype.getName;w.prototype.T=function(){return new v(la(this))};
w.prototype.getKeys=w.prototype.T;w.prototype.m=function(a,b){var c,d={C:function(){return a},evaluate:function(b){var c=a;return pa(b)?ra(c,b):b},xa:function(b){return sa(a,b)},J:function(){return a.J()},gc:function(){c||(c=a.K.create(d));return c}};a.J().Wb();return this.Cd.apply(d,Array.prototype.slice.call(arguments,1))};w.prototype.invoke=w.prototype.m;var ta=function(){ka.call(this)};ha(ta,ka);ta.prototype.T=function(){return new v(la(this))};ta.prototype.getKeys=ta.prototype.T;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var va=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,wa=function(a){if(null==a)return String(a);var b=va.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},xa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},ya=function(a){if(!a||"object"!=wa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!xa(a,"constructor")&&!xa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||xa(a,b)},za=function(a,b){var c=b||("array"==wa(a)?[]:{}),d;for(d in a)if(xa(a,d)){var e=a[d];"array"==wa(e)?("array"!=wa(c[d])&&(c[d]=[]),c[d]=za(e,c[d])):ya(e)?(ya(c[d])||(c[d]={}),c[d]=za(e,c[d])):c[d]=e}return c};var Aa=function(a){if(a instanceof v){for(var b=[],c=a.length(),d=0;d<c;d++)a.has(d)&&(b[d]=Aa(a.get(d)));return b}if(a instanceof ta){for(var e={},f=a.T(),h=f.length(),k=0;k<h;k++)e[f.get(k)]=Aa(a.get(f.get(k)));return e}return a instanceof w?function(){for(var b=Array.prototype.slice.call(arguments,0),c=0;c<b.length;c++)b[c]=Ba(b[c]);var d=new oa(na(),ma());return Aa(a.m.apply(a,[d].concat(b)))}:a},Ba=function(a){if(pa(a)){for(var b=[],c=0;c<a.length;c++)a.hasOwnProperty(c)&&(b[c]=Ba(a[c]));return new v(b)}if(ya(a)){var d=
new ta,e;for(e in a)a.hasOwnProperty(e)&&d.set(e,Ba(a[e]));return d}if("function"===typeof a)return new w("",function(b){for(var c=Array.prototype.slice.call(arguments,0),d=0;d<c.length;d++)c[d]=Aa(this.evaluate(c[d]));return Ba(a.apply(a,c))});var f=typeof a;if(null===a||"string"===f||"number"===f||"boolean"===f)return a};var Ca={control:function(a,b){return new g(a,this.evaluate(b))},fn:function(a,b,c){var d=this.C(),e=this.evaluate(b);if(!(e instanceof v))throw"Error: non-List value given for Fn argument names.";var f=Array.prototype.slice.call(arguments,2);this.J().X(a.length+f.length);return new w(a,function(){return function(a){for(var b=new oa(d.M,d.K,d),c=Array.prototype.slice.call(arguments,0),h=0;h<c.length;h++)if(c[h]=this.evaluate(c[h]),c[h]instanceof g)return c[h];for(var n=e.get("length"),p=0;p<n;p++)p<
c.length?b.set(e.get(p),c[p]):b.set(e.get(p),void 0);b.set("arguments",new v(c));var q=sa(b,f);if(q instanceof g)return"return"===q.A?q.getData():q}}())},list:function(a){var b=this.J();b.X(arguments.length);for(var c=new v,d=0;d<arguments.length;d++){var e=this.evaluate(arguments[d]);"string"===typeof e&&b.X(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.J(),c=new ta,d=0;d<arguments.length-1;d+=2){var e=this.evaluate(arguments[d])+"",f=this.evaluate(arguments[d+1]),h=e.length;
h+="string"===typeof f?f.length:1;b.X(h);c.set(e,f)}return c},undefined:function(){}};var x=function(){this.M=na();this.K=ma();this.za=new oa(this.M,this.K)};x.prototype.V=function(a,b){var c=new w(a,b);c.L();this.za.set(a,c)};x.prototype.addInstruction=x.prototype.V;x.prototype.Ub=function(a,b){Ca.hasOwnProperty(a)&&this.V(b||a,Ca[a])};x.prototype.addNativeInstruction=x.prototype.Ub;x.prototype.J=function(){return this.M};x.prototype.getQuota=x.prototype.J;x.prototype.Ua=function(){this.M=na();this.za.M=this.M};x.prototype.resetQuota=x.prototype.Ua;
x.prototype.ue=function(){this.K=ma();this.za.K=this.K};x.prototype.resetPermissions=x.prototype.ue;x.prototype.R=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.xb(c)};x.prototype.execute=x.prototype.R;x.prototype.xb=function(a){for(var b,c=0;c<arguments.length;c++){var d=ra(this.za,arguments[c]);b=d instanceof g||d instanceof w||d instanceof v||d instanceof ta||null===d||void 0===d||"string"===typeof d||"number"===typeof d||"boolean"===typeof d?d:void 0}return b};
x.prototype.run=x.prototype.xb;x.prototype.L=function(){this.za.L()};x.prototype.makeImmutable=x.prototype.L;var Da=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var Ea={Be:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(d=1;d<arguments.length;d++)if(arguments[d]instanceof v)for(var e=arguments[d],f=0;f<e.length();f++)c.push(e.get(f));else c.push(arguments[d]);return new v(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&
!b.m(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.m(a,this.get(e),e,this)&&d.push(this.get(e));return new v(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.m(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&this.get(f)===
b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.m(a,this.get(e),e,this));return new v(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,Array.prototype.slice.call(arguments,
1))},reduce:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=0;else{if(0==d)throw"TypeError: Reduce on List with no elements.";for(var h=0;h<d;h++)if(this.has(h)){e=this.get(h);f=h+1;break}if(h==d)throw"TypeError: Reduce on List with no elements.";}for(h=f;h<d;h++)this.has(h)&&(e=b.m(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=d-1;else{if(0==d)throw"TypeError: ReduceRight on List with no elements.";for(var h=1;h<=d;h++)if(this.has(d-
h)){e=this.get(d-h);f=d-(h+1);break}if(h>d)throw"TypeError: ReduceRight on List with no elements.";}for(h=f;0<=h;h--)this.has(h)&&(e=b.m(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Da(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):this.remove(c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?Math.max(d+c,0):Math.min(c,d);c=Math.max(b,
c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new v(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.m(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Da(this);void 0===b?c.sort():c.sort(function(c,d){return Number(b.m(a,c,d))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):this.remove(d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,1,arguments.length-1))},toString:function(){return this.toString()},
unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var y={jc:{ADD:0,AND:1,APPLY:2,ASSIGN:3,BREAK:4,CASE:5,CONTINUE:6,CONTROL:49,CREATE_ARRAY:7,CREATE_OBJECT:8,DEFAULT:9,DEFN:50,DIVIDE:10,DO:11,EQUALS:12,EXPRESSION_LIST:13,FN:51,FOR:14,FOR_IN:47,GET:15,GET_CONTAINER_VARIABLE:48,GET_INDEX:16,GET_PROPERTY:17,GREATER_THAN:18,GREATER_THAN_EQUALS:19,IDENTITY_EQUALS:20,IDENTITY_NOT_EQUALS:21,IF:22,LESS_THAN:23,LESS_THAN_EQUALS:24,MODULUS:25,MULTIPLY:26,NEGATE:27,NOT:28,NOT_EQUALS:29,NULL:45,OR:30,PLUS_EQUALS:31,POST_DECREMENT:32,POST_INCREMENT:33,PRE_DECREMENT:34,
PRE_INCREMENT:35,QUOTE:46,RETURN:36,SET_PROPERTY:43,SUBTRACT:37,SWITCH:38,TERNARY:39,TYPEOF:40,UNDEFINED:44,VAR:41,WHILE:42}},Fa="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Ga=new g("break"),Ha=new g("continue");y.add=function(a,b){return this.evaluate(a)+this.evaluate(b)};y.and=function(a,b){return this.evaluate(a)&&this.evaluate(b)};
y.apply=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!(c instanceof v))throw"Error: Non-List argument given to Apply instruction.";if(null===a||void 0===a)throw"TypeError: Can't read property "+b+" of "+a+".";if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw"TypeError: "+a+"."+b+" is not a function.";}if("string"==typeof a){if(0<=qa(Fa,b))return Ba(a[b].apply(a,Da(c)));throw"TypeError: "+b+" is not a function";}if(a instanceof v){if(a.has(b)){var d=
a.get(b);if(d instanceof w){var e=Da(c);e.unshift(this.C());return d.m.apply(d,e)}throw"TypeError: "+b+" is not a function";}if(0<=qa(Ea.Be,b))return e=Da(c),e.unshift(this.C()),Ea[b].apply(a,e)}if(a instanceof w||a instanceof ta){if(a.has(b)){d=a.get(b);if(d instanceof w)return e=Da(c),e.unshift(this.C()),d.m.apply(d,e);throw"TypeError: "+b+" is not a function";}if("toString"==b)return a instanceof w?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,Da(c))}throw"TypeError: Object has no '"+
b+"' property.";};y.assign=function(a,b){a=this.evaluate(a);if("string"!=typeof a)throw"Invalid key name given for assignment.";var c=this.C();if(!c.has(a))throw"Attempting to assign to undefined value "+b;var d=this.evaluate(b);c.set(a,d);return d};y["break"]=function(){return Ga};y["case"]=function(a){for(var b=this.evaluate(a),c=0;c<b.length;c++){var d=this.evaluate(b[c]);if(d instanceof g)return d}};y["continue"]=function(){return Ha};
y.td=function(a,b,c){var d=new v;b=this.evaluate(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[y.jc.FN,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.C().set(a,this.evaluate(f))};y.wd=function(a,b){return this.evaluate(a)/this.evaluate(b)};y.zd=function(a,b){return this.evaluate(a)==this.evaluate(b)};y.Ad=function(a){for(var b,c=0;c<arguments.length;c++)b=this.evaluate(arguments[c]);return b};
y.Dd=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.C();if("string"==typeof b)for(var e=0;e<b.length;e++){d.set(a,e);var f=this.xa(c);if(f instanceof g){if("break"==f.A)break;if("return"==f.A)return f}}else if(b instanceof ta||b instanceof v||b instanceof w){var h=b.T(),k=h.length();for(e=0;e<k;e++)if(d.set(a,h.get(e)),f=this.xa(c),f instanceof g){if("break"==f.A)break;if("return"==f.A)return f}}};y.get=function(a){return this.C().get(this.evaluate(a))};
y.hc=function(a,b){var c;a=this.evaluate(a);b=this.evaluate(b);if(void 0===a||null===a)throw"TypeError: cannot access property of "+a+".";a instanceof ta||a instanceof v||a instanceof w?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:ja(b)&&(c=a[b]));return c};y.Gd=function(a,b){return this.evaluate(a)>this.evaluate(b)};y.Hd=function(a,b){return this.evaluate(a)>=this.evaluate(b)};y.Ld=function(a,b){return this.evaluate(a)===this.evaluate(b)};y.Md=function(a,b){return this.evaluate(a)!==this.evaluate(b)};
y["if"]=function(a,b,c){var d=[];this.evaluate(a)?d=this.evaluate(b):c&&(d=this.evaluate(c));var e=this.xa(d);if(e instanceof g)return e};y.Ud=function(a,b){return this.evaluate(a)<this.evaluate(b)};y.Vd=function(a,b){return this.evaluate(a)<=this.evaluate(b)};y.Xd=function(a,b){return this.evaluate(a)%this.evaluate(b)};y.multiply=function(a,b){return this.evaluate(a)*this.evaluate(b)};y.Yd=function(a){return-this.evaluate(a)};y.Zd=function(a){return!this.evaluate(a)};
y.$d=function(a,b){return this.evaluate(a)!=this.evaluate(b)};y["null"]=function(){return null};y.or=function(a,b){return this.evaluate(a)||this.evaluate(b)};y.zc=function(a,b){var c=this.evaluate(a);this.evaluate(b);return c};y.Ac=function(a){return this.evaluate(a)};y.quote=function(a){return Array.prototype.slice.apply(arguments)};y["return"]=function(a){return new g("return",this.evaluate(a))};
y.setProperty=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(null===a||void 0===a)throw"TypeError: Can't set property "+b+" of "+a+".";(a instanceof w||a instanceof v||a instanceof ta)&&a.set(b,c);return c};y.Ae=function(a,b){return this.evaluate(a)-this.evaluate(b)};
y["switch"]=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!pa(b)||!pa(c))throw"Error: Malformed switch instruction.";for(var d,e=!1,f=0;f<b.length;f++)if(e||a===this.evaluate(b[f]))if(d=this.evaluate(c[f]),d instanceof g){var h=d.A;if("break"==h)return;if("return"==h||"continue"==h)return d}else e=!0;if(c.length==b.length+1&&(d=this.evaluate(c[c.length-1]),d instanceof g&&("return"==d.A||"continue"==d.A)))return d};
y.Ce=function(a,b,c){return this.evaluate(a)?this.evaluate(b):this.evaluate(c)};y["typeof"]=function(a){a=this.evaluate(a);return a instanceof w?"function":typeof a};y.undefined=function(){};y["var"]=function(a){for(var b=this.C(),c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}};
y["while"]=function(a,b,c,d){var e,f=this.evaluate(d);if(this.evaluate(c)&&(e=this.xa(f),e instanceof g)){if("break"==e.A)return;if("return"==e.A)return e}for(;this.evaluate(a);){e=this.xa(f);if(e instanceof g){if("break"==e.A)break;if("return"==e.A)return e}this.evaluate(b)}};var Ka=function(){this.ic=!1;this.H=new x;Ia(this);this.ic=!0};Ka.prototype.Rd=function(){return this.ic};Ka.prototype.isInitialized=Ka.prototype.Rd;Ka.prototype.R=function(a){this.H.K.sc(String(a[0]))||(this.H.K.reset(),this.H.K.Dc(!0));return this.H.xb(a)};Ka.prototype.execute=Ka.prototype.R;Ka.prototype.L=function(){this.H.L()};Ka.prototype.makeImmutable=Ka.prototype.L;
var Ia=function(a){function b(a,b){e.H.Ub(a,String(b))}function c(a,b){e.H.V(String(d[a]),b)}var d=y.jc,e=a;b("control",d.CONTROL);b("fn",d.FN);b("list",d.CREATE_ARRAY);b("map",d.CREATE_OBJECT);b("undefined",d.UNDEFINED);c("ADD",y.add);c("AND",y.and);c("APPLY",y.apply);c("ASSIGN",y.assign);c("BREAK",y["break"]);c("CASE",y["case"]);c("CONTINUE",y["continue"]);c("DEFAULT",y["case"]);c("DEFN",y.td);c("DIVIDE",y.wd);c("EQUALS",y.zd);c("EXPRESSION_LIST",y.Ad);c("FOR_IN",y.Dd);c("GET",y.get);c("GET_INDEX",
y.hc);c("GET_PROPERTY",y.hc);c("GREATER_THAN",y.Gd);c("GREATER_THAN_EQUALS",y.Hd);c("IDENTITY_EQUALS",y.Ld);c("IDENTITY_NOT_EQUALS",y.Md);c("IF",y["if"]);c("LESS_THAN",y.Ud);c("LESS_THAN_EQUALS",y.Vd);c("MODULUS",y.Xd);c("MULTIPLY",y.multiply);c("NEGATE",y.Yd);c("NOT",y.Zd);c("NOT_EQUALS",y.$d);c("NULL",y["null"]);c("OR",y.or);c("POST_DECREMENT",y.zc);c("POST_INCREMENT",y.zc);c("PRE_DECREMENT",y.Ac);c("PRE_INCREMENT",y.Ac);c("QUOTE",y.quote);c("RETURN",y["return"]);c("SET_PROPERTY",y.setProperty);
c("SUBTRACT",y.Ae);c("SWITCH",y["switch"]);c("TERNARY",y.Ce);c("TYPEOF",y["typeof"]);c("VAR",y["var"]);c("WHILE",y["while"])};Ka.prototype.V=function(a,b){this.H.V(a,b)};Ka.prototype.addInstruction=Ka.prototype.V;Ka.prototype.J=function(){return this.H.J()};Ka.prototype.getQuota=Ka.prototype.J;Ka.prototype.Ua=function(){this.H.Ua()};Ka.prototype.resetQuota=Ka.prototype.Ua;Ka.prototype.eb=function(a,b,c){this.H.K.Vb(a,b,c)};var La=function(){this.Ra={}};La.prototype.get=function(a){return this.Ra.hasOwnProperty(a)?this.Ra[a]:void 0};La.prototype.add=function(a,b){if(this.Ra.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";var c=new w(a,function(){for(var a=Array.prototype.slice.call(arguments,0),c=0;c<a.length;c++)a[c]=this.evaluate(a[c]);return b.apply(this,a)});c.L();this.Ra[a]=c};La.prototype.addAll=function(a){for(var b in a)a.hasOwnProperty(b)&&this.add(b,a[b])};var A=window,B=document,Ma=navigator,Na=function(a,b){var c=A[a];A[a]=void 0===c?b:c;return A[a]},Oa=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},D=function(a,b,c){var d=B.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Oa(d,b);c&&(d.onerror=c);fa()&&d.setAttribute("nonce",fa());var e=B.getElementsByTagName("script")[0]||B.body||B.head;e.parentNode.insertBefore(d,e);return d},
Pa=function(a,b){var c=B.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=B.body&&B.body.lastChild||B.body||B.head;d.parentNode.insertBefore(c,d);Oa(c,b);void 0!==a&&(c.src=a);return c},Qa=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a},Ra=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Sa=function(a,b,
c,d){a.removeEventListener?a.removeEventListener(b,c,!!d):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){A.setTimeout(a,0)},Ua=function(a){var b=B.getElementById(a);if(b&&Ta(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(Ta(document.all[a][c],"id")==a)return document.all[a][c];return b},Ta=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Va=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=
b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Wa=function(a){var b=B.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Xa=function(a){Ma.sendBeacon&&Ma.sendBeacon(a)||Qa(a)};var Ya=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Za=/:[0-9]+$/,$a=function(a,b){for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].split("=");if(decodeURIComponent(e[0]).replace(/\+/g," ")==b)return decodeURIComponent(e.slice(1).join("=")).replace(/\+/g," ")}},ab=function(a,b,c,d,e){var f,h=function(a){return a?a.replace(":","").toLowerCase():""},k=h(a.protocol)||h(A.location.protocol);b&&(b=String(b).toLowerCase());switch(b){case "protocol":f=k;break;case "host":f=(a.hostname||A.location.hostname).replace(Za,"").toLowerCase();if(c){var l=
/^www\d*\./.exec(f);l&&l[0]&&(f=f.substr(l[0].length))}break;case "port":f=String(Number(a.hostname?a.port:A.location.port)||("http"==k?80:"https"==k?443:""));break;case "path":f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=f.split("/");0<=qa(d||[],m[m.length-1])&&(m[m.length-1]="");f=m.join("/");break;case "query":f=a.search.replace("?","");e&&(f=$a(f,e));break;case "extension":var n=a.pathname.split(".");f=1<n.length?n[n.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#",
"");break;default:f=a&&a.href}return f},bb=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},M=function(a){var b=document.createElement("a");a&&(Ya.test(a),b.href=a);var c=b.pathname;"/"!==c[0]&&(c="/"+c);var d=b.hostname.replace(Za,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var eb=function(){this.sb=new Ka;var a=new La;a.addAll(cb());db(this,function(b){return a.get(b)})},cb=function(){return{callInWindow:fb,encodeURI:encodeURI,encodeURIComponent:encodeURIComponent,getCurrentUrl:gb,getInWindow:jb,getReferrer:kb,getUrlComponent:lb,getUrlFragment:mb,isPlainObject:nb,loadIframe:ob,loadJavaScript:pb,removeUrlFragment:qb,replaceAll:sb,sendTrackingBeacon:tb,setInWindow:ub,queryPermission:vb}};eb.prototype.R=function(a){return this.sb.R(a)};eb.prototype.execute=eb.prototype.R;
var db=function(a,b){a.sb.V("require",b)};eb.prototype.eb=function(a,b,c){this.sb.eb(a,b,c)};function fb(a,b){for(var c=a.split("."),d=A,e=d[c[0]],f=1;e&&f<c.length;f++)d=e,e=e[c[f]];if("function"==wa(e)){var h=[];for(f=1;f<arguments.length;f++)h.push(Aa(arguments[f]));e.apply(d,h)}}function gb(){return A.location.href}function jb(a,b,c){for(var d=a.split("."),e=A,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e||null===e)return;b&&(void 0===e[d[f]]||c&&!e[d[f]])&&(e[d[f]]=Aa(b));return Ba(e[d[f]])}
function kb(){return B.referrer}function lb(a,b,c,d,e){var f;if(d&&d instanceof v){f=[];for(var h=0;h<d.length();h++){var k=d.get(h);"string"==typeof k&&f.push(k)}}return ab(M(a),b,c,f,e)}function mb(a){return ab(M(a),"fragment")}function nb(a){return a instanceof ta}function ob(a,b){var c=this.C();Pa(a,function(){b instanceof w&&b.m(c)})}var wb={};
function pb(a,b,c,d){if(this.gc().request("loadJavaScript",a)){var e=this.C(),f=function(){b instanceof w&&b.m(e)},h=function(){c instanceof w&&c.m(e)};d?wb[d]?(wb[d].onSuccess.push(f),wb[d].onFailure.push(h)):(wb[d]={onSuccess:[f],onFailure:[h]},f=function(){for(var a=wb[d].onSuccess,b=0;b<a.length;b++)G(a[b]);a.push=function(a){G(a);return 0}},h=function(){for(var a=wb[d].onFailure,b=0;b<a.length;b++)G(a[b]);wb[d]=null},D(a,f,h)):D(a,f,h)}}function qb(a){return bb(M(a))}
function sb(a,b,c){return a.replace(new RegExp(b,"g"),c)}function tb(a,b,c){var d=this.C();Qa(a,function(){b instanceof w&&b.m(d)},function(){c instanceof w&&c.m(d)})}function ub(a,b,c){for(var d=a.split("."),e=A,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;return void 0===e[d[f]]||c?(e[d[f]]=Aa(b),!0):!1}function xb(){return function(){return!0}}function yb(a){var b=a.url;return function(a){return b===a}}
function vb(a,b){return this.gc().request.apply(null,Array.prototype.slice.call(arguments,0))};
var zb=[],Ab={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Bb=function(a){return Ab[a]},Cb=/[\x00\x22\x26\x27\x3c\x3e]/g;var Gb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Hb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Lb=function(a){return Hb[a]};
zb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Gb,Lb)+"'"}};var Tb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Ub={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Vb=function(a){return Ub[a]};zb[16]=function(a){return a};var Xb,Yb=[],Zb=[],$b=[],ac=[],bc=[],cc={},dc,ec,fc,hc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=!!cc[b],d={},e;for(e in a)a.hasOwnProperty(e)&&0===e.indexOf("vtp_")&&(d[c?e:e.substr(4)]=a[e]);return c?cc[b](d):Xb(b,d)},jc=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=ic(a[e],b,c));return d},ic=function(a,b,c){if(pa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(ic(a[e],
b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=Yb[f];if(!h||b(h))return;c[f]=!0;try{var k=jc(h,b,c);d=hc(k);fc&&(d=fc.od(d,k))}catch(t){d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[ic(a[l],b,c)]=ic(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=ic(a[n],b,c);ec&&(m=m||p===ec.Ia);d.push(p)}return ec&&m?ec.pd(d):d.join("");case "escape":d=ic(a[1],b,c);if(ec&&pa(a[1])&&"macro"===a[1][0]&&ec.Sd(a))return ec.he(d);d=String(d);for(var q=
2;q<a.length;q++)zb[a[q]]&&(d=zb[a[q]](d));return d;case "tag":var r=a[1];if(!ac[r])throw Error("Unable to resolve tag reference "+r+".");return d={ac:a[2],index:r};case "zb":var u=kc({"function":a[1],arg0:a[2],arg1:a[3],ignore_case:a[5]},b,c);a[4]&&(u=!u);return u;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},kc=function(a,b,c){try{return dc(jc(a,b,c))}catch(d){JSON.stringify(a)}return null};var lc=null,oc=function(a){function b(a){for(var b=0;b<a.length;b++)d[a[b]]=!0}var c=[],d=[];lc=mc(a);for(var e=0;e<Zb.length;e++){var f=Zb[e],h=nc(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}var m=[];for(e=0;e<ac.length;e++)c[e]&&!d[e]&&(m[e]=!0);return m},nc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=lc(b[c]);if(!d)return null===d?null:!1}var e=a.unless||[];for(c=0;c<e.length;c++){d=lc(e[c]);if(null===d)return null;if(d)return!1}return!0};
var mc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=kc($b[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var pc,qc=function(){};(function(){function a(a,h){a=a||"";h=h||{};for(var k in b)b.hasOwnProperty(k)&&(h.Xc&&(h["fix_"+k]=!0),h.bc=h.bc||h["fix_"+k]);var l={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var b=a.indexOf("--\x3e");if(0<=b)return{content:a.substr(4,b),length:b+3}},endTag:function(){var b=a.match(d);if(b)return{tagName:b[1],length:b[0].length}},atomicTag:function(){var b=p.startTag();
if(b){var c=a.slice(b.length);if(c.match(new RegExp("</\\s*"+b.tagName+"\\s*>","i"))){var d=c.match(new RegExp("([\\s\\S]*?)</\\s*"+b.tagName+"\\s*>","i"));if(d)return{tagName:b.tagName,B:b.B,content:d[1],length:d[0].length+b.length}}}},startTag:function(){var b=a.match(c);if(b){var d={};b[2].replace(e,function(a,b,c,e,h){var k=c||e||h||f.test(b)&&b||null,l=document.createElement("div");l.innerHTML=k;d[b]=l.textContent||l.innerText||k});return{tagName:b[1],B:d,Ga:!!b[3],length:b[0].length}}},chars:function(){var b=
a.indexOf("<");return{length:0<=b?b:a.length}}},q=function(){for(var b in l)if(l[b].test(a)){var c=p[b]();return c?(c.type=c.type||b,c.text=a.substr(0,c.length),a=a.slice(c.length),c):null}};h.bc&&function(){var b=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,c=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,d=[];d.oc=function(){return this[this.length-1]};d.ob=function(a){var b=this.oc();return b&&b.tagName&&b.tagName.toUpperCase()===a.toUpperCase()};d.nd=
function(a){for(var b=0,c;c=this[b];b++)if(c.tagName===a)return!0;return!1};var e=function(a){a&&"startTag"===a.type&&(a.Ga=b.test(a.tagName)||a.Ga);return a},f=q,k=function(){a="</"+d.pop().tagName+">"+a},l={startTag:function(b){var e=b.tagName;"TR"===e.toUpperCase()&&d.ob("TABLE")?(a="<TBODY>"+a,m()):h.Se&&c.test(e)&&d.nd(e)?d.ob(e)?k():(a="</"+b.tagName+">"+a,m()):b.Ga||d.push(b)},endTag:function(a){d.oc()?h.Bd&&!d.ob(a.tagName)?k():d.pop():h.Bd&&(f(),m())}},m=function(){var b=a,c=e(f());a=b;if(c&&
l[c.type])l[c.type](c)};q=function(){m();return e(f())}}();return{append:function(b){a+=b},ne:q,Ye:function(a){for(var b;(b=q())&&(!a[b.type]||!1!==a[b.type](b)););},clear:function(){var b=a;a="";return b},Ze:function(){return a},stack:[]}}var b=function(){var a={},b=this.document.createElement("div");b.innerHTML="<P><I></P></I>";a.df="<P><I></P></I>"!==b.innerHTML;b.innerHTML="<P><i><P></P></i></P>";a.af=2===b.childNodes.length;return a}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.ef=function(a){var b={comment:function(a){return"<--"+a.content+"--\x3e"},endTag:function(a){return"</"+a.tagName+">"},atomicTag:function(a){return b.startTag(a)+a.content+b.endTag(a)},startTag:function(a){var b="<"+a.tagName,c;for(c in a.B){var d=a.B[c];
b+=" "+c+'="'+(d?d.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return b+(a.Ga?"/>":">")},chars:function(a){return a.text}};return b[a.type](a)};a.Re=function(a){var b={},c;for(c in a){var d=a[c];b[c]=d&&d.replace(/(^|[^\\])"/g,'$1\\"')}return b};for(var h in b)a.bd=a.bd||!b[h]&&h;pc=a})();(function(){function a(){}function b(a){return void 0!==a&&null!==a}function c(a,b,c){var d,e=a&&a.length||0;for(d=0;d<e;d++)b.call(c,a[d],d)}function d(a,b,c){for(var d in a)a.hasOwnProperty(d)&&b.call(c,d,a[d])}function e(a,
b){d(b,function(b,c){a[b]=c});return a}function f(a,c){a=a||{};d(c,function(c,d){b(a[c])||(a[c]=d)});return a}function h(a){try{return m.call(a)}catch(r){var b=[];c(a,function(a){b.push(a)});return b}}var k={Pc:a,Qc:a,Rc:a,Sc:a,Yc:a,Zc:function(a){return a},done:a,error:function(a){throw a;},se:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function a(a,c,d){var e="data-ps-"+c;if(2===arguments.length){var f=a.getAttribute(e);return b(f)?String(f):f}b(d)&&""!==d?a.setAttribute(e,
d):a.removeAttribute(e)}function f(b,c){var d=b.ownerDocument;e(this,{root:b,options:c,Ha:d.defaultView||d.parentWindow,ha:d,Ta:pc("",{Xc:!0}),cb:[b],vb:"",wb:d.createElement(b.nodeName),Ea:[],da:[]});a(this.wb,"proxyof",0)}f.prototype.write=function(){[].push.apply(this.da,arguments);for(var a;!this.Pa&&this.da.length;)a=this.da.shift(),"function"===typeof a?this.fd(a):this.Gb(a)};f.prototype.fd=function(a){var b={type:"function",value:a.name||a.toString()};this.rb(b);a.call(this.Ha,this.ha);this.wc(b)};
f.prototype.Gb=function(a){this.Ta.append(a);for(var b,c=[],d,e;(b=this.Ta.ne())&&!(d=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("script"):!1)&&!(e=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("style"):!1);)c.push(b);this.He(c);d&&this.Id(b);e&&this.Jd(b)};f.prototype.He=function(a){var b=this.cd(a);b.Tb&&(b.kb=this.vb+b.Tb,this.vb+=b.me,this.wb.innerHTML=b.kb,this.Fe())};f.prototype.cd=function(a){var b=this.cb.length,d=[],e=[],f=[];c(a,function(a){d.push(a.text);if(a.B){if(!/^noscript$/i.test(a.tagName)){var c=
b++;e.push(a.text.replace(/(\/?>)/," data-ps-id="+c+" $1"));"ps-script"!==a.B.id&&"ps-style"!==a.B.id&&f.push("atomicTag"===a.type?"":"<"+a.tagName+" data-ps-proxyof="+c+(a.Ga?" />":">"))}}else e.push(a.text),f.push("endTag"===a.type?a.text:"")});return{ff:a,raw:d.join(""),Tb:e.join(""),me:f.join("")}};f.prototype.Fe=function(){for(var c,d=[this.wb];b(c=d.shift());){var e=1===c.nodeType;if(!e||!a(c,"proxyof")){e&&(this.cb[a(c,"id")]=c,a(c,"id",null));var f=c.parentNode&&a(c.parentNode,"proxyof");
f&&this.cb[f].appendChild(c)}d.unshift.apply(d,h(c.childNodes))}};f.prototype.Id=function(a){var b=this.Ta.clear();b&&this.da.unshift(b);a.src=a.B.src||a.B.Ke;a.src&&this.Ea.length?this.Pa=a:this.rb(a);var c=this;this.Ge(a,function(){c.wc(a)})};f.prototype.Jd=function(a){var b=this.Ta.clear();b&&this.da.unshift(b);a.type=a.B.type||a.B.Le||"text/css";this.Ie(a);b&&this.write()};f.prototype.Ie=function(a){var b=this.ed(a);this.Qd(b);a.content&&(b.styleSheet&&!b.sheet?b.styleSheet.cssText=a.content:
b.appendChild(this.ha.createTextNode(a.content)))};f.prototype.ed=function(a){var b=this.ha.createElement(a.tagName);b.setAttribute("type",a.type);d(a.B,function(a,c){b.setAttribute(a,c)});return b};f.prototype.Qd=function(a){this.Gb('<span id="ps-style"/>');var b=this.ha.getElementById("ps-style");b.parentNode.replaceChild(a,b)};f.prototype.rb=function(a){a.de=this.da;this.da=[];this.Ea.unshift(a)};f.prototype.wc=function(a){a!==this.Ea[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Ea.shift(),this.write.apply(this,a.de),!this.Ea.length&&this.Pa&&(this.rb(this.Pa),this.Pa=null))};f.prototype.Ge=function(a,b){var c=this.dd(a),d=this.ye(c),e=this.options.Pc;a.src&&(c.src=a.src,this.we(c,d?e:function(){b();e()}));try{this.Pd(c),a.src&&!d||b()}catch(E){this.options.error(E),b()}};f.prototype.dd=function(a){var b=this.ha.createElement(a.tagName);d(a.B,function(a,c){b.setAttribute(a,c)});a.content&&(b.text=a.content);return b};f.prototype.Pd=function(a){this.Gb('<span id="ps-script"/>');
var b=this.ha.getElementById("ps-script");b.parentNode.replaceChild(a,b)};f.prototype.we=function(a,b){function c(){a=a.onload=a.onreadystatechange=a.onerror=null}var d=this.options.error;e(a,{onload:function(){c();b()},onreadystatechange:function(){/^(loaded|complete)$/.test(a.readyState)&&(c(),b())},onerror:function(){var e={message:"remote script failed "+a.src};c();d(e);b()}})};f.prototype.ye=function(a){return!/^script$/i.test(a.nodeName)||!!(this.options.se&&a.src&&a.hasAttribute("async"))};
return f}();l.postscribe=function(){function b(){var a=m.shift(),b;a&&(b=a[a.length-1],b.Qc(),a.stream=c.apply(null,a),b.Rc())}function c(c,f,k){function l(a){a=k.Zc(a);t.write(a);k.Sc(a)}t=new n(c,k);t.id=d++;t.name=k.name||t.id;var m=c.ownerDocument,p={close:m.close,open:m.open,write:m.write,writeln:m.writeln};e(m,{close:a,open:a,write:function(){return l(h(arguments).join(""))},writeln:function(){return l(h(arguments).join("")+"\n")}});var q=t.Ha.onerror||a;t.Ha.onerror=function(a,b,c){k.error({Ve:a+
" - "+b+":"+c});q.apply(t.Ha,arguments)};t.write(f,function(){e(m,p);t.Ha.onerror=q;k.done();t=null;b()});return t}var d=0,m=[],t=null;return e(function(c,d,e){"function"===typeof e&&(e={done:e});e=f(e,k);c=/^#/.test(c)?l.document.getElementById(c.substr(1)):c.Te?c[0]:c;var h=[c,d,e];c.fe={cancel:function(){h.stream?h.stream.abort():h[1]=a}};e.Yc(h);m.push(h);t||b();return c.fe},{streams:{},Xe:m,Me:n})}();qc=l.postscribe}})();var rc={},sc=null;rc.o="GTM-N2ZVVQC";var tc=null,uc="//www.googletagmanager.com/a?id="+rc.o+"&cv=24",vc={},wc={},xc=B.currentScript?B.currentScript.src:void 0;var yc=function(){},zc=function(a){return"function"==typeof a},Ac=function(a){return"string"==wa(a)},Bc=function(a){return"number"==wa(a)&&!isNaN(a)},Cc=function(a){return Math.round(Number(a))||0},Dc=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ec=function(a){var b=[];if(pa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Fc=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Gc=function(a,b){if(!Bc(a)||!Bc(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+
a)},Hc=function(){this.prefix="gtm.";this.values={}};Hc.prototype.set=function(a,b){this.values[this.prefix+a]=b};Hc.prototype.get=function(a){return this.values[this.prefix+a]};Hc.prototype.contains=function(a){return void 0!==this.get(a)};var Ic=function(){var a=sc.sequence||0;sc.sequence=a+1;return a},Jc=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Kc=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}};var O=function(){var a=function(a){return{toString:function(){return a}}};return{Jb:a("convert_case_to"),Kb:a("convert_false_to"),Lb:a("convert_null_to"),Mb:a("convert_true_to"),Nb:a("convert_undefined_to"),N:a("function"),Gc:a("instance_name"),Hc:a("live_only"),Ic:a("malware_disabled"),Jc:a("once_per_event"),Pb:a("once_per_load"),Qb:a("setup_tags"),Kc:a("tag_id"),Rb:a("teardown_tags")}}();var Lc=new Hc,Mc={},Pc={set:function(a,b){za(Nc(a,b),Mc)},get:function(a){return Oc(a,2)},reset:function(){Lc=new Hc;Mc={}}},Oc=function(a,b){return 2!=b?Lc.get(a):Qc(a)},Qc=function(a,b,c){var d=a.split(".");return Sc(d)},Sc=function(a){for(var b=Mc,c=0;c<a.length;c++){if(null===
b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Uc=function(a,b){Lc.set(a,b);za(Nc(a,b),Mc)},Nc=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c};var Vc=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Wc={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Xc={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels",
"customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Yc=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};
var Zc=function(a){var b=Oc("gtm.whitelist");var c=b&&Yc(Ec(b),Wc),d=Oc("gtm.blacklist")||Oc("tagTypeBlacklist")||[];
Vc.test(A.location&&A.location.hostname)&&(d=Ec(d),d.push("nonGooglePixels","nonGoogleScripts"));var e=d&&Yc(Ec(d),Xc),f={};return function(h){var k=h&&h[O.N];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=wc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>qa(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>qa(c,l[p])){n=!1;break a}}else{n=!1;break a}n=!0}m=n}var q=!1;if(d){var r;if(!(r=0<=
qa(e,k)))a:{for(var u=l||[],t=new Hc,z=0;z<e.length;z++)t.set(e[z],!0);for(z=0;z<u.length;z++)if(t.get(u[z])){r=!0;break a}r=!1}q=r}return f[k]=!m||q}};var bd={od:function(a,b){b[O.Jb]&&"string"===typeof a&&(a=1==b[O.Jb]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(O.Lb)&&null===a&&(a=b[O.Lb]);b.hasOwnProperty(O.Nb)&&void 0===a&&(a=b[O.Nb]);b.hasOwnProperty(O.Mb)&&!0===a&&(a=b[O.Mb]);b.hasOwnProperty(O.Kb)&&!1===a&&(a=b[O.Kb]);return a}};var cd=function(a){var b=sc.zones;!b&&a&&(b=sc.zones=a());return b},dd={active:!0,isWhitelisted:function(){return!0}};var ed=!1,fd=0,gd=[];function hd(a){if(!ed){var b=B.createEventObject,c="complete"==B.readyState,d="interactive"==B.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){ed=!0;for(var e=0;e<gd.length;e++)G(gd[e])}gd.push=function(){for(var a=0;a<arguments.length;a++)G(arguments[a]);return 0}}}function id(){if(!ed&&140>fd){fd++;try{B.documentElement.doScroll("left"),hd()}catch(a){A.setTimeout(id,50)}}}var jd=function(a){ed?a():gd.push(a)};var kd=!1,ld=function(){return A.GoogleAnalyticsObject&&A[A.GoogleAnalyticsObject]};var md=function(a){A.GoogleAnalyticsObject||(A.GoogleAnalyticsObject=a||"ga");var b=A.GoogleAnalyticsObject;if(!A[b]){var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);A[b]=c}return A[b]},nd=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=ld();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var rd=function(){return"&tc="+ac.filter(function(a){return a}).length},sd="0.005000">Math.random(),td=function(){var a=0,b=0;return{Td:function(){if(2>a)return!1;1E3<=(new Date).getTime()-b&&(a=0);return 2<=a},pe:function(){1E3<=(new Date).getTime()-b&&(a=0);a++;b=(new Date).getTime()}}},ud="",vd=function(){ud=[uc,"&v=3&t=t","&pid="+Gc(),"&rv=8o"].join("")},wd={},xd="",yd=void 0,zd={},Ad={},Bd=void 0,Cd=null,Dd=1E3,Ed=function(){var a=yd;return void 0===a?"":[ud,
wd[a]?"":"&es=1",zd[a],rd(),xd,"&z=0"].join("")},Fd=function(){Bd&&(A.clearTimeout(Bd),Bd=void 0);void 0===yd||wd[yd]&&!xd||(Ad[yd]||Cd.Td()||0>=Dd--?Ad[yd]=!0:(Cd.pe(),Qa(Ed()),wd[yd]=!0,xd=""))},Gd=function(a,b,c){if(sd&&!Ad[a]&&b){a!==yd&&(Fd(),yd=a);var d=c+String(b[O.N]||"").replace(/_/g,"");xd=xd?xd+"."+d:"&tr="+d;Bd||(Bd=A.setTimeout(Fd,500));2022<=Ed().length&&Fd()}};function Hd(a,b,c,d,e,f){var h=ac[a],k=Id(a,b,c,d,e,f);if(!k)return null;var l=ic(h[O.Qb],f.Z,[]);if(l&&l.length){var m=l[0];k=Hd(m.index,b,k,1===m.ac?e:k,e,f)}return k}
function Id(a,b,c,d,e,f){function h(){var b=jc(k,f.Z);b.vtp_gtmOnSuccess=function(){Gd(f.id,ac[a],"5");c()};b.vtp_gtmOnFailure=function(){Gd(f.id,ac[a],"6");d()};b.vtp_gtmTagId=k.tag_id;if(k[O.Ic])d();else{Gd(f.id,k,"1");try{hc(b)}catch(z){Gd(f.id,
k,"7");e()}}}var k=ac[a];if(f.Z(k))return null;var l=ic(k[O.Rb],f.Z,[]);if(l&&l.length){var m=l[0],n=Hd(m.index,b,c,d,e,f);if(!n)return null;c=n;d=2===m.ac?e:n}if(k[O.Pb]||k[O.Jc]){var p=k[O.Pb]?bc:b,q=c,r=d;if(!p[a]){h=Kc(h);var u=Jd(a,p,h);c=u.U;d=u.ka}return function(){p[a](q,r)}}return h}function Jd(a,b,c){var d=[],e=[];b[a]=Kd(d,e,c);return{U:function(){b[a]=Ld;for(var c=0;c<d.length;c++)d[c]()},ka:function(){b[a]=Md;for(var c=0;c<e.length;c++)e[c]()}}}
function Kd(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Ld(a){a()}function Md(a,b){b()};function Nd(a){var b=0,c=0,d=!1;return{add:function(){c++;return Kc(function(){b++;d&&b>=c&&a()})},Vc:function(){d=!0;b>=c&&a()}}}function Od(a,b){if(!sd)return;var c=function(a){var d=b.Z(ac[a])?"3":"4",f=ic(ac[a][O.Qb],b.Z,[]);f&&f.length&&c(f[0].index);Gd(b.id,ac[a],d);var h=ic(ac[a][O.Rb],b.Z,[]);h&&h.length&&c(h[0].index)};c(a);}var Pd=!1;var Qd=function(a,b){var c={};c[O.N]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);for(d in void 0)(void 0).hasOwnProperty(d)&&(c[d]=(void 0)[d]);ac.push(c);return ac.length-1};var Rd="allow_ad_personalization_signals cookie_domain cookie_expires cookie_name cookie_path custom_params event_callback event_timeout groups send_to send_page_view session_duration user_properties".split(" ");var Sd=/[A-Z]+/,Td=/\s/,Ud=function(a){if(Ac(a)&&(a=a.trim(),!Td.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Sd.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],ia:d}}}}};var Vd=null,Wd={},Xd={},Yd;function Zd(){Vd=Vd||!sc.gtagRegistered;sc.gtagRegistered=!0;return Vd}var $d=function(a,b){var c={event:a};b&&(c.eventModel=za(b,void 0),b.event_callback&&(c.eventCallback=b.event_callback),b.event_timeout&&(c.eventTimeout=b.event_timeout));return c};
function ae(a){if(void 0===Xd[a.id]){var b;if("UA"==a.prefix)b=Qd("gtagua",{trackingId:a.id});else if("AW"==a.prefix)b=Qd("gtagaw",{conversionId:a});else if("DC"==a.prefix)b=Qd("gtagfl",{targetId:a.id});else if("GF"==a.prefix)b=Qd("gtaggf",{conversionId:a});else if("G"==a.prefix)b=Qd("get",{trackingId:a.id,isAutoTag:!0});else return;if(!Yd){var c={name:"send_to",dataLayerVersion:2},d={};d[O.N]="__v";for(var e in c)c.hasOwnProperty(e)&&(d["vtp_"+e]=c[e]);Yb.push(d);Yd=["macro",Yb.length-1]}var f={arg0:Yd,
arg1:a.id,ignore_case:!1};f[O.N]="_lc";$b.push(f);var h={"if":[$b.length-1],add:[b]};h["if"]&&(h.add||h.block)&&Zb.push(h);Xd[a.id]=b}}
var ce={event:function(a){var b=a[1];if(Ac(b)&&!(3<a.length)){var c;if(2<a.length){if(!ya(a[2]))return;c=a[2]}var d=$d(b,c);return d}},set:function(a){var b;2==a.length&&ya(a[1])?
b=za(a[1],void 0):3==a.length&&Ac(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=za(b,void 0),b.event="gtag.set",b._clear=!0,b},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},config:function(a){}},be=Kc(function(){});var de=!1,ee=[];function fe(){if(!de){de=!0;for(var a=0;a<ee.length;a++)G(ee[a])}};var ge=[],he=!1,me=function(a){var b=a.eventCallback,c=Kc(function(){zc(b)&&G(function(){b(rc.o)})}),d=a.eventTimeout;d&&A.setTimeout(c,Number(d));return c},ne=function(){for(var a=!1;!he&&0<ge.length;){he=!0;delete Mc.eventModel;var b=ge.shift();if(zc(b))try{b.call(Pc)}catch(ie){}else if(pa(b)){var c=b;if(Ac(c[0])){var d=c[0].split("."),e=d.pop(),f=c.slice(1),h=Oc(d.join("."),2);if(void 0!==h&&null!==h)try{h[e].apply(h,f)}catch(ie){}}}else{var k=b;if(k&&("[object Arguments]"==Object.prototype.toString.call(k)||
Object.prototype.hasOwnProperty.call(k,"callee"))){a:{var l=b;if(l.length&&Ac(l[0])){var m=ce[l[0]];if(m){b=m(l);break a}}b=void 0}if(!b){he=!1;continue}}var n;var p=void 0,q=b,r=q._clear;for(p in q)q.hasOwnProperty(p)&&"_clear"!==p&&(r&&Uc(p,void 0),Uc(p,q[p]));var u=q.event;if(u){var t=q["gtm.uniqueEventId"];t||(t=Ic(),q["gtm.uniqueEventId"]=t,Uc("gtm.uniqueEventId",t));tc=u;var z;var H,E,C=q,P=C.event,F=C["gtm.uniqueEventId"],K=sc.zones;E=K?K.checkState(rc.o,F):dd;if(E.active){var I=me(C);c:{var L=
E.isWhitelisted;if("gtm.js"==P){if(Pd){H=!1;break c}Pd=!0}var N=F,ia=P;if(sd&&!Ad[N]&&yd!==N){Fd();yd=N;xd="";var J=zd,ba=N,X,Y=ia;X=0===Y.indexOf("gtm.")?encodeURIComponent(Y):"*";J[ba]="&e="+X+"&eid="+N;Bd||(Bd=A.setTimeout(Fd,500))}var Q=Zc(L),R={id:F,name:P,gd:I||yc,Z:Q,Va:oc(Q)};for(var hb,ib=R,Ib=Nd(ib.gd),$c=[],Jb=[],rb=0;rb<ac.length;rb++)if(ib.Va[rb]){var ag=ac[rb];var Kb=Ib.add();try{var je=Hd(rb,$c,Kb,Kb,Kb,ib);je?Jb.push(je):(Od(rb,ib),Kb())}catch(ie){Kb()}}Ib.Vc();for(var ad=0;ad<Jb.length;ad++)Jb[ad]();hb=0<Jb.length;if("gtm.js"===P||"gtm.sync"===P)d:{}if(hb){for(var bg={__cl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},gc=0;gc<R.Va.length;gc++)if(R.Va[gc]){var le=ac[gc];if(le&&!bg[le[O.N]]){H=!0;break c}}H=!1}else H=hb}z=H?!0:!1}else z=!1;tc=null;n=z}else n=!1;a=n||a}he=!1}return!a},oe=function(){var a=ne();try{var b=A["dataLayer"].hide;if(b&&void 0!==b[rc.o]&&b.end){b[rc.o]=!1;var c=!0,d;for(d in b)if(b.hasOwnProperty(d)&&!0===b[d]){c=!1;
break}c&&(b.end(),b.end=null)}}catch(e){}return a},pe=function(){var a=Na("dataLayer",[]),b=Na("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};gd.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});ee.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(ge.push.apply(ge,b);300<this.length;)this.shift();return ne()};ge.push.apply(ge,a.slice(0));G(oe)};var qe={};qe.Ia=new String("undefined");qe.$a={};var re=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===qe.Ia?b:a[d]);return c.join("")}};re.prototype.toString=function(){return this.resolve("undefined")};re.prototype.valueOf=re.prototype.toString;qe.pd=function(a){return new re(a)};var se={};qe.qe=function(a,b){var c=Ic();se[c]=[a,b];return c};qe.Xb=function(a){var b=a?0:1;return function(a){var c=se[a];if(c&&"function"===typeof c[b])c[b]();se[a]=void 0}};
qe.Sd=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};qe.he=function(a){if(a===qe.Ia)return a;var b=Ic();qe.$a[b]=a;return'google_tag_manager["'+rc.o+'"].macro('+b+")"};qe.Lc=re;var te=new Hc,ue=function(a,b){function c(a){var b=M(a),c=ab(b,"protocol"),d=ab(b,"host",!0),e=ab(b,"port"),f=ab(b,"path").toLowerCase().replace(/\/$/,"");if(void 0===c||"http"==c&&"80"==e||"https"==c&&"443"==e)c="web",e="default";return[c,d,e,f]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0};
function ve(a){var b=a.arg0,c=a.arg1;switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var d;a:{if(b){var e=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var f=0;f<e.length;f++)if(b[e[f]]){d=b[e[f]](c);break a}}catch(u){}}d=!1}return d;case "_ew":var h,k;h=String(b);k=String(c);var l=h.length-k.length;return 0<=l&&h.indexOf(k,l)==l;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);
case "_gt":return Number(b)>Number(c);case "_lc":var m;m=String(b).split(",");return 0<=qa(m,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var n;var p=a.ignore_case?"i":void 0;try{var q=String(c)+p,r=te.get(q);r||(r=new RegExp(c,p),te.set(q,r));n=r.test(b)}catch(u){n=!1}return n;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return ue(b,c)}return!1};function we(a,b,c,d){return(d||"https:"==A.location.protocol?a:b)+c}function xe(a,b){for(var c=b||(a instanceof v?new v:new ta),d=a.T(),e=0;e<d.length();e++){var f=d.get(e);if(a.has(f)){var h=a.get(f);h instanceof v?(c.get(f)instanceof v||c.set(f,new v),xe(h,c.get(f))):h instanceof ta?(c.get(f)instanceof ta||c.set(f,new ta),xe(h,c.get(f))):c.set(f,h)}}return c}function ye(){return rc.o}function ze(){return(new Date).getTime()}function Ae(a,b){return Ba(Oc(a,b||2))}function Be(){return tc}
function Ce(a){return Wa('<a href="'+a+'"></a>')[0].href}function De(a){return Cc(Aa(a))}function Ee(a){return null===a?"null":void 0===a?"undefined":a.toString()}function Fe(a,b){return Gc(a,b)}function Ge(a,b,c){if(!(a instanceof v))return null;for(var d=new ta,e=!1,f=0;f<a.length();f++){var h=a.get(f);h instanceof ta&&h.has(b)&&h.has(c)&&(d.set(h.get(b),h.get(c)),e=!0)}return e?d:null}
var He=function(){var a=new La;a.addAll(cb());a.addAll({buildSafeUrl:we,decodeHtmlUrl:Ce,copy:xe,generateUniqueNumber:Ic,getContainerId:ye,getCurrentTime:ze,getDataLayerValue:Ae,getEventName:Be,makeInteger:De,makeString:Ee,randomInteger:Fe,tableToMap:Ge});return function(b){return a.get(b)}},Je=function(){var a={callInWindow:xb,encodeURI:xb,encodeURIComponent:xb,getCurrentUrl:xb,getInWindow:xb,getReferrer:xb,getUrlComponent:xb,getUrlFragment:xb,isPlainObject:xb,loadIframe:xb,loadJavaScript:yb,removeUrlFragment:xb,
replaceAll:xb,sendTrackingBeacon:xb,setInWindow:xb},b={buildSafeUrl:Ie,decodeHtmlUrl:Ie,copy:Ie,generateUniqueNumber:Ie,getContainerId:Ie,getCurrentTime:Ie,getDataLayerValue:Ie,getEventName:Ie,makeInteger:Ie,makeString:Ie,randomInteger:Ie,tableToMap:Ie},c={},d;for(d in a)a.hasOwnProperty(d)&&(c[d]=a[d]);for(var e in b)if(b.hasOwnProperty(e)){if(c[e])throw Error("Overriding an existing permission generator is forbidden: "+e);c[e]=b[e]}return function(a,b){return c[a]?c[a](b):function(){return!0}}};
function Ie(){return function(){return!0}};var Ke,Le=function(){var a=data.runtime||[],b=data.permissions||{};Ke=new eb;Xb=function(a,b){var c=new ta,d;for(d in b)b.hasOwnProperty(d)&&c.set(d,Ba(b[d]));var e=Ke.R([a,c]);e instanceof g&&"return"===e.A&&(e=e.getData());return Aa(e)};dc=ve;db(Ke,He());for(var c=0;c<a.length;c++){var d=a[c];if(!pa(d)||3>d.length){if(0==d.length)continue;return}Ke.R(d)}var e=Je(),f;for(f in b)if(b.hasOwnProperty(f)){var h=b[f],k;for(k in h)if(h.hasOwnProperty(k)){var l=e(k,h[k]);Ke.eb(f,k,l)}}};var Me=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Ne=function(a){return encodeURIComponent(a)},Oe=function(a,b){if(!a)return!1;var c=ab(M(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var S=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null},Pe=function(a,b){za(a,b)},Qe=function(a){return Cc(a)},Re=function(a,b){return qa(a,b)};var Se=function(a){var b={"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||Ta(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};b["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return b},Te=function(a){sc.hasOwnProperty("autoEventsSettings")||(sc.autoEventsSettings={});var b=sc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Ue=function(a,b,c,d){var e=Te(a),f=Jc(e,b,d);e[b]=
c(f)},Ve=function(a,b,c){var d=Te(a);return Jc(d,b,c)};var We=/(^|\.)doubleclick\.net$/i,Xe=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Ye=function(a,b,c){for(var d=String(b||B.cookie).split(";"),e=[],f=0;f<d.length;f++){var h=d[f].split("="),k=Fc(h[0]);if(k&&k==a){var l=Fc(h.slice(1).join("="));l&&!1!==c&&(l=decodeURIComponent(l));e.push(l)}}return e},Ze=function(a,b,c,d,e,f){f&&(b=encodeURIComponent(b));var h=a+"="+b+"; ";c&&(h+="path="+c+"; ");e&&(h+="expires="+e.toGMTString()+"; ");var k,l;if("auto"==d){var m=ab(A.location,"host",!0).split(".");if(4==
m.length&&/^[0-9]*$/.exec(m[3]))l=["none"];else{for(var n=[],p=m.length-2;0<=p;p--)n.push(m.slice(p).join("."));n.push("none");l=n}}else l=[d||"none"];k=l;for(var q=B.cookie,r=0;r<k.length;r++){var u=h,t=k[r],z=c;if(We.test(A.location.hostname)||"/"==z&&Xe.test(t))break;"none"!=k[r]&&(u+="domain="+k[r]+";");B.cookie=u;if(q!=B.cookie||0<=qa(Ye(a),b))break}};var $e=!1;if(B.querySelectorAll)try{var af=B.querySelectorAll(":root");af&&1==af.length&&af[0]==B.documentElement&&($e=!0)}catch(a){}var bf=$e;var cf=function(a){for(var b=[],c=document.cookie.split(";"),d=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push(f[1])}return b},ff=function(a,b,c,d){var e=df(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=ef(e,function(a){return a.xd},b);if(1===e.length)return e[0].id;e=ef(e,function(a){return a.ee},c);return e[0]?e[0].id:void 0}},jf=function(a,b,c,d,e){c=void 0===c?"/":c;var f=d=void 0===d?"auto":d,h=c;if(gf.test(document.location.hostname)||"/"===
h&&hf.test(f))return!1;var k=b;k&&1200<k.length&&(k=k.substring(0,1200));b=k;var l=a+"="+b+"; path="+c+"; ";void 0!==e&&(l+="expires="+(new Date((new Date).getTime()+e)).toGMTString()+"; ");if("auto"===d){var m=!1,n;a:{var p=[],q=document.location.hostname.split(".");if(4===q.length){var r=q[q.length-1];if(parseInt(r,10).toString()===r){n=["none"];break a}}for(var u=q.length-2;0<=u;u--)p.push(q.slice(u).join("."));p.push("none");n=p}for(var t=n,z=0;z<t.length&&!m;z++)m=jf(a,b,c,t[z],e);return m}d&&
"none"!==d&&(l+="domain="+d+";");var H=document.cookie;document.cookie=l;return H!=document.cookie||0<=cf(a).indexOf(b)};function ef(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function df(a,b){for(var c=[],d=cf(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),xd:1*k[0]||1,ee:1*k[1]||1}))}}return c}
var hf=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,gf=/(^|\.)doubleclick\.net$/i;var kf=window,lf=document;var mf=function(){for(var a=kf.navigator.userAgent+(lf.cookie||"")+(lf.referrer||""),b=a.length,c=kf.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Date.now()/1E3)].join(".")},pf=function(a,b,c,d){var e=nf(b);return ff(a,e,of(c),d)};
function nf(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length}function of(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1}function qf(a,b){var c=""+nf(a),d=of(b);1<d&&(c+="-"+d);return c};var rf=["1"],sf={},vf=function(a,b,c){b=void 0===b?"auto":b;c=void 0===c?"/":c;var d=tf(void 0===a?"_gcl":a);if(!sf[d]&&!uf(d,b,c)){var e,f=mf();e=["1",qf(void 0,void 0),f].join(".");jf(d,e,c,b,7776E6);uf(d,b,c)}};function uf(a,b,c){var d=pf(a,b,c,rf);d&&(sf[a]=d);return d}function tf(a){return(void 0===a?"_gcl":a)+"_au"};var wf=function(a){for(var b=[],c=B.cookie.split(";"),d=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push(f[1])}var h=[];if(!b||0==b.length)return h;for(var k=0;k<b.length;k++){var l=b[k].split(".");3==l.length&&"GCL"==l[0]&&l[1]&&h.push(l[2])}return h};var xf=/^\w+$/,yf=/^[\w-]+$/,zf=/^\d+\.fls\.doubleclick\.net$/;function Af(a){return a&&"string"==typeof a&&a.match(xf)?a:"_gcl"}function Bf(a){if(a){if("string"==typeof a){var b=Af(a);return{va:b,sa:b,ya:b}}if(a&&"object"==typeof a)return{va:Af(a.dc),sa:Af(a.aw),ya:Af(a.gf)}}return{va:"_gcl",sa:"_gcl",ya:"_gcl"}}function Cf(a){var b=M(A.location.href),c=ab(b,"host",!1);if(c&&c.match(zf)){var d=ab(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Df(a){return a.filter(function(a){return yf.test(a)})}var Ff=function(a){var b=Cf("gclaw");if(b)return b.split(".");var c=Bf(a);if("_gcl"==c.sa){var d=Ef();if(d&&(null==d.I||"aw.ds"==d.I))return[d.Y]}return Df(wf(c.sa+"_aw"))},Gf=function(a){var b=Cf("gcldc");if(b)return b.split(".");var c=Bf(a);if("_gcl"==c.va){var d=Ef();if(d&&("ds"==d.I||"aw.ds"==d.I))return[d.Y]}return Df(wf(c.va+"_dc"))};
function Ef(){var a=M(A.location.href),b=ab(a,"query",!1,void 0,"gclid"),c=ab(a,"query",!1,void 0,"gclsrc");if(!b||!c){var d=ab(a,"fragment");b=b||$a(d,"gclid");c=c||$a(d,"gclsrc")}return void 0!==b&&b.match(yf)?{Y:b,I:c}:null}
var Hf=function(){var a=Cf("gac");if(a)return decodeURIComponent(a);for(var b=[],c=B.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Bb:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].Bb]||(h[b[k].Bb]=[]),h[b[k].Bb].push({timestamp:l[1],Y:l[2]}))}var m=[],n;for(n in h)if(h.hasOwnProperty(n)){for(var p=[],q=h[n],r=0;r<q.length;r++)p.push(q[r].Y);p=Df(p);
p.length&&m.push(n+":"+p.join(","))}return m.join(";")},If=function(a,b,c){};var Jf;a:{Jf="G"}var Kf={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GTM:Jf},Lf=function(a){var b=rc.o.split("-"),c=b[0].toUpperCase();return(Kf[c]||"i")+"8o"+(a&&"GTM"===c?b[1]:"")};var Sf=!!A.MutationObserver,Tf=void 0,Uf=function(a){if(!Tf){var b=function(){var a=B.body;if(a)if(Sf)(new MutationObserver(function(){for(var a=0;a<Tf.length;a++)G(Tf[a])})).observe(a,{childList:!0,subtree:!0});else{var b=!1;Ra(a,"DOMNodeInserted",function(){b||(b=!0,G(function(){b=!1;for(var a=0;a<Tf.length;a++)G(Tf[a])}))})}};Tf=[];B.body?b():G(b)}Tf.push(a)};
var Vf=function(){var a=B.body,b=B.documentElement||a&&a.parentElement,c,d;if(B.compatMode&&"BackCompat"!==B.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(a,b){return a&&b?Math.min(a,b):Math.max(a,b)};c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Wf=function(a){var b=Vf(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,h=e.right-e.left;return f&&h?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},Xf=function(a){if(B.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!A.getComputedStyle)return!0;var c=A.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-1)),f=Math.min(h,
f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=A.getComputedStyle(d,null))}return!1};
var eg=function(a,b,c){function d(){var b=a();f+=e?((new Date).getTime()-e)*b.playbackRate/1E3:0;e=(new Date).getTime()}var e=0,f=0;return{Qa:function(e,k,l){var h=a(),n=h.$b,p=void 0!==l?Math.round(l):void 0!==k?Math.round(h.$b*k):Math.round(h.qd),q=void 0!==k?Math.round(100*k):0>=n?0:Math.round(p/n*100),r=B.hidden?!1:.5<=Wf(c);d();var u=Se(c);u.event="gtm.video";u["gtm.videoProvider"]="youtube";u["gtm.videoStatus"]=e;u["gtm.videoUrl"]=h.url;u["gtm.videoTitle"]=h.title;u["gtm.videoDuration"]=Math.round(n);
u["gtm.videoCurrentTime"]=Math.round(p);u["gtm.videoElapsedTime"]=Math.round(f);u["gtm.videoPercent"]=q;u["gtm.videoVisible"]=r;u["gtm.triggers"]=b;A["dataLayer"].push(u)},ve:function(){e=(new Date).getTime()},ab:function(){d()}}};var fg="www.googletagmanager.com/gtm.js";
var gg=fg,hg=function(a,b,c,d){Ra(a,b,c,d)},ig=function(a,b){return A.setTimeout(a,b)},jg=function(a,b,c){D(a,b,c)},kg=function(){return A.location.href},lg=function(a){return ab(M(a),"fragment")},mg=function(a,b,c,d,e){return ab(a,b,c,d,e)},T=function(a,b){return Oc(a,b||2)},ng=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return A["dataLayer"].push(a)},og=function(a,b){A[a]=b},U=function(a,b,c){b&&(void 0===A[a]||c&&!A[a])&&(A[a]=b);return A[a]},pg=function(a,b,c){var d=b,e=c,
f=Bf(a);e=e||"auto";d=d||"/";var h=Ef();if(null!=h){var k=(new Date).getTime(),l=new Date(k+7776E6),m=["GCL",Math.round(k/1E3),h.Y].join(".");h.I&&"aw.ds"!=h.I||Ze(f.sa+"_aw",m,d,e,l,!0);"aw.ds"!=h.I&&"ds"!=h.I||Ze(f.va+"_dc",m,d,e,l,!0);"gf"==h.I&&Ze(f.ya+"_gf",m,d,e,l,!0)}},qg=function(a,b){var c;a:{var d;d=100;for(var e={},f=0;f<b.length;f++)e[b[f]]=!0;for(var h=a,k=0;h&&k<=d;k++){if(e[String(h.tagName).toLowerCase()]){c=h;break a}h=h.parentElement}c=null}return c},V=function(a,b,c,d){var e=!d&&
"http:"==A.location.protocol;e&&(e=2!==rg());return(e?b:a)+c};
var sg=function(a){var b=0;b=Wf(a);return b},tg=function(a){},ug=function(a){var b=!1;b=Xf(a);return b},vg=function(a,b){var c;a:{if(a&&
pa(a))for(var d=0;d<a.length;d++)if(a[d]&&b(a[d])){c=a[d];break a}c=void 0}return c},wg=function(a,b,c,d){Ue(a,b,c,d)},xg=function(a,b,c){return Ve(a,b,c)},yg=function(a){return!!Ve(a,"init",!1)},zg=function(a){Te(a).init=!0};var Ag=function(a,b,c){return eg(a,b,c)};
var rg=function(){var a=gg;if(xc){if(0===xc.toLowerCase().indexOf("https://"))return 2;if(0===xc.toLowerCase().indexOf("http://"))return 3}a=a.toLowerCase();for(var b="https://"+a,c="http://"+a,d=1,e=B.getElementsByTagName("script"),f=0;f<e.length&&100>f;f++){var h=e[f].src;if(h){h=h.toLowerCase();if(0===h.indexOf(c))return 3;1===d&&0===h.indexOf(b)&&(d=2)}}return d};var Cg=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":gg;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";if(b)for(var e in b)b[e]&&b.hasOwnProperty(e)&&(d+="&"+e+"="+encodeURIComponent(b[e]));var f=V("https://","http://",d);D(f,void 0,void 0)};var Eg=function(a,b,c){a instanceof qe.Lc&&(a=a.resolve(qe.qe(b,c)),b=yc);return{kb:a,U:b}};var Fg=function(a,b,c){this.n=a;this.t=b;this.p=c},Gg=function(){this.c=1;this.e=[];this.p=null};function Hg(a){var b=sc,c=b.gss=b.gss||{};return c[a]=c[a]||new Gg}var Ig=function(a,b){Hg(a).p=b},Jg=function(a,b,c){var d=Math.floor((new Date).getTime()/1E3);Hg(a).e.push(new Fg(b,d,c))},Kg=function(a){};var Vg=window,Wg=document,Xg=function(a){var b=Vg._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Vg["ga-disable-"+a])return!0;try{var c=Vg.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(m){}for(var d=[],e=Wg.cookie.split(";"),f=/^\s*AMP_TOKEN=\s*(.*?)\s*$/,h=0;h<e.length;h++){var k=e[h].match(f);k&&d.push(k[1])}for(var l=0;l<d.length;l++)if("$OPT_OUT"==decodeURIComponent(d[l]))return!0;return!1};var bh=function(a){if(1===Hg(a).c){Hg(a).c=2;var b=encodeURIComponent(a);D(("http:"!=A.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},ch=function(a,b){};var Z={a:{}};
Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=U("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0})(function(){return tc})}();Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0})(function(a){var b=T("gtm.referrer",1)||B.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?mg(M(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):bb(M(String(b))):String(b)})}();
Z.a.cl=["google"],function(){function a(a){var b=a.target;if(b){var d=Se(b);d.event="gtm.click";ng(d)}}(function(a){Z.__cl=a;Z.__cl.b="cl";Z.__cl.g=!0})(function(b){if(!yg("cl")){var c=U("document");Ra(c,"click",a,!0);zg("cl");var d=Ve("cl","legacyTeardown",void 0);d&&d()}G(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0})(function(a){for(var b=String(a.vtp_name).split("."),c=U(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0})(function(a){var b=T("gtm.cookie",1);return Ye(a.vtp_name,b,!!a.vtp_decodeCookie)[0]})}();
Z.a.u=["google"],function(){var a=function(a){return{toString:function(){return a}}};(function(a){Z.__u=a;Z.__u.b="u";Z.__u.g=!0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:T("gtm.url",1))||kg();var d=b[a("vtp_component")];return d&&"URL"!=d?mg(M(String(c)),d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,"QUERY"==d?b[a("vtp_queryKey")]:void 0):bb(M(String(c)))})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=T(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.ua=["google"],function(){var a,b=function(b){var c={},e={},f={},h={},k={};if(b.vtp_gaSettings){var l=b.vtp_gaSettings;Pe(S(l.vtp_fieldsToSet,"fieldName","value"),e);Pe(S(l.vtp_contentGroup,"index","group"),f);Pe(S(l.vtp_dimension,"index","dimension"),h);Pe(S(l.vtp_metric,"index","metric"),k);b.vtp_gaSettings=null;l.vtp_fieldsToSet=void 0;l.vtp_contentGroup=void 0;l.vtp_dimension=void 0;l.vtp_metric=void 0;var m=za(l,void 0);b=za(b,m)}Pe(S(b.vtp_fieldsToSet,"fieldName","value"),e);Pe(S(b.vtp_contentGroup,
"index","group"),f);Pe(S(b.vtp_dimension,"index","dimension"),h);Pe(S(b.vtp_metric,"index","metric"),k);var n=md(b.vtp_functionName),p="",q="";b.vtp_setTrackerName&&"string"==typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(q=b.vtp_trackerName,p=q+"."):(q="gtm"+Ic(),p=q+".");var r={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,
storage:!0,useAmpClientId:!0,storeGac:!0},u={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},t=function(a){var b=[].slice.call(arguments,0);b[0]=p+b[0];n.apply(window,b)},z=function(a,b){return void 0===b?b:a(b)},H=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&t("set",a+c,b[c])},E=function(){
var a=function(a,b,c){if(!ya(b))return!1;var d;d=Jc(Object(b),c,[]);for(var e=0;d&&e<d.length;e++)t(a,d[e]);return!!d&&0<d.length},c;b.vtp_useEcommerceDataLayer?c=T("ecommerce",1):b.vtp_ecommerceMacroData&&(c=b.vtp_ecommerceMacroData.ecommerce);if(!ya(c))return;c=Object(c);var d=Jc(e,"currencyCode",c.currencyCode);void 0!==d&&t("set","&cu",d);a("ec:addImpression",c,"impressions");if(a("ec:addPromo",c[c.promoClick?"promoClick":"promoView"],"promotions")&&c.promoClick){t("ec:setAction","promo_click",
c.promoClick.actionField);return}for(var f="detail checkout checkout_option click add remove purchase refund".split(" "),h=0;h<f.length;h++){var k=c[f[h]];if(k){a("ec:addProduct",k,"products");t("ec:setAction",f[h],k.actionField);break}}},C=function(a,b,c){var d=0;if(a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&r[e]||!c&&void 0===r[e])){var f=u[e]?Dc(a[e]):a[e];"anonymizeIp"!=e||f||(f=void 0);b[e]=f;d++}return d},P={name:q};C(e,P,
!0);n("create",b.vtp_trackingId||c.trackingId,P);t("set","&gtm",Lf(!0));(function(a,c){void 0!==b[c]&&t("set",a,b[c])})("nonInteraction","vtp_nonInteraction");H("contentGroup",f);H("dimension",h);H("metric",k);var F={};C(e,F,!1)&&t("set",F);var K;b.vtp_enableLinkId&&t("require","linkid","linkid.js");t("set","hitCallback",function(){var a=
e&&e.hitCallback;zc(a)&&a();b.vtp_gtmOnSuccess()});if("TRACK_EVENT"==b.vtp_trackType){b.vtp_enableEcommerce&&(t("require","ec","ec.js"),E());var I={hitType:"event",eventCategory:String(b.vtp_eventCategory||c.category),eventAction:String(b.vtp_eventAction||c.action),eventLabel:z(String,b.vtp_eventLabel||c.label),eventValue:z(Qe,b.vtp_eventValue||c.value)};C(K,I,!1);t("send",I);}else if("TRACK_SOCIAL"==
b.vtp_trackType){}else if("TRACK_TRANSACTION"==b.vtp_trackType){}else if("TRACK_TIMING"==b.vtp_trackType){}else if("DECORATE_LINK"==b.vtp_trackType){}else if("DECORATE_FORM"==b.vtp_trackType){}else if("TRACK_DATA"==
b.vtp_trackType){}else{b.vtp_enableEcommerce&&(t("require","ec","ec.js"),E());if(b.vtp_doubleClick||"DISPLAY_FEATURES"==b.vtp_advertisingFeaturesType){var Y="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");t("require","displayfeatures",void 0,{cookieName:Y})}"DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==b.vtp_advertisingFeaturesType&&
(Y="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,""),t("require","adfeatures",{cookieName:Y}));K?t("send","pageview",K):t("send","pageview");}if(!a){var Q=b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";b.vtp_useInternalVersion&&!b.vtp_useDebugVersion&&
(Q="internal/"+Q);a=!0;jg(V("https:","http:","//www.google-analytics.com/"+Q,e&&e.forceSSL),function(){var a=ld();a&&a.loaded||b.vtp_gtmOnFailure();},b.vtp_gtmOnFailure)}};Z.__ua=b;Z.__ua.b="ua";Z.__ua.g=!0}();

Z.a.ytl=["google"],function(){function a(){var b=Math.round(1E9*Math.random())+"";return Ua(b)?a():b}function b(a,b){if(!a)return!1;for(var c=0;c<p.length;c++)if(0<=a.indexOf("//"+p[c]+"/"+b))return!0;return!1}function c(a){var b=-1!==a.indexOf("?")?"&":"?";if(-1<a.indexOf("origin="))return a+b+"enablejsapi=1";if(!r){var c=U("document");r=c.location.protocol+"//"+c.location.hostname;c.location.port&&(r+=":"+c.location.port)}return a+b+"enablejsapi=1&origin="+encodeURIComponent(r)}function d(a,d){var e=
a.getAttribute("src");if(b(e,"embed/")){if(0<e.indexOf("enablejsapi=1"))return!0;if(d)return a.setAttribute("src",c(e)),!0}return!1}function e(b,c){if(!b.getAttribute("data-gtm-yt-inspected-"+c.Db)&&(b.setAttribute("data-gtm-yt-inspected-"+c.Db,"true"),d(b,c.cc))){b.id||(b.id=a());var e=U("YT"),f=e.get(b.id);f||(f=new e.Player(b.id));var k=h(f,c),l={},m;for(m in k)l.key=m,k.hasOwnProperty(l.key)&&f.addEventListener(l.key,function(a){return function(b){return k[a.key](b.data)}}(l)),l={key:l.key}}}
function f(a){G(function(){function b(){for(var b=c.getElementsByTagName("iframe"),d=b.length,f=0;f<d;f++)e(b[f],a)}var c=U("document");b();Uf(b)})}function h(a,b){var c,d;function e(){r=Ag(function(){return{url:Q,title:R,$b:Y,qd:a.getCurrentTime(),playbackRate:ea}},b.Db,a.getIframe());Y=0;R=Q="";ea=1;return f}function f(c){switch(c){case q.PLAYING:Y=Math.round(a.getDuration());Q=a.getVideoUrl();if(a.getVideoData){var d=a.getVideoData();R=d?d.title:""}ea=a.getPlaybackRate();b.kd?r.Qa("start"):r.ab();
z=m(b.ke,b.je,a.getDuration());return h(c);default:return f}}function h(){W=a.getCurrentTime();ua=(new Date).getTime();r.ve();u();return k}function k(c){var d;switch(c){case q.ENDED:return n(c);case q.PAUSED:d="pause";case q.BUFFERING:var f=a.getCurrentTime()-W;d=1<Math.abs(((new Date).getTime()-ua)/1E3*ea-f)?"seek":d||"buffering";a.getCurrentTime()&&(b.jd?r.Qa(d):r.ab());t();return l;case q.UNSTARTED:return e(c);default:return k}}function l(a){switch(a){case q.ENDED:return n(a);case q.PLAYING:return h(a);
case q.UNSTARTED:return e(a);default:return l}}function n(){for(;d;){var a=c;A.clearTimeout(d);a()}b.hd&&r.Qa("complete",1);return e(q.UNSTARTED)}function p(){}function t(){d&&(A.clearTimeout(d),d=0,c=p)}function u(){if(z.length&&0!==ea){var b=-1,e;do{e=z[0];if(e.ba>a.getDuration())return;b=(e.ba-a.getCurrentTime())/ea;if(0>b&&(z.shift(),0===z.length))return}while(0>b);c=function(){d=0;c=p;0<z.length&&z[0].ba===e.ba&&(z.shift(),r.Qa("progress",e.yc,e.Cc));u()};d=ig(c,1E3*b)}}var r,z=[],Y,Q,R,ea,W,
ua,Ja=e(q.UNSTARTED);d=0;c=p;return{onStateChange:function(a){Ja=Ja(a)},onPlaybackRateChange:function(b){W=a.getCurrentTime();ua=(new Date).getTime();r.ab();ea=b;t();u()}}}function k(a){for(var b=a.split(","),c=b.length,d=[],e=0;e<c;e++){var f=parseInt(b[e],10);isNaN(f)||100<f||0>f||d.push(f/100)}d.sort(function(a,b){return a-b});return d}function l(a){for(var b=a.split(","),c=b.length,d=[],e=0;e<c;e++){var f=parseInt(b[e],10);isNaN(f)||0>f||d.push(f)}d.sort(function(a,b){return a-b});return d}function m(a,
b,c){var d=a.map(function(a){return{ba:a,Cc:a,yc:void 0}});if(!b.length)return d;var e=b.map(function(a){return{ba:a*c,Cc:void 0,yc:a}});if(!d.length)return e;var f=d.concat(e);f.sort(function(a,b){return a.ba-b.ba});return f}function n(a){var c=!!a.vtp_captureStart,e=!!a.vtp_captureComplete,h=!!a.vtp_capturePause,m=k(a.vtp_progressThresholdsPercent+""),n=l(a.vtp_progressThresholdsTimeInSeconds+""),p=!!a.vtp_fixMissingApi;if(c||e||h||m.length||n.length){var q={kd:c,hd:e,jd:h,je:m,ke:n,cc:p,Db:void 0===
a.vtp_uniqueTriggerId?"":a.vtp_uniqueTriggerId},t=U("YT"),r=function(){f(q)};G(a.vtp_gtmOnSuccess);if(t)t.ready&&t.ready(r);else{var N=U("onYouTubeIframeAPIReady");og("onYouTubeIframeAPIReady",function(){N&&N();r()});G(function(){for(var a=U("document"),c=a.getElementsByTagName("script"),e=c.length,f=0;f<e;f++){var h=c[f].getAttribute("src");if(b(h,"iframe_api")||b(h,"player_api"))return}for(var k=a.getElementsByTagName("iframe"),l=k.length,m=0;m<l;m++)if(!u&&d(k[m],q.cc)){D("https://www.youtube.com/iframe_api",
void 0,void 0);u=!0;break}})}}else G(a.vtp_gtmOnSuccess)}var p=["www.youtube.com","www.youtube-nocookie.com"],q={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},r,u=!1;Z.__ytl=n;Z.__ytl.b="ytl";Z.__ytl.g=!0}();
Z.a.gclidw=["google"],function(){(function(a){Z.__gclidw=a;Z.__gclidw.b="gclidw";Z.__gclidw.g=!0})(function(a){G(a.vtp_gtmOnSuccess);var b,c,d;a.vtp_enableCookieOverrides&&(d=a.vtp_cookiePrefix,b=a.vtp_path,c=a.vtp_domain);pg(d,b,c);If(d,c,b)})}();
Z.a.aev=["google"],function(){var a=void 0,b="",c=0,d=void 0,e={ATTRIBUTE:"gtm.elementAttribute",CLASSES:"gtm.elementClasses",ELEMENT:"gtm.element",ID:"gtm.elementId",HISTORY_CHANGE_SOURCE:"gtm.historyChangeSource",HISTORY_NEW_STATE:"gtm.newHistoryState",HISTORY_NEW_URL_FRAGMENT:"gtm.newUrlFragment",HISTORY_OLD_STATE:"gtm.oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"gtm.oldUrlFragment",TARGET:"gtm.elementTarget"},f=function(a){var b=T(e[a.vtp_varType],1);return void 0!==b?b:a.vtp_defaultValue},h=function(a,
b){var c=l(kg()),d=String(b.vtp_affiliatedDomains||"").replace(/\s+/g,"").split(",").map(function(a){return l(a)});return!Oe(a,d.concat(c))},k=/^https?:\/\//i,l=function(a){k.test(a)||(a="http://"+a);return mg(M(a),"HOST",!0)};(function(a){Z.__aev=a;Z.__aev.b="aev";Z.__aev.g=!0})(function(e){switch(e.vtp_varType){case "TAG_NAME":return T("gtm.element",1).tagName||e.vtp_defaultValue;case "TEXT":var k,l=T("gtm.element",1),m=T("event",1),r=Number(new Date);a===l&&b===m&&c>r-250?k=d:(d=k=l?Va(l):"",a=
l,b=m);c=r;return k||e.vtp_defaultValue;case "URL":var u;a:{var t=String(T("gtm.elementUrl",1)||e.vtp_defaultValue||""),z=M(t);switch(e.vtp_component||"URL"){case "URL":u=t;break a;case "IS_OUTBOUND":u=h(t,e);break a;default:u=ab(z,e.vtp_component,e.vtp_stripWww,e.vtp_defaultPages,e.vtp_queryKey)}}return u;case "ATTRIBUTE":var H;if(void 0===e.vtp_attribute)H=f(e);else{var E=T("gtm.element",1);H=Ta(E,e.vtp_attribute)||e.vtp_defaultValue||""}return H;default:return f(e)}})}();

Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0})(function(a){var b=za(a,void 0),c=b;c[O.N]=null;c[O.Gc]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0})(function(a){var b=a.vtp_input,c=S(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0})(function(a){G(a.vtp_gtmOnFailure)})}();
Z.a.html=["customScripts"],function(){var a=function(b,c,f,h){return function(){try{if(0<c.length){var d=c.shift(),e=a(b,c,f,h);if("SCRIPT"==String(d.nodeName).toUpperCase()&&"text/gtmscript"==d.type){var m=B.createElement("script");m.async=!1;m.type="text/javascript";m.id=d.id;m.text=d.text||d.textContent||d.innerHTML||"";d.charset&&(m.charset=d.charset);var n=d.getAttribute("data-gtmsrc");n&&(m.src=n,Oa(m,e));b.insertBefore(m,null);n||e()}else if(d.innerHTML&&0<=d.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];d.firstChild;)p.push(d.removeChild(d.firstChild));b.insertBefore(d,null);a(d,p,e,h)()}else b.insertBefore(d,null),e()}else f()}catch(q){G(h)}}};var b=function(a,b,c){jd(function(){var d,e=sc;e.postscribe||(e.postscribe=qc);d=e.postscribe;var f={done:b},m=B.createElement("div");m.style.display="none";m.style.visibility="hidden";B.body.appendChild(m);try{d(m,a,f)}catch(n){G(c)}})};var c=function(d){if(B.body){var e=
d.vtp_gtmOnFailure,f=Eg(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.kb,k=f.U;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(B.body,Wa(h),k,e)()}else ig(function(){c(d)},200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0}();




var dh={macro:function(a){if(qe.$a.hasOwnProperty(a))return qe.$a[a]}};dh.dataLayer=Pc;dh.onHtmlSuccess=qe.Xb(!0);dh.onHtmlFailure=qe.Xb(!1);dh.callback=function(a){vc.hasOwnProperty(a)&&zc(vc[a])&&vc[a]();delete vc[a]};dh.$c=function(){sc[rc.o]=dh;wc=Z.a;ec=ec||qe;fc=bd};
dh.Od=function(){sc=A.google_tag_manager=A.google_tag_manager||{};if(sc[rc.o]){var a=sc.zones;a&&a.unregisterChild(rc.o)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Yb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)ac.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)$b.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},q=0;q<n.length;q++)p[n[q][0]]=Array.prototype.slice.call(n[q],1);Zb.push(p)}cc=Z;Le();dh.$c();pe();ed=!1;fd=0;if("interactive"==
B.readyState&&!B.createEventObject||"complete"==B.readyState)hd();else{Ra(B,"DOMContentLoaded",hd);Ra(B,"readystatechange",hd);if(B.createEventObject&&B.documentElement.doScroll){var r=!0;try{r=!A.frameElement}catch(t){}r&&id()}Ra(A,"load",hd)}de=!1;"complete"===B.readyState?fe():Ra(A,"load",fe);a:{
if(!sd)break a;vd();yd=void 0;zd={};wd={};Bd=void 0;Ad={};xd="";Cd=td();A.setInterval(vd,864E5);}}};dh.Od();

})()
