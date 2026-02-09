$(document).ready(function () {
  const sections = $("section[id]");
  const navLinks = $("a[href^='#']");

  $(window).on("scroll", function () {
    let scrollPosition = $(window).scrollTop();

    let found = false;

    sections.each(function () {
      const sectionTop = $(this).offset().top - 100;
      const sectionBottom = sectionTop + $(this).outerHeight();

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const sectionId = $(this).attr("id");

        navLinks.removeClass("active");
        $("a[href='#" + sectionId + "']").addClass("active");

        found = true;
        return false;
      }
    });

    if (!found) {
      navLinks.removeClass("active");
    }
  });

  navLinks.on("click", function (e) {
    e.preventDefault();
    const target = $(this.getAttribute("href"));
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        800
      );
    }
  });
});
