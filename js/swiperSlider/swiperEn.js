$(document).ready(function () {
  var totalSlides = $(".sectionOne .swiper-wrapper .swiper-slide").length;

  $(".totalSlide").text(totalSlides.toString().padStart(2, "0"));

  var mySwiper = new Swiper(".swiper-container", {
    loop: true,
    speed: 1000,
    effect: "fade",
    slidesPerView: 1,
    navigation: {
      nextEl: ".arrowS1Right",
      prevEl: ".arrowS1Left",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    on: {
      init: function () {
        updateDots(this.realIndex);
        animateSlideContent();
      },
      slideChangeTransitionStart: function () {
        updateDots(this.realIndex);
        animateSlideContent();
      },
    },
  });

  function updateDots(index) {
    $(".point").removeClass("active");
    $(".point").eq(index).addClass("active");
    $(".numberSlide").text((index + 1).toString().padStart(2, "0"));
  }

  $(".point").click(function () {
    var index = $(this).index();
    mySwiper.slideToLoop(index);
  });

  function animateSlideContent(direction = "right") {
    const activeSlide = $(".swiper-slide-active");
    const animationIn = direction === "right" ? "fadeInRight" : "fadeInLeft";

    activeSlide.find("h3").css({ animation: `${animationIn} 1s` });
    activeSlide.find("h1").css({ animation: `${animationIn} 1.3s` });
    activeSlide.find("p").css({ animation: "fadeInUp 1.2s" });
    activeSlide.find(".fxText").css({ animation: "fadeInUp 1.5s" });

    setTimeout(() => {
      activeSlide.find("h3, h1, p, .fxText").css("animation", "");
    }, 2000);
  }

  $(document).ready(function () {
    $("#arrowS1Right").click(function () {
      animateSlideContent("right");
    });

    $("#arrowS1Left").click(function () {
      animateSlideContent("left");
    });
  });
});
///////////////////////////////////////////////////////
var swiper = new Swiper(".sliderCareers", {
  loop: true,
  effect: "fade",
  speed: 1000,
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<li class="' + className + '"><a class="dot"></a></li>';
    },
  },
  navigation: {
    nextEl: ".careersS2Left",
    prevEl: ".careersS2Right",
  },
  on: {
    init: function () {
      animateSlideContent2();
    },
    slideChangeTransitionStart: function () {
      animateSlideContent2();
    },
  },
});
function animateSlideContent2(direction = "right") {
  const activeSlide = $(".swiper-slide-active");
  const animationIn = direction === "right" ? "fadeInUp" : "fadeInDown";

  activeSlide.find("span").css({ animation: `${animationIn} 1s` });
  activeSlide.find("h2").css({ animation: `${animationIn} 0.5s` });
  activeSlide.find("p").css({ animation: "fadeInUp 0.5s" });

  setTimeout(() => {
    activeSlide.find("span, h2, p").css("animation", "");
  }, 2000);
}
$(document).ready(function () {
  $(".careersS2Right").click(function () {
    animateSlideContent2("right");
  });

  $(".careersS2Left").click(function () {
    animateSlideContent2("left");
  });
});
//////////////////////////////////////////////////////
var swiper = new Swiper(".swiperNews", {
  centeredSlides: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  speed: 800,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".arrowLeftSlider",
    prevEl: ".arrowRightSlider",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      centeredSlides: true,
    },
    615: {
      slidesPerView: 1,
      centeredSlides: false,
    },
    512: {
      slidesPerView: 1,
      centeredSlides: false,
    },
    384: {
      slidesPerView: 1,
      centeredSlides: false,
    },
  },
});
/////////////////////////////////////////////////
var swiper = new Swiper(".swiperLogos", {
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  spaceBetween: 0,
  speed: 800,
  navigation: {
    nextEl: ".arrowLeftLogo",
    prevEl: ".arrowRightLogo",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      centeredSlides: true,
    },
    615: {
      slidesPerView: 1,
      centeredSlides: false,
    },
    512: {
      slidesPerView: 1,
      centeredSlides: false,
    },
    384: {
      slidesPerView: 1,
      centeredSlides: false,
    },
  },
});
////////////////////////////////////
var swiper = new Swiper(".sliderEmployment", {
  loop: true,
  effect: "fade",
  speed: 1000,
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<li class="' + className + '"><a class="dot"></a></li>';
    },
  },
  navigation: {
    nextEl: ".careersS4Right",
    prevEl: ".careersS4Left",
  },
});
////////////////////////////////////////////////
var swiper = new Swiper(".sliderEmployeeBenefits", {
  loop: true,
  effect: "fade",
  speed: 1000,
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<li class="' + className + '"><a class="dot"></a></li>';
    },
  },
  navigation: {
    nextEl: ".careersS6Right",
    prevEl: ".careersS6Left",
  },
});
