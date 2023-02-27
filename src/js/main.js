// Import our custom CSS
import "../scss/styles.scss";

import VanillaTilt from "vanilla-tilt";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 2,
  speed: 10,
  glare: true,
  "max-glare": 0.5,
});