$(document).ready(function () {
	var pic = $('.object');
   	var beginTime, begin, err, errCount = 0; 

	$(".button").click(function () {
        $('html, body').animate({
            scrollTop: $("#startGame").offset().top
        }, 1000);
    });
	
	var str1 = "Однажды весною, в час небывало жаркого заката, в Москве, на Патриарших прудах, появились два гражданина.";
	var str2 = "The door swung open at once. A tall, black haired witch in emerald green robes stood there.";
	var str;

   $('select[name="list"]').change(function(){
   		var el = $(this).val();
   		if (el == 'ru'){
   			$('.text').text(str1);
   			str = str1;
   		} 
   		if(el == 'eng') {
   			$('.text').text(str2);
   			str = str2;
   		}
   });
   $('#ourText').keyup(function(evt){
   		var inputValue = $(this).val();
   		//if (!( evt.keyCode < 65 || evt.keyCode > 90 ) && ( evt.keyCode < 34 || evt.keyCode > 40 ) ) 
   			equals(str, begin, inputValue);
   			if(inputValue.length == err) {
   				boolSeans = true;
   				$('.mistakeField').css('display', 'none');
   			}
   });

   beginTime = (begin)? false:new Date(); //отсчёт времени
   var boolSeans = true;
   function equals(str, begin, inputValue){
   		if(!beginTime && begin){ //если нажата клавиша впервые ставим отчет времени
			beginTime = new Date();
		};
		if (boolSeans) {
			if(inputValue.substr(inputValue.length-1) == str.substr(inputValue.length-1, 1)){	   			
	   			var x = parseInt(pic.css('left').substr(0, pic.css('left').indexOf('p')), 10);//из свойства Left берёт координату
	   			pic.css('left', (x + 10) + 'px');
	   		} else {
	   			errCount++;
	   			boolSeans = false;
	   			$('.mistakeField').css('display', 'block');
	   			err = inputValue.length-1;
	   		}
		}
		if(inputValue.length == str.length) {
			alert((new Date())-beginTime);
			alert(errCount);
		}
   }
});
