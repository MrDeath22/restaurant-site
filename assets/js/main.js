let body = document.querySelector('body');
let darkBtn = document.querySelector('.change-theme');

darkBtn.addEventListener('click', () => {
   body.classList.toggle('dark-theme');
   darkBtn.classList.toggle('bx-sun');
})

// ------------------

let menuBtn = document.querySelector('#nav-toggle');
let showMenu = document.querySelector('.nav__menu');

menuBtn.addEventListener('click', () => {
   showMenu.classList.toggle('show-menu');
})

const links = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('section');
  function changeLinkState() {
    let index = sections.length;

    while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

    links.forEach((link) => link.classList.remove('active-link'));
    links[index].classList.add('active-link');
  }

changeLinkState();
window.addEventListener('scroll', changeLinkState);