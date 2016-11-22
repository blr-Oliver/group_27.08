number = 0 
var imagesSlider = [new Image(), new Image(), new Image(), new Image()];
imagesSlider[0].src="http://otdyhaem.by/upload/medialibrary/ef3/ef34a12a95dcd424935feba2336943e0.jpg"; // Riga
imagesSlider[1].src="http://respector.by/wp-content/uploads/2016/03/01.jpg"; // Tallin
imagesSlider[2].src="http://www.softtour.by/img/tours/31/Vilnius.jpeg"; // Vilnius
imagesSlider[3].src="http://img.tyt.by/n/fotofact/09/e/18minsk-foto-dmitriy_vazhnik-yanvar2016.jpg"; // Minsk
setInterval(function sliderPictures(){
    $("#image")[0].src = imagesSlider[number].src; 
    number++; 
    if(number === imagesSlider.length){
        number = 0;
    };
}, 2500);

function showPicture1(){
    $("#image")[0].src=imagesSlider[0].src; 
}
function showPicture2(){
    $("#image")[0].src=imagesSlider[1].src; 
}
function showPicture3(){
    $("#image")[0].src=imagesSlider[2].src; 
}
function showPicture4(){
    $("#image")[0].src=imagesSlider[3].src; 
}

$(function(){
    var flag = false;
    $("#link1").css("background", "#000");
    setTimeout(function () {
        $("#link1").css("background", "#000");
        setInterval(function () {
            $("#link1").css("background", flag ? "#000" : "#bd3333");
            flag = !flag;
        }, 500);
    }, 3000);
});

$(function(){
    var flag = false;
    $("#link2").css("background", "#000");
    setTimeout(function () {
        $("#link2").css("background", "#000");
        setInterval(function () {
            $("#link2").css("background", flag ? "#000" : "#bd3333");
            flag = !flag;
        }, 500);
    }, 3000);
});

$(function(){
    var flag = false;
    $("#link3").css("background", "#000");
    setTimeout(function () {
        $("#link3").css("background", "#000");
        setInterval(function () {
            $("#link3").css("background", flag ? "#000" : "#bd3333");
            flag = !flag;
        }, 500);
    }, 3000);
});

$(function(){
    var flag = false;
    $("#link4").css("background", "#000");
    setTimeout(function () {
        $("#link4").css("background", "#000");
        setInterval(function () {
            $("#link4").css("background", flag ? "#000" : "#bd3333");
            flag = !flag;
        }, 500);
    }, 3000);
});