const productsSlider = new Swiper('.products-slider .swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 2,
  spaceBetween: 8,
  breakpoints: {
    1100: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});
