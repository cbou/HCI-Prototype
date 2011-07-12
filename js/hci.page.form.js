hci.page.form = {};

hci.page.form.init = function () {
  $('form input[type=submit]').click(function(){
   window.location = '/show.html?flashMessage=Ihre Anzeige ist jetzt gespeichert.&flashTitle=Neue Anzeige';
  });
}
