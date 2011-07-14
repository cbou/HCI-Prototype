hci.flash = {};

hci.flash.init = function () {
  var flashMessage = $.url().param('flashMessage');
  var flashTitle = $.url().param('flashTitle');
  if (flashMessage !== undefined) {
    jAlert(flashMessage, flashTitle);
  }
}
