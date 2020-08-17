import './assets/stylesheets/style.scss';
import './assets/images/home_art0.png';
import './assets/images/home_bg02.jpg';
import './assets/images/home_nav_logo.png';
import * as headerFunctions from './header';
import * as homeFunctions from './home';
import * as heroFunctions from './hero-shot';
import * as aboutFunctions from './about-us';

const content = document.getElementById('content');

const tabNames = ['HOME', 'MENU', 'ABOUT US', 'CONTACT'];
const header = headerFunctions.creator(content, 'header');
const navbar = headerFunctions.creator(header, 'nav');
headerFunctions.addUlistToNav(navbar, tabNames);

const main = headerFunctions.creator(content, 'main');
headerFunctions.creator(content, 'footer');
homeFunctions.createBackground(content);
homeFunctions.createArticles(main);
homeFunctions.addSectionsToArticles();
heroFunctions.addContentToHeroShot();
aboutFunctions.addContentAboutUs();
/*  homeFunctions.addContentToArt2();
homeFunctions.addContentToArt3();
homeFunctions.shortMenuContent(homeFunctions.shortMenuInfo); */