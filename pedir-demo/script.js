
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