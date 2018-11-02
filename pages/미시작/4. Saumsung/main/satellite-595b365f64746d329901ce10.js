_satellite.pushAsyncScript(function(event, target, $variables){
  /*
OnlineOpinion v5.9.9
Released: 08/02/2016. Compiled 08/02/2016 02:01:40 PM -0500
Branch: master 2a8b05f36a87035a4e8fac9b85c18815b63da4e3
Components: Full
UMD: disabled
The following code is Copyright 1998-2016 Opinionlab, Inc. All rights reserved. Unauthorized use is prohibited. This product and other products of OpinionLab, Inc. are protected by U.S. Patent No. 6606581, 6421724, 6785717 B1 and other patents pending. http://www.opinionlab.com
*/

(function (w, d) {
    'use strict';

    var assetDirectory = '/etc/designs/smg/global/imgs/feedback/new/'; // Samsung Update
    //assetDirectory = 'http://www.samsung.com/etc/designs/smg/global/imgs/feedback/new/'; // Samsung Update

    var loadOpinionLab = function (url, callback) {

        if (typeof OOo === 'undefined') {
            var script = d.createElement('script');
            if (script.readyState) {
                script.onreadystatechange = function () {
                    if (script.readyState === 'loaded' || script.readyState === 'complete') {
                        script.onreadystatechange = null;
                        callback();
                    }
                };
            } else {
                script.onload = function () {
                    callback();
                };
            }

            script.src = url;
            d.getElementsByTagName('head')[0].appendChild(script);

            var link  = d.createElement('link');
                link.rel  = 'stylesheet';
                link.type = 'text/css';
                link.href = assetDirectory + 'oo_style.css';
            
            d.getElementsByTagName('head')[0].appendChild(link);
        } else {
            callback();
        }

    };

    loadOpinionLab(assetDirectory + 'oo_engine.min.js', function () {

        if (typeof OOo !== 'undefined' && typeof OOo.releaseDetails !== 'object') { OOo.releaseDetails = []; }
        OOo.releaseDetails.push({
              author: 'BAM',
              timeStamp: '3/9/2018, 3:14:54 PM',
              fileName: 'samsung_conf.js',
              fileVersion: '1.0',
              ticketNumber: 'VS-7053',
              gitDiff: 'https://github.com/opinionlab/oo-code-sets-2/commit/6b17ab5e3fbba9a31f21b4fe71c103782e69538a'
        });

        var tabText = 'Feedback',
            path = w.location.href;

        if (/\/de\//i.test(path)) {
            tabText = 'Feedback';
        } else if (/\/es\//i.test(path) || /\/ar\//ig.test(path))  {
            tabText = 'Comentarios';
        } else if (/\/fr\//i.test(path)) {
            tabText = 'Commentaires';
        } else if (/\/id\//i.test(path)) {
            tabText = 'Masukan';
        } else if (/\/sec\//i.test(path) || /local.sec/i.test(path)) {
            tabText = '\uACE0\uAC1D\uC124\uBB38';
        } else if (/\/br\//i.test(path)) {
            tabText = 'Feedback';
        } else if (/\.ru\/|\/ru\//i.test(path)) {
            tabText = '\u041E\u0442\u0437\u044B\u0432';
        } else if (/\.cn\/|\/cn\//i.test(path)) {
            tabText = '\u53CD\u9988';
        } else if (/\/th\//i.test(path)) {
            tabText = '\u0E04\u0E27\u0E32\u0E21\u0E04\u0E34\u0E14\u0E40\u0E2B\u0E47\u0E19';
        } else if (/\/nl\//i.test(path) || /\/be\//ig.test(path)) {
            tabText = 'Feedback';
        } else if (/\.pl\/|\/pl\//i.test(path)) {
            tabText = 'Opinie';
        } else if (/\/se\//i.test(path)) {
            tabText = 'Synpunkter';
        } else if (/\/tr\//i.test(path)) {
            tabText = 'Geri bildirim';
        } else if (/\/vn\//i.test(path)) {
            tabText = 'Ph\u1EA3n h\u1ED3i';
        } else if (/\.com\/it\//i.test(path)) {
            tabText = 'Feedback';
        }

        OOo.oo_tab = new OOo.Ocode({
            tab: {
                position: 'right',
                title: tabText,
                tabType: 0,
                verbiage: tabText,
                iconPath: assetDirectory
            },
            customVariables: {
                amcv: OOo.readCookie('AMCV_48855C6655783A647F000101%40AdobeOrg'),
                s_vi: OOo.readCookie('s_vi'),
                s_pagename: typeof s !== 'undefined' ? typeof s.pageName !== 'undefined' ? s.pageName : '' : '',
                s_account: typeof s_account !== 'undefined' ? s_account.replace(/,/g, '%2C') : 'sssamsungnexttest%2Csssamsung4mstglobaldev'
            }
        });


        OOo.uxImprovementScroll = (function() {

            var $tab = null;
            var ver = w.pageYOffset;
            var prevPageYOffset = null;
            var conf = {
                ooLegacy: false
            };
            var isMobile = false;
            var winHeight = w.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            var winWidth = w.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var prevHeight = winHeight;

            var hasClass = function( target, cls) {
                var i;
                var classes = target.className.split(" ");
                for(i = 0; i < classes.length; i++) {
                    if(classes[i] == cls) {
                        return true;
                    }
                }
                return false;
            };
            var hasId = function( target, id) {
                var i;
                var ids = target.id.split(" ");
                for(i = 0; i < ids.length; i++) {
                    if(ids[i] == id) {
                        return true;
                    }
                }
                return false;
            };
            var addClass = function( target, cls) {
                if (!hasClass(target, cls)){
                    target.className = (target.className + " " + cls).trim();
                }
            };
            var removeClass = function( target, cls) {
                var newClassName = "";
                var i;
                var classes = target.className.replace(/\s{2,}/g, ' ').split(" ");
                for(i = 0; i < classes.length; i++) {
                    if(classes[i] !== cls) {
                        newClassName += classes[i] + " ";
                    }
                }
                target.className = newClassName.trim();
            };
            var setElements = function() {
                $tab = document.getElementById('oo_tab');
                conf.ooLegacy = (hasClass($tab, 'oo_legacy')) ? true : false;
            };

            var bindEvents = function() {
                w.addEventListener('scroll', scrollEvents);
                w.addEventListener('resize', resizeEvents);
            };
            var widgetStatus = {
                show: function() {
                    if (!conf.ooLegacy) {
                        removeClass($tab, 'oo_css3_hide');
                        addClass($tab, 'oo_css3_show');
                    } else {   
                        removeClass($tab, 'oo_css2_hide');
                        addClass($tab, 'oo_css2_show');
                    }
                },
                hide: function() {
                    if (!conf.ooLegacy) {
                        removeClass($tab, 'oo_css3_show');
                        addClass($tab, 'oo_css3_hide');
                    } else {
                        removeClass($tab, 'oo_css2_show');
                        addClass($tab, 'oo_css2_hide');
                    }
                },
                isShowing: function() {
                    var isShow = false;
                    if (hasClass($tab, 'oo_css3_show') || hasClass($tab, 'oo_css2_show')) {
                        isShow = true;
                    } else {
                        isShow = false;
                    }

                    return isShow;
                }
            };
            
            var scrollEvents = function() {

                winHeight = w.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                winWidth = w.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

                if (ver !== undefined) {
                    var currentScroll = w.pageYOffset;
                } else {
                    var currentScroll = document.documentElement.scrollTop;
                }
                if (!isMobile) {
                    if(currentScroll == 0) {
                        if(widgetStatus.isShowing() && prevPageYOffset < currentScroll) {
                            if(widgetStatus.isShowing()) widgetStatus.hide();
                        }
                    } else {
                        if(prevPageYOffset == null || prevPageYOffset == currentScroll) {
                            if(widgetStatus.isShowing()) widgetStatus.hide();
                        } else {
                            if(prevPageYOffset != null && !widgetStatus.isShowing()) {
                                if(!widgetStatus.isShowing()) widgetStatus.show();
                            }
                        }
                    }
                    prevPageYOffset = currentScroll;   
                } else {
                    var B = document.body,
                        H = document.documentElement,
                        height;
                    if (typeof document.height !== 'undefined') {
                        height = document.height // For webkit browsers
                    } else {
                        height = Math.max( B.scrollHeight, B.offsetHeight,H.clientHeight, H.scrollHeight, H.offsetHeight );
                    }
                    var scHeightHalf = height * 0.7 - winHeight;
                    if(currentScroll >= scHeightHalf) {
                        if(!widgetStatus.isShowing()) widgetStatus.show();
                    } else {
                        if(widgetStatus.isShowing()) widgetStatus.hide();
                    }
                }
                prevHeight = winHeight;
            };
            
            var resizeEvents = function() {
                winWidth = w.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                if(winWidth <= 768) {
                    isMobile = true;
                    if(widgetStatus.isShowing()) widgetStatus.hide();
                } else {
                    isMobile = false;
                    if(!widgetStatus.isShowing()) widgetStatus.show();
                }
            };
            
            var init = function() {
                setElements();
                if (hasId($tab, 'oo_tab')) {
                    resizeEvents();
                    bindEvents();
                }
                widgetStatus.hide();
            };

            return {
                init: init
            }
        })();

        OOo.uxImprovementScroll.init();
    });

})(window, document);
});
