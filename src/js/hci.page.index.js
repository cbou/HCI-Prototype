hci.page.index = {};

hci.page.index.init = function () {
  var galleryWidth = $('.swipegallery').parent().parent().width();

  $('.swipegallery').swipeGallery({
    height: '80px',
    width: galleryWidth + 'px',
    background: '#E2E2E2'
  });  

  $('.swipegallery-container .swipegallery').css({left: '0px'});

  $('.swipegallery-container').live('swipeleft',function(event, ui){
    var galleryWidth = $(event.target).parent().parent().width();
    $('.swipegallery', $(this)).animate({left: '-='+galleryWidth+'px'}, { duration: 1000 });
  });

  $('.swipegallery-container').live('swiperight',function(event, ui){
    var galleryWidth = $(event.target).parent().parent().width();
    $('.swipegallery', $(this)).animate({left: '+='+galleryWidth+'px'}, { duration: 1000 });
  });
}
