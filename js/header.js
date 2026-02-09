// change style when scroll
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 0) {
    $(".fxHeader").addClass("scrolled");
    $(".navbar-mobile").addClass("scrolledNavbar");
    $(".nav-mobile").addClass("topNav");
    $(".nav-mobile").removeClass("NavInTop");
  } else {
    $(".fxHeader").removeClass("scrolled");
    $(".navbar-mobile").removeClass("scrolledNavbar");
    $(".nav-mobile").removeClass("topNav");
    $(".nav-mobile").addClass("NavInTop");
  }
});


