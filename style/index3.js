var swiper = new Swiper('#swiper3', {
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    navigation: {
      nextEl: '#js-prev3',
      prevEl: '#js-next3',
  
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