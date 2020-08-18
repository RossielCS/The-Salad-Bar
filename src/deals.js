import { creator } from './header';

export const shortMenuInfo = {
  '01': 'Make Store-Bought Tomato Sauce Taste 10x Better',
  '02': 'The $3.99 Lunch Our Editor-in-Chief Swears By',
  '03': 'Red Leaf Salad with Tofu and Sesame Dressing',
  '04': 'Set Your Kitchen, Save Your Body',
};

function dealsList(parent) {
  const menuList = creator(parent, 'ul', 'append');
  for (let i = 0; i < 4; i += 1) {
    const aTag = creator(menuList, 'a', 'append');
    aTag.setAttribute('href', '#');
    const li = creator(aTag, 'li', 'append');
    li.setAttribute('id', `deals-menu${i}`);
    creator(li, 'p', 'append');
    creator(li, 'div', 'append');
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