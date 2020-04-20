const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.sub-nav');
  const navLinks = document.querySelectorAll('.sub-nav li');
  const body = document.querySelector('body');


  burger.addEventListener('click', () => {
    // Toggle
    nav.classList.toggle('nav-active');
    // select the body and make the sub-nav 100vport and no scrollball
    body.classList.toggle('hidden');

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.2s ease forwards ${index / 7 + 0.2}s`;
      }
    });
    // Burger animation
    burger.classList.toggle('burger-line')

  });
}

navSlide();
