var currDate, oDropBtn, ctrlLayer, objYear, objMonth, currCell;
var objDateCells = new Array();
var VIEW_STATUS = false;

//
// Utility methods
//

function padZeros(num, size) {
  var str = num.toString();
  var numZeros = size - str.length;
  for (var i=0; i<numZeros; i++) str="0"+str;
  return str;
}
function getRealOffsetTop(o) { return o ? o.offsetTop + getRealOffsetTop(o.offsetParent) : 0; }
function getRealOffsetLeft(o) { return o ? o.offsetLeft + getRealOffsetLeft(o.offsetParent) : 0; }

function fullYear(year) {
	if(year<100) {
		year += 1900;
	}
	return year
}
//
// internal methods
//

function calAdjust(no) {
  var year = fullYear(currDate.getYear()); var month = currDate.getMonth();
  objYear.innerText = year+"년"; objMonth.innerText = month+1+"월";

  var dateFirst = new Date(year, month, 1);   var startCellNum = dateFirst.getDay();
  var dateLast = new Date(year, month+1, 0);  var endCellNum = startCellNum + dateLast.getDate() - 1;

  for (var i=0; i<42; i++)
    objDateCells[i].innerText = (i>=startCellNum && i<=endCellNum) ? i-startCellNum+1 : " ";

  if (currCell) { currCell.style.backgroundColor="white"; }
  currCell = objDateCells[currDate.getDate() + startCellNum - 1];
  currCell.style.backgroundColor="yellow";
}

function setNextMonth() { currDate.setMonth(currDate.getMonth() + 1); calAdjust(); }
function setPrevMonth() { currDate.setMonth(currDate.getMonth() - 1); calAdjust(); }
function setNextYear() { currDate.setYear(fullYear(currDate.getYear()) + 1); calAdjust(); }
function setPrevYear() { currDate.setYear(fullYear(currDate.getYear()) - 1); calAdjust(); }

function dateCellOnClick() {
  if (this.innerText=="") return;
  if (currCell) { currCell.style.backgroundColor="white"; }
  currDate.setDate(parseInt(this.innerText));
  currCell=this; currCell.style.backgroundColor="yellow";
}

function getDateStr() {
  return fullYear(currDate.getYear())+"-"+padZeros(currDate.getMonth()+1,2)+"-"+padZeros(currDate.getDate(),2);
}

function getSimpleDateStr() {
  return fullYear(currDate.getYear())+padZeros(currDate.getMonth()+1,2)+padZeros(currDate.getDate(),2);
}

function calHide() { ctrlLayer.style.visibility="hidden"; }
function calShow() { ctrlLayer.style.visibility="visible"; }

function calToggle() {
  if(VIEW_STATUS) {
    calHide();
	VIEW_STATUS = false;
  } else {
    calShow();
	VIEW_STATUS = true;
  }
}

function calUpdate() {
  currDate = (node.value != "") ?
    new Date(node.value.substr(0,4),node.value.substr(5,2)-1,node.value.substr(8,2)) : new Date();
  if (isNaN(currDate)) { node.value=""; currDate=new Date(); }
  calAdjust();
}

function viewToggle() {
	var elem = document.getElementById("mycal");
	if(elem!=null && VIEW_STATUS) {
		elem.parentNode.removeChild(elem);
		VIEW_STATUS = false;
		return false;
	}
	return true;
}
function CMMCalendar(o) {


  var _top;
  var _left;

   if (window.event.clientY+ 170 > document.body.clientHeight){
//     _top = window.event.clientY+document.body.scrollTop;
	if(window.event.clientY > 170){
	  _top = window.event.clientY - 170 + document.body.scrollTop;
	} else{
	   _top = window.event.clientY+document.body.scrollTop;	  
	}
   }
   else {
     _top = window.event.clientY+document.body.scrollTop;
	   
   }
   if (window.event.clientX + 100 > document.body.clientWidth){       
       _left = document.body.clientWidth - parseInt(200);
   }
   else  {
       _left = window.event.clientX - 100;
   }

  var node = o.previousSibling;

  if(!viewToggle()) return;

  currDate = (node.value != "") ?
    new Date(node.value.substr(0,4),node.value.substr(5,2)-1,node.value.substr(8,2)) : new Date();

  if (isNaN(currDate)) { 
	node.value=""; currDate=new Date(); 
  }

  var iframe = document.createElement('<iframe id="ifr" frameborder="0" scrolling="no" src="" width="200" height="160" style="z-index: 1; filter: Beta(Style=0,Opacity=0);"></iframe>');
  var innerLayer = document.createElement('<div style="background-color:white; position: absolute; top: 0; left: 0; width: 200px; z-index: 1; border=1px solid black"></div>');

  ctrlLayer = document.createElement("DIV");
  ctrlLayer.appendChild(iframe);
  ctrlLayer.appendChild(innerLayer);
  ctrlLayer.setAttribute("id", "mycal");

  with (ctrlLayer.style) {
    textAlign="center"; 
    fontSize="12px"; 
    position="absolute"; visibility="visible";
//    top=getRealOffsetTop(node)+20; 
//    left=getRealOffsetLeft(node); 

    top = _top;
    left = _left;

  }

  if(calToggle()) return;

  var oTable = document.createElement("<table width='100%' cellspacing=0 cellpadding=2 style='font-size:12px;border-collapse:collapse'>");
  innerLayer.appendChild(oTable);
  var row, cell, span, nbsp;
  var oTbody = document.createElement("TBODY"); oTable.appendChild(oTbody);

  row = document.createElement("TR"); oTbody.appendChild(row);
  cell = document.createElement("TH"); row.appendChild(cell);cell.style.backgroundColor="#E4EFF8"; 
  img = document.createElement("<image src='/img/icon/cal_prev2.gif' border='0' style='cursor:hand'>"); cell.appendChild(img);
  img.onmouseup = setPrevYear; img.onselectstart = function(){return false;}
  cell = document.createElement("TH"); row.appendChild(cell);cell.style.backgroundColor="#E4EFF8"; 
  img = document.createElement("<image src='/img/icon/cal_prev.gif' border='0' style='cursor:hand'>"); cell.appendChild(img);
  img.onmouseup = setPrevMonth; img.onselectstart = function(){return false;}

  cell = document.createElement("<th colspan=3>"); row.appendChild(cell);cell.style.backgroundColor="#E4EFF8";
  objYear = document.createElement("SPAN"); cell.appendChild(objYear);
  nbsp = document.createTextNode(" "); cell.appendChild(nbsp);
  objMonth = document.createElement("SPAN"); cell.appendChild(objMonth);

  cell = document.createElement("TH"); row.appendChild(cell);cell.style.backgroundColor="#E4EFF8";
  img = document.createElement("<image src='/img/icon/cal_next.gif' border='0' style='cursor:hand'>"); cell.appendChild(img);
  img.onmouseup = setNextMonth; img.onselectstart = function(){return false;}
  cell = document.createElement("TH"); row.appendChild(cell);cell.style.backgroundColor="#E4EFF8";
  img = document.createElement("<image src='/img/icon/cal_next2.gif' border='0' style='cursor:hand'>"); cell.appendChild(img);
  img.onmouseup = setNextYear; img.onselectstart = function(){return false;}

  row = document.createElement("TR"); oTbody.appendChild(row);
  var weekArray = ["일","월","화","수","목","금","토"];
  for (var i=0; i<7; i++)
    { cell=document.createElement("TH"); cell.innerText=weekArray[i]; row.appendChild(cell); }

  node.insertAdjacentElement("afterEnd", ctrlLayer);

  for (var i=0; i<6; i++) {
    row = document.createElement("TR"); oTbody.appendChild(row);
    for (var j=0; j<7; j++) {
      objDateCells[i*7+j] = cell = document.createElement("<td align=center style='cursor:hand'>");
	  if(j==0) cell.style.color = "red";
	  if(j==6) cell.style.color = "blue";
      row.appendChild(cell); cell.onclick = dateCellOnClick; cell.ondblclick = function(){

		  node.value=getDateStr();
		  realNode = document.getElementsByName(node.name.substring(2));
		  realNode[0].value=getSimpleDateStr();

		  node.focus();   //focus를 이동하여 onBlur등 이벤트 실행가능하도록 함
		  viewToggle();
	  }
      cell.onselectstart = function(){return false;}
    }
  }
  calAdjust();

}
