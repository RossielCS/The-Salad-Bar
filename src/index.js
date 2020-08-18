import './assets/stylesheets/style.scss';
import './assets/images/home_art0.png';
import './assets/images/home_bg02.jpg';
import './assets/images/home_nav_logo.png';
import { tabNames, createHeader, creator } from './header';
import createHome from './home';
import createAboutUs from './about-us';
import * as buildFunctions from './build-salad';
import * as dealsFunctions from './deals';

const content = document.getElementById('content');

const header = createHeader(content, tabNames);
const main = creator(content, 'main');
const footer = creator(content, 'footer');
// const home = createHome(main, 'home', 2);
const aboutUs = createAboutUs(main, 1);


document.getElementById('home-logo').addEventListener('click', () => {
  createHome(main, 'home', 2);
});

/*const aTags = document.getElementsByTagName('ul')[0].children;
const callPage = [
  createHome(main),

];

for (let i = 0; i < aTags.length; i += 1) {
  aTags[i].addEventListener('click', () => {

  });
}*/

/*
homeFunctions.createBackground(content);
homeFunctions.createArticles(main);
homeFunctions.addSectionsToArticles();
heroFunctions.addContentToHeroShot();
aboutFunctions.addContentAboutUs();
buildFunctions.addContentToBuildSalad();
dealsFunctions.addContentToDeals();
dealsFunctions.shortMenuContent(dealsFunctions.shortMenuInfo);
*/
