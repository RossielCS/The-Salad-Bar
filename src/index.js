import './style.scss';
import './assets/images/home_art0.png';
import './assets/images/home_bg02.jpg';
import './assets/images/home_nav_logo.png';
import {
  createBgDivs, createArticles, addSectionsToArticles, addContentToArt0,
} from './home';

function createHeader(content) {
  const header = document.createElement('header');
  content.appendChild(header);
  return header;
}

function createNavbar(header) {
  const navbar = document.createElement('nav');
  header.appendChild(navbar);
  return navbar;
}

function addListToNavbar(navbar, tabNames) {
  const tempNames = [...tabNames];
  for (let i = 0; i < 2; i += 1) {
    const list = document.createElement('ul');
    for (let j = 0; j < 2; j += 1) {
      const aTag = document.createElement('a');
      aTag.href = `#${tempNames[j]}`.toLowerCase();
      list.appendChild(aTag);
    }
    tempNames.splice(0, 2);
    navbar.appendChild(list);
  }
  return navbar.children;
}

function addNamesToList(tabNames, list) {
  const tempNames = [...tabNames];
  for (let i = 0; i < list.length; i += 1) {
    for (let j = 0; j < 2; j += 1) {
      const listElement = document.createElement('li');
      listElement.setAttribute('id', `nav-li${j}`);
      listElement.innerHTML = `${tempNames[j]}`;
      list[i].children[j].appendChild(listElement);
    }
    tempNames.splice(0, 2);
  }
}

function addLogoToNav(navbar) {
  const logo = document.createElement('div');
  logo.setAttribute('id', 'home-logo');
  navbar.insertBefore(logo, navbar.childNodes[1]);
  return logo;
}

function addPointsBetweenLi(navbar) {
  const point1 = document.createElement('div');
  point1.setAttribute('class', 'points-li');
  const point2 = document.createElement('div');
  point2.setAttribute('class', 'points-li');

  navbar.children[0].insertBefore(point1, navbar.children[0].children[1]);
  navbar.children[2].insertBefore(point2, navbar.children[2].children[1]);
}

function createMain(content) {
  const main = document.createElement('main');
  content.appendChild(main);
  return main;
}

function createFooter(content) {
  const footer = document.createElement('footer');
  content.appendChild(footer);
  return footer;
}

const content = document.getElementById('content');
const tabNames = ['HOME', 'MENU', 'ABOUT US', 'CONTACT'];
const header = createHeader(content);
const navbar = createNavbar(header);
const list = addListToNavbar(navbar, tabNames);

addNamesToList(tabNames, list);
addLogoToNav(navbar);
const main = createMain(content);
createFooter(content);
createBgDivs(content);
createArticles(main);
addSectionsToArticles();
addContentToArt0();
addPointsBetweenLi(navbar);