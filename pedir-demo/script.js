
$('.carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  pageDots: false,
  freeScroll: true

});

var $carousel = $('.carousel').flickity();

$('.button-group .button--previous').on( 'click', function() {
  $carousel.flickity('previous');
});

$('.button-group .button--next').on( 'click', function() {
  $carousel.flickity('next');
});

var lastScrollTop = 500;
 $(window).on('scroll', function() {
    var st = $(this).scrollTop();
   if(st < lastScrollTop) {
    $(".cases").addClass("aos-animate");
   }
   else {
    $(".cases").removeClass("aos-animate");
   }
   lastScrollTop = st;
 });