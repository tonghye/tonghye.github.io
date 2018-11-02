//************************   전역 변수 Start   ********************************************//

//var    _intValue   = '0123456789';
//var    _upperValue = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//var    _lowerValue = 'abcdefghijklmnopqrstuvwxyz';
//var    _etcValue   = '~`!@#$%%^&*()-_=+\|[{]};:\'\",<.>/?';
//var    dayOfMonth = new Array(31,28,31,30,31,30,31,31,30,31,30,31);

n = (document.layers) ? 1:0;
ie = (document.all) ? 1:0;
if (n) document.captureEvents(Event.KEYPRESS);

//************************   전역 변수 End   ********************************************//



/*###################################################################
함수명 : cmm_str_trim
설  명 : 공백만을 제외한 문자열을 리턴(특수문자 등도 같이 리턴)
인  자 : arg_str(검사대상 문자열)
사용법 : cmm_str_trim('abc def');
종  속 :
###################################################################*/


//************************   숫자 Start   ********************************************//

// 사용빈도 : 상
// 함수명: 숫자여부체크
// 설  명: 숫자인가를 체크하는 함수
// 인  자: value(체크대상 문자)
// --------------------------------------------------------------------------------------------
// 사용법: var a='3'; if(cmm_is_int(a)) { alert("숫자입니다"); }
// --------------------------------------------------------------------------------------------
function isInt(value){
	var _intValue   = '0123456789';
    var j;
    for(j=0;j<_intValue.length;j++)
        if(value == _intValue.charAt(j)) {
            return true;
	}
    return false;
}


// 사용빈도 : 상
// 함수명: 숫자열로만 구성되어 있는지 검사
// 설  명: 숫자로만 구성되어 있는지를 검사
// 인  자: obj(화면컨트롤)
// --------------------------------------------------------------------------------------------
// 사용법: <input type="text" onBlur="cmm_check_digit_body(this)">
// 주  의: 화면컨트롤에 데이타가 없는 경우에는 false를 리턴
// --------------------------------------------------------------------------------------------
function isNumeric(obj){
    var str=obj.value;
    if (str.length == 0)
		return false;
    for (var i = 0; i < str.length; i++){
		var ch = str.substring(i, i + 1);
		if ((ch < "0" || "9" < ch) ){
            obj.focus();
            obj.select();			
	    	return false;
	    }
    }
    return true;
}


// 사용빈도 : 상
// 함수명: 영문 대문자인지를 체크하는 함수
// 설  명: 영문 대문자인지를 체크하는 함수
// 인  자: value(체크대상 문자)
// --------------------------------------------------------------------------------------------
// 사용법: var a='A'; if(cmm_is_upper_char(a)) { alert("대문자입니다"); }
// --------------------------------------------------------------------------------------------
function isUpperChar(value) {
	var _upperValue = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var i;
    for(i=0;i<_upperValue.length;i++)
        if(value == _upperValue.charAt(i)) {
            return true;
        }
    return false;
}

// 사용빈도 : 상
// 함수명: 영문 소문자인지를 체크하는 함수
// 설  명: 영문 소문자인지를 체크하는 함수
// 인  자: value(체크대상 문자)
// --------------------------------------------------------------------------------------------
// 사용법: var a='k'; if(cmm_is_lower_char(a)) { alert("소문자입니다"); }
// --------------------------------------------------------------------------------------------
function isLowerChar(value) {
	var _lowerValue = 'abcdefghijklmnopqrstuvwxyz';
    var i;
    for(i=0;i<_lowerValue.length;i++)
        if(value == _lowerValue.charAt(i)) {
            return true;
        }
    return false;
}

// 사용빈도 : 중
// 함수명: 특수문자여부체크
// 설  명: 특수문자인지를 체크하는 함수(영문이나 한글이 아닌)
// 인  자: value(체크대상 문자)
// --------------------------------------------------------------------------------------------
// 사용법: var a='&'; if(cmm_is_etc_char(a)) { alert("특수문자입니다"); }
// --------------------------------------------------------------------------------------------
function isEtcChar(value) {
	var _etcValue   = '~`!@#$%%^&*()-_=+\|[{]};:\'\",<.>/?';
    var j;
    for(j=0;j<_etcValue.length;j++)
        if(value == _etcValue.charAt(j)) {
            return true;
        }
    return false;
}


/*
함수명 isEtcChar(value) 
설 명 특수문자인지를 체크하는 함수(영문이나 한글이 아닌) 
인 자 value(체크대상 문자), 문자열이 아님 char하나에 대한 체크가능 
사용법 var a='&'; if(cmm_is_etc_char(a)) { alert("특수문자입니다"); } 
종 속 없음 
*/
function isEtcString(value) {
	var _etcValue   = '~`!@#$%%^&*()-_=+\|[{]};:\'\",<.>/?';
    var i,j;
    for(i=0;i<value.length;i++) {
		for(j=0;j<_etcValue.length;j++)
			if(value.charAt(i) == _etcValue.charAt(j)) {
				return true;
			}
	}
    return false;
}

// 사용빈도 : 상
// 함수명: 영문대문자 변환
// 설  명: 영문대문자로 변환하는 함수
// 인  자: obj(변환대상 문자열을 가지고 있는 화면 컨트롤오브젝트) cmm_to_upper
// --------------------------------------------------------------------------------------------
// 사용법: 사용자가 소문자로 입력하더라도 DB에는 대문자로 입력하고자 하는 경우
// --------------------------------------------------------------------------------------------
function getUpperStr(obj) {
    var strNew = '';
	var str = obj.value;
    for( i=0 ; i<str.length; i++ ){
        if( str.charAt(i) >= 'a' && str.charAt(i) <= 'z' )
            strNew += str.charAt(i).toUpperCase() ;
        else
            strNew +=  str.charAt(i);
    }
    obj.value = strNew;
}



// 사용빈도 : 중
// 함수명: 몇개의 정해진 문자만 입력가능하도록 검사하는 함수
// 설  명: 정해진 문자열(영문자, 공백, '-', ',')만 입력하는 지를 검사하는 함수
// 인  자: ctl_digit(화면컨트롤)
// --------------------------------------------------------------------------------------------
// 사용법: <input type="text" onBlur="cmm_check_english_body(this)">
// 주의사항: 아래 소스를 변형하여 검사대상문자열을 변경하여 사용
// --------------------------------------------------------------------------------------------
function checkEnglishBody(obj){
    var str=obj.value;
    if (str.length == 0)
		return false;
    // Checks that characters are numbers or hyphens.
    for (var i = 0; i < str.length; i++){
		var ch = str.substring(i, i + 1);
		if(ch != "-") {
			if ((ch < "A" || "z" < ch )){
		     if (ch == " ")
 			   ;
                     else if (ch == ",")
 			   ;
                     else
 			   return false;
			}
		}
    }
    return true;
}


// 사용빈도 : 상
// 함수명: 문자열 좌측공백제거
// 설  명: 문자열 좌측의 공백 제거 처리 함수
// 인  자: str(체크대상 문자)
// --------------------------------------------------------------------------------------------
// 사용법: str = cmm_ltrim(str);
// --------------------------------------------------------------------------------------------
function getLtrim(str){
    while(str.substring(0,1) == ' ')
        str = str.substring(1, str.length);
    return str;
}

// 사용빈도 : 중
// 함수명: 문자열 중간공백제거
// 설  명: 문자열 중간의 공백 제거 처리 함수
// 인  자: str(체크대상 문자)
// --------------------------------------------------------------------------------------------
// 사용법: str = cmm_mtrim(str);
// --------------------------------------------------------------------------------------------
function getMtrim(str){
    for ( i=0; i < str.length;)
        if (str.substring(i,i+1) == ' ' )
                str = str.substring(0,i) + str.substring(i+1,str.length);
        else
                i++;
        return str;
}

// 사용빈도 : 상
// 함수명: 문자열 우측공백제거
// 설  명: 문자열 우측의 공백 제거 처리 함수
// 인  자: str(체크대상 문자)
// --------------------------------------------------------------------------------------------
// 사용법: str = cmm_rtrim(str);
// --------------------------------------------------------------------------------------------
function getRtrim(str){
    while(str.substring(str.length-1,str.length) == ' ')
        str = str.substring(0, str.length-1);
    return str;
}


// 사용빈도 : 상
// 함수명: 공백문자를 제외한 문자열을 리턴하는 함수
// 설  명: 공백만을 제외한 문자열을 리턴(특수문자 등도 같이 리턴)
// 인  자: arg_str(검사대상 문자열)
// --------------------------------------------------------------------------------------------
// 사용법: cmm_str_trim('abc def');
// --------------------------------------------------------------------------------------------
function getStrTrim( arg_str ){
	var rtn_str = "";
	var i=0;
	while( arg_str.charAt(i) != "" ) {
		if( arg_str.charAt(i)!=' ') {
			rtn_str += arg_str.charAt(i);
		}
		i++;
	}
	return rtn_str;
}

// 사용빈도 : 상
// 함수명: 특수문자를 제거하는 함수
// 설  명: 제거하고자 하는 특수문자를 제거하여 리턴하는 함수
// 인  자: str(문자열), sep(제거하고자 하는 특수문자)
// --------------------------------------------------------------------------------------------
// 사용법: <input type="text" onBlur="cmm_remove_special_char(this.value, '-%*');">
// --------------------------------------------------------------------------------------------
function getRmSpChar(str, sep){
	var sTmp = "";
	var sBuffer = "";
	var i, j;
	var equal=false;

	for (i=0; i < str.length; i++){
		equal = false;
		sTmp = str.substring(i, i+1);
		for(j=0; j<sep.length;j++) {
			if(sep.charAt(j) == sTmp) {
			 equal = true;
			 break;
			}
		}
		if(equal == false)
				sBuffer += sTmp;
	}
	//alert(sBuffer);
	return sBuffer;
}

// 사용빈도 : 상
// 함수명: 숫자열 리턴함수
// 설  명: 숫자와 문자열이 혼합되어 있는 것에서 숫자만 리턴
// 인  자: obj(검사대상 문자열)
// --------------------------------------------------------------------------------------------
// 사용법: <input type="text" onBlur="cmm_char_trim(this);">
//         검사대상 문자열이 '1134sd3dkk8'일 경우 '113438'만 리턴
// --------------------------------------------------------------------------------------------
function getNumOnly(obj){
	var strNew = "";
    var chkstr = "0123456789";
	var str = obj.value;
    for (var i = 0; i < str.length; i++) {
        if (chkstr.indexOf(str.substring(i, i + 1)) >= 0) {
            strNew += str.substring(i, i + 1);
        }
    }
	//alert(strNew);
    return strNew;
}

// 사용빈도 : 상
// 함수명: cmm_check_length(obj)
// 설  명: 지정된 객체의 문자열의 길이를 계산하는 부분
// 인  자: str : 문자 cmm_check_byte
//-------------------------------------------------------------------
// 사용법 : cmm_check_length(obj, len, str) 에서 내부적 호출
//-------------------------------------------------------------------
function checkByte(str){
	var byteLength= 0;
	for(var inx=0; inx < str.length; inx++)
	{
		var oneChar = escape(str.charAt(inx));
		if( oneChar.length == 1 )
			byteLength ++;
		else if(oneChar.indexOf("%u") != -1)
			byteLength += 2;
		else if(oneChar.indexOf("%") != -1)
			byteLength += oneChar.length/3;
	}
	return byteLength;
}

// 사용빈도 : 상 cmm_del_comma
// 함수명: 문자(숫자)열에서 ','문자제거
// 설  명: 화폐구분자로 사용되는 ','문자를 제거하는 함수. 
//         보통 화면에는 ,로 표시하고, DB에는 ','를 제외한 숫자만을 insert할 때 사용
// 인  자: obj(화면 입력박스명)
// 리  턴: 제거된 숫자 문자열
function delComma(obj) {
	var str =  String(obj.value);
    if (str.length < 1) {
        return "";
    } else {
        var st = "";
        var sp = ",";
        for (var i = 0; i < str.length; i++) {
            if (sp.indexOf(str.substring(i, i + 1)) == -1) {
                st += str.substring(i, i + 1);
            }
        }
        return st;
    }
}

// 사용빈도 : 상
// 함수명: 문자(숫자)열에서 ','문자제거
// 설  명: 화폐구분자로 사용되는 ','문자를 제거하는 함수. 
//         보통 화면에는 ,로 표시하고, DB에는 ','를 제외한 숫자만을 insert할 때 사용
// 인  자: str(금액형태의 문자열)
// 리  턴: 제거된 숫자 문자열
function delCommaStr(str) {

    if (str.length < 1) {
        return "";
    } else {
        var st = "";
        var sp = ",";
        for (var i = 0; i < str.length; i++) {
            if (sp.indexOf(str.substring(i, i + 1)) == -1) {
                st += str.substring(i, i + 1);
            }
        }
        return st;
    }
}

// 사용빈도 : 상
// 함수명: 화폐단위에 자동으로 3자리 쉼표 붙이는 함수
// 설  명: 입력창에 숫자 데이터를 입력할때 자동으로 3자리별로 ',' 가 붙어 입력되게 하기 위해 사용한다.
// 인  자: str(문자열(숫자))
// --------------------------------------------------------------------------------------------
// 사용법: 
//         
// --------------------------------------------------------------------------------------------
//주의  : 이 함수를 사용할때 Input 박스 값이 숫자 값인지 체크할 때는 쉼표를 자동으로 체크하여
//        숫자여부를 판단하는 is_digit(obj)를 사용한다.
function addCommaStr(str) {

	if (str.length < 1) {
        return "";
    } else {
        var tm = "";
        var ck = "";
        if (str.substring(0, 1) == "-") {//음수
            tm = str.substring(1, str.length);
            ck = "Y";
        } else {//양수
            tm = str;
            ck = "N";
        }
        var st = "";
        var cm = ",";

        for (var i = tm.length, j = 0; i > 0; i--, j++) {

			if ((j % 3) == 2) {
                if (tm.length == j + 1) st = tm.substring(i - 1, i) + st;
                else st = cm + tm.substring(i - 1, i) + st;
            } else {
                st = tm.substring(i - 1, i) + st;
            }
        }
        if (ck == "Y") st = "-" + st;
	}
	return st;
}


// 사용빈도 : 중
// 함수명: 윤년여부를 체크
// 설  명: 윤년여부를 체크
// 인  자: 연도
//cmm_isYunNyun
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
function isYunNyun(y){
	if ( (y % 4) == 0 ){
		if ((y % 100) != 0) return true;
		if ((y % 400) == 0) return true;
	}
	return false;
}


// 사용빈도 : 중
// 함수명: 해당년월의 마지막 날짜를 얻는 함수
// 설  명: 년도와 달을 입력하면 해당연도/달의 마지막 날짜를 리턴
// 인  자: calyear(연도), calmonth(달)
// --------------------------------------------------------------------------------------------
// 사용법: 해당 년월
//         cmm_lastday(2004, 5);
// 주의사항: 년도는 4자리로 표시, 한자리 달의 경우 앞에 0을 붙이지 말것
// --------------------------------------------------------------------------------------------
function getLastDate(calyear,calmonth){
	var dayOfMonth = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
    if (((calyear %4 == 0) && (calyear % 100 != 0))||(calyear % 400 == 0))
        dayOfMonth[1] = 29;
    else
        dayOfMonth[1] = 28;
    var nDays = dayOfMonth[calmonth-1];
    return nDays;
}


// 사용빈도 : 중
// 함수명: 하이픈('-')제거함수
// 설  명: 날짜타입의 '-'이 붙어있는 숫자에서 '-'를 제거하여 숫자만 리턴
// 인  자: obj(화면 컨트롤)
// --------------------------------------------------------------------------------------------
// 사용법: 2004-05-01일 경우 20040501을 리턴
//         cmm_del_hyphen(myForm.txtCtl)
// --------------------------------------------------------------------------------------------
function delHyphen(obj) {
	var str =  String(obj.value);
    if (str.length < 1) {
        return "";
    } else {
        var st = "";
        var sp = "-";
        for (var i = 0; i < str.length; i++) {
            if (sp.indexOf(str.substring(i, i + 1)) == -1) {
                st += str.substring(i, i + 1);
            }
        }
        return st;
    }
}




// 사용빈도 : 상
// 함수명: 오늘날짜를 yyyymmdd형태로 리턴하는 함수
// 설  명: 개인PC의 오늘날짜를 yyyymmdd형태로 리턴하는 함수
// 인  자: 없음
// --------------------------------------------------------------------------------------------
// 사용법: cmm_to_day();
// 주  의: PC의 날짜를 읽으므로, PC의 날짜설정값에 따라 변경될 수 있으므로, 로컬PC의 날짜를
//         읽어서 처리할 경우에만 사용해야 함
// --------------------------------------------------------------------------------------------
function getToDayLocal() {

    var now = new Date();
    var yr = now.getYear();
    var mName = now.getMonth() + 1;
    var dName = now.getDate();

    if (yr < 100)
        year=("19"+yr).toString();
    else
        year=yr.toString();

    if (mName <10)
        month=("0"+mName).toString();
    else
        month=mName.toString();

    if (dName <10)
        day=("0"+dName).toString();
    else
        day=dName.toString();

    return year+month+day;

}


// 사용빈도 : 중
// 함수명: 날짜값의 검사
// 설  명: 날짜값이 정상적인 허용범위에 속한 값인지를 검사
// 인  자: ctl_date(검사대상 컨트롤), sep(구분자, '-' 혹은 '.' 등)
// --------------------------------------------------------------------------------------------
// 사용법: <input type="text" onBlur="cmm_check_date_body(this, '-')">
// 주  의: 텍스트 입력값은 반드시 10자리(2004-05-01)로 구성되어야 한다.
//         상황에 따라 구분자(sep)는 '-'(2004-05-01) 혹은 '.'(2004.05.01) 등이 될 수 있다.
// --------------------------------------------------------------------------------------------
function isValidDateStr(ctl_date, sep){
    var str=ctl_date.value;
    if (str.length == 0)
		return false;

    // Check for  10 characters in string.
    if (str.length != 10)
	return false;

    // Checks that characters are numbers or hyphens.
    for (var i = 0; i < str.length; i++)
    {
	var ch = str.substring(i, i + 1);
	if ((i==4)||(i==7)) {
		if (ch != sep) return false;
		} else {
			if ((ch < "0")||(ch > "9")) return false;
		}
    }
    // Check out year value.
    if ( (str.substring(0, 4) < 1)  ||  (str.substring(0, 4) > 9999)  )
		return false;
    // Check out month value.
    if ( (str.substring(5, 7) < 1)  ||  (str.substring(5, 7) > 12)  )
		return false;
    // Check out day value.
    if ( (str.substring(8, 10) < 1)  ||  (str.substring(8, 10) > 31)  )
		return false;
    // Check out day value per each month value.
    // Febuary
    if ( (str.substring(5, 7) == 2 )  &&  (str.substring(8, 10) > 29)  )
		return false;
    // April
    if ( (str.substring(5, 7) == 4 )  &&  (str.substring(8, 10) > 30)  )
		return false;
    // June
    if ( (str.substring(5, 7) == 6 )  &&  (str.substring(8, 10) > 30)  )
		return false;
    // September
    if ( (str.substring(5, 7) == 9 )  &&  (str.substring(8, 10) > 30)  )
		return false;
    // November
    if ( (str.substring(5, 7) == 11 )  &&  (str.substring(8, 10) > 30)  )
		return false;

    new_str = str.substring(0, 4) + sep + str.substring(5, 7) + sep + str.substring(8, 10);

    ctl_date.value = new_str;

    return true;
}





// 사용빈도 : 상
// 함수명: 팝업윈도우를 화면 중앙에 띄우는 함수
// 설  명: 팝업윈도우를 화면 중앙에 띄움
//         (단, 세로위치는 정중앙이 아닌 약간 위로 올림)
// 인  자: url(대상JSP명), popupwidth(팝업윈도우 가로크기), popupheight(팝업윈도우 세로크기)
// --------------------------------------------------------------------------------------------
// 사용법: <INPUT name="minwonInfo" OnKeyDown="javascript:cmm_popup_windowOpen('./SVPMinwonInfoL.jsp', '500', '370')"> 
// --------------------------------------------------------------------------------------------
function popupCenterWindow(url, popupwidth, popupheight)
{
	Top = (window.screen.height - popupheight) / 3;
	Left = (window.screen.width - popupwidth) / 2;
	if (Top < 0) Top = 0;
	if (Left < 0) Left = 0;
	Future = "fullscreen=no,toolbar=no,location=no,directories=no,status=no,menubar=no,	scrollbars=no,resizable=no,left=" + Left + ",top=" + Top + ",width=" + popupwidth + ",height=" + popupheight;
	PopUpWindow = window.open(url, "PopUpWindow", Future)
	PopUpWindow.focus();
}

// 사용빈도 : 상
// 함수명: 팝업윈도우를 화면 중앙에 띄우는 함수
// 설  명: 팝업윈도우를 화면 중앙에 띄움
//         (단, 세로위치는 정중앙이 아닌 약간 위로 올림)
// 인  자: url(대상JSP명), popupwidth(팝업윈도우 가로크기), popupheight(팝업윈도우 세로크기)
// --------------------------------------------------------------------------------------------
// 사용법: <INPUT name="minwonInfo" OnKeyDown="javascript:cmm_showModal('./SVPMinwonInfoL.jsp', '500', '370')"> 
// -
function popupShowModalDialog(surl, popupwidth, popupheight){
	Top = (window.screen.height - popupheight) / 3;
	Left = (window.screen.width - popupwidth) / 2;
	if (Top < 0) Top = 0;
	if (Left < 0) Left = 0;
	Future = 'center:yes; help:no; status:no; scroll:yes; resizable:yes; dialogWidth:' + popupwidth + ';dialogHeight:'+ popupheight+'; dialogTop:'+Top+'; dialogLeft:'+Left+';' ;
	window.showModalDialog(surl, 'ModalWin', Future);
}


// 사용빈도 : 하
// 함수명: 체크박스 전체를 선택하는 함수
// 설  명: 특정 폼에 속한 체크박스 전체를 체크함
// 인  자: form(폼명), cname(체크박스명), rowcnt(체크박스 항목갯수)
// --------------------------------------------------------------------------------------------
// 사용법: 아래의 방법으로 텍스트박스에 "onkeypress="return cmm_handleEnter(this, event)"" 를 넣음
// <A class="button" href="javascript:cmm_on_check(myForm,'check',2)">전체선택</A>
// --------------------------------------------------------------------------------------------
// 참  조: 반드시 체크박스의 이름을 cname+i로 사용하여야 한다.
function setCheckBoxOn(form, cname, rowcnt){
	for(var i=1;i <= parseInt(rowcnt);i++) {
		form[cname+i].checked = true;
	}
}

// 사용빈도 : 하
// 함수명: 체크박스 전체를 선택해제하는 함수
// 설  명: 특정 폼에 속한 체크박스 전체를 체크안하게함
// 인  자: form(폼명), cname(체크박스명), rowcnt(체크박스 항목갯수)
// --------------------------------------------------------------------------------------------
// 사용법: 아래의 방법으로 텍스트박스에 "onkeypress="return cmm_handleEnter(this, event)"" 를 넣음
// <A class="button" href="javascript:cmm_off_check(myForm,'check',5)">전체선택</A>
// --------------------------------------------------------------------------------------------
// 참  조: 반드시 체크박스의 이름을 cname+i로 사용하여야 한다.
function setCheckBoxOff(form, cname, rowcnt){
	for(var i=1;i <= parseInt(rowcnt);i++) {
		form[cname+i].checked = false;
	}
}


//************************   폼 Start   ********************************************//

// 사용빈도 : 상
// 함수명: 폼에 속하는 모든 항목을 reset하는 함수
// 설  명: 폼에속한 각 화면컨트롤의 값을 모두 초기화
// 인  자: form(해당 폼이름)
// --------------------------------------------------------------------------------------------
// 사용법: <input type="button" value="초기화" size="10" onClick="cmm_on_reset(myForm)">
// --------------------------------------------------------------------------------------------
// 주의  : 입력화면의 '초기화'버튼에서 사용
function resetFrm(form){
	form.reset();	
}



// 사용빈도 : 상
// 함수명: 입력박스의 내용을 없앰
// 설  명: 입력박스의 내용을 삭제하는 경우로 일반적으로, 입력박스에 설명텍스트를 넣고 마우스로
//         클릭을 하면 사라지게할 때 사용
// 인  자: thefield(입력 컨트롤명)
// --------------------------------------------------------------------------------------------
// 사용법: 사용자가 텍스트박스에 입력전에 미리 입력내역을 알 수 있도록 할때 아래와같이 사용
//         <input type="text" value="검색어를 입력 하세요" onFocus="cmm_clearText(this)">
// --------------------------------------------------------------------------------------------
function clearTextBox(thefield){
	if (thefield.defaultValue==thefield.value)
        thefield.value = ""
} 


// 사용빈도 : 중
// 함수명: cmm_nextFocus(current, length, next)
// 설  명: 입력폼에 입력한 문자개수가 기준에 달하면 다음 입력폼으로 포커스가 이동함.
//        주민등록번호나 전화번호등 입력문자수가 정해진 경우에 포커스를 자동으로 이동하여, 사용자의 편의를 증가시킴.
// 인  자: current(현재입력폼), length(현재입력폼의 최대입력문자개수), next(다음입력폼)
// --------------------------------------------------------------------------------------------
// 사용법: 아래의 방법으로 입력폼에 적용함.
// <input type="text" name="sid1" onKeyUp="cmm_nextFocus(sid1,6,sid2);">
// --------------------------------------------------------------------------------------------
function moveNextFocus(current, length, next){
	if(current.value.length  == length) 
	next.focus(); 
}





// 사용빈도 : 중
// 함수명: 브라우저 종류확인
// 설  명: 브라우저의 종류를 확인하는 함수
// 인  자: 없음
// --------------------------------------------------------------------------------------------
// 사용법: if(cmm_check_browser()!="IE") { alert("Internet Explorer만 지원됩니다."); }
//--------------------------------------------------------------------------------------------
function checkBrowser(){

	var ret;
	ret = navigator.appName;

	if (ret == "Netscape")
		return "NE";
	else if (ret == "Microsoft Internet Explorer")
		return "IE";
	else
		return -1;
}

//-------------------------------------------------------------------
// ?レ옄? "-" ?ы븿?섏뼱?덈뒗吏 Check (?꾪솕踰덊샇, ?대룞?꾪솕踰덊샇) 
//-------------------------------------------------------------------
function isDigitOrBar(str) {
	for(var i=0; i < str.length; i++) {
		var ch= str.charAt(i) ;
		if((ch < "0" || ch > "9") && ch!="-") {
			return false;
		}
	}
	return true;
}

//-------------------------------------------------------------------
// 臾몄옄??醫뚯슦痢≪쓽 怨듬갚 ?쒓굅 泥섎━ ?⑥닔 
//-------------------------------------------------------------------
function trim(para) {
	return getRtrim(getLtrim(para));
}

//-------------------------------------------------------------------
// ?レ옄?몄? ?뺤씤?섎뒗 硫붿냼??
//-------------------------------------------------------------------
function isNumber(value) {
	var result = true;
	for(j = 0; result && (j < value.length); j++) {
		if((value.substring(j, j+1) < "0") || (value.substring(j, j+1) > "9")) {
			result = false;
		}
	}
	return result;
}
//-------------------------------------------------------------------

//-------------------------------------------------------------------
// Float ?좏슚 Check
//-------------------------------------------------------------------
function isFloat(value) {
	var count = 0;
	var ch;
	
	for(i = 0; i < value.length; i++) {
		ch = value.charAt(i);
		
		if(isNaN(ch)) {
			if(ch == ".") {
				count++;
			} else {
				return false;
			}
		} 			
	}
	
	if(count > 1) {
		return false;
	} else {
		return true;
	}
	
	return result;
}



function cutStr(str, len) {
	var l = 0;

	for(var i = 0; i < str.length; i++) {
		l += (str.charCodeAt(i) > 128) ? 3 : 1;
		if (l > len) {
			return str.substring(0, i);
		}
	}
	return str;
}

/* prmMaxLengthCheck value의 최대 바이트 수를 체크 */
function isOverMaxLength(formValue, maxlength){
    var temp;
    var bytes = 0;
    var len = formValue.length;

    for(ii=0; ii<len; ii++){
        temp = formValue.charAt(ii) ;

	//escape code의 길이가 4보다 크면 한글
	if(escape(temp).length > 4){
	    bytes += 2;
	}else{
	    bytes++;
	}
    }
    if(maxlength >= bytes){
	return true;
    } else {
	return false;
    }
}

/* prmMinLengthCheck value의 최소 바이트 수를 체크 */
function isUnderMinLength(formValue, minlength){
    var temp;
    var bytes = 0;
    var len = formValue.length;

    for(ii=0; ii<len; ii++){
        temp = formValue.charAt(ii) ;

	//escape code의 길이가 4보다 크면 한글
	if(escape(temp).length > 4){
	    bytes += 2;
	}else{
	    bytes++;
	}
    }
    if(minlength <= bytes){
	return true;
    } else {
	return false;
    }

}

/* 문자 체크
    type = k : 한글
                e : 영어
                n : 숫자
                prmCharCheck
*/
function checkChar(str, type){
    var retCode = 0
    for (i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i)
        var ch = str.substr(i,1).toUpperCase()

        code = parseInt(code)
        if (type=="k" && (ch < "0" || ch > "9") && ( ch < "A" || ch > "Z") && ((code > 255) || (code < 0))) {
            return true
        }
        if (type=="e" && (ch >= "A") && (ch <= "Z")) {
            return true
        }
        if (type=="n" && (ch >= "0" && ch <= "9")) {
            return true
        }
    }
    return false
}



/*  엔터키 체크 prmEnterCheck */
function isEnterKey(){
    if(event.keyCode==13) {
        return true;
    }
    return false;
}


function checkPinNumber(J1,J2){
    if(J1 =="111111" || J2 =="1111118"){
	alert("올바른 형식의 주민등록 번호 13자리를 입력하세요")
	return false;
    }else{
	// 주민등록번호 1 ~ 6 자리까지의 처리
	// 주민등록번호에 숫자가 아닌 문자가 있을 때 처리
        for(i=0;i<J1.length;i++){
	    if (J1.charAt(i) >= 0 && J1.charAt(i) <= 9){
	    // 숫자면 값을 곱해 더한다.
		if(i == 0)
		    SUM = (i+2) * J1.charAt(i);
		else
		    SUM = SUM +(i+2) * J1.charAt(i);
	    }else{
		 // 숫자가 아닌 문자가 있을 때의 처리
		alert("숫자값만 입력 가능합니다.");
		return false;
	    }
	}//end of for loop

	for(i=0;i<2;i++){
            // 주민등록번호 7 ~  8 자리까지의 처리
	    if(J2.charAt(i) >= 0 && J2.charAt(i) <= 9){
                SUM = SUM + (i+8) * J2.charAt(i);
	    }else{
		// 숫자가 아닌 문자가 있을 때의 처리
	        alert("숫자값만 입력 가능합니다.");
		return false;
	    }
	}

	for(i=2;i<6;i++){
	    // 주민등록번호 9 ~ 12 자리까지의 처리
	    if (J2.charAt(i) >= 0 && J2.charAt(i) <= 9) {
	        SUM = SUM + (i) * J2.charAt(i);
	    }else{
	        // 숫자가 아닌 문자가 있을 때의 처리
		alert("숫자값만 입력 가능합니다.");
		return false;
	    }
	}

	// 나머지 구하기
	var checkSUM = SUM % 11;
	// 나머지가 0 이면 10 을 설정
	if(checkSUM == 0){
	    var checkCODE = 10;
	    // 나머지가 1 이면 11 을 설정
	}else if(checkSUM ==1){
	    var checkCODE = 11;
	}else{
	    var checkCODE = checkSUM;
	}
	// 나머지를 11 에서 뺀다
	var check1 = 11 - checkCODE;
	if (J2.charAt(6) >= 0 && J2.charAt(6) <= 9) {
            var check2 = parseInt(J2.charAt(6))
	}else{
	    // 숫자가 아닌 문자가 있을 때의 처리
	    alert("숫자값만 입력 가능합니다.");
	}
	if(check1 != check2){
	    // 주민등록번호가 틀릴 때의 처리
	    alert("올바른 형식의 주민등록 번호 13자리를 입력하세요")
	    return false;
	}else{
	    return true;
	}
    }
}

//현재 년을 구한다.to_year
function getCurrYear() {

    var v_date = new Date();
    var v_year = v_date.getYear();

    if (v_year < 100)
        return ("19"+v_year).toString();
    else
        return v_year.toString();
}

//현재 월을 구한다.to_month
function getCurrMonth() {

    var v_date = new Date();
    var v_month = v_date.getMonth() + 1;

    if (v_month < 10)
        return ("0"+v_month).toString();
    else
        return v_month.toString();

}
//현재 일을 구한다.to_day
function getCurrDay(){

    var v_date = new Date();
    var v_day = v_date.getDate();

    if (v_day < 10)
        return ("0"+v_day).toString();
    else
        return v_day.toString();

}



// 키보드 입력시 숫자만 입력 가능
function getOnlyNumberKey(){
	if (( event.keyCode >=48 && event.keyCode <=57 )			// 자판 0~9
		|| (event.keyCode >=96 && event.keyCode <= 105 ) 	// keypad 0~9
		|| (event.keyCode == 109 )											// 자판 -
		|| (event.keyCode == 189 )											// keypad -
		|| (event.keyCode == 8 )												// back space
		|| (event.keyCode == 9 )												// tab
		|| (event.keyCode == 13 )											// enter
		|| (event.keyCode == 46 )											// delete
		|| (event.keyCode >= 37 && event.keyCode <= 40 ) )	// 방향키
	{
			return true;
	}
	else {
		event.returnValue = false;
	}
}

// 키보드 입력시 수자 및 ','가 입력 가능
function getNumberNCommaKey(){
	if (( event.keyCode >=48 && event.keyCode <=57 )			// 자판 0~9
		|| (event.keyCode >=96 && event.keyCode <= 105 ) 	// keypad 0~9
		|| (event.keyCode == 109 )											// 자판 -
		|| (event.keyCode == 189 )											// keypad -
		|| (event.keyCode == 188 )											// 자판 ,
		|| (event.keyCode == 8 )												// back space
		|| (event.keyCode == 9 )												// tab
		|| (event.keyCode == 13 )											// enter
		|| (event.keyCode == 46 )											// delete
		|| (event.keyCode >= 37 && event.keyCode <= 40 ) )	// 방향키
	{
			return true;
	}
	else {
		event.returnValue = false;
	}

}
// 키보드 입력시 수자 및 '.'가 입력 가능
function getNumberNDotKey(){
	if (( event.keyCode >=48 && event.keyCode <=57 )			// 자판 0~9
		|| (event.keyCode >=96 && event.keyCode <= 105 ) 	// keypad 0~9
		|| (event.keyCode == 109 )											// 자판 -
		|| (event.keyCode == 189 )											// keypad -
		|| (event.keyCode == 110 )											// 자판 .
		|| (event.keyCode == 190 )											// keypad .
		|| (event.keyCode == 8 )												// back space
		|| (event.keyCode == 9 )												// tab
		|| (event.keyCode == 13 )											// enter
		|| (event.keyCode == 46 )											// delete
		|| (event.keyCode >= 37 && event.keyCode <= 40 ) )	// 방향키
	{
			return true;
	}
	else {
		event.returnValue = false;
	}
}

//문자열 치환
function replaceStr(p_str, p_old, p_new) {

    if ( !p_str ) return "";
    if ( !p_old ) return p_str;
    if ( !p_new ) p_new = "";

    var v_array = p_str.split(p_old);
    var v_ret = "";

    for ( kk=0; kk < v_array.length; ++kk ) {
        if ( kk == (v_array.length-1) ) p_new = "";
        v_ret = v_ret + v_array[kk] + p_new;
    }

    return v_ret;
}

//일수 계산
function countDayDiff(p_date1, p_date2){
	var date1 = getTimeObject(p_date1);
    var date2 = getTimeObject(p_date2);
    var day   = 1000 * 3600 * 24; //24시간

    return parseInt((date2 - date1) / day, 10);
}


//몇년 몇개월의 차이인지 계산
function countMonthDiff(p_date1, p_date2){
	var date1 = getTimeObject(p_date1);
	var date2 = getTimeObject(p_date2);

	var years  = date2.getFullYear() - date1.getFullYear();
	var months = date2.getMonth() - date1.getMonth();

	var v_arr = new Array();
	v_arr[0] = parseInt((years*12+months)/12);
	v_arr[1] = (years*12+months)-(parseInt((years*12+months)/12)*12);
	//return (years * 12 months);
	return v_arr;
}

//toTimeObject(time)8자리 인경우
function getTimeObject(time) { //parseTime(time)
    var year  = time.substr(0,4);
    var month = time.substr(4,2)-1;
    var day   = time.substr(6,2);

    return new Date(year,month,day);
}


//숫자에 '.'가 있는지 검사
function isExistDot(p_str){
	for (var inx = 0; inx < p_str.length; inx++) {
		if (".".indexOf(p_str.charAt(inx)) == 0){
			return true;
		}
	}
	return false;
}

/*
 * Function :  문자열에서 특수문자만 제거하여 변환
 * Param    :  tmpStr  : 문자열
 * Return   :  변환된 값 리턴
 * ex) DelSKey(tmpStr)
*/
function getNonSpStr(tmpStr){
    var valTmp="";
    for(i=0;i<tmpStr.length;i++){
        if((tmpStr.charCodeAt(i)>=97 
        	&& tmpStr.charCodeAt(i)<= 125) 
        	|| (tmpStr.charCodeAt(i)>=65 
        	&& tmpStr.charCodeAt(i)<= 90) 
        	|| (tmpStr.charCodeAt(i)>=48 
        	&& tmpStr.charCodeAt(i)<= 57) 
        	|| tmpStr.charCodeAt(i)> 127)
        {
            valTmp += tmpStr.charAt(i);
        }
    }
return valTmp;
}


/*
 * Function :  문자열을 특정 문자로 나누어 Array 형태로 변환
 * Param    :  tmpStr  : 문자열
               divMark : 특정 문자
 * Return   :  arr
 * ex) divStr(tmpStr,',')
*/
function getDivStrArr(tmpStr,divMark){
    return tmpStr.split(divMark);
}

/*
 * Function :  문자열, 자리수, 앞뒤구분 받아 자리수를 맞춰서 앞(F)/뒤(B) Zero 채우기
 * Param    :  tmpStr : 검사할 문자열
               tmpNum : 자리수
               tmpFlag : F(앞) / 뒤(B)
 * Return   :  변환된 값 리턴, 검사할 문자열이 자리수 보다 크거나 같은 경우는 검사할 문자열을 그대로 리턴함
 * ex) FillValue(tmpStr , 10, 'F')
*/
function getZeroFilledVal(tmpStr,tmpNum, tmpFlag){
    var valTmp="";
    var tValue = tmpStr.length;

	if ( tValue >= tmpNum ) {
		valTmp = tmpStr;
	}else {
	    for(i=tValue; i< tmpNum; i++){
	        if(tmpFlag == 'F'){
	            valTmp += "0";
	            if(i == (tmpNum-1)){valTmp += ''+tmpStr; }
	        }else{
	            if(i == tValue){valTmp += tmpStr; }
	            valTmp += ''+"0";
	        }
	    }
	}
return valTmp;
}

/*
 * Function :  문자열, 자리수, 앞뒤구분 받아 자리수를 맞춰서 앞(F)/뒤(B) 특정 문자 채우기
 * Param    :  tmpStr : 검사할 문자열
               tmpNum : 자리수
               fillChar : 자리수 만큼 채울 문자
               tmpFlag : F(앞) / 뒤(B)
 * Return   :  변환된 값 리턴, 검사할 문자열이 자리수 보다 크거나 같은 경우는 검사할 문자열을 그대로 리턴함
 * ex) FillValueByChar(tmpStr , 10, ' ', 'F')
*/
function getCharFilledValue(tmpStr,tmpNum, fillChar, tmpFlag){
    var valTmp="";
    var tValue = tmpStr.length;

	if ( tValue >= tmpNum ) {
		valTmp = tmpStr;
	}else {
	    for(i=tValue; i< tmpNum; i++) {
	        if(tmpFlag == 'F'){
	            valTmp += fillChar;
	            if(i == (tmpNum-1)){valTmp += ''+tmpStr; }
	        }else{
	            if(i == tValue){valTmp += tmpStr; }
	            valTmp += ''+ fillChar;
	        }
	    }
	}
return valTmp;
}


/*
 * Function :  숫자를 포멧이 갖추어진 문자열로 바꿈
 * Param    :  value  : 검사할 값
               format : 변환할 형태
 * Return   :  변환된 값 리턴
 * ex) getFormat(value , "###3.#####")
 * 부연설명 : ###3 <= 숫자3은 세자리마다 ,를 찍겠다는 말
              .##### <= .(소수점)뒤로 5자리까지 표현하겠다는 말
*/
function getFormattedVal(value,format){

    value = ""+value;

    if(!format)
        return value;

    var sp = parseInt(format.charAt(3));

    if(!sp)
        return value;

    var pos = 0;
    var ret = "";
    var vSplit = value.split('.');
    var fSplit = format.split('.');
    var fp = fSplit[1];
    var fv = vSplit[1];
    var lv = vSplit[0];
    var len = lv.length;

    for(var i = len % sp; i < len; i += sp){
        if(i == 0 || lv.charAt(i-1) == '-')
            ret += lv.substring(pos,i);
        else
            ret += lv.substring(pos,i)+',';
        pos = i;
    }

    ret += lv.substring(pos,len);

    if(!fv)
        fv = "";
    if(!fp)
        fp = "";

    var len1 = fp.length;
    var len2 = fv.length;

    if(len1)
        ret += '.' + fv.substring(0,len1) + fp.substring(len1,len2);
    return ret;
}


/*
 * Function :  숫자 -> 한글로 변환
 * Param    :  string  : 변환 할 값
 * Return   :  변환된 값 리턴 / 123 -> 일백이십삼
 * ex) ChangeIntHan(string)
*/
function changeInt2Han(string){
      hn = new Array("영","일","이","삼","사","오","육","칠","팔","구");
      hj = new Array("","만","억","조","경","해");
      ul = new Array("영천","영백","영십","영");
      tm = new Array();
      result = "";

      if (string.charAt(0)=="-"){
          result = "마이너스 ";
          string = string.substr(1,string.length-1);
      }
      loop_size = Math.ceil(string.length/4);
               string2 = "";
      for (count=string.length; count >= 0; count--)
          string2 += string.substring(count,count-1);
          string = string2;
      for (A=0;A<loop_size;A++){
        sum = hj[A] + " ";
        tm[A] = string.substr(A*4,4);

        tm2 = "";
            for (count=tm[A].length; count >= 0; count--)
            tm2 += tm[A].substring(count,count-1);
            tm[A] = tm2;
            part_jari = tm[A].length;
             for (D=0;D<10;D++){
                for (B=0;B<10;B++) tm[A] = tm[A].replace(B,hn[B]);
             }

        if (part_jari == 4) tm[A] = tm[A].charAt(0)+"천"+tm[A].charAt(1)+"백"+tm[A].charAt(2)+"십"+tm[A].charAt(3);
        else if (part_jari == 3) tm[A] = tm[A].charAt(0)+"백"+tm[A].charAt(1)+"십"+tm[A].charAt(2);
        else if (part_jari == 2) tm[A] = tm[A].charAt(0)+"십"+tm[A].charAt(1);
        else tm[A] = tm[A].charAt(0);
        for (C=0;C<4;C++){
          if (tm[A].match(ul[C])){
            part_jari--; tm[A] = tm[A].replace(ul[C],"");
          }
        }
        if (part_jari != 0) tm[A] += sum;
      }
      for (loop_size;loop_size>-1;loop_size--) result += tm[loop_size];
      result = result.replace("undefined","");
      return result;
}


/*
 * Function :  숫자 -> 한자로 변환
 * Param    :  string  : 변환 할 값
 * Return   :  변환된 값 리턴 / 일백이십삼 -> 壹百貳拾參
 * ex) ChangeIntHanJa(string)
*/
function changeInt2HanJa(string){
      hn = new Array("영","壹","貳","參","四","五","六","七","八","九");
      hj = new Array("","萬","億","兆");
      ul = new Array("영千","영百","영拾","영");
      tm = new Array();
      result = "";

      if (string.charAt(0)=="-"){
          result = "마이너스 ";
          string = string.substr(1,string.length-1);
      }
      loop_size = Math.ceil(string.length/4);
               string2 = "";
      for (count=string.length; count >= 0; count--)
          string2 += string.substring(count,count-1);
          string = string2;
      for (A=0;A<loop_size;A++){
        sum = hj[A] + " ";
        tm[A] = string.substr(A*4,4);

        tm2 = "";
            for (count=tm[A].length; count >= 0; count--)
            tm2 += tm[A].substring(count,count-1);
            tm[A] = tm2;
            part_jari = tm[A].length;
             for (D=0;D<10;D++){
                for (B=0;B<10;B++) tm[A] = tm[A].replace(B,hn[B]);
             }

        if (part_jari == 4) tm[A] = tm[A].charAt(0)+"千"+tm[A].charAt(1)+"百"+tm[A].charAt(2)+"拾"+tm[A].charAt(3);
        else if (part_jari == 3) tm[A] = tm[A].charAt(0)+"百"+tm[A].charAt(1)+"拾"+tm[A].charAt(2);
        else if (part_jari == 2) tm[A] = tm[A].charAt(0)+"拾"+tm[A].charAt(1);
        else tm[A] = tm[A].charAt(0);
        for (C=0;C<4;C++){
          if (tm[A].match(ul[C])){
            part_jari--; tm[A] = tm[A].replace(ul[C],"");
          }
        }
        if (part_jari != 0) tm[A] += sum;
      }
      for (loop_size;loop_size>-1;loop_size--) result += tm[loop_size];
      result = result.replace("undefined","");
      return result;
}



// 사용빈도 : 중
// 함수명: 입력된 문자가 숫자 혹은 분수인지를 검증
// 설  명: 입력된 문자가 숫자, 분수(1/3,2/5..)인가를 체크하는 함수
// 인  자: obj(입력 컨트롤명)
// --------------------------------------------------------------------------------------------
// 사용법: 사용자가 텍스트박스에 숫자값으로만 입력되어야 할 경우 이를 검증하기 위해서 아래와 같이 사용
//         <input type="text" onBlur="cmm_check_fraction(this, '납입건수내역')">
// --------------------------------------------------------------------------------------------
function isFraction(obj){
    var i,j;
    var str = new String(obj.value);
    var check_slash = 0;

    if ((str == '')||(str.length == 0))
        return true;

    for(i=0;i< str.length;i++){
        if(!isInt(str.charAt(i))){
			if( str.charAt(i) != '/' ){
				alert('정수 또는 분수만 입력가능합니다.');
                obj.focus();
                obj.select();
                return false;
            } else {
               check_slash++;
               if (i==0) {
					alert('정수 또는 분수만 입력가능합니다.');
                   obj.focus();
                   obj.select();
                   return false;
               }
            }
        }
    }
    j = i -1;

    if (str.charAt(j) == '/' || check_slash > 1) {
		alert('정수 또는 분수만 입력가능합니다.');
        obj.focus();
        return false;
    }
    return true;
}

// 사용빈도 : 상
// 함수명: 숫자열, 하이픈 검사
// 설  명: 숫자 혹은 구분자('-', '.' 등)로만 구성되어 있는지를 검사
// 인  자: obj(화면컨트롤), sep(구분자)
// --------------------------------------------------------------------------------------------
// 사용법: <input type="text" onBlur="cmm_check_digit_body2(this, '-')">
// 주  의: 화면컨트롤에 데이타가 없는 경우에는 false를 리턴
// --------------------------------------------------------------------------------------------
function checkDigitBody2(obj, sep){

    var str=obj.value;
    if (str.length == 0)
		return false;
    for (var i = 0; i < str.length; i++){
		var ch = str.substring(i, i + 1);
		if ((ch < "0" || "9" < ch)){
			if (ch != sep)
 			   return false;
		}
    }
    return true;
}

// 사용빈도 : 상
// 함수명: 특수문자(|)의  포함유무 검증
// 설  명: 특수문자(|)가 해당 스트링에 있는지를 검증
// 인  자: obj(변환대상 문자열을 가지고 있는 화면 컨트롤오브젝트)
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
function checkEtc2(obj){
	var str = obj.value;
	if(str != null && str != ''){
		var len = str.length;
		if(len != null){
			for(var i=0;i<len;i++){
				if(str.charAt(i) == '|'){
					alert("특수문자 " + "'|'" + "는 입력할 수 없습니다");
					obj.focus();
					obj.select();
					break;
				}
			}
		}
	}
}


// ??諛곗뿴媛?
//-------------------------------------------------------------------
function monthArray(m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11) {
	this[0] = m0; this[1] = m1; this[2] = m2; this[3] = m3;
	this[4] = m4; this[5] = m5; this[6] = m6; this[7] = m7;
	this[8] = m8; this[9] = m9; this[10] = m10; this[11] = m11;
}


// 사용빈도 : 중
// 함수명: 실수,정수,금액 유효성 체크 및 허용하지 않는 문자는 경고 없이 자동 삭제
// 인  자: 필수 : obj(입력 컨트롤명), cmd(숫자 유형)
// 사용법: <input name="num1" type="text"  onkeyup= "cmm_numberOnly(this, 'money')"  ...>
//            일반적으로 다른 function에서 내부적 호출로 쓰임
function getNumberOnly(obj, cmd) {
    var instr = obj.value;
    var cstr = "";
    var tempstr = "";
    
    if(cmd == "real") {
        cstr = "0123456789.-";          //실수
    } else if(cmd == "real2") {
        cstr = "0123456789.";          //양의실수
    } else if(cmd=="int"){
        cstr="0123456789-";             //정수
    } else if(cmd=="money"){
        cstr="0123456789,";            //금액
    } else if(cmd == "real3"){
        cstr = "0123456789.-,";          //실수 : , 포함
	}else if(cmd=='numeric'){
        cstr = "0123456789";          //숫자
	}

	//거꾸로 돌려야 함 
    if(instr.length) {
		var len = instr.length;
        for(var i=len-1; i>=0; i--) {
            if(cstr.lastIndexOf(instr.charAt(i)) == -1) {
				instr = instr.substring(0, i)+ instr.substring(i+1);
                obj.value = instr;
            }
        }
    }

}

//obj에서 인자로 정한 char를 삭제
//cmm_erase_obj_char(obj, p_char)
function eraseCharFromObj(obj, p_char){
	var p_char = p_char;
	var instr = obj.value;

	//거꾸로 돌려야 함 
    if(instr.length) {
		var len = instr.length;
        for(var i=len-1; i>=0; i--) {			
			if(instr.charAt(i) == p_char){
				instr = instr.substring(0, i)+ instr.substring(i+1);
				obj.value  = instr;
			}
        }//end for
    }

	//obj.value  = instr;

}

//str 에서 인자로 정한 char를 삭제
//cmm_erase_str_char(str, p_char)
function eraseCharFromStr(str, p_char){
	var p_char = p_char;
	var instr = str;

	//거꾸로 돌려야 함 
    if(instr.length) {
		var len = instr.length;
        for(var i=len-1; i>=0; i--) {			
			if(instr.charAt(i) == p_char){
				instr = instr.substring(0, i)+ instr.substring(i+1);
			}
        }//end for
    }

	return instr;

}

//cmm_remove_special_char2(obj, sep)
function removeSpChar(obj, sep){

	if(obj.value.length == 0) return true;
	
	var str = obj.value;
	var str_len = str.length;
	var sep_len = sep.length;

	if(sep_len == 0) return true;

	for(var i=str_len-1; i >= 0 ; i--){//거꾸로 루핑
		for(var j=0; j<sep_len; j++){
			if(str.charAt(i) == sep.charAt(j)){
				str = str.substring(0, i) + str.substring(i+1);
			}
		}
	}
	obj.value = str;
	return true;

}

//cmm_real_check 에서 내부적으로 호출
// obj 에서 소수점 제거 : 
// 소수점이 있다면 하나만 남기고 제거 cmm_erase_dot(obj)
function eraseDot(obj){
	var isDot = false;
	var dot_count = 0;
	var str = obj.value;
	var str_len = str.length;
	var dot = '.';
	for(var i=0;i<str.length;i++){
		if(str.charAt(i) == '.'){
			dot_count++;
		}
	}
	
	//모두 . 인 경우 , 다 지운다
	if(dot_count == str_len){//예 .. , 2 == 2
		obj.value = '';
		return isDot;
	}

	//거꾸로 돌려야 함 
    if(str.length) {
		var len = str.length;
        for(var i=len-1; i>=0 ; i--) {			
			if(dot_count == 1) break;
			if(str.charAt(i) == dot){
				str = str.substring(0, i)+ str.substring(i+1);
				dot_count--;
			}
        }//end for
    }

	if(dot_count == 1) isDot = true;

	if(str.charAt(0) == dot){
		str = '0'+ str;
	}
	obj.value = str;
	return isDot;
}

//소수점 붙이기 : obj에서 index에 소수점을 붙인다
//cmm_real_check 에서 내부적으로 호출
//cmm_add_dot(obj, total_limit, prime_limit)
function addDot(obj, total_limit, prime_limit){
	var str = obj.value;
	var len = str.length;
	var index = total_limit - prime_limit;
	if(len > index){//dot를 붙인다
		str = str.substring(0, index) + '.' + str.substring(index);
	}
	obj.value = str;
}

//cmm_protectKey_reload()
//새로 고침을 막는 스크립트
function protectReloadKey(){
        //새로고침을 막는 스크립트.. F5 번키..
        if(event.keyCode == 116){
                event.keyCode = 0;
                return false;
        }else if ((event.keyCode == 78) && (event.ctrlKey == true)){
        	//CTRL + N 즉 새로 고침을 막는 스크립트....
                event.keyCode = 0;
                return false;
        }else if (event.keyCode == 8){
        	//Backspace 뒤로가기 막는 스크립트....
			// input type=text, textarea 는 예외처리
				var obj = event.srcElement;
				if(obj.tagName == 'INPUT' || obj.tagName == 'TEXTAREA'){
					return true;
				}
                event.keyCode = 0;
                return false;
        }else if((event.keyCode == 37) && (event.altKey == true)){
			return false;
		}
		
}

// 사용빈도 : 상
// 함수명: cmm_check_is_selected(obj)
// 설  명: check box가 선택 되었는지 check
// 인  자: obj : 체크박스 객체
// --------------------------------------------------------------------------------------------
// 사용법: 
//          if (!cmm_check_is_selected(document.MAIN_FORM.chk)) {
//				return;	
//	         }
// --------------------------------------------------------------------------------------------
function isCheckBoxSelected(obj){
	if(obj != null){
		var len = obj.length;
		if(len == null){//one
			if(obj.checked) 
				return true;
		}else{//array
			for(var i=0;i<len;i++){
				if(obj[i].checked)
					return true;
			}
		}
		alert("자료를 선택하지 않았습니다.");
	}else{//화면에 체크박스가 없는 경우
		alert('자료 항목이 없습니다');
		return false;
	}
	return false;
}


/*
*********************************************************************************************************
*  	함수설명		: 해당문자열이 지정된 문자들만을 포함하고 있는지 검사한다.
*	str 			: 검사할 문자열
*	chars			: 지정된 문자들의 나열
***********************************************************************************************************
*/  
function isContainsOnly(str,chars) {
    for (var inx = 0; inx < str.length; inx++) {
       if (chars.indexOf(str.charAt(inx)) == -1)
       return false; 
    }
    return true;
}


/*
*********************************************************************************************************
*  	함수설명		: 지정하는 년,월,일이 달력상으로 존재하는 날짜인지 검사한다.
*	year 			: 년
*	month			: 월
*	day				: 일
***********************************************************************************************************
*/  
function isValidDay(year, month, day) {  	
    var m = parseInt(month,10) - 1;
    var d = parseInt(day,10);

    var end = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        end[1] = 29;
    }

    return (d >= 1 && d <= end[m]);
}


/*
*********************************************************************************************************
*  	함수설명: 문자열의 글자수체크를 한다. checkInputLength 등의 함수 내에서 호출된다.
*  	StrName : 글자수 체크를 할 문자열의 한글명칭. 에러 메시지 출력 시에 사용한다.
*	str 			: 글자 수 체크를 할 문자열
*	maxLen 			: 해당 필드의 최대글자수 (한글2,영문1)
*	
***********************************************************************************************************
*/
function isUnderMaxLen(strName,str , maxLen){

	var i, len=0;
	var korLen = maxLen / 2;

	for(i=0;i < str.length; i++) (str.charCodeAt(i) > 255)? len+=2:len++;
	if (maxLen < len) {
		alert(strName + "은(는) 영문(숫자)"+maxLen+"자, 한글"+korLen+"자까지만 가능합니다. 현재 글자수(영문기준) : "+len);
		return false;
	}
	return true;
}

/*
해당 function을 사용하기 위해선 html 객체에 fieldTitle, num, required,
filter, maxLength, minLength 등의 사용자 정의 attribute들이 있어야 한다.
*/

/* validation 메인 함수 */
function validateForm(form){
     for(vi=0; vi<form.elements.length;vi++){
        var formField = form.elements[vi];
        var fieldType = formField.type;
        if(fieldType != 'hidden' && fieldType !='password'){
            var fieldName = formField.name;
            var fieldValue = trimStr(formField.value);
            var num = formField.num;
            var fieldTitle = formField.fieldTitle

            if(formField.required != null && fieldType == "radio"){
                fieldValue = "";
                var wi = vi;
                while(form.elements[wi].type == "radio"){
                    if(form.elements[wi].checked == true){
                        fieldValue = form.elements[wi].value
                    }
                    wi++
                }
                form.elements[wi].value = fieldValue
            }
            if(formField.required != null && fieldValue == ""){
                alert(fieldTitle+"은(는) 필수 입력 항목입니다.")
                return returnFalse(formField)
            }
            if(formField.filter != null && checkSpecialChar2(fieldValue,formField.filter)){
                alert(fieldTitle+"에 다음과 같은 문자는 입력할 수 없습니다."+"\n\n"+formField.filter);
                return returnFalse(formField)
            }
            if(formField.maxLength != null && !checkMaxLength(fieldValue,formField.maxLength)){
                alert(fieldTitle+"은(는) 최대 문자열 수를 초과했습니다."+ "\n\n"  + "최대 문자열 수(영문기준) : " + formField.maxLength);
                return returnFalse(formField)
            }
            if(formField.minLength != null && !checkMinLength(fieldValue,formField.minLength)){
                alert(fieldTitle+"은(는) 입력해야할 최소 문자열 수보다 작습니다."+ "\n\n"  + "최소 문자열 수(영문기준) : " + formField.minLength);
                return returnFalse(formField)
            }
            if(num != null && fieldValue != ""){
                if(num == "" && !checkNumber(fieldValue,".-")){
                    alert(fieldTitle+"은(는) 실수만 입력 가능합니다.");
                    return returnFalse(formField)
                }else if(num == "i" && !checkNumber(fieldValue,"-")){
                    alert(fieldTitle+"은(는) 정수만 입력 가능합니다.");
                    return returnFalse(formField)
                }else if(num == "n" && !checkNumber(fieldValue,"")){
                    alert(fieldTitle+"은(는) 숫자만 입력 가능합니다.");
                    return returnFalse(formField)
                }else if(num != "" && num != "i"){
                    if(!checkNumber(fieldValue,".-")){
                        alert(fieldTitle+"은(는) 실수만 입력 가능합니다.");
                        return returnFalse(formField)
                    }
                    var oneTwo = num.split(".");
                    if(!checkNumLength(fieldValue,oneTwo[0],oneTwo[1])){
                        alert(fieldTitle+"은(는) 유효한 숫자 형식이 아닙니다.\n\n"+"정수부의 최대 자리수 : "+oneTwo[0]+"   소수점 자리수 : "+oneTwo[1]);
                        return returnFalse(formField)
                    }
                }
            }

            if(formField.fromNum != null && checkNumber(fieldValue,"-.")){
                if(eval(formField.fromNum) > eval(fieldValue)){
                    alert(fieldTitle+"은(는) " +formField.fromNum+"이상의 숫자만 입력 가능합니다.")
                     return returnFalse(formField)
                }
            }
            if(formField.toNum != null && checkNumber(fieldValue,"-.")){
                if(eval(formField.toNum) < eval(fieldValue)){
                    alert(fieldTitle+"은(는) " +formField.toNum+"이하의 숫자만 입력 가능합니다.");
                    return returnFalse(formField)
                }
            }

            if(formField.format != null && formField.format != "" && fieldValue !=""){
                if(!maskFormat(fieldValue, formField.format)){
                    alert(fieldTitle+"은(는) 유효한 형식이 아닙니다.\n\n형식 : "+formField.format);
                    return returnFalse(formField)
                }
            }

            if(formField.char != null && !validateChar(formField.char,fieldValue,fieldTitle)){
                    return returnFalse(formField)
            }

            if(formField.valCheck != null && !validateEtc(formField, vi)){
                return returnFalse(formField)
            }
          /* 사용자 정의 validation을 할 경우 fncUserValidation으로 만들어서 사용한다.
            if(fncUserValidation != null && formField.valCheck != null && !fncUserValidation(formField, vi)){
                return returnFalse(formField)
            }*/

        } // hidden if
    } // end for
    return true;
}

/* 문자 체크 모음 함수 (negative 임) */
function validateChar(char,fieldValue,fieldTitle){
    if(char.indexOf("k") >= 0 && !checkChar(fieldValue, "k")){
        alert(fieldTitle+"에 한글만 입력할 수 없습니다.")
        return false
    }
    if(char.indexOf("e") >= 0 && !checkChar(fieldValue, "e")){
        alert(fieldTitle+"에 영문자만 입력할 수 없습니다.")
        return false
    }
    if(char.indexOf("n") >= 0 && !checkChar(fieldValue, "n")){
        alert(fieldTitle+"에 숫자만 입력할 수 없습니다.")
        return false
    }
    return true
}

/* 공통적이지만 필수적이지 않은 필드들 체크*/
function validateEtc(formField, index){
    var fieldName = formField.name
    var fieldValue = trimStr(formField.value)
    var fieldTitle = formField.fieldTitle

    if(fieldName.toUpperCase().indexOf("MAIL") > -1 && fieldValue !="" && !checkEmail(fieldValue) ){
        alert(fieldTitle+"은(는) 유효한 이메일 주소가 아닙니다.\n\n"+" ex) sds@samsung.com");
        return false
    }
    if(fieldName.toUpperCase().indexOf("URL") > -1 && fieldValue !="" && !checkURL(fieldValue) ){
        alert(fieldTitle+"은(는) 유효한 웹 주소가 아닙니다.\n\n"+" ex) www.samsungsds.co.kr");
        return false
    }
    if(fieldName.toUpperCase().indexOf("PHONE") > -1 && fieldValue !="" && !checkPhoneStr(fieldValue) ){
        alert(fieldTitle+"은(는) 유효한 전화번호가 아닙니다.\n\n"+" ex) 02-202-0020");
        return false
    }
    return true
}


/* value를 trim 처리 */
function trimStr(str) {
    if(str == null)
        return ''
    var count = str.length;
    var len = count;
    var st = 0;

    while ((st < len) && (str.charAt(st) <= ' ')) {
        st++;
    }
    while ((st < len) && (str.charAt(len - 1) <= ' ')) {
        len--;
    }
    return ((st > 0) || (len < count)) ? str.substring(st, len) : str ;
}

/* value의 최대 바이트 수를 체크 */
function checkMaxLength(formValue, maxlength){
    var temp;
    var bytes = 0;
    var len = formValue.length;

    for(ii=0; ii<len; ii++){
        temp = formValue.charAt(ii) ;

	//escape code의 길이가 4보다 크면 한글
	if(escape(temp).length > 4){
	    bytes += 2;
	}else{
	    bytes++;
	}
    }
    if(maxlength >= bytes){
	return true;
    } else {
	return false;
    }
}

/* value의 최소 바이트 수를 체크 */
function checkMinLength(formValue, minlength){
    var temp;
    var bytes = 0;
    var len = formValue.length;

    for(ii=0; ii<len; ii++){
        temp = formValue.charAt(ii) ;

	//escape code의 길이가 4보다 크면 한글
	if(escape(temp).length > 4){
	    bytes += 2;
	}else{
	    bytes++;
	}
    }
    if(minlength <= bytes){
	return true;
    } else {
	return false;
    }

}

/* 허용하지 않는 문자 체크 (recommended)*/
function checkSpecialChar(fieldValue, str) {

    var re=new RegExp(str);

    if(re.test(fieldValue)){
        return true
	}
    return false
}

/* 허용하지 않는 문자 체크 2 */
function checkSpecialChar2(fieldValue, str) {
    var retCode = 0
    for (sc = 0; sc < str.length; sc++) {
        var code = str.charCodeAt(sc)
        var ch = str.substr(sc,1).toUpperCase()

        code = parseInt(code)
        if(fieldValue.indexOf(ch) >= 0){
            return true
        }
    }
    return false
}

/* 문자 체크
    type = k : 한글
                e : 영어
                n : 숫자
*/
function checkChar(str, type){
    var retCode = 0
    for (i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i)
        var ch = str.substr(i,1).toUpperCase()

        code = parseInt(code)
        if (type=="k" && (ch < "0" || ch > "9") && ( ch < "A" || ch > "Z") && ((code > 255) || (code < 0))) {
            return true
        }
        if (type=="e" && (ch >= "A") && (ch <= "Z")) {
            return true
        }
        if (type=="n" && (ch >= "0" && ch <= "9")) {
            return true
        }
    }
    return false
}

/* 숫자와 허용되는 문자(z) 체크 */
function checkNumber(x,z){
    var cmp = "1234567890";
    var ifor;

    var return_value = true;

    len = x.length;

    if (z !=''){
        cmp = "1234567890"+z;
    }

    if (x == "" || x == null || len < 1){
        return_value = false;
    }else{
	for(ifor=0;ifor<len;ifor++){
            if(cmp.indexOf(x.substring(ifor,ifor+1))<0){
		return_value=false;
	    }
	}
    }
    return return_value;
}

/* 일정 형식의 value 체크
    format default value 가 9 : 숫자
                                           s : 문자를 나타냄
    구분기호('-',','...)는 상관없다
 */
function maskFormat(fieldValue, format){

    var sStr = fieldValue
    var ik;
    var jk=0;
    var tLen = sStr.length +1 ;
    if(fieldValue.length != format.length){
        return false
    }

    for(ik=0; ik< sStr.length; ik++){
        if(format.charAt(jk)!="9" && format.charAt(jk)!="s"){
            if(sStr.charAt(ik) != format.charAt(jk)){
                return false
            }
        }else{
            if(format.charAt(jk) =="9" && !isTemPositiveInteger(sStr.charAt(ik))){
                return false
            }
            if(format.charAt(jk) =="s" && isTemPositiveInteger(sStr.charAt(ik))){
                return false
            }

        }
        jk++;
    }
    return true;
}

/* return 공통 함수 */
function returnFalse(formField){
    formField.focus();
    return false
}


/*
공통
*/

function checkEmail(fieldValue){
    if(fieldValue != "" && (fieldValue.indexOf('@') == -1 || fieldValue.indexOf('.') == -1)){
	return false;
    }
    return true;
}

function checkURL(fieldValue){
    if(fieldValue != "" &&fieldValue.indexOf('.') == -1){
	return false;
    }
    return true;
}

/* 전화번호 체크 ( '-' 포함) */
function checkPhoneStr(fieldValue){
    if(fieldValue != "" && fieldValue.indexOf('-')==-1){
    	return false;
    }else{
    	notN = false;
    	phones = fieldValue.split('-');
    	for(pc=0; pc < phones.length ; pc++){
    		if(isNaN(phones[pc])) {
    			notN = true;
    		}
    	}
    	if (notN == true || fieldValue.indexOf(".") >=0) {
    		return false;
    	}
    	return true;
    }
}

/*  엔터키 체크 */
function checkEnterKey(){
    if(event.keyCode==13) {
        return true;
    }
    return false;
}

/* textarea 문자열 바이트수 체크 */
function checkTextLength(formField, maxlength){
    var formValue = formField.value;
    if(!checkMaxLength(formValue, maxlength)){
	var count=0;
	for(var bytes=0; bytes < maxlength; bytes++,count++){
            var temp = formValue.charAt(count) ;
	    if(escape(temp).length > 4){
                if(bytes == eval(maxlength-1)){
                    count--;
                }else{
		    bytes++;
		}
	    }
	}
        var fieldTitle = formField.fieldTitle;
        alert ( fieldTitle +"은(는) 최대 문자열 길이를 초과했습니다." + "\n\n"  + "최대 글자수(영문기준) :" + maxlength);
	formField.value = formValue.substring(0, count);
	return returnFalse(formField)
    }
}

/* 숫자 체크
    first :정수부 최대 자리수, last:소수부 자리수
*/
function checkNumLength(value, first, last){

    var value = trimStr(value);
    var temp = value.split(".");
    if(temp.length > 2) return false;

    if(value.length > 0){
        if(checkLength(temp[0])){
            if(temp[0].length <= first){
                if(temp[1] != null && temp[1].length > 0){
                    if(checkLength(temp[1])){
                        if(temp[1].length <= last){
                            return true;
                        }else {
                            return false;
                        }
                    }else {
                        return false;
                    }
                }else return true;
            }else {
                return false;
            }
        }else {
            return false;
        }
    }else return true;
}

    function checkLength(value){
        if(isTemSignedIntegers(value)){
            if(isTemPositiveInteger(value)){
                return true;
            }else return false;
        }else return false;
    }

    function isTemPositiveInteger(s){
        return (isTemSignedIntegers(s) && (parseInt (s) >= 0 ));
    }

    function isTemSignedIntegers(s){
        if(isTemEmpty(s))
            return false;

        var startPos = 0;

        if((s.charAt(0) == "-") || (s.charAt(0) == "+"))
            startPos = 1;
        return (isTemInteger(s.substring(startPos, s.length)))
    }

    function isTemEmpty(s){
        return ((s == null) || (s.length == 0))
    }

    function isTemInteger(s){
        var i;

        if(isTemEmpty(s))
            return false

        for(i=0 ; i< s.length ; i++){
            var c = s.charAt(i);
            if(!isTemDigit(c)) return false;
        }

        return true;
    }

    function isTemDigit(c){
        return ((c >= "0") && (c <="9"))
    }


function checkPinNo(J1,J2){
    if(J1 =="111111" || J2 =="1111118"){
	alert("올바른 형식의 주민등록 번호 13자리를 입력하세요")
	return false;
    }else{
	// 주민등록번호 1 ~ 6 자리까지의 처리
	// 주민등록번호에 숫자가 아닌 문자가 있을 때 처리
        for(i=0;i<J1.length;i++){
	    if (J1.charAt(i) >= 0 && J1.charAt(i) <= 9){
	    // 숫자면 값을 곱해 더한다.
		if(i == 0)
		    SUM = (i+2) * J1.charAt(i);
		else
		    SUM = SUM +(i+2) * J1.charAt(i);
	    }else{
		 // 숫자가 아닌 문자가 있을 때의 처리
		alert("숫자값만 입력 가능합니다.");
		return false;
	    }
	}//end of for loop

	for(i=0;i<2;i++){
            // 주민등록번호 7 ~  8 자리까지의 처리
	    if(J2.charAt(i) >= 0 && J2.charAt(i) <= 9){
                SUM = SUM + (i+8) * J2.charAt(i);
	    }else{
		// 숫자가 아닌 문자가 있을 때의 처리
	        alert("숫자값만 입력 가능합니다.");
		return false;
	    }
	}

	for(i=2;i<6;i++){
	    // 주민등록번호 9 ~ 12 자리까지의 처리
	    if (J2.charAt(i) >= 0 && J2.charAt(i) <= 9) {
	        SUM = SUM + (i) * J2.charAt(i);
	    }else{
	        // 숫자가 아닌 문자가 있을 때의 처리
		alert("숫자값만 입력 가능합니다.");
		return fale;
	    }
	}

	// 나머지 구하기
	var checkSUM = SUM % 11;
	// 나머지가 0 이면 10 을 설정
	if(checkSUM == 0){
	    var checkCODE = 10;
	    // 나머지가 1 이면 11 을 설정
	}else if(checkSUM ==1){
	    var checkCODE = 11;
	}else{
	    var checkCODE = checkSUM;
	}
	// 나머지를 11 에서 뺀다
	var check1 = 11 - checkCODE;
	if (J2.charAt(6) >= 0 && J2.charAt(6) <= 9) {
            var check2 = parseInt(J2.charAt(6))
	}else{
	    // 숫자가 아닌 문자가 있을 때의 처리
	    alert("숫자값만 입력 가능합니다.");
	}
	if(check1 != check2){
	    // 주민등록번호가 틀릴 때의 처리
	    alert("올바른 형식의 주민등록 번호 13자리를 입력하세요")
	    return false;
	}else{
	    return true;
	}
    }
}



function isEmpty(p_str){
	if( p_str == null || trim(p_str) == "" || typeof p_str == 'undefined' ) {
		return true;
	}
    return false;
}

//처리중 메시지 화면에 출력하기
//html_procIng
function processIngMsg(p_left, p_top ){

	if(isEmpty(p_left)) p_left = 70;
	if(isEmpty(p_top)) p_top = 130;

	document.write("<div id='N1'>");
	document.write("<table>");
	document.write("  <tr>");
	document.write("  	<td height=1></td>");
	document.write("  </tr>");
	document.write("  <tr>");
	document.write("  	<td>&nbsp;</td>");
	document.write("  	<td><font size=2 color=white><b>[ 처리중입니다. 잠시만 기다려주십시오... ]</b></font></td>");
	document.write("  </tr>");
	document.write("</table>");
	document.write("</div>");
	document.write("</layer>");
	document.write("<div id='E1' style='position:absolute; left:"+p_left+"px; top:"+p_top+"px; width:290px; height:64px; z-index:1; visibility:hidden;'>");
	document.write("<table border='0'>");
	document.write(" <tr>");
	document.write("   <td width='290' height='56' style='background-color:rgb(231,231,231); border-width:1px; border-color:black; border-style:double;'><p><font face='Gulim' size='2'>&nbsp;&nbsp;&nbsp;[ 처리중입니다. 잠시만 기다려주십시오... ] </font>");
	document.write("   </td>");
	document.write(" </tr>");
	document.write("</table>");
	document.write("</div>");


}

//처리중 메시지 보여주기
//show_procIng
function showProcessMsg(){
	if(navigator.appName=="Netscape"){
		document.N1.visibility = "visible";
	}else{
	    E1.style.visibility = "visible";
	}
}



// 함수명: 숫자로 구성된 문자열인가를 체크하는 함수(문자열에 ','가 있는 경우에는 제거)
// 설  명: 해당 필드가 숫자로 구성된 문자인지를 검증하는 함수. 
//         주로 사용자가 입력하는 값이 숫자로만 구성되어야 할 경우에 사용자에게
//         alert창을 표시하는 등의 기능으로 응용 가능함
//         (위의 check_digit함수와 동일하며 ','를 제거하는 것만 상이)
// 인  자: obj(입력 컨트롤명)
// --------------------------------------------------------------------------------------------
// 사용법: 사용자가 텍스트박스에 숫자값으로만 입력되어야 할 경우 이를 검증하기 위해서 아래와 같이 사용
//         <input type="text" onBlur="cmm_is_digit(this, '민원접수번호')">
// --------------------------------------------------------------------------------------------
function isDigit(obj){	
    var i;
    var str =  new String(obj.value);
	str = delComma(obj); // 10,304일 경우 쉼표를 제거하고 판단
    for(i=0;i<str.length;i++)
        if(!isInt(str.charAt(i))){
            obj.focus();
            obj.select();
            return false;
        }
    return true;
}


//-------------------------------------------------------------------
// ?쒓컙遺꾩큹 ?좏슚 Check
//-------------------------------------------------------------------
function isHHMM(value) {

	var hh = value.substring(0,2) ;
	var mm = value.substring(2,4) ;
	
	if (!isNumber(hh)) 
		return false;

	if (hh > 23 || hh < 0) 
		return false;

	if (!isNumber(mm))
		return false;

	if (mm > 60 || mm < 0) 
		return false;

	return true;
}

//-------------------------------------------------------------------
// ?쒓컙遺??좏슚 Check (?댁꽭??
//-------------------------------------------------------------------
function isHHMMSS(value) {

	var hh = value.substring(0,2) ;
	var mm = value.substring(2,4) ;
	var ss = value.substring(4,6) ;
	
	if (!isNumber(hh)) 
		return false;

	if (hh > 23 || hh < 0) 
		return false;

	if (!isNumber(mm))
		return false;

	if (mm > 60 || mm < 0) 
		return false;

	if (!isNumber(ss))
		return false;

	if (ss > 60 || ss < 0)
		return false;
	return true;
}



//-------------------------------------------------------------------
// ??泥댄겕
//-------------------------------------------------------------------
function isMonth(value) {
	return((value.length > 0) && (isNumber(value)) && (0 < eval(value)) && (eval(value) < 13));
}
//-------------------------------------------------------------------
// ?곕룄 泥댄겕
//-------------------------------------------------------------------
function isYear(value) {
	return((value.length == 4) && (isNumber(value)) && (value != "0000"));
}




function checkLen(obj, len) {
	var str = obj.value;
	if (checkByte(str) > len) {
		obj.value = cutStr(str, len);
		obj.focus();
	}  
}


/* textarea 문자열 바이트수 체크 prmTextLengthCheck */
function isOverTextAreaLength(formField, maxlength){
    var formValue = formField.value;
    if(!isOverMaxLength(formValue, maxlength)){
	var count=0;
	for(var bytes=0; bytes < maxlength; bytes++,count++){
            var temp = formValue.charAt(count) ;
	    if(escape(temp).length > 4){
                if(bytes == eval(maxlength-1)){
                    count--;
                }else{
		    bytes++;
		}
	    }
	}
        //var fieldTitle = formField.fieldTitle;
        //alert ( fieldTitle +"은(는) 최대 문자열 길이를 초과했습니다." + "\n\n"  + "최대 글자수(영문기준) :" + maxlength);
	formField.value = formValue.substring(0, count);
	return false;
    }
}


// 사용빈도 : 상
// 함수명: cmm_check_length(obj, len, str)
// 설  명: 문자열의 길이에 따른 처리 함수
// 인  자: obj : 해당 객체, len : 지정길이, str: 항목명
// --------------------------------------------------------------------------------------------
// 사용법: 
//          <textarea name="ta" rows="4" cols=20 class="td_input" style="width:100%"  
//	onblur= "cmm_check_length(this, 100, '항목')" >
//			</textarea>
// --------------------------------------------------------------------------------------------
function checkLength(obj, len, str){
    obj.value = getLtrim(obj.value);
    complen = checkByte(obj.value);
    if ( complen > len) {
        alert(str + len + 'Byte를 초과할수 없습니다. 현재 ' + complen + 'Byte입니다.');
        obj.focus();
        return false;
    }
    return true;
}


// 사용빈도 : 중 cmm_del_comma_replace
// 함수명: 숫자열에서 ','문자제거하고, 그 결과를 컨트롤에 세팅
// 설  명: 화폐구분자로 사용되는 ','문자를 제거하고 컨트롤에 세팅하는 함수. 
//         보통 화면에는 ,로 표시하고, DB에는 ','를 제외한 숫자만을 insert할 때 사용
// 인  자: obj(화면 입력박스명)
// 리  턴: 없음
function delCommaNReplace(obj) {
	obj.value =  delComma(obj);
}

// 사용빈도 : 상
// 함수명: 화폐단위에 자동으로 3자리 쉼표 붙이는 함수
// 설  명: 입력창에 숫자 데이터를 입력할때 자동으로 3자리별로 ',' 가 붙어 입력되게 하기 위해 사용한다.
// 인  자: obj(화면입력 컨트롤)
// --------------------------------------------------------------------------------------------
// 사용법: <INPUT name="txtCtrl" size="10" style="text-align:right" maxlength="10" 
//          onKeyUp= "javascript:cmm_add_comma(this);">
// --------------------------------------------------------------------------------------------
//주의  : 이 함수를 사용할때 Input 박스 값이 숫자 값인지 체크할 때는 쉼표를 자동으로 체크하여
//        숫자여부를 판단하는 is_digit(obj)를 사용한다.
function addComma(obj) {
	var str = '';
	var str = String(delComma(obj));

	if (str.length < 1) {
        return "";
    } else {
        var tm = "";
        var ck = "";
		var tm1 = "";
		var tm2 = "";

        if (str.substring(0, 1) == "-") {
            tm = str.substring(1, str.length);
            ck = "Y";
        } else {
            tm = str;
            ck = "N";
        }
		//실수경우 . 을 기준으로 그 앞에만 comma 를 붙임
		var idx = 0;
		var isReal = false;//실수여부
		 for(i=0;i<tm.length;i++){			
			if(tm.charAt(i)=='.'){
				idx = i;
				isReal = true;
				break;
			}
		}//end for
		if(isReal){
			tm1 = tm.substring(0, idx);
			tm2 = tm.substring(idx+1, tm.length);
			tm = tm1;
		}

        var st = "";
        var cm = ",";

        for (var i = tm.length, j = 0; i > 0; i--, j++) {

			if ((j % 3) == 2) {
                if (tm.length == j + 1) st = tm.substring(i - 1, i) + st;
                else st = cm + tm.substring(i - 1, i) + st;
            } else {
                st = tm.substring(i - 1, i) + st;
            }
        }

        if (ck == "Y"){
			st = "-" + st;
		}
		if(isReal){//실수경우
			st +=  "."+ tm2;
		}	
		obj.value = st;
		}
}

// 사용빈도 : 중
// 함수명: 날짜여부를 체크
// 설  명: 날짜체크
// 인  자: 날짜문자만 있는 스트링(20040430) cmm_isDateYMD
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
function isDateYMD(ymd){
	var yy,mm,dd;
	var y = "";
	var m = "";
	var d = "";
	y = ymd.substring(0, 4);
	m = ymd.substring(4, 6);
	d = ymd.substring(6, 8);

	if (isValidDay(y, m, d) == true ){
		return true;
	}else{
		return false;	
	}
}

// 사용빈도 : 중
// 함수명: 날짜여부를 체크
// 설  명: 날짜체크
// 인  자: 데쉬형태로 된 스트링(2004-04-30)
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
function isDateYMDDash(ymd){
	var yy,mm,dd;
	var y = "";
	var m = "";
	var d = "";

	y = ymd.substring(0, 4);
	m = ymd.substring(5, 7);
	d = ymd.substring(8, 10);

	if ( isValidDay(y, m, d) == true ){
		return true;
	}else{
		return false;	
	}
}

//--------------------------------------------------------------------------------------
// 날짜에 자동으로 Hyphen('-')을 추가하는 함수
// 수정값 - 날짜의 정해진 위치에 Hyphen('-')을 추가
//--------------------------------------------------------------------------------------
function addDttmHyphen(obj){
	var sep = '-';
	var str = '';
    var tmp_dttm_num = delHyphen(obj);

	if (tmp_dttm_num.length <= 4) {
	    return "";
	}
	else if (tmp_dttm_num.length <= 6) {
        str = tmp_dttm_num.substring(0,4) + sep + tmp_dttm_num.substring(4,6);
    }
	else {
	    str = tmp_dttm_num.substring(0,4) + sep + tmp_dttm_num.substring(4,6) + sep + tmp_dttm_num.substring(6,8);
    }

	obj.value = str;
}

//--------------------------------------------------------------------------------------
// 달력사용하는 날짜의 경우 달력사용하지 않고 직접 입력을 할때
// 쌍으로 존재하는 hidden object 인 obj2의 값과 입력한 obj1 값을 일치시켜줌
// cmm_couple_day
//--------------------------------------------------------------------------------------
function setHiddenDayVal(obj1, obj2) {
	addDttmHyphen(obj1);
	obj2.value = delHyphen(obj1);
}


// 사용빈도 : 상
// 함수명: 텍스트박스의 입력여부 검증
// 설  명: Input 텍스트에 내용이 있는지를 검증하여 사용자가 입력하지 않았다면 메시지를 표시함
// 인  자: obj(입력 컨트롤명), str(메시지를 뿌려줄 값)
// --------------------------------------------------------------------------------------------
// 사용법: 사용자가 텍스트박스에 숫자값으로만 입력되어야 할 경우 이를 검증하기 위해서 아래와 같이 사용
//         <input type="text" onBlur="cmm_is_not_null(this, '주민등록번호')">
// --------------------------------------------------------------------------------------------
function isNotNull(obj){
    obj.value = getLtrim(obj.value);
    if (obj.value == '')    {
        obj.focus();
        return false;
    }else
        return true;
}

// 사용빈도 : 상
// 함수명: 사업자 등록번호를 체크하는 함수
// 설  명: 사업자 등록번호인지 유효성을 검사
// 인  자: obj(검사대상 문자열)
// --------------------------------------------------------------------------------------------
// 사용법: <input type="text" onBlur="cmm_is_bizno(this)">
// --------------------------------------------------------------------------------------------
function isBizNo(obj){
	var as_Biz_no =  String(obj.value);
	var isNum = true;
	var I_TEMP_SUM = 0 ;
	var I_TEMP = 0;
	var S_TEMP;
	var I_CHK_DIGIT = 0;

	as_Biz_no = getRmSpChar(as_Biz_no, '-');

 	I_TEMP_SUM = I_TEMP_SUM + parseInt(as_Biz_no.substring(0,1),10)     ;
 	I_TEMP_SUM = I_TEMP_SUM + parseInt(as_Biz_no.substring(1,2),10) * 3 ;
 	I_TEMP_SUM = I_TEMP_SUM + parseInt(as_Biz_no.substring(2,3),10) * 7 ;
 	I_TEMP_SUM = I_TEMP_SUM + parseInt(as_Biz_no.substring(3,4),10)     ;
 	I_TEMP_SUM = I_TEMP_SUM + parseInt(as_Biz_no.substring(4,5),10) * 3 ;
 	I_TEMP_SUM = I_TEMP_SUM + parseInt(as_Biz_no.substring(5,6),10) * 7 ;
 	I_TEMP_SUM = I_TEMP_SUM + parseInt(as_Biz_no.substring(6,7),10)     ;
 	I_TEMP_SUM = I_TEMP_SUM + parseInt(as_Biz_no.substring(7,8),10) * 3 ;
 	I_TEMP  				= parseInt(as_Biz_no.substring(8,9),10)*5,'00';
	if (I_TEMP < 10)
		S_TEMP = '0' + String(I_TEMP);
	else
		S_TEMP = String(I_TEMP);

	I_TEMP_SUM = I_TEMP_SUM + parseInt(S_TEMP.substring(0,1)) + parseInt(S_TEMP.substring(1,2)) ;
	I_CHK_DIGIT= (10-(I_TEMP_SUM%10))%10 ;
 	if (as_Biz_no.substring(9,10) != String(I_CHK_DIGIT)) return false;

 	return true ;
}


// 사용빈도 : 상
// 함수명: 숫자로 구성된 문자열인가를 체크하는 함수
// 설  명: 해당 필드가 숫자로 구성된 문자인지를 검증하는 함수. 
//         주로 사용자가 입력하는 값이 숫자로만 구성되어야 할 경우에 사용자에게
//         alert창을 표시하지 않음
// 인  자: txt(검증대상문자열) cmm_check_digit2
// --------------------------------------------------------------------------------------------
// 사용법: 사용자가 텍스트박스에 숫자값으로만 입력되어야 할 경우 이를 검증하기 위해서 아래와 같이 사용
//         <input type="text" onBlur="cmm_chek_digit2('12345')">
// --------------------------------------------------------------------------------------------
function checkDigit2(txt){
    var    i;
    var    str =  new String(txt);
    for(i=0;i<str.length;i++)
        if(!isInt(str.charAt(i))){
            return false;
        }
    return true;
}



// 사용빈도 : 상
// 함수명: 법인등록번호의 유효성 검사
// 설  명: 법인등록번호의 유효성을 검사
// 인  자:  obj(검사대상 input object)
// --------------------------------------------------------------------------------------------
// 사용법: 
//         <input type="text" onBlur="cmm_bupin_check(form.obj1, form.obj2, this )">
// --------------------------------------------------------------------------------------------
function checkBupinNo(obj1, obj2){
  var ddVal;
  var sno = obj1.value + obj2.value;

    if ( sno == "" || sno == null ) {
        alert("법인등록번호를 입력하세요.");
		obj1.select();
		obj1.focus();
        return false;
    }

    if ( !checkDigit2(sno) ) {
        alert("법인등록번호는 숫자만 입력할 수 있습니다.");
		obj1.select();
		obj1.focus();
        return false;
    }

    if ( sno.length != 13 ) {
        alert("법인등록번호의 길이가 맞지 않습니다.");
		obj1.select();
		obj1.focus();
        return false;
    }
     ddVal = 0;
     ddVal = ddVal + (parseFloat(sno.substring(0, 1)) * 1);
     ddVal = ddVal + (parseFloat(sno.substring(1, 2)) * 2);
     ddVal = ddVal + (parseFloat(sno.substring(2, 3)) * 1);
     ddVal = ddVal + (parseFloat(sno.substring(3, 4)) * 2);
     ddVal = ddVal + (parseFloat(sno.substring(4, 5)) * 1);
     ddVal = ddVal + (parseFloat(sno.substring(5, 6)) * 2);
     ddVal = ddVal + (parseFloat(sno.substring(6, 7)) * 1);
     ddVal = ddVal + (parseFloat(sno.substring(7, 8)) * 2);
     ddVal = ddVal + (parseFloat(sno.substring(8, 9)) * 1);
     ddVal = ddVal + (parseFloat(sno.substring(9, 10)) * 2);
     ddVal = ddVal + (parseFloat(sno.substring(10, 11)) * 1);
     ddVal = ddVal + (parseFloat(sno.substring(11, 12)) * 2);
  
     ddC = parseFloat(sno.substring(12, 13));
 
     dcVal = '0' + ddVal;
  
  
    if (dcVal.length==3){
     ddM2 = dcVal.substring(2, 3);
    } else {
     ddM2 = dcVal.substring(3, 4);
    }

   ddM3 = 10 - ddM2;
 
   if (ddC != ddM3) {
        alert("올바른 법인등록번호가 아닙니다.");
		obj1.select();
		obj1.focus();	
        return false;
   }
   return true;
}





// 사용빈도 : 상
// 함수명: 외국인 등록번호 체크
// 설  명: 외국인 등록번호를 체크한다.
// 인  자: obj(검사대상 input object)isDateYMD
// --------------------------------------------------------------------------------------------
// 사용법: <input type="text" onBlur="cmm_validFrPersonal_Id(form.obj1, this )">
//         cmm_validFrPersonal_Id
// --------------------------------------------------------------------------------------------
//주의  : 예전에 부여한 외국인등록번호체계는 신 번호체계규칙과 상이하여 오류가 발생한다. 
//        따라서, 아래와 같이 없는 외국인 번호일 경우에도 계속 진행하도록 처리한다.
function isValidFrPersonalid(obj1, obj2){ 
	var p_id = obj1.value + obj2.value;

    if ( p_id == "" || p_id == null ) {
        alert("외국인등록번호를 입력하세요.");
        return false;
    }

    if ( !checkDigit2(p_id) ) {
        alert("외국인등록번호는 숫자만 입력할 수 있습니다.");
        return false;
    }

    if ( p_id.length != 13 ) {
        alert("외국인등록번호의 길이가 맞지 않습니다.");
        return false;
    }

	errfound = false; 

	var str_jumin = p_id.replace(/-/g,"");

	var str_jumin1 = str_jumin.substring(0,6); 
	var str_jumin2 = str_jumin.substring(2,6); 
	var str_jumin3 = str_jumin.substring(6,7); 
	var str_jumin4 = str_jumin.substring(0,2); 
	var checkImg=''; 

	var i3=0 
	for (var i=0;i<str_jumin1.length;i++) 
	{ 
		var ch1 = str_jumin1.substring(i,i+1); 
		if (ch1<'0' || ch1>'9') { i3=i3+1 } 
	} 

	q = "없는 외국인등록번호 입니다. 계속 진행 하시겠습니까?";
	if(str_jumin3 != '5' && str_jumin3 != '6' && str_jumin3 != '7' && str_jumin3 != '8'){
		if(confirm(q) == true){
			return true;
		} else {
			obj1.select();
			obj1.focus();
		}
		return false;
	}

	if ((str_jumin1 == '') || ( i3 != 0 )) 
	{ 
		if(confirm(q) == true){
			return true;
		} else {
			obj1.select();
			obj1.focus();
		}
		return false;
	} 

	if((str_jumin1.length > 7) || (str_jumin2.length > 8)) 
	{ 
		if(confirm(q) == true){
			return true;
		} else {
			obj1.select();
			obj1.focus();
		}
		return false;
	} 

	if(str_jumin3 == '5' || str_jumin3 == '6'){
		if(!isDateYMD('19'.concat(str_jumin1))){
		if(confirm(q) == true){
			return true;
		} else {
			obj1.select();
			obj1.focus();
		}
			return false;
		}
	}
	if(str_jumin3 == '7' || str_jumin3 == '8'){
		if(!isDateYMD('20'.concat(str_jumin1))){
		if(confirm(q) == true){
			return true;
		} else {
			obj1.select();
			obj1.focus();
		}
			return false;
		}
	}
	return true;
} 


// 사용빈도 : 상
// 함수명: 텍스트박스의 입력여부 검증
// 설  명: Input 텍스트에 내용이 있는지를 검증하여 사용자가 입력하지 않았다면 메시지를 표시함
// 인  자: obj(입력 컨트롤명), str(메시지를 뿌려줄 값)
// --------------------------------------------------------------------------------------------
// 사용법: 사용자가 텍스트박스에 숫자값으로만 입력되어야 할 경우 이를 검증하기 위해서 아래와 같이 사용
//         <input type="text" onBlur="cmm_is_not_null(this, '주민등록번호')">
// --------------------------------------------------------------------------------------------
function isNotNullStr(str, str1){
    var tmp = getLtrim(str);
    if (tmp == '')    {
        return false;
    }else
        return true;
}

//************************   전화번호 Start   ********************************************//
// 사용빈도 : 중
// 함수명: 전화번호 유효성 
// 설  명: 전화번호 입력 유효성 체크
// 인  자: s1 : 전화번호1 object , s2 : 전화번호2 object , s3 : 전화번호3 object
// --------------------------------------------------------------------------------------------
// 사용법: if(!cmm_telno_ok(tel1, tel2, tel3) return;
// --------------------------------------------------------------------------------------------

function checkTelNo(s1, s2, s3){
    var flag = false;
    
    if( s1.value == ''  && s2.value == '' && s3.value == '' ) {
        return true;
    } else if(  s1.value != ''  &&  s2.value != '' &&  s3.value != ''  ){
        flag = ( checkDigit2(s1.value)
                && checkDigit2(s2.value)
                && checkDigit2(s3.value)
                );
        
        if(flag){
            flag = ( s1.value.charAt(0) == '0'
                    && checkByte(s1.value) >= 2 
                    && checkByte(s2.value) >= 2 
                    && checkByte(s3.value) == 4 
                    );

            if(flag && ( s1.value.charAt(1) == '2') ){
                flag = ( checkByte(s1.value) == 2 );
            } else if (flag && ( s1.value.charAt(1) != '2') ){
                flag = ( checkByte(s1.value) == 3 );
            }
            
            if(!flag) {
                alert('입력된 전화번호가 유효하지 않습니다.');
                s1.focus();
            }
        }
        
        return flag;
    
    } else {
        flag = ( isNotNullStr(s1.value) 
              && isNotNullStr(s2.value) 
              && isNotNullStr(s3.value) );
        return flag;
    }
}


// 사용빈도 : 중
// 함수명: 입력된 문자가 실수인가를 체크하는 함수
// 설  명: 해당 필드가 실수(-12.32 등)인지를 검증
// 인  자: obj(입력 컨트롤명)
// --------------------------------------------------------------------------------------------
// 사용법: 사용자가 텍스트박스에 숫자값으로만 입력되어야 할 경우 이를 검증하기 위해서 아래와 같이 사용
//         <input type="text" onBlur="cmm_check_actual_num(this, '인허가번호')">
// --------------------------------------------------------------------------------------------
function checkActualNum(obj, txt, sign){

	var sign = (sign==null) ? '' : sign;

	if(sign=='+'){
		getNumberOnly(obj, 'real2');//양의 실수 유효성 체크
	}else if(sign==''){
		getNumberOnly(obj, 'real');//실수 유효성 체크
	}

	var i,j;
	
    var str = new String(delComma(obj));

	var dot_index = -1;
	var dot_count = 0;
	var minus_count = 0;
	var minus_index = 0;
	var str_0_index = '';
    var txt = (txt==null) ? '해당 숫자 항목' : txt;
	var flag = true;

    if ((str == '')||(str.length == 0)) {
        return true;
	}

	str_0_index = str.charAt(0);
	str_1_index = str.charAt(1);

    for(i=0;i<str.length;i++)
    {
		if(str.charAt(i)=='.'){
			dot_index = i;
			dot_count++;
		}else if(str.charAt(i)=='-'){
			minus_count++;
			minus_index = i;
		}
    }//end for

	// . 
	if(dot_count > 1){
		var cstr = '.';
		var position = 0;
		var dot_count2 = 0;
		//거꾸로 돌려야 함 
		if(str.length) {
			var len = str.length;
			for(var i=len-1; i>=0; i--) {
				position = str.lastIndexOf(cstr);
				if(position != -1){
					dot_count2++;
					if(eval(dot_count - dot_count2) >=1){
						str = str.substring(0, position)+ str.substring(position+1);
					}
				}
			}//end for
			obj.value = str;
		}
		flag = false;
	}

	// - 
	if(minus_index > 0 || minus_count > 1){
		var cstr = '-';
		var position = 0;
		//거꾸로 돌려야 함 
		if(str.length) {
			var len = str.length;
			for(var i=len-1; i>=0; i--) {
				position = str.lastIndexOf(cstr);
				if(position != -1){
					str = str.substring(0, position)+ str.substring(position+1);
				}
			}
			obj.value = str;
		}

		if(str_0_index == '-'){
			obj.value = '-'+obj.value;
		}

		flag = false;
	}

	//남은 . 인덱스가 0 이거나 앞에 마이너스가 붙고 인덱스가 1이면
	var dot_index_2 = str.indexOf('.'); 
	var minus_index_2 = str.indexOf('-'); 

	if(dot_index_2 == 0 || ( (minus_index_2 == 0) && (dot_index_2 == 1) ) ){	
		var cstr = '.';
		var position = str.indexOf(cstr);
		if(position != -1){
			str = str.substring(0, position)+ str.substring(position+1);
			obj.value = str;
		}

		flag = false;
	}

 //   return flag;
    return true;
}

// 사용빈도 : 중
// 함수명: 실수의 소수점이하 유효숫자 자리수 체크
// 인  자: obj(입력 컨트롤명), size(소수점이하 유효숫자 자리수)
// 사용법: <input name="real_num" type="text"  onkeyup= "cmm_add_comma(this);cmm_real_figure(this, '2')"  ...>
function isRealFigure(obj, size, desc){

	var dot_position = obj.value.indexOf('.');
	var str_before_dot = '';
	var dot = '';

    if(dot_position != -1 ){
		str_before_dot = obj.value.substring(0, dot_position);
	}

    var str = new String(delComma(obj));
	var dot_index = 0;
	var dot_under_str = '';//소수점이하 숫자열
	var dot_under_len = 0;//소수점이하 숫자열의 길이
	var desc = (desc==null) ? '' : desc;

    if ((str == '')||(str.length == 0)) {
        return true;
	}

    for(i=0;i<str.length;i++){
        if(!isInt(str.charAt(i))){
			if(str.charAt(i)=='.'){
				dot_index = i;
				break;
			}
		}
    }//end for

	if(dot_index > 0 ){//소수점이 있다면
		dot_under_str = str.substring(dot_index+1);
		dot_under_len = dot_under_str.length;
		dot = '.';
		if(dot_under_len > size){
			dot_under_str = dot_under_str.substring(0, size);
			obj.value = str_before_dot + dot +dot_under_str;
		}
	}
	return true;
}


// 사용빈도 : 중
// 함수명: 실수의  정수부  유효숫자 자리수 체크
// 인  자: obj(입력 컨트롤명), size(정수부  유효숫자 자리수)cmm_int_figure

function isIntFigure(obj, size, desc){

	var minus = (obj.value.charAt(0) == '-' ) ? '-' : '';
	var dot = ''; //소수점

	var str = new String(delHyphen(obj));
    var str_dot = '';//소수점 이하 문자열
	str = delCommaStr(str);

	var dot_index = 0;
    var int_str = '';//정수부 숫자열
    var int_len = 0;//정수부 유효숫자 자리 길이
	var desc = (desc==null) ? '' : desc;

    if ((str == '')||(str.length == 0)) {
        return true;
	}

    for(i=0;i<str.length;i++){
        if(!isInt(str.charAt(i))){
			if(str.charAt(i)=='.'){
				dot_index = i;
				break;
			}
		}
    }//end for
	
	if(dot_index > 0 ){//소수점이 있다면
		int_str = str.substring(0, dot_index);
		str_dot = str.substring(dot_index+1);
		dot = '.';
	}else if(dot_index==0){
		int_str = str;
	}
	int_len = int_str.length;
	if(int_len > size){
		str = str.substring(0, size);
		obj.value = minus + str + dot +str_dot;
	}
	return true;

}

//cmm_real_check 에서 내부적으로 호출
// obj 에서 '-' 를 삭제
//cmm_erase_hypen(obj)
function eraseHypen(obj){
	var isMinusSign = false;
	var str = obj.value;
	if(str.charAt(0) == '-') isMinusSign = true;
    eraseCharFromObj(obj, '-');
	return isMinusSign;
}

// invalid zero 제거하는 재귀호출 function
// cmm_erase_invalid_zero 에서 내부적 호출
//cmm_erase_invalid_zero2
function eraseInvalidZero2(str){
	if(str.length >1){
		if(str.charAt(0)=='0'){
			str = str.substring(1);
			str = eraseInvalidZero2(str);
		}
	}
	return str;
}

//cmm_real_check 에서 내부적으로 호출
//invalid zero (맨앞의 0들 자리수 1 이상일때) 제거
//cmm_erase_invalid_zero(obj, isDot)
function eraseInvalidZero(obj, isDot){
	var obj = obj;
	var str = obj.value;
	var pre_str = '';//정수부
	var post_str = '';//소수부(소수부 있을때 채워짐)

	if(isDot){//소수점이 있다면, 정수부만
		var index = str.indexOf('.');
		pre_str = str.substring(0, index);
		post_str = str.substring(index);
		str = pre_str;
	}

	//숫자열 길이가 1보다 큰 경우 맨 앞의 0은 삭제
	//그 다음에도 0이 오면 재귀적으로 삭제 0이 안 나타날때까지
    if(str.length > 1){
		if(str.charAt(0)=='0'){
			str = str.substring(1);
			str = eraseInvalidZero2(str);
		}
	}
	obj.value = str + post_str;
}

//obj 의 전체 길이 초과 자르기
//cmm_cut_total_limit_obj(obj, total_limit, prime_limit)
function cutTotalLimitFromObj(obj, total_limit, prime_limit){//7,3
	if(prime_limit != '0'){//소수부 있다고 반드시 소수점 있지 않다

		//방법1 : 소수점 기준으로 각각 따로 cut
		//현재 소수점 인덱스 기준으로 정수부, 소수부 나누어서 잘라내기
		var str = obj.value;
		var index = str.indexOf('.');

		if(index != -1){//소수점 있는 경우
			var pre_str = str.substring(0, index);
			var post_str = str.substring(index+1);
			post_str = eraseCharFromStr(post_str,'.');//소수점 완전 삭제(없을 거 같다)

			var len = pre_str.length;
			var pre_limit = total_limit - prime_limit;
			if(len > pre_limit){
				pre_str = pre_str.substring(0, pre_limit);//정수부 cut
			}
			len = post_str.length;
			if(len > prime_limit){
				post_str = post_str.substring(0, prime_limit);//소수부 cut
			}
			str = pre_str + '.' + post_str;
			obj.value = str;

		}else{//소수점 없는 경우, 정수부 소수부로 나누어 준다
			var str_len = str.length;
			if(str_len > total_limit){
				str = str.substring(0,total_limit);
			}
			str_len = str.length;
			var pre_limit = total_limit - prime_limit;//정수부 자리수

			if(str_len <= pre_limit){//정수부보다 작다
				obj.value = str;
			}else if(str_len > pre_limit){
				var pre_str = str.substring(0, pre_limit);
				var post_str = str.substring(pre_limit);
				obj.value = pre_str + '.' + post_str;
			}
		}
		//방법2 : 소수점 제거후 해당 숫자열 합친후 소수점 재배치
		// number(7,3) 경우  12.12 --> 1212.0 으로 되는 식이 되므로  안됨
	}else if(prime_limit == '0'){//only 정수부
	    eraseCharFromObj(obj, '.');//소수점 완전 삭제
		var str = obj.value;
		var len = str.length;
		if(len > total_limit){
			str = str.substring(0, total_limit);
		}
		obj.value = str;
	}

}

// 사용빈도 : 중
// 함수명: 양의 실수 콤마붙이기, 숫자유효성, 양의 실수 체크, 숫자(실수) 자리수 체크(db관련)
// 인  자: 
//			필수 : obj(입력 컨트롤명), total_limit(전체 유효숫자 자리수), prime_limit(소수점이하 유효숫자 자리수)
//			옵션 : desc(메시징 타겟 오브젝트 이름)
// 사용법: <input name="num1" type="text"  onkeyup= "cmm_real_check(this, '7', '2', '실수')"  ...>
//cmm_plus_real_check(obj, total_limit, prime_limit, desc)

function plusRealNumCheck(obj, total_limit, prime_limit, desc){

	if(event != null){
		if(event.keyCode==9){return true;}
		if(event.keyCode==37 || event.keyCode==39) return true;//좌우방향키에 입력시엔 작동하지 않고 바로 반환
	}

	if(obj.value == '' || obj.value.length == 0) {obj.value = '0';return true;}//값이 없으면 검사 X, 통과

	getNumberOnly(obj, 'real2');//양의 실수 유효성 체크

	var isMinusSign = eraseHypen(obj);//- 제거(맨앞의 - 남기기) : 음의 실수 여부 체크 , 숫자, .

	var isDot = false;//소수점 있다 여부

	if(prime_limit != '0'){//소수부 있다
		isDot = eraseDot(obj);//소수점 제거 : 최초 소수점 만 제외
	}else if(prime_limit == '0'){//only 정수부
		// 소수점 이하 버리고, 정수부에서 숫자가 없으면 0 이나 공란
		var dot_idx = obj.value.indexOf('.');
		if(dot_idx != -1){
			obj.value = obj.value.substring(0, dot_idx);//소수부 버리기
		}
	}

	if(obj.value == '0'){
		return true;
	}

	eraseInvalidZero(obj, isDot);//invalid zero  제거 : 정수부의 zero만 

	cutTotalLimitFromObj(obj, total_limit, prime_limit);// 전체 길이 초과 자르기

	if(isMinusSign){
		obj.value = '-'+obj.value;
	}

	addComma(obj);//콤마붙이기
	return true;
}

// 사용빈도 : 중
// 함수명: 숫자(실수) 자리수 체크(db관련)
// 인  자: obj(입력 컨트롤명),  total_limit(전체 유효숫자 자리수), prime_limit(소수점이하 유효숫자 자리수)
// 사용법: <input name="num1" type="text"  onkeyup= "cmm_real_limit_check(this, '7', '2')"  ...>
function checkRealLimit(obj, total_limit, prime_limit, desc){
	var int_limit = total_limit - prime_limit;

    if(!isIntFigure(obj, int_limit, desc)) return false;
	
	if(prime_limit > 0){
		if(!isRealFigure(obj, prime_limit, desc)) return false;
	}
	return true;

}

// 사용빈도 : 중
// 함수명: 금액 콤마붙이기, 숫자유효성
// 인  자: 
//			필수 : obj(입력 컨트롤명)
//			옵션 : desc(메시징 타겟 오브젝트 이름)
// 사용법: <input name="num1" type="text"  onkeyup= "cmm_money_check(this, '금액1')"  ...>

function checkMoneyObj(obj, desc){	
	if(event.keyCode==37 || event.keyCode==39) return true;//좌우방향키에 입력시엔 작동하지 않고 바로 반환
	obj.value = delComma(obj);
	getNumberOnly(obj, 'money');//금액 유효성 체크
	eraseInvalidZero(obj, false);//invalid zero  제거 : 정수부의 zero만 
	addComma(obj);//콤마붙이기
	if(obj.value == '') obj.value = '0';
	return true;
}


//is_plus_real(obj)
function isPlusReal(obj){
    var str = new String(delComma(obj));
	var dot_index = -1;
	var dot_count = 0;
	var minus_count = 0;
	var minus_index = 0;

    if ((str == '')||(str.length == 0)) {
        return true;
	}
    for(i=0;i<str.length;i++){
        if(!isInt(str.charAt(i))){
			if(str.charAt(i)=='-'){
				alert('양수만 입력가능합니다');
				obj.focus();
				obj.select();
				return false;
			}
		}
    }//end for
	return true;
}

// 사용빈도 : 상
// 함수명: 특수문자 포함유무 검증
// 설  명: 특수문자가 해당 스트링에 있는지를 검증
// 인  자: obj(변환대상 문자열을 가지고 있는 화면 컨트롤오브젝트)
// ------------------cmm_check_etc(obj)--------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
function checkEtcObj(obj){
	var str = obj.value;
	if(str != null && str != ''){
		var len = str.length;
		if(len != null){
			for(var i=0;i<len;i++){
				if(isEtcChar(str.charAt(i))){
					alert('특수문자 입력할 수 없습니다');
					obj.focus();
					obj.select();
					break;
				}
			}
		}
	}
}	


//************************   팩스 Start   ********************************************//
// 사용빈도 : 중
// 함수명: 팩스번호 유효성 
// 설  명: 팩스번호 입력 유효성 체크
// 인  자: s1 : 팩스번호1 object , s2 : 팩스번호2 object , s3 : 팩스번호3 object
// --------------------------------------------------------------------------------------------
// 사용법: if(!cmm_faxno_ok(obj1, obj2, obj3) return;
// --------------------------------------------------------------------------------------------

function isValidFaxNo(s1, s2, s3){
    var flag = false;
    
    if( s1.value == ''  && s2.value == '' && s3.value == '' ) {
        return true;
    } else if(  s1.value != ''  &&  s2.value != '' &&  s3.value != ''  ){
        flag = ( checkDigit2(s1.value)
                && checkDigit2(s2.value)
                && checkDigit2(s3.value)
                );
        
        if(flag){
            flag = ( s1.value.charAt(0) == '0'
                    && checkByte(s1.value) >= 2 
                    && checkByte(s2.value) >= 2 
                    && checkByte(s3.value) == 4 
                    );

            if(flag && ( s1.value.charAt(1) == '2') ){
                flag = ( checkByte(s1.value) == 2 );
            } else if (flag && ( s1.value.charAt(1) != '2') ){
                flag = ( checkByte(s1.value) >= 3 );
            }
            
            if(!flag) {
                alert('입력된 팩스번호가 유효하지 않습니다.');
                s1.focus();
            }
        }
        
        return flag;
    
    } else {
        flag = ( isNotNullStr(s1.value) 
              && isNotNullStr(s2.value) 
              && isNotNullStr(s3.value) );
        return flag;
    }
}


// 사용빈도 : 상
// 함수명: 엔터를 사용한 화면컨트롤 이동
// 설  명: 텍스트박스에서 엔터키가 누를경우에 다음 순서의 컨트롤로 이동
// --------------------------------------------------------------------------------------------
// 사용법: 아래의 방법으로 텍스트박스에 "onkeypress="return cmm_handleEnter(this, event)"" 를 넣음
// <input type="text" onkeypress="return cmm_handleEnter(this, event)"> 
// --------------------------------------------------------------------------------------------
function handleEnterKey(field, event) {
	var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
	if (keyCode == 13) {
			var i;
			for (i = 0; i < field.form.elements.length; i++){
					if (field == field.form.elements[i])
							break;
			}
			i = (i + 1) % field.form.elements.length;

			if(field.form.elements[i].readOnly == true){
				i = skipReadonlyFocus(++i, field);
			}
			field.form.elements[i].focus();
			return false;
	} 
	else
	return true;
}    
// --------------------------------------------------------------------------------------------
// 사용법: cmm_handleEnter 에서 내부적 호출
// readOnly object를 skip 하기 위한 용도 , 재귀적 호출
//cmm_focus_readonly_skip(idx, field)
// --------------------------------------------------------------------------------------------
function skipReadonlyFocus(idx, field){
	if(field.form.elements.length-1 >= idx){
		if(field.form.elements[idx].readOnly == true){
			idx++;
			if(field.form.elements[idx].readOnly == true){
				idx = skipReadonlyFocus(++idx, field);
			}else{
				return idx;
			}
		}else{
			return idx;
		}
	}else{
		return idx-1;
	}
}

//오른쪽에 ch 문자 채우기
/*
*********************************************************************************************************
*  	함수설명		: 문자열을 정해진 길이만큼 오른쪽을 특정 문자로 채운다.
*	str 			: 문자열
*	len				: 총길이
***********************************************************************************************************
*/
function rPadString(str, ch, len){

	var strlen = trim(str).length;
	var ret = "";
	var alen = len - strlen;
	var astr = "";	
	
	//부족한 숫자만큼  len 크기로 ch 문자로 채우기
	for (i=0; i<alen; ++i){
		astr = astr + ch;
	}
	
	ret = trim(str) + astr;	//뒤에서 채우기
	return ret;
}