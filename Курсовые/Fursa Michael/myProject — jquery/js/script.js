window.onload = function () {

	var a = "url('http://lorempixel.com/240/210/abstract?i=";

	function randomInteger(min, max) {
		var rand = min - 0.5 + Math.random() * (max - min + 1)
		rand = Math.round(rand);
		return rand;
	};

	function createElement(){
		var block = $(".example > div").clone().hide();
		$(".row").append(block);
		a = a + randomInteger(2,20).toString() + "')";
		$(".img-responsive:last").css("background-image", a);
		a = "url('http://lorempixel.com/240/210/abstract?i=";
		$(block).fadeTo(1000, 1);

		var lastXElemBackground = $('.thumbnail:gt(-3)');
			lastXElemBackground.animate({
				backgroundColor: '#FDFFAB'
			},700).animate({
				backgroundColor: "rgba(239,239,239,0.7)"
			},600);
	};

/*начальная загрузка данных*/
	
	var block = $(".example > div").clone().hide();
	$(".row").append(block);
	a = a + randomInteger(2,9).toString() + "')";
	$(".img-responsive").css("background-image", a);
	a = "url('http://lorempixel.com/240/210/abstract?i=";
	$(block).fadeTo(1000, 1);

	var lastXElemBackground = $('.thumbnail:gt(-3)');
			lastXElemBackground.animate({
				backgroundColor: '#FDFFAB'
			},700).animate({
				backgroundColor: "rgba(239,239,239,0.7)"
			},600);

	
	for (var i = 0; i < 11; i++) {
		createElement();
	}

/*загрузка данных при прокрутке*/

	$(window).scroll(function(){
		winHeight = $(window).height();
		pageHeight = $(document).height();
		scrollBarHeight = $(window).scrollTop();
		console.log(winHeight + ' ' + pageHeight + ' ' + scrollBarHeight);
		
		if (winHeight+scrollBarHeight>pageHeight-150){
			for (var i = 0; i < 4; i++) {
				createElement();
/*граница при появлении
				var lastXElem = $(".row :nth-last-child(2)");
				lastXElem.animate({
					borderWidth: "3px"
				}).animate({
					borderWidth: "0px"
				});	
*/			}
			

		}
	});

	$(window).scroll(function(){
		if ($(window).scrollTop()>500){
				$("#pageUp").fadeIn("slow");
			}else{
				$("#pageUp").fadeOut("slow");

			}
	 });

/*scroll page*/
	$("#pageUp").click(function(){
		$("body").animate({scrollTop:0},400);
		return false;
	});

}



		