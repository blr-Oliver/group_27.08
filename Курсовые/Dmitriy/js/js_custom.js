//Формирование отправной коллекции фотографий Димы, их описания и хэштегов.
var arrPhoto = ['/img/dima/Дима.jpg','/img/dima/dima2.jpg','/img/dima/dima3.jpg','/img/dima/dima4.jpg','/img/dima/dima5.jpg','/img/dima/dima6.jpg','/img/dima/dima6.jpg', '/img/dima/dima6.jpg', '/img/dima/dima6.jpg', '/img/dima/dima6.jpg', '/img/dima/dima6.jpg', '/img/dima/dima6.jpg', '/img/dima/dima6.jpg','/img/dima/dima2.jpg','/img/dima/dima2.jpg','/img/dima/dima2.jpg','/img/dima/dima2.jpg','/img/dima/dima2.jpg','/img/dima/dima2.jpg','/img/dima/dima2.jpg'];
var arrDescr = ['111', '222', '333', '444', '555', '666', '777', '888', '999', '101010', '111111', '121212', '131313', '141414', '151515', '161616', '171717', '181818', '191919', '202020'];
var arrTags = ['c', 'c', 'c', 'c', 'c', 'c', 'c', 'cool888', 'cool888', 'cool101010', 'cool111111', 'cool121212', 'cool131313', 'cool141414', 'cool151515', 'cool161616', 'cool171717', 'cool181818', 'cool191919', 'cool202020'];

//Запись коллекции фото Димы в localStorage в качестве хранилища-сервера для последующего использования (условие добавлено для предотвращения перезаписи после одновления страницы)

//можно ли это объединить в одну функцию?
if(localStorage.getItem('arrPhoto')){}
	else localStorage.arrPhoto = JSON.stringify(arrPhoto);

if(localStorage.getItem('arrDescr')){}
	else localStorage.arrDescr = JSON.stringify(arrDescr);

if(localStorage.getItem('arrTags')){}
	else localStorage.arrTags = JSON.stringify(arrTags);

//Динамическое построение таблицы с превью фото Димы, привязка к ней pop-up слайд-шоу. 
//Таблица строится при загрузке страницы, встраивается в html и скрывается аттрибутом display:none. 
var cells = 6, currentCells = 0, maxCells = cells;
var rows = JSON.parse(localStorage.arrPhoto).length / cells; 
var newTable = document.createElement("TABLE"); 
var newTBody = document.createElement("TBODY");
$(document).ready(function createTableDima(){
	newTable.setAttribute("align","center"); //МОЖНО В ОДНО ОБЪЕДИНИТЬ?
	newTable.setAttribute("id","tableDima");//МОЖНО В ОДНО ОБЪЕДИНИТЬ?
	newTable.setAttribute("style","display:none");//МОЖНО В ОДНО ОБЪЕДИНИТЬ?
	for (var r = 0; r < rows; r++){
		var newRow = document.createElement("TR");
		for (var c = currentCells; c < maxCells; c++){
			var newCell = document.createElement("TD"); 
			var newCellText = document.createTextNode("empty");
			if (c < JSON.parse(localStorage.arrPhoto).length){
				newCell.appendChild(newCellText);
				newRow.appendChild(newCell);
			}
			newCell.setAttribute("style","padding:10px"); //МОЖНО В ОДНО???
			newCell.setAttribute("align","center");//МОЖНО В ОДНО???
			newCell.innerHTML='<a href="'+JSON.parse(localStorage.arrPhoto)[c]+'" rel="lightgallery[dima]"><img src="'+JSON.parse(localStorage.arrPhoto)[c]+'" width="100%" alt=""/></a>\n'+JSON.parse(localStorage.arrDescr)[c]+'\n #'+JSON.parse(localStorage.arrTags)[c]+'';
		}
		newTBody.appendChild(newRow);
		currentCells=c;	maxCells+=cells;
	}
	newTable.appendChild(newTBody);
	document.body.appendChild(newTable);	
	//window.onload = createTableDima();
});

//Обработчик загрузки фотографий. 
//Первично фотографии необходимо вручную добавить в папку /img/dima на "сервере". 
//Ссылки же на них прописываются в localStorage автоматом при выборе из окна и клике на кнопку "Загрузить". 
//Таким же образом  им присвается задаваемое в соответствующих инпутах описание  и хэштеги.
//В конце страница перезагружается для переформирования таблицы с превью. 

function handleClickLoad(){
	var arrPhotoNew = JSON.parse(localStorage.arrPhoto);
	var arrDescrNew = JSON.parse(localStorage.arrDescr);
	var arrTagsNew = JSON.parse(localStorage.arrTags);
	
	arrPhotoNew.push('/img/dima/' + document.getElementById('loader').value.slice(12));
	localStorage.arrPhoto = JSON.stringify(arrPhotoNew);

	arrDescrNew.push(document.getElementById('name').value);
	localStorage.arrDescr = JSON.stringify(arrDescrNew);
  	
	arrTagsNew.push(document.getElementById('tags').value);
	localStorage.arrTags = JSON.stringify(arrTagsNew);

  	location.reload();
}

//Выборка фото по тэгу. 
//Подготовительная работа - формирование новых массивов данных согласно выборке их имеющихся.
function handleClickSearch(){
	var arrTagsSearch = [], arrPhotoSearch = [], arrDescrSearch = [];
	for (var i = 0; i < JSON.parse(localStorage.arrTags).length; i++){
		if (JSON.parse(localStorage.arrTags)[i] == document.getElementById('search').value){
			arrTagsSearch.push(JSON.parse(localStorage.arrTags)[i]);
			arrPhotoSearch.push(JSON.parse(localStorage.arrPhoto)[i]);
			arrDescrSearch.push(JSON.parse(localStorage.arrDescr)[i]);
		}
	}	

	//Отображение найденных по тэгам фото в виде динамической таблицы. 
	//Превью фото сделано крупнее. 
	//Здесь без pop-up слайд-шоу, просто открытие полноразмерных фото в новом окне. 
	var cells = 2, currentCells = 0, maxCells = cells;
	var rows = arrPhotoSearch.length / cells;
	var newTable = document.createElement("TABLE");
	var newTBody = document.createElement("TBODY");
	newTable.setAttribute("align","center");
	for (var r = 0; r < rows; r++){
		var newRow = document.createElement("TR");
		for (var c = currentCells; c < maxCells; c++){
			var newCell = document.createElement("TD");
			var newCellText = document.createTextNode("empty");
			if (c < arrPhotoSearch.length){
				newCell.appendChild(newCellText);
				newRow.appendChild(newCell);
			}
			newCell.setAttribute("style","padding:10px");
			newCell.innerHTML='<a href="'+arrPhotoSearch[c]+'" target = "_blank"><img src="'+arrPhotoSearch[c]+'" width="100%" alt=""/></a>\n'+arrDescrSearch[c]+'\n #'+arrTagsSearch[c]+'';
			newCell.setAttribute("align","center");
		}
		newTBody.appendChild(newRow);
		currentCells=c;
		maxCells+=cells;
	}
	newTable.appendChild(newTBody);
	document.body.appendChild(newTable);

	document.getElementById('tableDima').setAttribute("style","display:none");
	document.getElementById('heading').setAttribute("style","display:none");
	document.getElementById('slider').setAttribute("style","display:none");
}


//Формирование динамического дропдауна по клику с имеющимися в localStorage хэштегами.
//При этом список сортируется и исключаются дублирования хэштегов. 
//Условие в начале добавлено для исключения задваивания, затраивания и т.д. списка с каждым кликом по нему
function createTagList(){
	if (document.getElementById("li_tags")){
		li_tags.setAttribute("class", "tags_li");
	}
		else {
			var arrTagsSearch = [];
			for(var i = 0; i < JSON.parse(localStorage.arrTags).length; i++){
				arrTagsSearch.push(JSON.parse(localStorage.arrTags)[i]);
			}
			arrTagsSearch.sort();
			var i = arrTagsSearch.length;
			while (i--){
			    if (arrTagsSearch[i] == arrTagsSearch[i-1]){
			        arrTagsSearch.splice(i, 1);
			    }
			}
			var li = document.createElement("li");
			for (var j = 0; j < arrTagsSearch.length; j++) {
			  li.innerHTML += "<a class = 'tag_link' href = '#'>#"+arrTagsSearch[j]+"</a>";
			  //li.innerHTML.setAttribute("class", "tag_link");
			}
			
			li.setAttribute("id", "li_tags");
			ul_drop_tags.appendChild(li);
		}
}

//не работает...((
  $('.tags_li').click(function(event){
    var target = $(event.target);
    if(target.is('a.tag_link'))
  		$('#search').val = target.text();
  });



function viewDimaPhoto(){
  document.getElementById('heading').classList.add("hidden");
  document.getElementById('slider').classList.add("hidden");
  newTable.removeAttribute("style","display:none");
}