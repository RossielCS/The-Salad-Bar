import './style.scss';
import './assets/images/home_01.png';
import './assets/images/home_bg02.jpg';
import createBgDivs from './home';

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
  const list = document.createElement('ul');
  for (let i = 0; i < 4; i += 1) {
    const aTag = document.createElement('a');
    aTag.href = `#${tabNames[i]}`.toLowerCase();
    list.appendChild(aTag);
  }
  navbar.appendChild(list);
  return list;
}

function addNamesToList(tabNames, list) {
  const listLength = list.children.length;
  for (let i = 0; i < listLength; i += 1) {
    const listElement = document.createElement('li');
    listElement.setAttribute('id', `nav-li${i}`);
    listElement.innerHTML = `${tabNames[i]}`;
    list.children[i].appendChild(listElement);
  }
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

addListToNavbar(navbar, tabNames);
addNamesToList(tabNames, list);
createMain(content);
createFooter(content);
createBgDivs(content);