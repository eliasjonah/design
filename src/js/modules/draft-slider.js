function draftSlider () {
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper('.draft__slider', {
    centeredSlides: true,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.draft__btn--next',
      prevEl: '.draft__btn--prev',
    },
  });
}

export {draftSlider};
