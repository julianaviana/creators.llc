$('.carousel').flickity({
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: true,
    freeScroll: true,
    fullscreen: true,
    autoPlay: 3000
  
  });

$('.modalvideo .close').click(function(){
    $('.modalvideo').css('display','none');
    $('html').css('overflow-y','auto');
    $('body > div > video').attr("src","");;
});

$('.first-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-globoplay-01.mp4");

});

$('.second-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-globoplay-03.mp4");

});

$('.third-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-globoplay-04.mp4");

});

$('.fourth-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-globoplay-05.mp4");

});