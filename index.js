$('.m-menu-icon').click(function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $('.navigation').slideToggle();
  }
  else{
    $(this).addClass('active');
    $('.navigation').slideToggle();
  }
});

$('.m-menu-list a').click(function(){
  $('.navigation').slideToggle();
  $('.m-menu-icon').removeClass('active');
});

$(function(){
  $('a[href^="#"]').click(function() {
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

charaSwiper = new Swiper ('.character .swiper-container', {
  loop: true,
  pagination: {
    el: '.character .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.character .swiper-button-next',
    prevEl: '.character .swiper-button-prev'
  },
});

$('.character .swiper-pagination > span').each(function(i){
  $(this).addClass('page0' + (i+1));
});

$('.btn-modal-close a ').click(function(){
  $('.modal').css({display: 'none'});
  $('.youtube').css({display: 'none'});
  $('.youtube-player iframe').remove();
});

$('.btn-movie a ').click(function(){
  $('.modal').css({display: 'block'});
  $('.youtube').css({display: 'block'});
});

function modalYoutube(param){
  $('.youtube-player').append('<iframe width="100%" height="100%" style="background-color:#000;" src="https://www.youtube.com/embed/' + param + '?rel=0&showinfo=0&hd=1&vq=hd1080&version=3?wmode=transparent" frameborder="0" allowfullscreen></iframe>');
}

$('.btn-sound a').click(function(){
  if($(this).hasClass('off')){
    $(this).removeClass();
    bgmStatus = 'off';
  }
  else{
    $(this).addClass('off');
    bgmStatus = 'on';
  }
  playBGM(bgmStatus);
});

var bgmFlg = false;
var bgmStatus = 'off';
var baseVol = 0.5;

function playBGM(status){
  $('.bgm')[0].volume = baseVol;
  if(status === 'off'){
    bgmFlg = true;
    $('.bgm')[0].play();
  }
  else if(status === 'on'){
    bgmFlg = false;
    $('.bgm')[0].pause();
  }
  $('.bgm')[0].addEventListener('ended', function(){
    $('.bgm')[0].currentTime = 0;
    $('.bgm')[0].play();
  },false);
}
