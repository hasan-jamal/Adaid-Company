
/////////////////////////////////////////////////
var swiper = new Swiper(".swiperLogos", {
  slidesPerView: 6,
  centeredSlides: false,
  loop: true,
  spaceBetween: 0,
  speed: 500,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
      768: {
      slidesPerView: 1024,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 3,
      centeredSlides: true,
    },
    615: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    512: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    384: {
      slidesPerView: 2,
      centeredSlides: false,
    },
  },
});
