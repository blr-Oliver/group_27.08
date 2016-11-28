//Формирование массивов для коллекции фотографий, их описания и хэштегов.
var arrPhotoDima = [], arrDescrDima = [], arrTagsDima = [];
var arrPhotoLena = [], arrDescrLena = [], arrTagsLena = [];
var arrPhotoDanila = [], arrDescrDanila = [], arrTagsDanila = [];

//Запись массивов в localStorage в качестве хранилища-сервера для последующей работы с ними (условие добавлено для предотвращения перезаписи после одновления страницы)

//можно ли это объединить в одну функцию?
if(localStorage.getItem('arrPhotoDima')){}
	else localStorage.arrPhotoDima = JSON.stringify(arrPhotoDima);

if(localStorage.getItem('arrDescrDima')){}
	else localStorage.arrDescrDima = JSON.stringify(arrDescrDima);

if(localStorage.getItem('arrTagsDima')){}
	else localStorage.arrTagsDima = JSON.stringify(arrTagsDima);


if(localStorage.getItem('arrPhotoLena')){}
	else localStorage.arrPhotoLena = JSON.stringify(arrPhotoLena);

if(localStorage.getItem('arrDescrLena')){}
	else localStorage.arrDescrLena = JSON.stringify(arrDescrLena);

if(localStorage.getItem('arrTagsLena')){}
	else localStorage.arrTagsLena = JSON.stringify(arrTagsLena);


if(localStorage.getItem('arrPhotoDanila')){}
	else localStorage.arrPhotoDanila = JSON.stringify(arrPhotoDanila);

if(localStorage.getItem('arrDescrDanila')){}
	else localStorage.arrDescrDanila = JSON.stringify(arrDescrDanila);

if(localStorage.getItem('arrTagsDanila')){}
	else localStorage.arrTagsDanila = JSON.stringify(arrTagsDanila);


$(document).ready(function(){
	searchDima.setAttribute("style","display:none");
	searchLena.setAttribute("style","display:none");
	searchDanila.setAttribute("style","display:none");
	searchButtonDima.setAttribute("style","display:none");
	searchButtonLena.setAttribute("style","display:none");
	searchButtonDanila.setAttribute("style","display:none");
	searchTagButtonDima.setAttribute("style","display:none");
	searchTagButtonLena.setAttribute("style","display:none");
	searchTagButtonDanila.setAttribute("style","display:none");
});






//Динамическое построение таблицы с превью фото, привязка к ней pop-up слайд-шоу. 
//Таблица строится при загрузке страницы, встраивается в html и скрывается аттрибутом display:none. 
var cellsDima = 6, currentCellsDima = 0, maxCellsDima = cellsDima;
var rowsDima = JSON.parse(localStorage.arrPhotoDima).length / cellsDima; 
var newTableDima = document.createElement("TABLE"); 
var newTBodyDima = document.createElement("TBODY");
$(document).ready(function createTableDima(){
	newTableDima.setAttribute("align","center"); //МОЖНО В ОДНО ОБЪЕДИНИТЬ?
	newTableDima.setAttribute("id","tableDima");//МОЖНО В ОДНО ОБЪЕДИНИТЬ?
	newTableDima.setAttribute("style","display:none");//МОЖНО В ОДНО ОБЪЕДИНИТЬ?
	for (var r = 0; r < rowsDima; r++){
		var newRowDima = document.createElement("TR");
		for (var c = currentCellsDima; c < maxCellsDima; c++){
			var newCellDima = document.createElement("TD"); 
			var newCellTextDima = document.createTextNode("empty");
			if (c < JSON.parse(localStorage.arrPhotoDima).length){
				newCellDima.appendChild(newCellTextDima);
				newRowDima.appendChild(newCellDima);
			}
			newCellDima.setAttribute("style","padding:10px"); //МОЖНО В ОДНО???
			newCellDima.setAttribute("align","center");//МОЖНО В ОДНО???
			newCellDima.innerHTML='<a href="'+JSON.parse(localStorage.arrPhotoDima)[c]+'" rel="lightgallery[dima]"><img src="'+JSON.parse(localStorage.arrPhotoDima)[c]+'" width="100%" alt=""/></a>\n'+JSON.parse(localStorage.arrDescrDima)[c]+'\n #'+JSON.parse(localStorage.arrTagsDima)[c]+'';
		}
		newTBodyDima.appendChild(newRowDima);
		currentCellsDima=c;	maxCellsDima+=cellsDima;
	}
	newTableDima.appendChild(newTBodyDima);
	document.body.appendChild(newTableDima);
});



var cellsLena = 6, currentCellsLena = 0, maxCellsLena = cellsLena;
var rowsLena = JSON.parse(localStorage.arrPhotoLena).length / cellsLena; 
var newTableLena = document.createElement("TABLE"); 
var newTBodyLena = document.createElement("TBODY");
$(document).ready(function createTableLena(){
	newTableLena.setAttribute("align","center"); //МОЖНО В ОДНО ОБЪЕДИНИТЬ?
	newTableLena.setAttribute("id","tableLena");//МОЖНО В ОДНО ОБЪЕДИНИТЬ?
	newTableLena.setAttribute("style","display:none");//МОЖНО В ОДНО ОБЪЕДИНИТЬ?
	for (var r = 0; r < rowsLena; r++){
		var newRowLena = document.createElement("TR");
		for (var c = currentCellsLena; c < maxCellsLena; c++){
			var newCellLena = document.createElement("TD"); 
			var newCellTextLena = document.createTextNode("empty");
			if (c < JSON.parse(localStorage.arrPhotoLena).length){
				newCellLena.appendChild(newCellTextLena);
				newRowLena.appendChild(newCellLena);
			}
			newCellLena.setAttribute("style","padding:10px"); //МОЖНО В ОДНО???
			newCellLena.setAttribute("align","center");//МОЖНО В ОДНО???
			newCellLena.innerHTML='<a href="'+JSON.parse(localStorage.arrPhotoLena)[c]+'" rel="lightgallery[dima]"><img src="'+JSON.parse(localStorage.arrPhotoLena)[c]+'" width="100%" alt=""/></a>\n'+JSON.parse(localStorage.arrDescrLena)[c]+'\n #'+JSON.parse(localStorage.arrTagsLena)[c]+'';
		}
		newTBodyLena.appendChild(newRowLena);
		currentCellsLena=c;	maxCellsLena+=cellsLena;
	}
	newTableLena.appendChild(newTBodyLena);
	document.body.appendChild(newTableLena);
});




var cellsDanila = 6, currentCellsDanila = 0, maxCellsDanila = cellsDanila;
var rowsDanila = JSON.parse(localStorage.arrPhotoDanila).length / cellsDanila; 
var newTableDanila = document.createElement("TABLE"); 
var newTBodyDanila = document.createElement("TBODY");
$(document).ready(function createTableDanila(){
	newTableDanila.setAttribute("align","center"); //МОЖНО В ОДНО ОБЪЕДИНИТЬ?
	newTableDanila.setAttribute("id","tableDanila");//МОЖНО В ОДНО ОБЪЕДИНИТЬ?
	newTableDanila.setAttribute("style","display:none");//МОЖНО В ОДНО ОБЪЕДИНИТЬ?
	for (var r = 0; r < rowsDanila; r++){
		var newRowDanila = document.createElement("TR");
		for (var c = currentCellsDanila; c < maxCellsDanila; c++){
			var newCellDanila = document.createElement("TD"); 
			var newCellTextDanila = document.createTextNode("empty");
			if (c < JSON.parse(localStorage.arrPhotoDanila).length){
				newCellDanila.appendChild(newCellTextDanila);
				newRowDanila.appendChild(newCellDanila);
			}
			newCellDanila.setAttribute("style","padding:10px"); //МОЖНО В ОДНО???
			newCellDanila.setAttribute("align","center");//МОЖНО В ОДНО???
			newCellDanila.innerHTML='<a href="'+JSON.parse(localStorage.arrPhotoDanila)[c]+'" rel="lightgallery[dima]"><img src="'+JSON.parse(localStorage.arrPhotoDanila)[c]+'" width="100%" alt=""/></a>\n'+JSON.parse(localStorage.arrDescrDanila)[c]+'\n #'+JSON.parse(localStorage.arrTagsDanila)[c]+'';
		}
		newTBodyDanila.appendChild(newRowDanila);
		currentCellsDanila=c;	maxCellsDanila+=cellsDanila;
	}
	newTableDanila.appendChild(newTBodyDanila);
	document.body.appendChild(newTableDanila);
});


//Обработчик загрузки фотографий. 
//Первично фотографии необходимо вручную добавить в папку /img/dima на "сервере". 
//Ссылки же на них прописываются в localStorage автоматом при выборе из окна и клике на кнопку "Загрузить". 
//Таким же образом  им присвается задаваемое в соответствующих инпутах описание  и хэштеги.
//В конце страница перезагружается для переформирования таблицы с превью. 

function handleClickLoadDima(){
	var arrPhotoDimaNew = JSON.parse(localStorage.arrPhotoDima);
	var arrDescrDimaNew = JSON.parse(localStorage.arrDescrDima);
	var arrTagsDimaNew = JSON.parse(localStorage.arrTagsDima);
	
	arrPhotoDimaNew.push('/img/dima/' + document.getElementById('loaderDima').value.slice(12));
	localStorage.arrPhotoDima = JSON.stringify(arrPhotoDimaNew);

	arrDescrDimaNew.push(document.getElementById('nameDima').value);
	localStorage.arrDescrDima = JSON.stringify(arrDescrDimaNew);
  	
	arrTagsDimaNew.push(document.getElementById('tagsDima').value);
	localStorage.arrTagsDima = JSON.stringify(arrTagsDimaNew);

  	location.reload();
}


function handleClickLoadLena(){
	var arrPhotoLenaNew = JSON.parse(localStorage.arrPhotoLena);
	var arrDescrLenaNew = JSON.parse(localStorage.arrDescrLena);
	var arrTagsLenaNew = JSON.parse(localStorage.arrTagsLena);
	
	arrPhotoLenaNew.push('/img/lena/' + document.getElementById('loaderLena').value.slice(12));
	localStorage.arrPhotoLena = JSON.stringify(arrPhotoLenaNew);

	arrDescrLenaNew.push(document.getElementById('nameLena').value);
	localStorage.arrDescrLena = JSON.stringify(arrDescrLenaNew);
  	
	arrTagsLenaNew.push(document.getElementById('tagsLena').value);
	localStorage.arrTagsLena = JSON.stringify(arrTagsLenaNew);

  	location.reload();
}


function handleClickLoadDanila(){
	var arrPhotoDanilaNew = JSON.parse(localStorage.arrPhotoDanila);
	var arrDescrDanilaNew = JSON.parse(localStorage.arrDescrDanila);
	var arrTagsDanilaNew = JSON.parse(localStorage.arrTagsDanila);
	
	arrPhotoDanilaNew.push('/img/Danila/' + document.getElementById('loaderDanila').value.slice(12));
	localStorage.arrPhotoDanila = JSON.stringify(arrPhotoDanilaNew);

	arrDescrDanilaNew.push(document.getElementById('nameDanila').value);
	localStorage.arrDescrDanila = JSON.stringify(arrDescrDanilaNew);
  	
	arrTagsDanilaNew.push(document.getElementById('tagsDanila').value);
	localStorage.arrTagsDanila = JSON.stringify(arrTagsDanilaNew);

  	location.reload();
}

//Выборка фото по тэгу. 
//Подготовительная работа - формирование новых массивов данных согласно выборкам из имеющихся.
//Затем отображение найденных по тэгам фото в виде динамических таблиц. 
//Превью фото сделано крупнее. 
//Здесь без pop-up слайд-шоу, просто открытие полноразмерных фото в новом окне. 



function handleClickSearchDima(){
	var arrTagsDimaSearch = [], arrPhotoDimaSearch = [], arrDescrDimaSearch = [];
	for (var i = 0; i < JSON.parse(localStorage.arrTagsDima).length; i++){
		if (JSON.parse(localStorage.arrTagsDima)[i] == document.getElementById('searchDima').value){
			arrTagsDimaSearch.push(JSON.parse(localStorage.arrTagsDima)[i]);
			arrPhotoDimaSearch.push(JSON.parse(localStorage.arrPhotoDima)[i]);
			arrDescrDimaSearch.push(JSON.parse(localStorage.arrDescrDima)[i]);
		}
	}	
	var cellsDimaSearch = 2, currentCellsDimaSearch = 0, maxCellsDimaSearch = cellsDimaSearch;
	var rowsDimaSearch = arrPhotoDimaSearch.length / cellsDimaSearch;
	var newTableDimaSearch = document.createElement("TABLE");
	var newTBodyDimaSearch = document.createElement("TBODY");
	newTableDimaSearch.setAttribute("align","center");
	for (var r = 0; r < rowsDimaSearch; r++){
		var newRowDimaSearch = document.createElement("TR");
		for (var c = currentCellsDimaSearch; c < maxCellsDimaSearch; c++){
			var newCellDimaSearch = document.createElement("TD");
			var newCellTextDimaSearch = document.createTextNode("empty");
			if (c < arrPhotoDimaSearch.length){
				newCellDimaSearch.appendChild(newCellTextDimaSearch);
				newRowDimaSearch.appendChild(newCellDimaSearch);
			}
			newCellDimaSearch.setAttribute("style","padding:10px");
			newCellDimaSearch.innerHTML='<a href="'+arrPhotoDimaSearch[c]+'" target = "_blank"><img src="'+arrPhotoDimaSearch[c]+'" width="100%" alt=""/></a>\n'+arrDescrDimaSearch[c]+'\n #'+arrTagsDimaSearch[c]+'';
			newCellDimaSearch.setAttribute("align","center");
		}
		newTBodyDimaSearch.appendChild(newRowDimaSearch);
		currentCellsDimaSearch = c; maxCellsDimaSearch += cellsDimaSearch;
	}
	newTableDimaSearch.appendChild(newTBodyDimaSearch);
	document.body.appendChild(newTableDimaSearch);

	document.getElementById('tableDima').setAttribute("style","display:none");
	document.getElementById('heading').setAttribute("style","display:none");
	document.getElementById('wowslider-container1').setAttribute("style","display:none");
}








function handleClickSearchLena(){
	var arrTagsLenaSearch = [], arrPhotoLenaSearch = [], arrDescrLenaSearch = [];
	for (var i = 0; i < JSON.parse(localStorage.arrTagsLena).length; i++){
		if (JSON.parse(localStorage.arrTagsLena)[i] == document.getElementById('searchLena').value){
			arrTagsLenaSearch.push(JSON.parse(localStorage.arrTagsLena)[i]);
			arrPhotoLenaSearch.push(JSON.parse(localStorage.arrPhotoLena)[i]);
			arrDescrLenaSearch.push(JSON.parse(localStorage.arrDescrLena)[i]);
		}
	}	
	var cellsLenaSearch = 2, currentCellsLenaSearch = 0, maxCellsLenaSearch = cellsLenaSearch;
	var rowsLenaSearch = arrPhotoLenaSearch.length / cellsLenaSearch;
	var newTableLenaSearch = document.createElement("TABLE");
	var newTBodyLenaSearch = document.createElement("TBODY");
	newTableLenaSearch.setAttribute("align","center");
	for (var r = 0; r < rowsLenaSearch; r++){
		var newRowLenaSearch = document.createElement("TR");
		for (var c = currentCellsLenaSearch; c < maxCellsLenaSearch; c++){
			var newCellLenaSearch = document.createElement("TD");
			var newCellTextLenaSearch = document.createTextNode("empty");
			if (c < arrPhotoLenaSearch.length){
				newCellLenaSearch.appendChild(newCellTextLenaSearch);
				newRowLenaSearch.appendChild(newCellLenaSearch);
			}
			newCellLenaSearch.setAttribute("style","padding:10px");
			newCellLenaSearch.innerHTML='<a href="'+arrPhotoLenaSearch[c]+'" target = "_blank"><img src="'+arrPhotoLenaSearch[c]+'" width="100%" alt=""/></a>\n'+arrDescrLenaSearch[c]+'\n #'+arrTagsLenaSearch[c]+'';
			newCellLenaSearch.setAttribute("align","center");
		}
		newTBodyLenaSearch.appendChild(newRowLenaSearch);
		currentCellsLenaSearch = c; maxCellsLenaSearch += cellsLenaSearch;
	}
	newTableLenaSearch.appendChild(newTBodyLenaSearch);
	document.body.appendChild(newTableLenaSearch);

	document.getElementById('tableLena').setAttribute("style","display:none");
	document.getElementById('heading').setAttribute("style","display:none");
	document.getElementById('wowslider-container1').setAttribute("style","display:none");
}

	function handleClickSearchDanila(){
	var arrTagsDanilaSearch = [], arrPhotoDanilaSearch = [], arrDescrDanilaSearch = [];
	for (var i = 0; i < JSON.parse(localStorage.arrTagsDanila).length; i++){
		if (JSON.parse(localStorage.arrTagsDanila)[i] == document.getElementById('searchDanila').value){
			arrTagsDanilaSearch.push(JSON.parse(localStorage.arrTagsDanila)[i]);
			arrPhotoDanilaSearch.push(JSON.parse(localStorage.arrPhotoDanila)[i]);
			arrDescrDanilaSearch.push(JSON.parse(localStorage.arrDescrDanila)[i]);
		}
	}	
	var cellsDanilaSearch = 2, currentCellsDanilaSearch = 0, maxCellsDanilaSearch = cellsDanilaSearch;
	var rowsDanilaSearch = arrPhotoDanilaSearch.length / cellsDanilaSearch;
	var newTableDanilaSearch = document.createElement("TABLE");
	var newTBodyDanilaSearch = document.createElement("TBODY");
	newTableDanilaSearch.setAttribute("align","center");
	for (var r = 0; r < rowsDanilaSearch; r++){
		var newRowDanilaSearch = document.createElement("TR");
		for (var c = currentCellsDanilaSearch; c < maxCellsDanilaSearch; c++){
			var newCellDanilaSearch = document.createElement("TD");
			var newCellTextDanilaSearch = document.createTextNode("empty");
			if (c < arrPhotoDanilaSearch.length){
				newCellDanilaSearch.appendChild(newCellTextDanilaSearch);
				newRowDanilaSearch.appendChild(newCellDanilaSearch);
			}
			newCellDanilaSearch.setAttribute("style","padding:10px");
			newCellDanilaSearch.innerHTML='<a href="'+arrPhotoDanilaSearch[c]+'" target = "_blank"><img src="'+arrPhotoDanilaSearch[c]+'" width="100%" alt=""/></a>\n'+arrDescrDanilaSearch[c]+'\n #'+arrTagsDanilaSearch[c]+'';
			newCellDanilaSearch.setAttribute("align","center");
		}
		newTBodyDanilaSearch.appendChild(newRowDanilaSearch);
		currentCellsDanilaSearch = c; maxCellsDanilaSearch += cellsDanilaSearch;
	}
	newTableDanilaSearch.appendChild(newTBodyDanilaSearch);
	document.body.appendChild(newTableDanilaSearch);

	document.getElementById('tableDanila').setAttribute("style","display:none");
	document.getElementById('heading').setAttribute("style","display:none");
	document.getElementById('wowslider-container1').setAttribute("style","display:none");
}












//Формирование по кликам динамических дропдаунов  с имеющимися в localStorage хэштегами.
//При этом списки сортируются и исключаются дублирования хэштегов. 
//Условие в начале добавлено для исключения задваивания, затраивания и т.д. списков с каждым кликом по ним.
function createTagListDima(){
	if (document.getElementById("li_tagsDima")){
		li_tagsDima.setAttribute("class", "tags_liDima");
	}
		else {
			var arrTagsDimaSearch = [];
			for(var i = 0; i < JSON.parse(localStorage.arrTagsDima).length; i++){
				arrTagsDimaSearch.push(JSON.parse(localStorage.arrTagsDima)[i]);
			}
			arrTagsDimaSearch.sort();
			var i = arrTagsDimaSearch.length;
			while (i--){
			    if (arrTagsDimaSearch[i] == arrTagsDimaSearch[i-1]){
			        arrTagsDimaSearch.splice(i, 1);
			    }
			}
			var li = document.createElement("li");
			for (var j = 0; j < arrTagsDimaSearch.length; j++) {
			  li.innerHTML += "<a class = 'tag_linkDima' href = '#'>#"+arrTagsDimaSearch[j]+"</a>";
			}
			li.setAttribute("id", "li_tagsDima");
			ul_drop_tagsDima.appendChild(li);
		}
}


function createTagListLena(){
	if (document.getElementById("li_tagsLena")){
		li_tagsLena.setAttribute("class", "tags_liLena");
	}
		else {
			var arrTagsLenaSearch = [];
			for(var i = 0; i < JSON.parse(localStorage.arrTagsLena).length; i++){
				arrTagsLenaSearch.push(JSON.parse(localStorage.arrTagsLena)[i]);
			}
			arrTagsLenaSearch.sort();
			var i = arrTagsLenaSearch.length;
			while (i--){
			    if (arrTagsLenaSearch[i] == arrTagsLenaSearch[i-1]){
			        arrTagsLenaSearch.splice(i, 1);
			    }
			}
			var li = document.createElement("li");
			for (var j = 0; j < arrTagsLenaSearch.length; j++) {
			  li.innerHTML += "<a class = 'tag_linkLena' href = '#'>#"+arrTagsLenaSearch[j]+"</a>";
			}
			li.setAttribute("id", "li_tagsLena");
			ul_drop_tagsLena.appendChild(li);
		}
}


function createTagListDanila(){
	if (document.getElementById("li_tagsDanila")){
		li_tagsDanila.setAttribute("class", "tags_liDanila");
	}
		else {
			var arrTagsDanilaSearch = [];
			for(var i = 0; i < JSON.parse(localStorage.arrTagsDanila).length; i++){
				arrTagsDanilaSearch.push(JSON.parse(localStorage.arrTagsDanila)[i]);
			}
			arrTagsDanilaSearch.sort();
			var i = arrTagsDanilaSearch.length;
			while (i--){
			    if (arrTagsDanilaSearch[i] == arrTagsDanilaSearch[i-1]){
			        arrTagsDanilaSearch.splice(i, 1);
			    }
			}
			var li = document.createElement("li");
			for (var j = 0; j < arrTagsDanilaSearch.length; j++) {
			  li.innerHTML += "<a class = 'tag_linkDanila' href = '#'>#"+arrTagsDanilaSearch[j]+"</a>";
			}			
			li.setAttribute("id", "li_tagsDanila");
			ul_drop_tagsDanila.appendChild(li);
		}
}






//не работает...((
  $('.tags_liDima').click(function(event){
    var target = $(event.target);
    if(target.is('a.tag_linkDima'))
  		$('#searchDima').val = target.text();
  });




//не работает...((
  $('.tags_liLena').click(function(event){
    var target = $(event.target);
    if(target.is('a.tag_linkLena'))
  		$('#searchDanila').val = target.text();
  });




//не работает...((
  $('.tags_liDanila').click(function(event){
    var target = $(event.target);
    if(target.is('a.tag_linkDanila'))
  		$('#searchDanila').val = target.text();
  });





function viewDimaPhoto(){
  document.getElementById('heading').classList.add("hidden");
  document.getElementById('wowslider-container1').classList.add("hidden");
  document.getElementById('footer').classList.add("hidden");
  document.getElementById('loaderDima').classList.add("hidden");
  document.getElementById('nameDima').classList.add("hidden");
  document.getElementById('tagsDima').classList.add("hidden");
  document.getElementById('loadButtonDima').classList.add("hidden");
  document.getElementById('loaderLena').classList.add("hidden");
  document.getElementById('nameLena').classList.add("hidden");
  document.getElementById('tagsLena').classList.add("hidden");
  document.getElementById('loadButtonLena').classList.add("hidden");
  document.getElementById('loaderDanila').classList.add("hidden");
  document.getElementById('nameDanila').classList.add("hidden");
  document.getElementById('tagsDanila').classList.add("hidden");
  document.getElementById('loadButtonDanila').classList.add("hidden");

  	searchDima.removeAttribute("style","display:none");
	searchButtonDima.removeAttribute("style","display:none");
	searchTagButtonDima.removeAttribute("style","display:none");

  newTableDima.removeAttribute("style","display:none");
}


function viewLenaPhoto(){
  document.getElementById('heading').classList.add("hidden");
  document.getElementById('wowslider-container1').classList.add("hidden");
  document.getElementById('footer').classList.add("hidden");
  document.getElementById('loaderDima').classList.add("hidden");
  document.getElementById('nameDima').classList.add("hidden");
  document.getElementById('tagsDima').classList.add("hidden");
  document.getElementById('loadButtonDima').classList.add("hidden");
  document.getElementById('loaderLena').classList.add("hidden");
  document.getElementById('nameLena').classList.add("hidden");
  document.getElementById('tagsLena').classList.add("hidden");
  document.getElementById('loadButtonLena').classList.add("hidden");
  document.getElementById('loaderDanila').classList.add("hidden");
  document.getElementById('nameDanila').classList.add("hidden");
  document.getElementById('tagsDanila').classList.add("hidden");
  document.getElementById('loadButtonDanila').classList.add("hidden");

	searchLena.removeAttribute("style","display:none");
	searchButtonLena.removeAttribute("style","display:none");
	searchTagButtonLena.removeAttribute("style","display:none");

  newTableLena.removeAttribute("style","display:none");
}


function viewDanilaPhoto(){
  document.getElementById('heading').classList.add("hidden");
  document.getElementById('wowslider-container1').classList.add("hidden");
  document.getElementById('footer').classList.add("hidden");
  document.getElementById('loaderDima').classList.add("hidden");
  document.getElementById('nameDima').classList.add("hidden");
  document.getElementById('tagsDima').classList.add("hidden");
  document.getElementById('loadButtonDima').classList.add("hidden");
  document.getElementById('loaderLena').classList.add("hidden");
  document.getElementById('nameLena').classList.add("hidden");
  document.getElementById('tagsLena').classList.add("hidden");
  document.getElementById('loadButtonLena').classList.add("hidden");
  document.getElementById('loaderDanila').classList.add("hidden");
  document.getElementById('nameDanila').classList.add("hidden");
  document.getElementById('tagsDanila').classList.add("hidden");
  document.getElementById('loadButtonDanila').classList.add("hidden");

	searchDanila.removeAttribute("style","display:none");
	searchButtonDanila.removeAttribute("style","display:none");
	searchTagButtonDanila.removeAttribute("style","display:none");

  newTableDanila.removeAttribute("style","display:none");
}