import * as builders from './builders';

const tabNames = ['MENU', 'PROMOTIONS', 'ABOUT US', 'CONTACT'];

function addLiToATag(aTag, tempName, i) {
  const li = builders.creator(aTag, 'li', 'append');
  li.setAttribute('id', `nav-li${i}`);
  li.innerHTML = `${tempName}`;
}

function addUlistToNav(navbar, tabNames) {
  const tempNames = [...tabNames];
  const list = builders.creator(navbar, 'ul', 'append');
  for (let i = 0; i < 4; i += 1) {
    if (i === 2) {
      const logo = builders.creator(list, 'div', 'append');
      logo.setAttribute('id', 'home-logo');
    }
    const aTag = builders.creator(list, 'a', 'append');
    aTag.href = `#${tempNames[i]}`.toLowerCase();
    addLiToATag(aTag, tempNames[i], i);
  }
  return navbar.children;
}

function createHeader(content, tabNames) {
  const header = builders.creator(content, 'header');
  const navbar = builders.creator(header, 'nav');
  addUlistToNav(navbar, tabNames);

  return header;
}

export { tabNames, createHeader };