
$('.carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  pageDots: false,
  freeScroll: true,
  autoPlay: 2500

});

var $carousel = $('.carousel').flickity();

$('.button-group .button--previous').on( 'click', function() {
  $carousel.flickity('previous');
});

$('.button-group .button--next').on( 'click', function() {
  $carousel.flickity('next');
});

$('.modalvideo .close').click(function(){
  $('.modalvideo').css('display','none');
  $('html').css('overflow-y','auto');
  $('body > div > video').attr("src","");;
});

$('.second-sicredi-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-sicredi-02.mp4");
});

$('body').on('click', '#ff-submit-root', function() {
  gtag('event', 'conversion', {'send_to': 'AW-626645894/hDjiCNqVhtUBEIa356oC'});
});
