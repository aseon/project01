$(document).ready(function(){
	//배너
	$(".banner_close").hover(
		function(){
			$(this).addClass("active");
		},
		function(){
			$(this).removeClass("active");
		}
	);
	//배너 눌렀을 때 슬라이드로 닫아줍니다
	$(".banner_close").click(function(e){
		e.preventDefault();
		$("#popup").slideUp(300);
	});
	//#header upper
	$(".upper .login_bar li").hover(
		function(){
			$(this).children().addClass("active");
		},
		function(){
			$(this).children().removeClass("active");
		}
	);
  $(function(){
	//ctdmv 비디오 소리 없음
  	var video=document.getElementById("CTDmv");
  		video.muted=true;
  		video.play();
  });
	// 상단이동
	var t=0;
	$(window).scroll(function(){
		t=$(window).scrollTop();
	console.log(t);
	$(".ball").css({top:t+700});
	if(t > 200){
		$(".ball").addClass("active");
	}else{
		$(".ball").removeClass("active");
	}
	});

});
