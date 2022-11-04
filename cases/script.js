$('.carousel').flickity({
    cellAlign: 'left',
    contain: true,
    pageDots: true,
    prevNextButtons: false,
    freeScroll: true,
    fullscreen: true,
    autoPlay: 3000
  
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

// Globoplay

$('.first-globloplay-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-globoplay-01.mp4");

});

$('.second-globloplay-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-globoplay-03.mp4");

});

$('.third-globloplay-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-globoplay-04.mp4");

});

$('.fourth-globloplay-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-globoplay-05.mp4");

});


// Xaomi

$('.first-xaomi-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-xaomi-02.mp4");

});

$('.second-xaomi-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-xaomi-04.mp4");

});

$('.third-xaomi-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-xaomi-06.mp4");

});

// Docusign

$('.first-docusign-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-docusign-02.mp4");

});

//Clickbus

$('.first-clickbus-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-clickbus-01.mp4");
});

$('.second-clickbus-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-clickbus-02.mp4");
});

