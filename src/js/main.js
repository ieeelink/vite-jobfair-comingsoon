// Import our custom CSS
import "../scss/styles.scss";

import VanillaTilt from "vanilla-tilt";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// Import FontSource for Open Sans
import "@fontsource/open-sans";

VanillaTilt.init(document.querySelectorAll(".card,.timeline_content"), {
  max: 2,
  speed: 10,
  glare: true,
  "max-glare": 0.5,
});

const fadedEl = document.querySelectorAll(".card,.timeline_content");

const myObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fadeIn");
      }
    });
  },
  { threshold: [0.5] }
);
fadedEl.forEach((el) => {
  myObserver.observe(el);
});

var navbar = document.querySelector(".navbar");
document.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    navbar.classList.add("bg-black");
    navbar.classList.add("bg-opacity-50");
  } else {
    navbar.classList.remove("bg-black");
    navbar.classList.remove("bg-opacity-50");
  }
});
