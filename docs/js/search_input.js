const searchIco = document.querySelector(".search__ico");
const input = document.querySelector(".form__input2");

input.addEventListener("click", () => {
  searchIco.classList.add("hide");
});

input.addEventListener("focusout", () => {
  searchIco.classList.remove("hide");
});
