const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("overlay");
const dropdowns = document.querySelectorAll(".mobile-dropdown");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("open");
  overlay.classList.add("show");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  overlay.classList.remove("show");
});

overlay.addEventListener("click", () => {
  mobileMenu.classList.remove("open");
  overlay.classList.remove("show");
});

dropdowns.forEach(drop => {
  const toggle = drop.querySelector(".dropdown-toggle");
  toggle.addEventListener("click", () => {
    drop.classList.toggle("active");
  });
});
