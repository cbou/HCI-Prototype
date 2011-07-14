hci.page.show = {};

hci.page.show.init = function () {
  var offerIndex = parseInt($.url().param('id')) - 1;
  var offer = hci.offers[offerIndex];

  if (offer === undefined) {
    offer = hci.offers[0];
  }

  $('.offer-title').text(offer.title);
  $('.price').text(offer.price + ' $');
  $('.description').text(offer.description);
  $('.place').text(offer.place + ' (' + offer.distance + 'km)');
  $('.photo').attr('src', offer.photo);

  $('.images a').each(function (index, value) {
    var photoId = parseInt(index) + 1;
    $('img', $(value)).attr('src', 'images/cars/' + offer.mark + '/'+ photoId +'.png');
    $('img', $(value)).attr('data-photoid', photoId);
    $(value).attr('href', 'image-dialog.html?id=' + offer.id + '&photo=' + (parseInt(index) + 1));
  });
  
  hci.photoLastClick = 1;

  $('.images a img').click(function () {
    hci.photoLastClick = $(this).attr('data-photoid');
  }); 
}
