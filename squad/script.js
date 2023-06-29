
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

$('body').on('click', '#ff-submit-root', function() {
  gtag('event', 'conversion', {'send_to': 'AW-626645894/hDjiCNqVhtUBEIa356oC'});
});
