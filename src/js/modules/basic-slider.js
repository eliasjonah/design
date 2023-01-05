function basicSlider () {
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper('.basic__slider', {
    centeredSlides: true,
    loop: true,
    speed: 1500,
    slidesPerView: '3',
    spaceBetween: 20,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
}

export {basicSlider};
