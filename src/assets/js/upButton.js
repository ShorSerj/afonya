/* eslint-disable linebreak-style */

const goTopBtn = document.querySelector('.scroll-up');

function trackScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    goTopBtn.classList.add('scroll-up_active');
  }
  if (scrolled < coords) {
    goTopBtn.classList.remove('scroll-up_active');
  }
}

window.addEventListener('scroll', trackScroll);
