import './style.scss';
import { createSections, addBgToSections } from './home';

function createNavbar() {
  const body = document.getElementsByTagName('body')[0];
  const header = document.createElement('header');
  const navbar = document.createElement('nav');
  body.insertBefore(header, body.childNodes[0]);
  header.appendChild(navbar);
  return navbar;
}

function addListToNavbar(navbar, names) {
  const list = document.createElement('ul');
  for (let i = 0; i < 4; i += 1) {
    const aTag = document.createElement('a');
    aTag.href = `#${names[i]}`.toLowerCase();
    list.appendChild(aTag);
  }
  navbar.appendChild(list);
  return list;
}

function addNamesToList(names, list) {
  const listLength = list.children.length;
  for (let i = 0; i < listLength; i += 1) {
    const listElement = document.createElement('li');
    listElement.setAttribute('id', `nav-li${i}`);
    listElement.innerHTML = `${names[i]}`;
    list.children[i].appendChild(listElement);
  }
}

const listNames = ['HOME', 'MENU', 'ABOUT US', 'CONTACT'];


createSections();
addBgToSections();
const list = addListToNavbar(createNavbar(), listNames);
addNamesToList(listNames, list);