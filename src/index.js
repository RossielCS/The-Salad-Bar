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
creator(content, 'footer');

// createContact(main);

const home = createHome(main, 'home', 2);
const navbarLinks = document.getElementsByTagName('ul')[0];
let currentPage = home;

// Menu
navbarLinks.children[0].addEventListener('click', () => {
  main.removeChild(currentPage);
  const menu = createMenu(main, 2, saladsNames, saladsImages);
  currentPage = menu;
  document.getElementById('menu-cat0').click();
});

// Logo
document.getElementById('home-logo').addEventListener('click', () => {
  main.removeChild(currentPage);
  const home = createHome(main, 'home', 2);
  currentPage = home;
});

// Promotions
navbarLinks.children[1].addEventListener('click', () => {
  main.removeChild(currentPage);
  const promotions = createPromotions(main, 2, dealsInfo, dealsBgImages);
  currentPage = promotions;
  document.getElementById('promo-menu0').click();
});

// About Us
navbarLinks.children[3].addEventListener('click', () => {
  main.removeChild(currentPage);
  const aboutUs = createAboutUs(main, 1);
  currentPage = aboutUs;
});

// Contact
navbarLinks.children[4].addEventListener('click', () => {
  main.removeChild(currentPage);
  const contact = createContact(main);
  currentPage = contact;
});
