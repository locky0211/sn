$(function() {
			$("select[pubDicGroup]").each(function() {
						var obj = $(this);
						$.ajax({
									type : "POST",
									dataType : 'json',
									url : base + '/sys/getPubDic',
									data : "allText=" + obj.attr('allText') + "&group=" + obj.attr('pubDicGroup'),
									success : function(data) {
										obj.append(data);
										obj.val(obj.attr('selectValue'));
									}
								});
					});
		});