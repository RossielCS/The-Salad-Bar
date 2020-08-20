import { creator } from './header';
import { createArticle, addSectionsToArticle } from './home';
import dealsImg0 from './assets/images/deals_00.png';
import dealsImg1 from './assets/images/deals_01.png';
import dealsImg2 from './assets/images/deals_02.png';
import dealsImg3 from './assets/images/deals_03.png';

const dealsInfo = {
  'promo-menu0': 'Make Store-Bought Tomato Sauce Taste 10x Better',
  'promo-menu1': 'The $3.99 Lunch Our Editor-in-Chief Swears By',
  'promo-menu2': 'Red Leaf Salad with Tofu and Sesame Dressing',
  'promo-menu3': 'Set Your Kitchen, Save Your Body',
};

const dealsBgImages = {
  'promo-menu0': dealsImg0,
  'promo-menu1': dealsImg1,
  'promo-menu2': dealsImg2,
  'promo-menu3': dealsImg3,
};

function createDealsList(section, dealsInfo) {
  const menuList = creator(section, 'ul', 'append');
  for (let i = 0; i < 4; i += 1) {
    const li = creator(menuList, 'li', 'append');
    li.setAttribute('id', `promo-menu${i}`);
    const number = creator(li, 'div', 'append');
    number.innerHTML = `0${i + 1}`;
    const info = creator(li, 'p', 'append');
    info.innerHTML = dealsInfo[`promo-menu${i}`];
  }
  return menuList;
}

function addContentToSections(sections, dealsInfo) {
  const sect0 = sections[0];
  const text0 = creator(sect0, 'p', 'append');
  const sect1 = sections[1];
  createDealsList(sect1, dealsInfo);
  return text0;
}

function changeListColor(element) {
  const list = document.querySelectorAll('[id^=promo-menu]');
  list.forEach(li => {
    if (li.id !== element.id) {
      li.childNodes[0].style.color = '#c3c2b9';
      li.childNodes[1].style.color = '#333';
    }
  });
}

function addEventToLi(dealsBgImages, dealsInfo, paragraph) {
  const liContainer = document.getElementsByTagName('ul')[1].childNodes;
  liContainer.forEach(element => {
    element.addEventListener('click', () => {
      const sections = document.getElementsByClassName('art-promotions-sect');
      sections[0].style.backgroundImage = `url('${dealsBgImages[element.id]}')`;
      element.childNodes[0].style.color = '#333';
      element.childNodes[1].style.color = '#c3c2b9';
      changeListColor(element);
      paragraph.innerHTML = dealsInfo[`${element.id}`];
    });
  });
}

function createPromotions(main, numSections, dealsInfo, dealsBgImages) {
  const article = createArticle(main, 'promotions');
  const sections = addSectionsToArticle(article, numSections);
  const section0Para = addContentToSections(sections, dealsInfo);
  addEventToLi(dealsBgImages, dealsInfo, section0Para);
  return article;
}

export { createPromotions, dealsInfo, dealsBgImages };