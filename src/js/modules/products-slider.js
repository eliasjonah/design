function productsSlider () {
  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper('.products__slider', {
    loop: true,
    speed: 1500,
    slidesPerView: '4',
    spaceBetween: 20,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.products__pagination',
      clickable: true,
    },
  });
}

export {productsSlider};
