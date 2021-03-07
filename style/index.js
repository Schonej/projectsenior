var swiper = new Swiper('#swiper1', {
  slidesPerView: 1,
  spaceBetween: 10,
  // init: false,
  navigation: {
    nextEl: '#js-prev1',
    prevEl: '#js-next1',

  },
  
  breakpoints: {
    '@0.00': {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    '@0.75': {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    '@1.00': {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    '@1.50': {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  }
});