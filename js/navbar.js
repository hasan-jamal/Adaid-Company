const hamburger = document.getElementById("hamburgerBtn");
const closeBtn = document.getElementById("closeBtn");
function toggleSidenav() {
  const nav = document.getElementById("mobileNav");

  if (nav.classList.contains("open")) {
    // Close menu
    nav.classList.remove("open");
    setTimeout(() => {
      nav.style.display = "none";
    }, 300);
    hamburger.style.display = "flex";
    closeBtn.style.display = "none";
  } else {
    // Open menu
    nav.style.display = "inline-block";
    setTimeout(() => {
      nav.classList.add("open");
    }, 10);
    hamburger.style.display = "flex";
    closeBtn.style.display = "inline-block";
  }
}

// Close menu when clicking outside
window.addEventListener("click", function (e) {
  const nav = document.getElementById("mobileNav");

  const toggleArea = document.getElementById("menu-toggle");

  if (
    nav.classList.contains("open") &&
    !nav.contains(e.target) &&
    !toggleArea.contains(e.target)
  ) {
    nav.classList.remove("open");
    setTimeout(() => {
      nav.style.display = "none";
    }, 300);
    hamburger.style.display = "flex";
    closeBtn.style.display = "none";
  }
});
///////////////////////////////////
