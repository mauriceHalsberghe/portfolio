import initThemeSwitch from "./themeSwitch.js";
import initMenuSwitch from "./menuSwitch.js";
import titleFont from "./titleFont.js"
import circleFollow from "./circleFollow.js"
import initModals from "./modals.js";
import initPopover from "./popOver.js";
import initCarousel from './carousel.js'


document.addEventListener('DOMContentLoaded', () => {
  initThemeSwitch();
  initMenuSwitch();
  titleFont();
  circleFollow();
  initModals();
  initPopover();
  initCarousel();
})

