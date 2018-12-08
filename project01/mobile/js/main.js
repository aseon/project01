$(function(){
	var w; // �������� ���� ũ�⸦ �����ϴ� �����Դϴ�.
	var h; // �������� ���� ũ�⸦ �����ϴ� �����Դϴ�.
	var previmgw; // �̹����� ���� ���� ũ�� �����Դϴ�.
	var previmgh; // �̹����� ���� ���� ũ�� �����Դϴ�.
	var imgw; // �������� ���� ũ�⿡ ���� �̹����� ���� ũ�� �����Դϴ�.
	var n=0; // �������� ������ ������ �߰� �����Դϴ�.
	var total=4; // �������� ������ ������ �����Դϴ�.
	var amount=0; // �������� ��ġ�� ������ �����Դϴ�.
	var moving=false; // ���� �����̰� �ִ��� �ƴ����� ������ �����Դϴ�. true�̸� �� �ٸ� �̺�Ʈ ������ �������� �ʽ��ϴ�.
	var xDown=null; // ����� �巡�� �̺�Ʈ�� ���� ���� �����Դϴ�.
	var yDown=null; // ����� �巡�� �̺�Ʈ�� ���� ���� �����Դϴ�.
	var direction=""; // ����� �巡�� �̺�Ʈ�� ���� ���� �����Դϴ�.
	$(".controller li").eq(n).addClass("active"); // �߰��Ǵ� �ڵ��Դϴ�.

	$(window).resize(function(){ // �ʱ��� �������� ���� ���� ũ�⸦ �����մϴ�.
		w=$(window).width();
		h=$(window).height();
		previmgw=$(".gallery img").width();
		previmgh=$(".gallery img").height();
		imgw=previmgw*h/previmgh; // 1280:800=imgw:h
		$(".gallery").css({width:w*total});
		$(".gallery li").css({width:$(".gallery").width()/total, height:h});
		$(".gallery img").css({width:imgw, height:h, marginLeft:-(imgw/2)});
	});
	$(window).trigger("resize");

	$(".left").click(function(e){ // ���������� �̵��մϴ�.
		e.preventDefault();
		if(moving){
			return;
		}
		amount-=w;
		moving=true;

		if(n > 0){ // �߰��Ǵ� �ڵ��Դϴ�.
			n--;
		}
		else{
			n=(total-1);
		}
		$(".controller li").removeClass("active");
		$(".controller li").eq(n).addClass("active");

		$(".gallery").css({left:amount});
		$(".gallery").prepend($(".gallery li").last());
		amount+=w;

		$(".gallery").animate({left:amount}, 500, function(){
			moving=false;
		});
	});
	$(".right").click(function(e){ // �������� �̵��մϴ�.
		e.preventDefault();
		if(moving){
			return;
		}
		amount-=w;
		moving=true;

		if(n < (total-1)){ // �߰��Ǵ� �ڵ��Դϴ�.
			n++;
		}
		else{
			n=0;
		}
		$(".controller li").removeClass("active");
		$(".controller li").eq(n).addClass("active");

		$(".gallery").animate({left:amount}, 500, function(){
			moving=false;
			amount+=w;
			$(this).css({left:amount});
			$(this).append($(".gallery li").first());
		});
	});
	$(".keyvisual").on("touchstart", function(e){
		var evt=e.originalEvent;
		clearInterval(id); // �߰��Ǵ� �ڵ��Դϴ�.
		xDown=evt.touches[0].clientX;
		yDown=evt.touches[0].clientY;
	});
	$(".keyvisual").on("touchend", function(e){ // �߰��Ǵ� �ڵ��Դϴ�.
		id=setInterval(function(){
			$(".right").trigger("click");
		}, 6000);
	});
	$(".keyvisual").on("touchmove", function(e){
		if(moving){
			return;
		}
		var evt=e.originalEvent;
		swipe(evt);

		if(direction == "left"){
			$(".right").trigger("click");
		}
		else if(direction == "right"){
			$(".left").trigger("click");
		}
	});

	var id;

	/*
	var id=setInterval(function(){ // �߰��Ǵ� �ڵ��Դϴ�.
		$(".right").trigger("click");
	}, 6000);
	*/

	// swipe API
	function swipe(evt){
		if(!xDown || !yDown){
			return;
		}
		var xUp=evt.touches[0].clientX;
		var yUp=evt.touches[0].clientY;
		var xDiff=xDown-xUp;
		var yDiff=yDown-yUp;

		if(Math.abs(xDiff) > Math.abs(yDiff)){
			if(xDiff > 0){
				// left swipe
				direction="left";
			}else{
				// right swipe
				direction="right";
			}
		}else{
			if(yDiff > 0){
				// up swipe
			}else{
				// down swipe
			}
		}
		xDown=null;
		yDown=null;
	}
});