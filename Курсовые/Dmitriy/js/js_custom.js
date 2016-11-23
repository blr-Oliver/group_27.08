

var arrPhoto = ['/img/dima/Дима.jpg','/img/dima/dima2.jpg','/img/dima/dima3.jpg','/img/dima/dima4.jpg','/img/dima/dima5.jpg','/img/dima/dima6.jpg','/img/dima/dima6.jpg', '/img/dima/dima6.jpg', '/img/dima/dima6.jpg', '/img/dima/dima6.jpg', '/img/dima/dima6.jpg', '/img/dima/dima6.jpg', '/img/dima/dima6.jpg','/img/dima/dima2.jpg','/img/dima/dima2.jpg','/img/dima/dima2.jpg','/img/dima/dima2.jpg','/img/dima/dima2.jpg','/img/dima/dima2.jpg','/img/dima/dima2.jpg'];

if(localStorage.getItem('arrPhoto')){}
	else localStorage.arrPhoto = JSON.stringify(arrPhoto);



//var arrDescr = [];
//for (var i = 0; i < arrPhoto.length; i++){
//	arrDescr.push(arrPhoto[i].slice(10, -4));
//}


var arrDescr = ['111', '222', '333', '444', '555', '666', '777', '888', '999', '101010', '111111', '121212', '131313', '141414', '151515', '161616', '171717', '181818', '191919', '202020'];
if(localStorage.getItem('arrDescr')){}
	else localStorage.arrDescr = JSON.stringify(arrDescr);

var arrTags = ['c', 'c', 'c', 'c', 'c', 'c', 'c', 'cool888', 'cool888', 'cool101010', 'cool111111', 'cool121212', 'cool131313', 'cool141414', 'cool151515', 'cool161616', 'cool171717', 'cool181818', 'cool191919', 'cool202020'];
if(localStorage.getItem('arrTags')){}
	else localStorage.arrTags = JSON.stringify(arrTags);

//}

//if(localStorage.getItem('arrDescr')){}
//	else localStorage.arrDescr = JSON.stringify(arrDescr);












var cells = 6;
var rows = JSON.parse(localStorage.arrPhoto).length / cells;
var currentCells = 0;
var maxCells = cells;
var newTable = document.createElement("TABLE");
var newTBody = document.createElement("TBODY");

function createTableDima(){
//newTable.setAttribute("border","2");
newTable.setAttribute("align","center");
newTable.setAttribute("id","tableDima");
newTable.setAttribute("style","display:none");
for (var r = 0; r < rows; r++){
var newRow = document.createElement("TR");
for (var c = currentCells; c < maxCells; c++){
var newCell = document.createElement("TD");
var newCellText = document.createTextNode("empty");
if(c < JSON.parse(localStorage.arrPhoto).length){
newCell.appendChild(newCellText);
newRow.appendChild(newCell);
}

newCell.setAttribute("style","padding:10px");

newCell.innerHTML='<a href="'+JSON.parse(localStorage.arrPhoto)[c]+'" rel="lightgallery[dima]"><img src="'+JSON.parse(localStorage.arrPhoto)[c]+'" width="100%" alt=""/></a>\n'+JSON.parse(localStorage.arrDescr)[c]+'\n #'+JSON.parse(localStorage.arrTags)[c]+'';








newCell.setAttribute("align","center");

}
newTBody.appendChild(newRow);
currentCells=c;
maxCells+=cells;
}
newTable.appendChild(newTBody);

document.body.appendChild(newTable);




	
}


function handleClickLoad(){

	var arrPhotoNew = JSON.parse(localStorage.arrPhoto);
	arrPhotoNew.push('/img/dima/' + document.getElementById('loader').value.slice(12));
	localStorage.arrPhoto = JSON.stringify(arrPhotoNew);

	var arrDescrNew = JSON.parse(localStorage.arrDescr);
	arrDescrNew.push(document.getElementById('name').value);
	localStorage.arrDescr = JSON.stringify(arrDescrNew);
  	
	var arrTagsNew = JSON.parse(localStorage.arrTags);
	arrTagsNew.push(document.getElementById('tags').value);
	localStorage.arrTags = JSON.stringify(arrTagsNew);




  	location.reload();
	
}



function handleClickSearch(){
	


	var arrTagsSearch = [];
	var arrPhotoSearch = [];
	var arrDescrSearch = [];
	for(var i = 0; i < JSON.parse(localStorage.arrTags).length; i++){
	if(JSON.parse(localStorage.arrTags)[i] == document.getElementById('search').value){
		
			arrTagsSearch.push(JSON.parse(localStorage.arrTags)[i]);
			arrPhotoSearch.push(JSON.parse(localStorage.arrPhoto)[i]);
			arrDescrSearch.push(JSON.parse(localStorage.arrDescr)[i]);
}

}	


    
    
          // создать div в документе нового окна
      //var div = newWin.document.createElement('div'),
         // body = newWin.document.body;
    
     // div.innerHTML = 'Добро пожаловать!'
      //div.style.fontSize = '30px'
    

      // вставить первым элементом в body нового окна
      //body.insertBefore(div, body.firstChild);



var cells = 2;
var rows = arrPhotoSearch.length / cells;
var currentCells = 0;
var maxCells = cells;
//var newWin = window.open('/', '', 'width=600,height=400');
var newTable = document.createElement("TABLE");
var newTBody = document.createElement("TBODY");
//newTable.setAttribute("border","2");
newTable.setAttribute("align","center");
newTable.setAttribute("style","width:1170px");
for (var r = 0; r < rows; r++){
var newRow = document.createElement("TR");
for (var c = currentCells; c < maxCells; c++){
var newCell = document.createElement("TD");
var newCellText = document.createTextNode("empty");
if(c < arrPhotoSearch.length){
newCell.appendChild(newCellText);
newRow.appendChild(newCell);
}

newCell.setAttribute("style","padding:10px");

newCell.innerHTML='<a href="'+arrPhotoSearch[c]+'" rel="lightgallery[dima]" target = "_blank"><img src="'+arrPhotoSearch[c]+'" width="100%" alt=""/></a>\n'+arrDescrSearch[c]+'\n #'+arrTagsSearch[c]+'';

newCell.setAttribute("align","center");

}
newTBody.appendChild(newRow);
currentCells=c;
maxCells+=cells;
}
newTable.appendChild(newTBody);
document.body.appendChild(newTable);


var tableDima = document.getElementById('tableDima');
var footer = document.getElementById('footer');
var heading = document.getElementById('heading');
var slider = document.getElementById('slider');
tableDima.setAttribute("style","display:none");
heading.setAttribute("style","display:none");
slider.setAttribute("style","display:none");


    



//}


}





    function createTagList(){
	var arrPhotoSearch = [];
	var arrTagsSearch = [];

		for(var i = 0; i < JSON.parse(localStorage.arrTags).length; i++){
		
			arrTagsSearch.push(JSON.parse(localStorage.arrTags)[i]);
			arrPhotoSearch.push(JSON.parse(localStorage.arrPhoto)[i]);
			//arrDescrSearch.push(JSON.parse(localStorage.arrDescr)[i]);


}

var ul = document.getElementById("ul")
var li = document.createElement("li")
   //var  option = document.createElement("option");
for (var j = 0; j < JSON.parse(localStorage.arrTags).length; j++) {

  li.innerHTML = li.innerHTML + "<a href="+arrPhotoSearch[j]+">#"+arrTagsSearch[j]+"</a>";

}
    ul.appendChild(li);
}






//function handleClickDima(){
//
//	var heading = document.getElementById('heading');
//	var slider = document.getElementById('slider');
//	heading.classList.add("hidden");
//	slider.classList.add("hidden");
//	return false;
	//createTableDima();
//
//}
/*
function handleClickLena(){

	var heading = document.getElementById('heading');
	var slider = document.getElementById('slider');
	heading.classList.add("hidden");
	slider.classList.add("hidden");

}

function handleClickDanik(){

	var heading = document.getElementById('heading');
	var slider = document.getElementById('slider');
	heading.classList.add("hidden");
	slider.classList.add("hidden");

}
*/
