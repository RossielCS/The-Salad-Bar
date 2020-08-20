import { creator } from './header';
import { createArticle, addSectionsToArticle } from './home';
import salad00 from './assets/images/menu_00.png';
import salad01 from './assets/images/menu_01.png';
import salad02 from './assets/images/menu_02.png';
import salad03 from './assets/images/menu_03.png';
import salad04 from './assets/images/menu_04.png';
import salad05 from './assets/images/menu_05.png';
import salad06 from './assets/images/menu_06.png';
import salad07 from './assets/images/menu_07.png';
import salad08 from './assets/images/menu_08.png';
import salad09 from './assets/images/menu_09.png';
import salad10 from './assets/images/menu_10.png';
import salad11 from './assets/images/menu_11.png';

const saladsImages = {
  classics: [salad00, salad01, salad02, salad03, salad04, salad05],
  specials: [salad06, salad07, salad08, salad09, salad10, salad11],
};

const categories = {
  '01': 'Classics',
  '02': 'Our Specials',
};

const saladsNames = {
  '01': 'Chicken Fajita Salad',
  '03': 'Chicken Avocado',
  '05': 'Blackberry Lime Fruit Salas',
  '07': 'Asian Crab and Cucumber Salad',
  '09': 'Thai Steak Salad',
  '011': 'Winter Fruit Salad',
};

function addCategoriesToSection(sections, categories) {
  const title = creator(sections[0], 'h1', 'append');
  const listContainer = creator(sections[0], 'ul', 'append');
  title.innerHTML = 'THE SALAD BAR TABLE';
  for (let i = 1; i < 3; i += 1) {
    const li = creator(listContainer, 'li', 'append');
    li.innerHTML = categories[`0${i}`];
  }
  return listContainer.children;
}

function addSaladsInfoToSection(sections, saladsNames, saladsImages) {
  for (let i = 0; i < 13; i += 1) {
    const div = creator(sections[1], 'div', 'append');
    if (i % 2 !== 0) {
      div.setAttribute('class', 'menu-salad-info');
      const title = creator(div, 'h3', 'append');
      title.innerHTML = saladsNames[`0${i}`];
      const para = creator(div, 'p', 'append');
      para.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
      const price = creator(div, 'p', 'append');
      price.setAttribute('class', 'menu-price');
      price.innerHTML = 'FROM: $10.00';
    } else {
      div.setAttribute('class', 'menu-salad-bg');
      div.style.backgroundImage = `url('${saladsImages.classics[i]}')`;
    }
  }
}

function createMenu(main, numSections, saladsNames, saladsImages) {
  const article = createArticle(main, 'menu');
  const sections = addSectionsToArticle(article, numSections);
  addCategoriesToSection(sections, categories);
  addSaladsInfoToSection(sections, saladsNames, saladsImages);
  return article;
}

export { createMenu, saladsNames, saladsImages };