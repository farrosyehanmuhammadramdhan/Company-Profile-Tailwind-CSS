// Mobile Nav
const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close-btn');
const closeBtnIcn = document.querySelector('.mnav__close-btn-icon');

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

closeBtn.addEventListener('click', ()=> {
    mobileNav.classList.toggle(navClosedClass) 
    mobileNav.classList.toggle(navOpenedClass);

    closeBtnIcn.classList.toggle(arrowLeftClass)
    closeBtnIcn.classList.toggle(arrowRightClass);
    
});

// Swiper
const swiper = new Swiper('.swiper', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });

// FAQ
const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach((item)=> {
  const faqBtn = item.querySelector('.faq__btn');

  item.addEventListener('click', ()=> {
    const isOpen = item.classList.toggle('open');
    const iconClass = isOpen ? 'ri-subtract-fill' : 'ri-add-fill';
    const iconElement = faqBtn.querySelector('i');
    iconElement.classList = `${iconClass} text-2xl`;
  });
});

// Scroll Reveal Animations
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 3000,
  delay: 600,
  // reset: true // Resets Animation
});

// hero
sr.reveal('.hero__text', {origin: 'top'});
sr.reveal('.hero__img');

// Stats
sr.reveal('.stats__item', {
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'top',
});

// Servcies
sr.reveal('.services');
sr.reveal('.services__top');
sr.reveal('.hero__item', {
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'bottom',
});

// Appointment
sr.reveal('.appointment__title');
sr.reveal('.appointment__form');

// Testimonials
sr.reveal('.testimonial');
sr.reveal('.testimonial__constainer');

// Team
sr.reveal('.team__title');
sr.reveal('.team__slider');

// FAQ
sr.reveal('.faq__title');
sr.reveal('.faq__item', {
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'bottom',
});

// Departments
sr.reveal('.departments__bg');
sr.reveal('.departments__container');

// Blog
sr.reveal('.blog__title');
sr.reveal('.blog__post', {
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'bottom',
});

// Brands
sr.reveal('.brands__logo', {
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'bottom',
});

// NewsLetter
sr.reveal('.newsletter');
sr.reveal('.newsletter__container');

// Footer
sr.reveal('.footer__item', {
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'bottom',
});