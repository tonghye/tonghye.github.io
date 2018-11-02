_satellite.pushAsyncScript(function(event, target, $variables){
  try {
	var _ADVID = '1867386465';/*광고주ID*/
	var _EUR = encodeURIComponent;
	
	var _toastace = new Image(0, 0);
	var _ESTR = 'u=' + _EUR(document.URL) + "&advid=" + _ADVID + "&r=" + _EUR(document.referrer) + "&code=utf-8&target=" + _EUR(_EUR('{"oid":"","items":[]}')) + "&action=visit";
	_toastace.src = "//adlc-exchange.toast.com/log?" + _ESTR;
} catch (e) {}
});
