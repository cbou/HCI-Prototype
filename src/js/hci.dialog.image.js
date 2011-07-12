hci.dialog.image = {}

hci.dialog.image.init = function () {
  var offerIndex = parseInt($.url().param('id')) - 1;
  var offer = hci.offers[offerIndex];
  
  if (offer === undefined) {
    offer = hci.offers[0];
  }

  $('.image-zoom').attr('src', 'images/cars-big/' + offer.mark + '/' + hci.photoLastClick + '.png');

  $('.back').attr('href', '/show.html?id=' + offer.id);
}
