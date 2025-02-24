const productsSlider = new Swiper('.products-slider', {
  slidesPerView: 2,
  spaceBetween: 24,
  breakpoints: {
    1400: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1700: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});
