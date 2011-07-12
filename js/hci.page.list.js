hci.page.list = {};

hci.page.list.init = function () {
  $('.sort-by-select').change(function(){
    hci.page.list.sortByChangeHandler();
  });

  hci.page.list.sortByChangeHandler();
  hci.page.list.refreshList();
}

hci.page.list.sortByChangeHandler = function () {
  hci.sortBy = $('.sort-by-select').val();
  hci.refreshList();
}

hci.page.list.refreshList = function () {
  $('ul.ui-listview').html('');

  var offers = hci.offers;
  if (hci.sortBy != '') {
    offers = hci.offers.sort(function(a,b) { return parseFloat(a[hci.sortBy]) - parseFloat(b[hci.sortBy]) } );
  }

  $(offers).each(function(){
    hci.page.list.appendOffer(this);
  });
}

hci.page.list.appendOffer = function(offer) {
  var listElement = document.createElement('li');

  var content = '<a href="" rel="external">\
	    <img class="photo" />\
	    <p class="price"></p>\
	    <h3 class="title"></h3>\
	    <p class="description"></p>\
      <p class="ui-li-desc place"></p>\
    </a>';
  $(listElement).html(content);

  $('a', listElement).attr('href', 'show.html?id=' + offer.id);
  $('.title', listElement).text(offer.title);
  $('.price', listElement).text(offer.price + ' $');
  $('.description', listElement).text(offer.description);
  $('.place', listElement).text(offer.place + ' (' + offer.distance + 'km)');
  $('.photo', listElement).attr('src', 'images/cars/' + offer.mark + '/1.png');

  $('ul.ui-listview').append(listElement);
  $('ul.ui-listview').listview("refresh");
}

