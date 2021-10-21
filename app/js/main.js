$(function() {
  $('.banner-section__slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: ' <button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt="arrow-left"></button>',
    nextArrow: ' <button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt="arrow-right"></button>',
    responsive: [
      {
        breakpoint: 969,
        settings: {
        arrows: false,
        }
      }
    ]
  });

  $('.tab').on('click', function(e){
    e.preventDefault(); //отключаем ссылку

    $($(this).siblings()).removeClass('tab--active');
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active'); // через метод closest находим tabs-wrapper

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');

    $('.product-slider').slick('setPosition');
  })

  $('.product-item__favorite').on('click', function(){
    $(this).toggleClass('product-item__favorite--active')
  });

  $('.catalog__filter-options').on('click', function(){
    $('.catalog__filter-options').removeClass('catalog__filter-options--active');
    $(this).addClass('catalog__filter-options--active');
  });


  $('.product-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: ' <button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/arrow-black-left.svg" alt="arrow-black-left"></button>',
    nextArrow: ' <button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/arrow-black-right.svg" alt="arrow-black-right"></button>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        }
      }
    ]
  });

  $('.filter-style').styler();
  
  $('.filter__item-drop, .filter__extra').on('click',function(){
    $(this).toggleClass('filter__item-drop--active');
    $(this).next().slideToggle('200');
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 100000,
    max: 500000,
  });

  $('.catalog__filter-btngrid').on('click',function(){
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').removeClass('product-item__wrapper--list');
  });

  $('.catalog__filter-btnline').on('click',function(){
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').addClass('product-item__wrapper--list');
  });

  $('.menu__btn').on('click', function(){
    $('.menu-mobile__list').toggleClass('menu-mobile__list--active')
  });


  $('.footer__topdrop').on('click',function(){
    $(this).next().slideToggle(); // 'click' автоматом добавляет и убирает display:none
    $(this).toggleClass('footer__topdrop--active');
  });


  $('.aside__btn').on('click',function(){
    $(this).next().slideToggle();
  });

}); 

