/********************************************************
   파일명 : ntis_cmm_jsp.js
   설  명 : 시군구 행정종합정보시스템 공통개발1팀 JavaScript
   작성자 : 이광진
   작성일 : 2006.03.23
   수정일 : 2006.03.23
*********************************************************/
// 상수 선언
var LINE_BREAK  = "\n";
var CMM_DEBUG = false;

// 함수명: 공백문자열 제거 함수
// 설  명: 해당문자열로부터 공백 또는 주어진 문자열을 제거한 후 반환한다.
// 인  자: 스트링(default : null)
// 리  턴: 공백이 제거된 문자열
// -------------------------------------------------------------------------
// 사용법: alert('  me rong  '.trim())
//         alert('::me:rong::'.trim(':'))
// -------------------------------------------------------------------------
String.prototype.trim = function() {
	var pattern = !arguments[0] ? /^\s+|\s+$/g : new RegExp('^['+arguments[0]+']+|['+arguments[0]+']+$', 'g')
	return this.replace(pattern, '')
}

// 함수명: 문자열 치환함수
// 설  명: 해당문자열에서 대상이 되는 모든 문자열을 치환한다.
// 인  자: tgt - 대상문자
//         repl - 치환문자
// 리  턴: 치환된 문자열
// -------------------------------------------------------------------------
// 사용법: alert("고 도 화   ".replaceAll(" ","*"));
// -------------------------------------------------------------------------
String.prototype.replaceAll = function(tgt, repl) {
	if(arguments.length != 2) return this;

	var result = this;
	if(this != "" && tgt != repl) {
		while(result.indexOf(tgt) != -1){
			result = result.replace(tgt, repl);
		}
	}
	return result;
}

function CMMEnterKey(btnName) {
	if(btnName == null || btnName == '') return;
	if(event.keyCode ==  "13" ) {
		document.all(btnName).click();
	}
}

function print() {
	var send = "";
	for(i in this) {
		if(typeof this[i] != "function") send += i + "[" + this[i] + "]" + LINE_BREAK;
	}
	return send;
}
function trimAll() {
	for(i in this) {
		if(typeof this[i] != "function") this[i] = this[i].trim();
	}
}

function CMMOpenPost(z1,z2,a1,a2) {
	var url = "/emwp/jsp/cmm/CMMPostLP.jsp?zip1="+z1+"&zip2="+z2+"&addr1="+a1+"&addr2="+a2;
	var pop = window.open(url,"pPost","width=500,height=400,scrollbars=yes");
	pop.focus();
}

function CMMOpenPostDiv(z1,z2,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14) {
	var url = "/emwp/jsp/cmm/CMMPostDivLP.jsp?zip1="+z1+"&zip2="+z2+"&addr="+a1+"&regnCode="+a2+"&sido="+a3+"&cgg="+a4+"&umd="+a5+"&ri="+a6+"&san="+a7+"&bunji="
	           +a8+"&ho="+a9+"&tong="+a10+"&ban="+a11+"&specAddr="+a12+"&specDng="+a13+"&specHo="+a14;
	var pop = window.open(url,"pPostDiv","width=518,height=330,scrollbars=yes");
	pop.focus();
}
function rowOver(obj) {
	obj.style.cursor = 'hand';
	obj.className = 'row-selected';
}
 
function rowOut(obj, no) {
	if(no%2==1)
		obj.className = 'row-odd';
	else
		obj.className = 'row-even';
}

function cmm_openAddrInfo(fN,z1,z2,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15){
	var url = "/emwp/jsp/cmm/CMMAddrLP.jsp?formName="+fN+"&zip1="+z1+"&zip2="+z2+"&addr="+a1+"&regnCode="+a2+"&sido="+a3+"&cgg="+a4+"&umd="+a5+"&ri="+a6+"&san="+a7+"&bunji="
	           +a8+"&ho="+a9+"&tong="+a10+"&ban="+a11+"&specAddr="+a12+"&specDng="+a13+"&specHo="+a14+"&fullAddr="+a15;

	var pop = window.open(url,"pAddr","width=750,height=330,scrollbars=no");
	pop.focus();
}

/**
// 함수명: 메인창에 주소정보 Set
// 설  명: 입력된 주소정보를 메인창(부모창)에 Set해줌
// 인  자: frm(주소창폼), openfrm(메인창폼), addrSeq(Set해줄 오브젝트구분 변수)
// 리  턴: 없음
// 2004-08-06 regencode_flag 추가
**/
function addr_openerSet(openerFrm, frm, zipName1, zipName2, addrName, regnCodeName, sidoName, cggName, umdName, riName, sanName,
						bunjiName, hoName, tongName, banName, specAddrName, specDngName, specHoName, fullAddrName)

{
//    var addrInfo  = new Array();
//    var fullAddr  = "";
    var zip1      = eval(frm+"."+zipName1+".value");
    var zip2      = eval(frm+"."+zipName2+".value");
    var regnCode  = eval(frm+"."+regnCodeName+".value");
    var sido      = eval(frm+"."+sidoName+".value");
    var cgg       = eval(frm+"."+cggName+".value");
    var umd       = eval(frm+"."+umdName+".value");
    var ri        = eval(frm+"."+riName+".value");
    var san       = "";
    var bunji     = eval(frm+"."+bunjiName+".value");
    var ho        = eval(frm+"."+hoName+".value");
    var tong      = eval(frm+"."+tongName+".value");

    var ban       = eval(frm+"."+banName+".value");
    var specAddr  = eval(frm+"."+specAddrName+".value");
    var specDng   = eval(frm+"."+specDngName+".value");
    var specHo    = eval(frm+"."+specHoName+".value");
    var fullAddr  = "";

    var addr = sido +' '+ cgg +' '+ umd;           //기본주소
    if (ri != '')    addr = addr + ' ' + ri;

    if(eval(frm+"."+sanName+".checked") == true ) {
        san = '2';
    } else {
        san = '1';
    }
    
	//fullAddr 구성
	fullAddr = addr;
	
	if(san == '2'){
		fullAddr = fullAddr+' '+'산';
	}
    if(bunji != '')     fullAddr = fullAddr+' '+bunji+'번지';
    if(ho != '')        fullAddr = fullAddr+' '+ho+'호';
    if(tong != '')      fullAddr = fullAddr+' '+tong+'통';
    if(ban != '')       fullAddr = fullAddr+' '+ban+'반';
	if(fullAddr != '')  fullAddr = fullAddr+' '+specAddr;
    if(specDng != '')   fullAddr = fullAddr+' '+specDng+'동';
    if(specHo != '')    fullAddr = fullAddr+' '+specHo+'호';

    // 전체주소 스트링 조합 End ************//

//    addrInfo[0]  =  postNo;         //우편번호        
//    addrInfo[1]  =  regnCode;       //지역코드
//    addrInfo[2]  =  sido;           //시도명
//    addrInfo[3]  =  cgg;            //시군구명
//    addrInfo[4]  =  umd;            //읍면동명
//    addrInfo[5]  =  ri;             //리명
//    addrInfo[6]  =  san;            //산구분
//    addrInfo[7]  =  bunji;          //번지
//    addrInfo[8]  =  ho;             //호
//    addrInfo[9]  =  tong;           //통
//    addrInfo[10] =  ban;            //반
//    addrInfo[11] =  specAddr;       //특수주소
//    addrInfo[12] =  specDong;       //특수지동
//    addrInfo[13] =  specHo;         //특수지호
//    addrInfo[14] =  fullAddr;       //전체주소

    if (eval("opener."+openerFrm+ "."+zipName1) != undefined)
	   eval("opener."+openerFrm+ "."+zipName1+"").value = zip1;
    if (eval("opener."+openerFrm+ "."+zipName2) != undefined)
	   eval("opener."+openerFrm+ "."+zipName2+"").value = zip2;
    if (eval("opener."+openerFrm+ "."+regnCodeName) != undefined)
	   eval("opener."+openerFrm+ "."+regnCodeName+"").value = regnCode;
    if (eval("opener."+openerFrm+ "."+addrName) != undefined)
	   eval("opener."+openerFrm+ "."+addrName+"").value = addr;
    if (eval("opener."+openerFrm+ "."+sidoName) != undefined)
	   eval("opener."+openerFrm+ "."+sidoName+"").value = sido;
    if (eval("opener."+openerFrm+ "."+cggName) != undefined)
	   eval("opener."+openerFrm+ "."+cggName+"").value = cgg;
    if (eval("opener."+openerFrm+ "."+umdName) != undefined)
	   eval("opener."+openerFrm+ "."+umdName+"").value = umd;
    if (eval("opener."+openerFrm+ "."+riName) != undefined)
	   eval("opener."+openerFrm+ "."+riName+"").value = ri;
    if (eval("opener."+openerFrm+ "."+sanName) != undefined)
	   eval("opener."+openerFrm+ "."+sanName+"").value = san;
    if (eval("opener."+openerFrm+ "."+bunjiName) != undefined)
	   eval("opener."+openerFrm+ "."+bunjiName+"").value = bunji;
    if (eval("opener."+openerFrm+ "."+hoName) != undefined)
	   eval("opener."+openerFrm+ "."+hoName+"").value = ho;
    if (eval("opener."+openerFrm+ "."+tongName) != undefined)
	   eval("opener."+openerFrm+ "."+tongName+"").value = tong;
    if (eval("opener."+openerFrm+ "."+banName) != undefined)
	   eval("opener."+openerFrm+ "."+banName+"").value = ban;
    if (eval("opener."+openerFrm+ "."+specAddrName) != undefined)
	   eval("opener."+openerFrm+ "."+specAddrName+"").value = specAddr;
    if (eval("opener."+openerFrm+ "."+specDngName) != undefined)
	   eval("opener."+openerFrm+ "."+specDngName+"").value = specDng;
    if (eval("opener."+openerFrm+ "."+specHoName) != undefined)
	   eval("opener."+openerFrm+ "."+specHoName+"").value = specHo;
    if (eval("opener."+openerFrm+ "."+fullAddrName) != undefined)
	   eval("opener."+openerFrm+ "."+fullAddrName+"").value = fullAddr;

    this.close();
}