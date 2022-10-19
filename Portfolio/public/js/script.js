const hamburgerContainer = document.querySelector('.hamburger');
const navContainer = document.querySelector('.nav');
const navListContainer = document.querySelector('.nav__list');
const copyrightContainer = document.getElementById('copyright');

const now = new Date();

hamburgerContainer.addEventListener('click', () => {
    hamburgerContainer.classList.toggle("hamburger--active");
    navContainer.classList.toggle("nav--visible");
    navListContainer.classList.toggle("nav__list--visible");
});

copyrightContainer.textContent = `Damian Sempski © ${now.getFullYear()}`;