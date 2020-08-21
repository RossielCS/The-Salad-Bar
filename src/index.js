import './assets/stylesheets/style.scss';
import * as builders from './builders';
import { tabNames, createHeader } from './header';
import { createHome } from './home';
import { createMenu, saladsNames, saladsImages } from './menu';
import { createPromotions, dealsInfo, dealsBgImages } from './promotions';
import createAboutUs from './about-us';
import createContact from './contact';

function removeBottomBorder(element, navbarLinks) {
  const liList = navbarLinks.querySelectorAll('[id^=nav-li');
  liList.forEach(li => {
    if (li.id !== element.id) {
      li.parentNode.style.borderBottomStyle = 'none';
    }
  });
}

function navBorderStyling(element, navbarLinks) {
  if (element.id !== 'home-logo') {
    element.parentNode.style.borderBottom = '5px solid #666563';
    element.parentNode.style.height = '100px';
  }
  removeBottomBorder(element, navbarLinks);
}

// Get content element
const content = document.getElementById('content');

// Create header and main
createHeader(content, tabNames);
const main = builders.creator(content, 'main');

createHome(main, 'home', 2);
const navbarLinks = document.getElementsByTagName('ul')[0];

// Menu
navbarLinks.children[0].addEventListener('click', (e) => {
  main.childNodes[0].remove();
  createMenu(main, 2, saladsNames, saladsImages);
  document.getElementById('menu-cat0').click();
  navBorderStyling(e.target, navbarLinks);
});

// Logo
document.getElementById('home-logo').addEventListener('click', (e) => {
  main.childNodes[0].remove();
  createHome(main, 'home', 2);
  navBorderStyling(e.target, navbarLinks);
});

// Promotions
navbarLinks.children[1].addEventListener('click', (e) => {
  main.childNodes[0].remove();
  createPromotions(main, 2, dealsInfo, dealsBgImages);
  document.getElementById('promo-menu0').click();
  navBorderStyling(e.target, navbarLinks);
});

// About Us
navbarLinks.children[3].addEventListener('click', (e) => {
  main.childNodes[0].remove();
  createAboutUs(main, 1);
  navBorderStyling(e.target, navbarLinks);
});

// Contact
navbarLinks.children[4].addEventListener('click', (e) => {
  main.childNodes[0].remove();
  createContact(main);
  navBorderStyling(e.target, navbarLinks);
});
