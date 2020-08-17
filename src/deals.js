import { creator } from './header';

function dealsList(parent) {
  const menuList = creator(parent, 'ul', 'append');
  for (let i = 0; i < 4; i += 1) {
    const container = creator(menuList, 'div', 'append');
    container.setAttribute('id', `short-menu${i}`);
    creator(container, 'p', 'append');
    creator(container, 'li', 'append');
  }
  return menuList;
}

export function addContentToDeals() {
  const art3Child0 = document.getElementById('art3').children[0];
  const textChild0 = creator(art3Child0, 'p', 'append');
  textChild0.innerHTML = 'Red Leaf Salad With Tofu and Sesame Dressing';

  const art3Child1 = document.getElementById('art3').children[1];
  dealsList(art3Child1);
}

export function shortMenuContent(shortMenuInfo) {
  for (let i = 0; i < 4; i += 1) {
    const menu = document.getElementById(`deals-menu${i}`);
    menu.children[0].innerHTML = Object.keys(shortMenuInfo)[i];
    menu.children[1].innerHTML = shortMenuInfo[`0${i + 1}`];
  }
}