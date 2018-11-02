/*
 * ����Ʈ MENU JSON
 */
var MenuInfo =[
	{ "id" : "00", "menu_code" : "000000", "nm" : "����", "link" : ""},
	{ "id" : "01", "menu_code" : "010000", "nm" : "�귣�� ���丮", "link" : "/story/intro.asp", "child" :
		[
		 	{ "id" : "01", "menu_code" : "010100", "nm" : "�귣�� ���丮", "link" : "/story/intro.asp"},
		 	{ "id" : "02", "menu_code" : "010200", "nm" : "�ѷ��긣 ����", "link" : "/story/ad/tv.asp"},
		 	{ "id" : "03", "menu_code" : "010300", "nm" : "�ѷ��긣 ����", "link" : "/story/webzine/list.asp"},
		 	{ "id" : "04", "menu_code" : "010400", "nm" : "��㸮�� �ѷ��긣", "link" : "/store/ratelier/default.asp"},
		 	{ "id" : "05", "menu_code" : "010500", "nm" : "�۷ι� �ѷ��긣", "link" : "/story/global.asp"},
		 	{ "id" : "06", "menu_code" : "010600", "nm" : "���� & ��������", "link" : "/community/news/list.asp"},
			{ "id" : "07", "menu_code" : "010700", "nm" : "�ѷ��긣 ���ѻ�", "link" : "/story/goodBread.asp"},
			{ "id" : "08", "menu_code" : "010800", "nm" : "����̾߱�", "link" : "/story/health/summary.asp", "child" :
				[
				 	{ "id" : "01", "menu_code" : "010801", "nm" : "����̾߱� ����", "link" : "/story/health/summary.asp"},
				 	{ "id" : "02", "menu_code" : "010802", "nm" : "�а���", "link" : "/story/health/flour.asp"},
				 	{ "id" : "03", "menu_code" : "010803", "nm" : "õ�Ͽ�", "link" : "/story/health/salt.asp"},
		 		 	{ "id" : "04", "menu_code" : "010804", "nm" : "������", "link" : "/story/health/milk.asp"},
		 		 	{ "id" : "05", "menu_code" : "010805", "nm" : "��ġ��", "link" : "/story/health/cheese.asp"},
		 		 	{ "id" : "06", "menu_code" : "010806", "nm" : "����", "link" : "/story/health/honey.asp"},
					{ "id" : "07", "menu_code" : "010807", "nm" : "������", "link" : "/story/health/potato.asp"},
					{ "id" : "08", "menu_code" : "010808", "nm" : "����ȣ��", "link" : "/story/health/butternut_squash.asp"}
				]
			},
		]
	},
	{ "id" : "02", "menu_code" : "020000", "nm" : "��ǰ �ȳ�", "link" : "/product/new.asp", "child" :
		[
			{ "id" : "01", "menu_code" : "020100", "nm" : "����ǰ", "link" : "/product/new.asp"},
			{ "id" : "02", "menu_code" : "020200", "nm" : "��", "link" : "/product/list.asp?ref=2", "child" :
		 		[
					{ "id" : "01", "menu_code" : "020201", "nm" : "��ü", "link" : "/product/list.asp?ref=2"},
		 		 	{ "id" : "02", "menu_code" : "020202", "nm" : "���Ŀ뻧", "link" : "/product/list.asp?ref=2&cg_num=11"},
		 		 	{ "id" : "03", "menu_code" : "020203", "nm" : "�Ļ����Ļ�뻧", "link" : "/product/list.asp?ref=2&cg_num=12"},
		 		 	{ "id" : "04", "menu_code" : "020204", "nm" : "����", "link" : "/product/list.asp?ref=2&cg_num=16"},
		 		 	{ "id" : "05", "menu_code" : "020205", "nm" : "���̡��н�Ʈ��", "link" : "/product/list.asp?ref=2&cg_num=15"},
		 		 	{ "id" : "06", "menu_code" : "020206", "nm" : "�������ǰ���", "link" : "/product/list.asp?ref=2&cg_num=13"},
		 		 	{ "id" : "07", "menu_code" : "020207", "nm" : "������", "link" : "/product/list.asp?ref=2&cg_num=14"}
		 		]
			},
			{ "id" : "03", "menu_code" : "020300", "nm" : "����ũ", "link" : "/product/list.asp?ref=3", "child" :
		 		[
					{ "id" : "01", "menu_code" : "020301", "nm" : "��ü", "link" : "/product/list.asp?ref=3"},
		 		 	{ "id" : "02", "menu_code" : "020302", "nm" : "��ũ������ũ", "link" : "/product/list.asp?ref=3&cg_num=22"},
		 		 	{ "id" : "03", "menu_code" : "020303", "nm" : "��������ũ", "link" : "/product/list.asp?ref=3&cg_num=20"},
		 		 	{ "id" : "04", "menu_code" : "020304", "nm" : "���������ũ", "link" : "/product/list.asp?ref=3&cg_num=17"},
		 		 	{ "id" : "05", "menu_code" : "020305", "nm" : "��������ũ", "link" : "/product/list.asp?ref=3&cg_num=21"},
		 		 	{ "id" : "06", "menu_code" : "020306", "nm" : "����Ʈ����ũ", "link" : "/product/list.asp?ref=3&cg_num=23"},
		 		 	{ "id" : "07", "menu_code" : "020307", "nm" : "����������ũ", "link" : "/product/list.asp?ref=3&cg_num=18"},
		 		 	{ "id" : "08", "menu_code" : "020308", "nm" : "���Ŀ�����ũ", "link" : "/product/list.asp?ref=3&cg_num=42"}
			 	]
			},
			{ "id" : "04", "menu_code" : "020400", "nm" : "������ġ", "link" : "/product/list.asp?ref=39", "child" :
		 		[
		 		 	{ "id" : "01", "menu_code" : "020401", "nm" : "��ü", "link" : "/product/list.asp?ref=39"},
					{ "id" : "02", "menu_code" : "020402", "nm" : "������ġ", "link" : "/product/list.asp?ref=39&cg_num=43"},
		 		 	{ "id" : "03", "menu_code" : "020403", "nm" : "������/����", "link" : "/product/list.asp?ref=39&cg_num=45"}
			 	]
			},
			{ "id" : "05", "menu_code" : "020500", "nm" : "����", "link" : "/product/list.asp?ref=4", "child" :
		 		[
					{ "id" : "01", "menu_code" : "020501", "nm" : "��ü", "link" : "/product/list.asp?ref=4"},
		 		 	{ "id" : "02", "menu_code" : "020502", "nm" : "Ŀ��", "link" : "/product/list.asp?ref=4&cg_num=25"},
					{ "id" : "03", "menu_code" : "020503", "nm" : "������", "link" : "/product/list.asp?ref=4&cg_num=57"}	,
		 		 	{ "id" : "04", "menu_code" : "020504", "nm" : "����", "link" : "/product/list.asp?ref=4&cg_num=27"},
		 		 	{ "id" : "05", "menu_code" : "020505", "nm" : "�����ֽ�&���̵�", "link" : "/product/list.asp?ref=4&cg_num=26"},
					{ "id" : "06", "menu_code" : "020506", "nm" : "Ƽ&�󶼷�", "link" : "/product/list.asp?ref=4&cg_num=58"},
		 		 	{ "id" : "07", "menu_code" : "020507", "nm" : "��������", "link" : "/product/list.asp?ref=4&cg_num=28"}
			 	]
			},
			{ "id" : "06", "menu_code" : "020600", "nm" : "��Ÿ", "link" : "/product/list.asp?ref=5", "child" :
				[
					{ "id" : "01", "menu_code" : "020601", "nm" : "��ü", "link" : "/product/list.asp?ref=5"},
		 		 	{ "id" : "02", "menu_code" : "020602", "nm" : "���뼱����", "link" : "/product/list.asp?ref=5&cg_num=34"},
		 		 	{ "id" : "03", "menu_code" : "020603", "nm" : "��Ű��", "link" : "/product/list.asp?ref=5&cg_num=38"},
		 		 	{ "id" : "04", "menu_code" : "020604", "nm" : "��/��������", "link" : "/product/list.asp?ref=5&cg_num=44"},
		 		 	{ "id" : "05", "menu_code" : "020605", "nm" : "���ݸ�/ĵ��", "link" : "/product/list.asp?ref=5&cg_num=35"},
		 		 	{ "id" : "06", "menu_code" : "020606", "nm" : "���̽�ũ��", "link" : "/product/list.asp?ref=5&cg_num=37"},
		 		 	{ "id" : "07", "menu_code" : "020607", "nm" : "��Ÿ by ��������", "link" : "/product/list.asp?ref=5&cg_num=40"}
			 	]
			},
			{ "id" : "07", "menu_code" : "020700", "nm" : "ĳ������ǰ", "link" : "/product/character.asp"},
			{ "id" : "08", "menu_code" : "020800", "nm" : "�˻����", "link" : "/product/result.asp"},
			{ "id" : "09", "menu_code" : "020900", "nm" : "������", "link" : "/product/list.asp?ref=69"},
			{ "id" : "10", "menu_code" : "021000", "nm" : "����", "link" : "/product/list.asp?ref=70"}
		]
	},
	{ "id" : "03", "menu_code" : "030000", "nm" : "���ο��� �ѷ��긣", "link" : "/bread/new.asp", "child" :
				[
				 	{ "id" : "01", "menu_code" : "030100", "nm" : "New �ѷ��긣 ���캸��", "link" : "/bread/new.asp"},
					{ "id" : "02", "menu_code" : "030200", "nm" : "�� ���� ���� ���� �ѷ��긣�� �Ϸ�", "link" : "/bread/intro.asp"}
				]
			},
	{ "id" : "04", "menu_code" : "040000", "nm" : "�̺�Ʈ&�����", "link" : "/community/event_tpl/list.asp", "child" :
		[
		 	{ "id" : "01", "menu_code" : "040100", "nm" : "�������� �̺�Ʈ", "link" : "/community/event_tpl/list.asp"},
		 	{ "id" : "02", "menu_code" : "040200", "nm" : "�̺�Ʈ ��÷��", "link" : "/community/winner/list.asp"},
		 	{ "id" : "03", "menu_code" : "040300", "nm" : "CJ ONE �����", "link" : "/membership/member.asp"},
		 	{ "id" : "04", "menu_code" : "040400", "nm" : "���� ����", "link" : "/membership/partner.asp", "child" :
				[
				 	{ "id" : "01", "menu_code" : "040301", "nm" : "��Ż� ����� ����", "link" : "/membership/partner.asp"},
				 	{ "id" : "02", "menu_code" : "040302", "nm" : "�ſ�ī��&����� ����ī�� ����", "link" : "/membership/partner2.asp"},
				 	{ "id" : "03", "menu_code" : "040303", "nm" : "����Ʈ&���ʽ� ���� ����", "link" : "/membership/partner3.asp"},
				 	{ "id" : "04", "menu_code" : "040304", "nm" : "��ǰ�� ����", "link" : "/membership/partner4.asp"}
			 	]
		 	}
		]
	},
	{ "id" : "05", "menu_code" : "050000", "nm" : "��� ä��ȳ�", "link" : "/recruit/recruit_index.asp", "child" :
		[
		 	{ "id" : "01", "menu_code" : "050100", "nm" : "���&�Ƹ�����Ʈ ä��ȳ�", "link" : "/recruit/recruit_index.asp", "child" :
				[
				 	{ "id" : "01", "menu_code" : "050101", "nm" : "���������� ä��ȳ�", "link" : "/recruit/bakery/intro.asp"},
				 	{ "id" : "02", "menu_code" : "050102", "nm" : "��ũ���ü��� ä��ȳ�", "link" : "/recruit/recruit_tech.asp"},
				 	{ "id" : "03", "menu_code" : "050103", "nm" : "��±�� ä��ȳ�", "link" : "/recruit/career_intro.asp"},
				 	{ "id" : "04", "menu_code" : "050104", "nm" : "�Ƹ�����Ʈä��", "link" : "/recruit/alba/alba_list.asp"}
				 ]
		 	},
		 	{ "id" : "02", "menu_code" : "050200", "nm" : "���&�Ƹ�����Ʈ ä�����", "link" : "/recruit/notice/list.asp", "child" :
				[
				 	{ "id" : "01", "menu_code" : "050201", "nm" : "�¶��� ����", "link" : "/recruit/apply_start.asp"},
				 	{ "id" : "02", "menu_code" : "050202", "nm" : "�¶��� ����", "link" : "/recruit/apply_start_career.asp"}
				 ]
		 	},
		 	{ "id" : "03", "menu_code" : "050300", "nm" : "�������", "link" : "/recruit/result.asp"},
		 	{ "id" : "04", "menu_code" : "050400", "nm" : "ä�� FAQ", "link" : "/recruit/faq.asp"}
		 ]
	},
	{ "id" : "06", "menu_code" : "060000", "nm" : "â���ȳ�", "link" : "/franchise/index.asp", "child" :
		[
		 	{ "id" : "01", "menu_code" : "060100", "nm" : "�ѷ��긣 �Ÿ𵨼Ұ�", "link" : "/franchise/introduction/new.asp", "child" :
				[
				 	{ "id" : "01", "menu_code" : "060101", "nm" : "���ο��� �ѷ��긣", "link" : "/franchise/introduction/new.asp"},
				 	{ "id" : "02", "menu_code" : "060102", "nm" : "�Ÿ��� ����", "link" : "/franchise/introduction/advantages.asp"}
				 ]
			},
		 	{ "id" : "02", "menu_code" : "060200", "nm" : "â���������丮", "link" : "/franchise/story/story.asp"},
		 	{ "id" : "03", "menu_code" : "060300", "nm" : "â���غ��ϱ�", "link" : "/franchise/preparation/procedure.asp", "child" :
				[
				 	{ "id" : "01", "menu_code" : "060301", "nm" : "â���غ�����", "link" : "/franchise/preparation/procedure.asp"},
				 	{ "id" : "02", "menu_code" : "060302", "nm" : "â�����ں�", "link" : "/franchise/preparation/investment.asp"},
				 	{ "id" : "03", "menu_code" : "060303", "nm" : "â������ȳ�", "link" : "/franchise/preparation/loanInvitation.asp"},
					{ "id" : "04", "menu_code" : "060304", "nm" : "â��FAQ", "link" : "/franchise/preparation/faq.asp"},
					{ "id" : "05", "menu_code" : "060305", "nm" : "â�����", "link" : "/franchise/preparation/consultation.asp"},
					{ "id" : "06", "menu_code" : "060306", "nm" : "â�����ǿ���ó", "link" : "/franchise/preparation/contactUs.asp"}
				 ]
			},
			{ "id" : "04", "menu_code" : "060400", "nm" : "â�� ����ȸ", "link" : "/franchise/briefing/periodic.asp", "child" :
				[
				 	{ "id" : "01", "menu_code" : "060401", "nm" : "����â������ȸ", "link" : "/franchise/briefing/periodic.asp"},
				 	{ "id" : "02", "menu_code" : "060402", "nm" : "�츮����â������ȸ", "link" : "/franchise/briefing/village.asp"},
				 	{ "id" : "03", "menu_code" : "060403", "nm" : "�ֺ�â������ȸ", "link" : "/franchise/briefing/weekend.asp"}
				 ]
			}
		 ]
	},
	{ "id" : "07", "menu_code" : "070000", "nm" : "�α���", "link" : "/CJFVSite/login.html", "child" :
		[
		 	{ "id" : "01", "menu_code" : "070100", "nm" : "���̵� ã��", "link" : "/CJFVSite/search_id.html"},
		 	{ "id" : "02", "menu_code" : "070200", "nm" : "��й�ȣ ã��", "link" : "/CJFVSite/search_pw.html"},
		 	{ "id" : "03", "menu_code" : "070300", "nm" : "ȸ�� ��� ����", "link" : "/CJFVSite/mem_subscrib.html", "child" :
		 		[
			 		{ "id" : "01", "menu_code" : "070301", "nm" : "�Ϸ�", "link" : "/CJFVSite/mem_subscrib_end.html"}
		 	    ]
		 	}
	 	]
	},
	{ "id" : "08", "menu_code" : "080000", "nm" : "����ȳ�", "link" : "/store/search.asp"},
	{ "id" : "09", "menu_code" : "090000", "nm" : "������", "link" : "/center/main.asp", "child" :
		[
		 	{ "id" : "01", "menu_code" : "090100", "nm" : "FAQ", "link" : "/center/faq.asp"},
		 	{ "id" : "02", "menu_code" : "090200", "nm" : "�¶��� ���", "link" : "/center/qna.asp"},
		 	{ "id" : "03", "menu_code" : "090300", "nm" : "�¶��� ��� ����", "link" : "/center/myQna/gate.asp"}
		 ]
	},
	{ "id" : "10", "menu_code" : "100000", "nm" : "����������", "link" : "/mypage/main.asp", "child" :
		[
		 	{ "id" : "01", "menu_code" : "100100", "nm" : "���̸����", "link" : "/mypage/membership/point.asp", "child" :
		 		[
		 		 	{ "id" : "01", "menu_code" : "100101", "nm" : "����Ʈ ��ȸ", "link" : "/mypage/membership/point.asp"},
		 		 	{ "id" : "02", "menu_code" : "100102", "nm" : "���� ��ȸ", "link" : "/mypage/membership/coupon.asp"}
		 		]
		 	},
		 	{ "id" : "02", "menu_code" : "100200", "nm" : "�¶��� ��� ����", "link" : "/mypage/myQna.asp"},
		 	{ "id" : "03", "menu_code" : "100300", "nm" : "������������", "link" : "/CJFVSite/member_mgt.html"}
		 ]
	},
	{ "id" : "11", "menu_code" : "110000", "nm" : "�̿���", "link" : "/etc/agree_v5-6.asp"},
 	{ "id" : "12", "menu_code" : "120000", "nm" : "��������ó����ħ", "link" : "/etc/privacy.asp"},
 	{ "id" : "13", "menu_code" : "130000", "nm" : "��������", "link" : "/etc/legal.asp"},
 	{ "id" : "14", "menu_code" : "140000", "nm" : "�̸��� ���ܼ����ź�", "link" : "/etc/email.asp"},
 	{ "id" : "15", "menu_code" : "150000", "nm" : "����Ʈ��", "link" : "/etc/sitemap.asp"}

 	,
 	{ "id" : "99", "menu_code" : "990000", "nm" : "���θ�&amp;����ũ ��޽�û", "link" : "/shop/default.asp"}
];

/*
 * ����Ʈ MENU ���� ǥ�� (type T:������ Ÿ��Ʋ, L:���θ�)
 */
function showMenuInfo(menu_id, type){
	try{
		if(menu_id != null && menu_id.length == 6){
			var depth1_id = menu_id.substring(0,2);
			var depth2_id = menu_id.substring(2,4);
			var depth3_id = menu_id.substring(4,6);
			var arrPT =  new Array();
			var arrLM =  new Array();
			var arrLM2 = new Array();
			var link = '';

			jQuery.map(MenuInfo, function(obj1) { // 1depth �˻�
				if(obj1.id == depth1_id){
					arrPT[0] = obj1.nm;
					arrLM[0] = "<a href='"+obj1.link+"'>"+obj1.nm+"</a>";
					arrLM2[0] = "<a>"+obj1.nm+"</a>";
					link = obj1.link;

					if(depth2_id != "00" && obj1.child){
						jQuery.map(obj1.child, function(obj2) {  // 2depth �˻�
							 if(obj2.id == depth2_id){
									arrPT[1] = obj2.nm;
									arrLM[1] = "<a href='"+obj2.link+"'>"+obj2.nm+"</a>";
									arrLM2[1] = "<a>"+obj2.nm+"</a>";
									link = obj2.link;

							 		if(depth3_id != "00" && obj2.child){
										jQuery.map(obj2.child, function(obj3) {  // 3depth �˻�
											 if(obj3.id == depth3_id){
													arrPT[2] = obj3.nm;
													arrLM[2] = "<a href='"+obj3.link+"'>"+obj3.nm+"</a>";
													arrLM2[2] = "<a>"+obj3.nm+"</a>";
													link = obj3.link;
											 }
										});
									}
							  }
						});
					}
				}
			});

			var arrLen = arrPT.length;
			if (menu_id == "000000")	arrLen = arrLen - 1;

			if (type == "T") { // ������ Ÿ��Ʋ
				var page_title = "";
				for(var i = arrLen; i > 0; i--){
					page_title += arrPT[i-1] + " | ";
				}
				page_title += "�ѷ��긣";
				//document.write(page_title);
				$('title').html(page_title);

			} else if(type == "L") { // ���θ�
				var line_map = "<a href='/'>Home</a>";
				for(var i = 0; i < arrLen; i++){
					if(i == arrLen-1){
						line_map += "" + arrLM2[i];
					}else{
						line_map += "" + arrLM[i];
					}
				}
				$('.path').html('<ul><li>' + line_map + '</li></ul>');

			} else if(type == 'U') { //��ũ url
				location.href = link;
			}
		}
	}catch(e){}
}
