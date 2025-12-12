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

// Google

$('.first-google-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-google-01.mp4");
  
  });
  
  $('.second-google-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-google-02.mp4");
  
  });
  
  $('.third-google-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-google-03.mp4");
  
  });
  
  $('.fourth-google-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-google-04.mp4");
  
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

//Nubank

$('.first-nubank-reels').click(function(){
$('.modalvideo').css('display','flex');
$('html').css('overflow-y','hidden');
$('body > div > video').attr("src","./assets/image/reels-nubank-01.mp4");
});

$('.second-nubank-reels').click(function(){
$('.modalvideo').css('display','flex');
$('html').css('overflow-y','hidden');
$('body > div > video').attr("src","./assets/image/reels-nubank-02.mp4");
});

$('.third-nubank-reels').click(function(){
$('.modalvideo').css('display','flex');
$('html').css('overflow-y','hidden');
$('body > div > video').attr("src","./assets/image/reels-nubank-03.mp4");
});

// Black creators program

$('.bcp-video').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/bcp-sites.mp4");
});

$('.second-bcp-video').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/bcp-video-01.mp4");
});

$('.first-bcp-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-bcp-01.mp4");
});

$('.second-bcp-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-bcp-02.mp4");
});

$('.third-bcp-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-bcp-03.mp4");
});

$('.fourth-bcp-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-bcp-04.mp4");
});

$('.five-bcp-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-bcp-05.mp4");
});

$('.six-bcp-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-bcp-06.mp4");
});

$('.seven-bcp-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-bcp-07.mp4");
});

$('.eighth-bcp-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-bcp-08.mp4");
});

$('.nine-bcp-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-bcp-09.mp4");
});

// Nubank - Modo rua

$('.fourth-nubank-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-nubank-07.mp4");
  });

  $('.five-nubank-reels').click(function(){
    $('.modalvideo').css('display','flex');
    $('html').css('overflow-y','hidden');
    $('body > div > video').attr("src","./assets/image/reels-nubank-08.mp4");
  });

  $('.sixth-nubank-reels').click(function(){
    $('.modalvideo').css('display','flex');
    $('html').css('overflow-y','hidden');
    $('body > div > video').attr("src","./assets/image/reels-nubank-04.mp4");
  });

  $('.seven-nubank-reels').click(function(){
    $('.modalvideo').css('display','flex');
    $('html').css('overflow-y','hidden');
    $('body > div > video').attr("src","./assets/image/reels-nubank-05.mp4");
  });

  $('.eighth-nubank-reels').click(function(){
    $('.modalvideo').css('display','flex');
    $('html').css('overflow-y','hidden');
    $('body > div > video').attr("src","./assets/image/reels-nubank-06.mp4");
  });

  $('.nine-nubank-reels').click(function(){
    $('.modalvideo').css('display','flex');
    $('html').css('overflow-y','hidden');
    $('body > div > video').attr("src","./assets/image/reels-nubank-08.mp4");
  });

  // Prime video

  $('.first-prime-reels').click(function(){
    $('.modalvideo').css('display','flex');
    $('html').css('overflow-y','hidden');
    $('body > div > video').attr("src","./assets/image/reels-prime-01.mp4");
  });

  $('.second-prime-reels').click(function(){
    $('.modalvideo').css('display','flex');
    $('html').css('overflow-y','hidden');
    $('body > div > video').attr("src","./assets/image/reels-prime-02.mp4");
  });

//Picpay

$('.first-picpay-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-picpay-01.mp4");
});

$('.second-picpay-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-picpay-02.mp4");
});


//Sicredi

$('.first-sicredi-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-sicredi-01.mp4");
});

$('.second-sicredi-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-sicredi-02.mp4");
});

//DM9

$('.first-dm9-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-dm9-01.mp4");
});

$('.second-dm9-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-dm9-02.mp4");
});

$('.second-dm9-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-dm9-03.mp4");
});


// AliExperts 

$('.first-ali-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-ali-01.mp4");
  });
  
  $('.second-ali-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-ali-02.mp4");
  });

  $('.third-ali-reels').click(function(){
    $('.modalvideo').css('display','flex');
    $('html').css('overflow-y','hidden');
    $('body > div > video').attr("src","./assets/image/reels-ali-03.mp4");
  });

  $('.fourth-ali-reels').click(function(){
    $('.modalvideo').css('display','flex');
    $('html').css('overflow-y','hidden');
    $('body > div > video').attr("src","./assets/image/reels-ali-04.mp4");
  });

  $('.five-ali-reels').click(function(){
    $('.modalvideo').css('display','flex');
    $('html').css('overflow-y','hidden');
    $('body > div > video').attr("src","./assets/image/reels-ali-05.mp4");
  });


  // Loreal

$('.first-loreal-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-loreal-01.mp4");
  });
  
  $('.second-loreal-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-loreal-02.mp4");
  });

  $('.third-loreal-reels').click(function(){
    $('.modalvideo').css('display','flex');
    $('html').css('overflow-y','hidden');
    $('body > div > video').attr("src","./assets/image/reels-loreal-03.mp4");
  });

  $('.fourth-loreal-reels').click(function(){
    $('.modalvideo').css('display','flex');
    $('html').css('overflow-y','hidden');
    $('body > div > video').attr("src","./assets/image/reels-loreal-04.mp4");
  });

  $('.five-loreal-reels').click(function(){
    $('.modalvideo').css('display','flex');
    $('html').css('overflow-y','hidden');
    $('body > div > video').attr("src","./assets/image/reels-loreal-05.mp4");
  });
    

  // Vitru

$('.first-vitru-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-vitru-01.mp4");
  });
  
  $('.second-vitru-reels').click(function(){
  $('.modalvideo').css('display','flex');
  $('html').css('overflow-y','hidden');
  $('body > div > video').attr("src","./assets/image/reels-vitru-02.mp4");
  });

  $('.third-vitru-reels').click(function(){
    $('.modalvideo').css('display','flex');
    $('html').css('overflow-y','hidden');
    $('body > div > video').attr("src","./assets/image/reels-vitru-03.mp4");
  });

  $('.fourth-vitru-reels').click(function(){
    $('.modalvideo').css('display','flex');
    $('html').css('overflow-y','hidden');
    $('body > div > video').attr("src","./assets/image/reels-vitru-04.mp4");
  });

  $('.five-vitru-reels').click(function(){
    $('.modalvideo').css('display','flex');
    $('html').css('overflow-y','hidden');
    $('body > div > video').attr("src","./assets/image/reels-vitru-05.mp4");
  });
    
