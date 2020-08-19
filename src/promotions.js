import { creator } from './header';
import { createArticle, addSectionsToArticle } from './home';

const dealsInfo = {
  '01': 'Make Store-Bought Tomato Sauce Taste 10x Better',
  '02': 'The $3.99 Lunch Our Editor-in-Chief Swears By',
  '03': 'Red Leaf Salad with Tofu and Sesame Dressing',
  '04': 'Set Your Kitchen, Save Your Body',
};

const dealsBgImages = {
  'promo-menu0': 'deals_00.png',
  'promo-menu1': 'deals_01.png',
  'promo-menu2': 'deals_02.png',
  'promo-menu3': 'deals_03.png',
};

function dealsList(section, dealsInfo) {
  const menuList = creator(section, 'ul', 'append');
  for (let i = 0; i < 4; i += 1) {
    const li = creator(menuList, 'li', 'append');
    li.setAttribute('id', `promo-menu${i}`);
    const number = creator(li, 'div', 'append');
    number.innerHTML = Object.keys(dealsInfo)[i];
    const info = creator(li, 'p', 'append');
    info.innerHTML = dealsInfo[`0${i + 1}`];
  }
  return menuList;
}

function addContentToSections(sections, dealsInfo) {
  const sect0 = sections[0];
  const text0 = creator(sect0, 'p', 'append');
  text0.innerHTML = 'Red Leaf Salad With Tofu and Sesame Dressing';

  const sect1 = sections[1];
  dealsList(sect1, dealsInfo);
}

function addEventToLi(dealsBgImages) {
  const liContainer = document.getElementsByTagName('ul')[1].childNodes;
  liContainer.forEach(x => {
    x.addEventListener('click', () => {
      const section = document.getElementsByClassName('art-promotions-sect')[0];
      console.log(x);
      section.style.backgroundImage = "url('../images/deals_00.png')";
    });
  });
}

function createPromotions(main, numSections, dealsInfo, dealsBgImages) {
  const article = createArticle(main, 'promotions');
  const sections = addSectionsToArticle(article, numSections);
  addContentToSections(sections, dealsInfo);
  addEventToLi(dealsBgImages);
  return article;
}

export { createPromotions, dealsInfo };