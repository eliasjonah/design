function productsSlider () {
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper('.products__slider', {
    loop: true,
    speed: 1500,
    slidesPerView: '4',
    spaceBetween: 20,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: '.products__pagination',
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 720px
      992: {
        slidesPerView: 4,
      },
      // when window width is >= 546px
      767: {
        slidesPerView: 3,
      },
      // when window width is >= 546px
      546: {
        slidesPerView: 2,
      },
      // when window width is >= 320px
      320: {
        slidesPerView: 'auto',
        freeMode: true,
      },
    }
  });
}

export {productsSlider};
