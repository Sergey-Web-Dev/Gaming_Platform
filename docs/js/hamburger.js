const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar__lists");

const contactUs = document.querySelector(".btn__contact");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("dropdown");
});

if (window.innerWidth <= 575) {
  contactUs.classList.remove("btn__contact");
  contactUs.classList.remove("btn");
  contactUs.classList.add("navbar__link");
}
