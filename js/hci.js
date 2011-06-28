var hci = {};

hci.sortBy = '';

hci.init = function () {
  $('.sort-by-select').change(function(){
    hci.sortByChangeHandler();
  });

  hci.sortByChangeHandler();
  hci.refreshList();
}

hci.refreshList = function () {
  $('ul.ui-listview').html('');

  var offers = hci.offers;
  if (hci.sortBy != '') {
    offers = hci.offers.sort(function(a,b) { return parseFloat(a[hci.sortBy]) - parseFloat(b[hci.sortBy]) } );
  }

  $(offers).each(function(){
    hci.appendOffer(this);
  });
}

hci.sortByChangeHandler = function () {
  hci.sortBy = $('.sort-by-select').val();
  hci.refreshList();
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
  $('.description', listElement).text(offer.description);
  $('.place', listElement).text(offer.place);
  $('.photo', listElement).attr('src', offer.photo);

  $('ul.ui-listview').append(listElement);
  $('ul.ui-listview').listview("refresh");
}


