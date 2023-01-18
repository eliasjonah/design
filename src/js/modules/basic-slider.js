function basicSlider () {
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper('.basic__slider', {
    // centeredSlides: true,
    loop: true,
    speed: 1500,
    slidesPerView: 'auto',
    spaceBetween: 20,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      // when window width is >= 720px
      767: {
        slidesPerView: 3,
      },
      // when window width is >= 576px
      576: {
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

export {basicSlider};
