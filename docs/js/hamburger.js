const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar__lists");
const oldLink = document.getElementById("change");
const newMobileLink = `<a href="./pages/contact us.html" class="navbar__link">Contact us</a>`;

if (window.innerWidth <= 575) {
  console.log(window.innerWidth);
  oldLink.innerHTML = newMobileLink;
}

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("dropdown");
});
