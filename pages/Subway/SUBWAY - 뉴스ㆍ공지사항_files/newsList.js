var view = {
		search: function() {
			
			//if($("input:text[name=subject]").val().trim() == "") {
			//	alert("검색어를 입력하세요.");
			//	$("input:text[name=subject]").focus();
			//	return false;
			//}
			
			$("input[name=page]").val("1");
			$("#searchForm")[0].submit();
		},
		view: function(idx) {
			var query = $("#searchForm").serialize();
			location.href = "./newsView?noticeIdx="+idx+"&query=" + encodeURIComponent(query);
		}
}

var paging = {
		page: function(page) {
			$("input:hidden[name=page]").val(page);
			$("#searchForm")[0].submit();
		},
		prev: function(block) {
			var page = $("input:hidden[name=page]").val();
			if (page > 1) {
				paging.page(page - 1);
			} else {
				return false;
			}
		},
		next: function(block) {
			var page = Number($("input:hidden[name=page]").val()) + 1;
			if (page <= block) {
				paging.page(page);
			} else {
				return false;
			}
		}
}