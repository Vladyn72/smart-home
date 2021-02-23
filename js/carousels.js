const swiper = new Swiper('.services__list', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    500: {
      slidesPerView: 1,
      freeMode: false,
    },
    600: {
      slidesPerView: 2,
      freeMode: true,
    },
    800: {
      slidesPerView: 2,
    },
    1190: {
      slidesPerView: 3,
    }
  }
});

const swiper2 = new Swiper('.reviews__slider', {
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  spaceBetween: 50,
  pagination: {
    el: '.swiper-pagination',
  },
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    600: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    800: {
      slidesPerView: 2,
      // freeMode: true,   
    },
    1130: {
      slidesPerView: 2,
      freeMode: true,      
    },
    1190: {
      slidesPerView: 2,
    }
  }
});
