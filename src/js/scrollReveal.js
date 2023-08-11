const scroll = ScrollReveal();

scroll.reveal(".left-side-first", {
  origin: "left",
  duration: 1500,
  delay: 200,
  distance: "100px",
});

if (window.innerWidth <= 575) {
  scroll.reveal(".left-side-second", {
    origin: "left",
    duration: 1500,
    delay: 1500,
  });
} else {
  scroll.reveal(".left-side-second", {
    origin: "left",
    duration: 1500,
    delay: 1500,
    distance: "100px",
  });
}

if (window.innerWidth <= 575) {
  scroll.reveal(".left-side-third", {
    origin: "left",
    duration: 1500,
    delay: 2500,
  });
} else {
  scroll.reveal(".left-side-third", {
    origin: "left",
    duration: 1500,
    delay: 2500,
    distance: "20px",
  });
}

scroll.reveal(".L", {
  delay: 3000,
});

scroll.reveal(".O", {
  delay: 3100,
});

scroll.reveal(".G", {
  delay: 3200,
});

scroll.reveal(".OO", {
  delay: 3300,
});
