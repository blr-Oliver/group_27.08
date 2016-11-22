window.onload = function () {

	console.log( $(".caption").height() );

		var winHeight = $(window).height();
		var pageHeight = $(document).height();
		var scrollBarHeight = $(window).scrollTop();

	function createRequest(){
		var xhrReq = new XMLHttpRequest();
		xhrReq.open("GET", "content.html");
	
		xhrReq.onreadystatechange = function () {
			if (xhrReq.readyState == 4 && xhrReq.status == 200) {
				$(".row").append(xhrReq.responseText);
				$(".img-responsive").css("background-image", "url('http://lorempixel.com/250/200/abstract')");
				$(".thumbnail").fadeIn(500);
			}
		};
		xhrReq.send();
	}

	for (var i = 0; i < 12; i++) {
		createRequest();
	}

	$(window).scroll(function(){
		winHeight = $(window).height();
		pageHeight = $(document).height();
		scrollBarHeight = $(window).scrollTop();
		console.log(winHeight + ' ' + pageHeight + ' ' + scrollBarHeight);
		if (winHeight+scrollBarHeight>pageHeight-150){
				createRequest();
			};
	});
 }