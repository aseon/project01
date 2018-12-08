$(document).ready(function(){
	$("#GNB > ul > li").hover(
		function(){
			$(this).addClass("active");
			$(this).find(".sub").stop().slideDown(300);
		},
		function(){
			$("#GNB > ul > li").removeClass("active");
			$(this).find(".sub").stop().slideUp(300);
		}
	);
	$("#GNB > ul > li").focusin(function(){
		$(this).addClass("active");
		$(this).find(".sub").stop().slideDown(300);
	});
	$("#GNB > ul > li").focusout(function(){
		$("#GNB > ul > li").removeClass("active");
		$(this).find(".sub").stop().slideUp(300);
	});
});
