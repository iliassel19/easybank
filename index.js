const menuBtn = document.querySelector(".navigation__hamburger");
const menuBtnLines = document.querySelectorAll(".navigation__hamburger-line");
const navigationNav = document.querySelector(".navigation__nav");
const navigationOverlay = document.querySelector(".navigation__overlay");

menuBtn.addEventListener("click", function (e) {
  const btn = e.target.closest(".navigation__hamburger");
  if (!btn) return;
  menuBtnLines.forEach((line) => line.classList.toggle("toggle"));
  navigationNav.classList.toggle("active");
  navigationOverlay.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});
