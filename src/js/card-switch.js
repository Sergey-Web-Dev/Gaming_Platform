const btnRight = document.getElementById("btn-right");
const btnLeft = document.getElementById("btn-left");
const card1 = document.getElementById("card-1");
const card2 = document.getElementById("card-2");
const card3 = document.getElementById("card-3");

btnRight.addEventListener("click", () => {
  if (card1.classList.contains("active-card")) {
    card1.classList.remove("active-card");
    card2.classList.add("active-card");
    document.getElementById("slider").style = "order: 1;";
    document.getElementById("dot").style = "order: 2;";
  } else if (card2.classList.contains("active-card")) {
    card2.classList.remove("active-card");
    card3.classList.add("active-card");
    document.getElementById("slider").style = "order: 2;";
    document.getElementById("dot").style = "order: 1;";
  }
});

btnLeft.addEventListener("click", () => {
  if (card3.classList.contains("active-card")) {
    card3.classList.remove("active-card");
    card2.classList.add("active-card");
    document.getElementById("slider").style = "order: 1;";
    document.getElementById("dot").style = "order: 2;";
  } else if (card2.classList.contains("active-card")) {
    card2.classList.remove("active-card");
    card1.classList.add("active-card");
    document.getElementById("slider").style = "order: 0;";
  }
});
