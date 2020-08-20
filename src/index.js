import './assets/stylesheets/style.scss';
import { tabNames, createHeader, creator } from './header';
import { createHome } from './home';
import { createMenu, saladsNames, saladsImages } from './menu';
import { createPromotions, dealsInfo, dealsBgImages } from './promotions';
import createAboutUs from './about-us';
import createContact from './contact';

const content = document.getElementById('content');

createHeader(content, tabNames);
const main = creator(content, 'main');
// creator(content, 'footer');
createHome(main, 'home', 2);
const navbarLinks = document.getElementsByTagName('ul')[0];

// Menu
navbarLinks.children[0].addEventListener('click', () => {
  main.childNodes[0].remove();
  createMenu(main, 2, saladsNames, saladsImages);
  document.getElementById('menu-cat0').click();
});

// Logo
document.getElementById('home-logo').addEventListener('click', () => {
  main.childNodes[0].remove();
  createHome(main, 'home', 2);
});

// Promotions
navbarLinks.children[1].addEventListener('click', () => {
  main.childNodes[0].remove();
  createPromotions(main, 2, dealsInfo, dealsBgImages);
  document.getElementById('promo-menu0').click();
});

// About Us
navbarLinks.children[3].addEventListener('click', () => {
  main.childNodes[0].remove();
  createAboutUs(main, 1);
});

// Contact
navbarLinks.children[4].addEventListener('click', () => {
  main.childNodes[0].remove();
  createContact(main);
});
