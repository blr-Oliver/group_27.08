$(document).ready(function () {
	var pic1 = $('.object1');
	var pic2 = $('.object2');
	var pic;
	var mistake1 = $('.mistakeField1'), mistake2 = $('.mistakeField2'), mistake;
   	var beginTime, begin, err, errCount = 0, time; 
   	var play1 = $('.playField-ru'),play2 = $('.playField-eng'), play;
   	var boolSeans = true;

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
   			$('.playField-ru').css('display','block');
   			$('.playField-eng').css('display','none');
   			$('.text1').text(str1);
   			str = str1;
   			pic = pic1;
   			mistake = mistake1;
   			play = play1;
   			$('#ourText1').keyup(function(evt){
   				var inputValue = $(this).val();
   				//if (!(( evt.keyCode < 65 || evt.keyCode > 90 ) && ( evt.keyCode < 34 || evt.keyCode > 40 )))
   				equals(str, begin, inputValue, pic, mistake);	
   				if(inputValue.length == err) {
	   				boolSeans = true;
	   				mistake1.css('display', 'none');
	   			};
   			});
   		};
   		if(el == 'eng') {
   			$('.playField-eng').css('display','block');
   			$('.playField-ru').css('display','none');
   			$('.text2').text(str2);
   			str = str2;
   			pic = pic2;
   			mistake = mistake2;
   			play=play2;
   			$('#ourText2').keyup(function(evt){
   				var inputValue = $(this).val();
   				//if (!(( evt.keyCode < 65 || evt.keyCode > 90 ) && ( evt.keyCode < 34 || evt.keyCode > 40 )))
   				equals(str, begin, inputValue, pic, mistake);	
   				if(inputValue.length == err) {
	   				boolSeans = true;
	   				mistake2.css('display', 'none');
	   			};
   			});
   		};
   	});
  	beginTime = (begin)? false:new Date(); //отсчёт времени
   	function equals(str, begin, inputValue, pic, mistake){ 
   		if(!beginTime && begin){ //если нажата клавиша впервые ставим отчет времени
			beginTime = new Date();
		};
		if (boolSeans) {
			if(inputValue.substr(inputValue.length-1) == str.substr(inputValue.length-1, 1)){	
	   			var x = parseInt(pic.css('left').substr(0, pic.css('left').indexOf('p')));//из свойства Left берёт координату
	   			pic.css('left', (x + 7) + 'px');
	   			if(inputValue.length == str.length){
	   				time = ((new Date())-beginTime)/1000;
					//play.trigger('reset');
					$('#ourText1').val('');
					$('#ourText2').val('');
					showResults();
					$('.results').css('display','block');
	   			}
	   		} else {
	   			errCount++;
	   			boolSeans = false;
	   			mistake.css('display', 'block');
	   			err = inputValue.length-1;
	   		};
		};
   	};
  	function showResults(){
   		$('tbody').append('<tr><td>'+$('#userName').val()+'</td><td>'+errCount+'</td><td>'+time+'</td></tr>')
   	};
});
