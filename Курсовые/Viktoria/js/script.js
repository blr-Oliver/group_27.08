var links = [
  "http://otdyhaem.by/upload/medialibrary/ef3/ef34a12a95dcd424935feba2336943e0.jpg", // Riga
  "http://respector.by/wp-content/uploads/2016/03/01.jpg", //Tallin
  "http://www.softtour.by/img/tours/31/Vilnius.jpeg", // Vilnius
  "http://img.tyt.by/n/fotofact/09/e/18minsk-foto-dmitriy_vazhnik-yanvar2016.jpg" // Minsk
];

$(document).ready(function(){
  var images = preload(links);

  $('.map').click(function(event){
    var target = $(event.target);
    if(target.is('a.spot'))
      showImage(target.index());
  });
  
  setTimeout(blinkInfinitely, 3000, '.spot', 'highlight', 500);
  setTimeout(rotateInfinitely, 2500, 0);
});

function preload(links){
  return links.map(function(src){
    var img = new Image();
    img.src = src;
    return img;
  })
}

function showImage(index){
  $("#image")[0].src = links[index];
}

function blinkInfinitely(selector, claz, interval){
  var target = $(selector);
  setInterval(function(){
    target.toggleClass(claz);
  }, interval);
}

function rotateInfinitely(toIndex){
  showImage(toIndex);
  setTimeout(rotateInfinitely, 2500, (toIndex + 1) % links.length);
}