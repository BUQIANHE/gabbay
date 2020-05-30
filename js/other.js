$(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() > 0){
      $('.top-nav').addClass('active');
    }else{
      $('.top-nav').removeClass('active');
    }
  })

  $('.menu-ico').on('click', function(){
    $(this).parents('.top-nav').toggleClass('act_color')
    $(this).toggleClass('icon-cross');
    $(this).siblings('.top-bar').slideToggle();
    
  })
  
  $('.nav-list').mouseenter(function () { 
    $(this).find('.dp-items').slideDown();
    $(this).siblings().find('.dp-items').slideUp();
  });
  $('.dp-items').mouseleave(function () { 
    $(this).slideToggle();
  });


  // pro detail js
  $('.slide-item').bxSlider({
    slideWidth: 1660,
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    startSlide: 0,
    slideMargin: 0,
    auto: true,
    autoControls: false,
    pager: false,
    controls: true,
    speed: 500,
  });
   


})