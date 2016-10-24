$(document).ready(function(){

  $('#load-fragment').click(function(){
    $.ajax({
      url: '/fragment.html',
      method: 'GET',
      dataType: 'html'
    }).done(function(data){
      $('#fragment-area').html(data);
      $('#load-fragment').remove();
    });
  })

  $('a[data-toggle="tab"]').on('shown.bs.tab', function(e){
    var tab = $(e.target), template = tab.data('template');
    if(template){
      var target = $(tab.attr('href'));
      target.addClass('loading');
      $.ajax({
        url: template,
        method: 'GET',
        dataType: 'html'
      }).done(function(data){
        target.html(data).removeClass('loading');
        tab.data('template', '');
      })
    }
  });

  $('.load-json').click(function(){
    var target = $('#json-list-container');
    var itemTemplate = $('#list-item-template li');

    target.addClass('loading');

    $.ajax({
      url: '/person/data.json',
      method: 'GET',
      dataType: 'json'
    }).done(function(data){
      target.empty();
      for (var i = 0; i < data.length; ++i)
        renderItem(itemTemplate.clone(), data[i]).appendTo(target);
      target.removeClass('loading');
    });

    function renderItem(target, data){
      target.attr('data-item-id', data.id);
      target.find('[data-marker="image"]').attr('src', data.image);
      target.find('[data-marker="language"]').text(data.language);
      target.find('[data-marker="name"]').text(data.author.name);
      target.find('[data-marker="surname"]').text(data.author.surname);
      return target;
    }
  });

  $('#json-list-container').click(function(xhr, lastId){
    return function(event){
      var details = $('#details');
      var item = $(event.target).closest('.json-item');
      if(item){
        var id = item.attr('data-item-id');
        if(lastId != id){
          lastId = id;
          if(xhr)
            xhr.abort();
          xhr = $.ajax({
            url: '/person/' + id + '.html',
            method: 'GET',
            dataType: 'html'
          });

          xhr.done(function(data){
            details.html(data);
            details.removeClass('loading');
          });
        }
      }
    }
  }());

});