import './assets/stylesheets/style.scss';
import './assets/images/home_nav_logo.png';
import './assets/images/deals_00.png';
import { tabNames, createHeader, creator } from './header';
import { createHome } from './home';
import createAboutUs from './about-us';
import { createPromotions, dealsInfo } from './promotions';

const content = document.getElementById('content');

createHeader(content, tabNames);
const main = creator(content, 'main');
creator(content, 'footer');

const home = createHome(main, 'home', 2);
const menu = document.getElementsByTagName('ul')[0];
let currentPage = home;

// Logo
document.getElementById('home-logo').addEventListener('click', () => {
  main.removeChild(currentPage);
  const home = createHome(main, 'home', 2);
  currentPage = home;
});

// Promotions
menu.children[1].addEventListener('click', () => {
  main.removeChild(currentPage);
  const promotions = createPromotions(main, 2, dealsInfo);
  currentPage = promotions;
  document.getElementById('promo-menu0').click();
});

// About Us
menu.children[3].addEventListener('click', () => {
  main.removeChild(currentPage);
  const aboutUs = createAboutUs(main, 1);
  currentPage = aboutUs;
});
