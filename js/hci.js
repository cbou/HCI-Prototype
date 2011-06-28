var hci = {};

hci.init = function () {
  var offers = hci.offers.sort(function(a,b) { return parseFloat(a.price) - parseFloat(b.price) } );

  $(offers).each(function(){
    hci.appendOffer(this);
  });
}

hci.appendOffer = function(offer) {
  var listElement = document.createElement('li');

  var content = '<a href="show.html" rel="external">\
	    <img class="photo" />\
	    <p class="price"></p>\
	    <h3 class="title"></h3>\
	    <p class="description"></p>\
      <p class="ui-li-desc place" style="float: right;"></p>\
    </a>';
  $(listElement).html(content);

  $('.title', listElement).text(offer.title);
  $('.price', listElement).text(offer.price);
  $('.description', listElement).text(offer.price);
  $('.place', listElement).text(offer.price);
  $('.photo', listElement).attr('src', offer.photo);

  $('ul.ui-listview').append(listElement);
  $('ul.ui-listview').listview("refresh");
}


