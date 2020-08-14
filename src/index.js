import './style.scss';
import './assets/images/home_art0.png';
import './assets/images/home_bg02.jpg';
import './assets/images/home_nav_logo.png';
import * as homeFunctions from './home';

const content = document.getElementById('content');
const tabNames = ['HOME', 'MENU', 'ABOUT US', 'CONTACT'];
const header = homeFunctions.creator(content, 'header');
const navbar = homeFunctions.creator(header, 'nav');
const list = homeFunctions.addListToNavbar(navbar, tabNames);

homeFunctions.addNamesToList(tabNames, list);
homeFunctions.addLogoToNav(navbar);
const main = homeFunctions.creator(content, 'main');
homeFunctions.creator(content, 'footer');
homeFunctions.createBgDivs(content);
homeFunctions.createArticles(main);
homeFunctions.addSectionsToArticles();
homeFunctions.addContentToArt0();
// homeFunctions.addPointsBetweenLi(navbar);
homeFunctions.addContentToArt1();
homeFunctions.addContentToArt2();