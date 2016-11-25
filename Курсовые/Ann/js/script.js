$(document).ready(function () {

	$(".button").click(function () {
        $('html, body').animate({
            scrollTop: $("#startGame").offset().top
        }, 1000);
    });
	
	
	var str1 = "Однажды весною, в час небывало жаркого заката, в Москве, на Патриарших прудах, появились два гражданина.";
	var str2 = "The door swung open at once. A tall, black haired witch in emerald green robes stood there.";
	   
   $('select[name="list"]').change(function(){
   		var el = $(this).val();
   		if (el == 'ru'){
   			$('.text').text(str1);
   			comparison(str1, begin);

   		} 
   		if(el == 'eng') {
   			$('.text').text(str2);
   			comparison(str2, begin);
   		}

   });

   	var pic = $('.object');
   	var beginTime; 
   	var begin;
   	var timePassed;
 	
   	function comparison(str, begin){
   		var inputValue=''; 
   		var prevLengthInput = 0;
		var errorLength = 0;
		beginTime = (begin)? false:new Date(); //отсчёт времени
		var timeInterval = setInterval(function(){
			var lengthInput = $('#ourText').val().length; //длина введенного символа
			if (lengthInput > prevLengthInput){ //если число введенного символа больше предыдущего числа набранных
				
				if(!beginTime && begin){ //если нажата клавиша впервые ставим отчет времени
					beginTime = new Date();
				};

				inputValue = $('#ourText').val().substr(prevLengthInput); //введённый символ
				var textValue = str.substr(prevLengthInput,1); // узнаём символ, который нужно было ввести

				if(inputValue != textValue || errorLength > 0){ // если ошибка
					
					$('.mistakeField').css('display', 'block');
					errorLength++;
					var previous = str.substr(0,lengthInput - errorLength);
					var current = $('#ourText').val().substr(lengthInput - errorLength, errorLength);
					var post = str.substr(lengthInput);


				} else { //совпадение символа -> проход дальше
					

					previous = previous + inputValue;
					var previous = str.substr(0, lengthInput);
					var current = str.substr(lengthInput, 1);
					var post = str.substr(lengthInput+1);

					/*var start = new Date();
				   	var timer = setInterval(function(){
				   		timePassed = (new Date()) - start;

				   		//остановка 
				   		if (timePassed >= 100){
				   			clearInterval(timer);
				   			return;
				   		}

				   		pic.css('left',  timePassed / 5 + 'px');
				   		
				   	}, 10);*/
					if(previous == str){ 
						clearInterval(timeInterval);
						alert((new Date())-beginTime);
					};
				};
			} else if (lengthInput < prevLengthInput){
				
				if (errorLength > 0){
					errorLength--;
					var previous = str.substr(0,lengthInput - errorLength);
					var current = ((errorLength==0)?str:$('#ourText').val()).substr(lengthInput - errorLength, ((errorLength==0)?1:errorLength));
					var post = str.substr(lengthInput+ ((errorLength==0)?1:0));
					//$('.text').removeClass('error');
					
						$('.mistakeField').css('display', 'none');
				} else {
					var previous = str.substr(0, lengthInput);
					var current = str.substr(lengthInput, 1);
					var post = str.substr(lengthInput+1);
				};

			};
			prevLengthInput = lengthInput;	

		},10)
   	}


});