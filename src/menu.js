import * as builders from './builders';
import * as images from './images';

const categories = {
  '01': 'Classics',
  '02': 'Our Specials',
};

const saladsImages = {
  'menu-cat0': [
    images.salad00, images.salad01, images.salad02,
    images.salad03, images.salad04, images.salad05,
  ],
  'menu-cat1': [
    images.salad06, images.salad07, images.salad08,
    images.salad09, images.salad10, images.salad11,
  ],
};

const saladsNames = {
  'menu-cat0': [
    'House Salad', 'Fajita Chicken with Avocado', 'Blackberry Lime Fruit',
    'Asian Crab and Cucumber', 'Thai Steak', 'Winter Fruit', 'Caesar with Chicken'],
  'menu-cat1': [
    'Parma Ham slivers with cubes of Melon', 'Goat cheese and Mozzarella Fritters',
    'Summer Asian Slaw', 'Tuscan bread and Tomato with Chilly',
    'Rainbow Orzo Salad', 'Heirloom Tomato Fattoush'],
};

function createArticle(main, name) {
  const article = builders.creator(main, 'article', 'append');
  article.setAttribute('id', `art-${name}`);
  return article;
}

function addSectionsToArticle(article, numSections) {
  for (let i = 0; i < numSections; i += 1) {
    const section = builders.creator(article, 'section', 'append');
    section.setAttribute('class', `${article.id}-sect`);

    const h2 = builders.creator(section, 'h2', 'append');
    h2.setAttribute('class', 'hidden');
    h2.innerHTML = 'Hidden';
  }
  return article.children;
}

function addCategoriesList(sections, categories) {
  const title = builders.creator(sections[0], 'h1', 'append');
  const listContainer = builders.creator(sections[0], 'ul', 'append');
  title.innerHTML = 'THE SALAD BAR TABLE';
  for (let i = 1; i < 3; i += 1) {
    const li = builders.creator(listContainer, 'li', 'append');
    li.innerHTML = categories[`0${i}`];
    li.setAttribute('id', `menu-cat${i - 1}`);
  }
  return listContainer.childNodes;
}

function createInfo(menuCell, index, saladsNames) {
  menuCell.setAttribute('class', 'menu-salad-info');
  const title = builders.creator(menuCell, 'h3', 'append');
  title.innerHTML = saladsNames;
  const para = builders.creator(menuCell, 'p', 'append');
  para.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const price = builders.creator(menuCell, 'p', 'append');
  price.setAttribute('class', 'menu-price');
  price.innerHTML = 'FROM: $10.00';
}

function createBg(menuCell, index, saladsImages) {
  menuCell.setAttribute('class', 'menu-salad-bg');
  menuCell.style.backgroundImage = `url('${saladsImages}')`;
}

function addSaladsInfoToSection(sections, saladsNames, saladsImages) {
  for (let i = 0; i < 6; i += 1) {
    if (i === 2 || i === 3) {
      const menuCellImg = builders.creator(sections[1], 'div', 'append');
      const menuCellText = builders.creator(sections[1], 'div', 'append');
      createBg(menuCellImg, i, saladsImages[i]);
      createInfo(menuCellText, i, saladsNames[i]);
    } else {
      const menuCellText = builders.creator(sections[1], 'div', 'append');
      const menuCellImg = builders.creator(sections[1], 'div', 'append');
      createInfo(menuCellText, i, saladsNames[i]);
      createBg(menuCellImg, i, saladsImages[i]);
    }
  }
}

function changeCatColor(element) {
  const list = document.querySelectorAll('[id^=menu-cat]');
  list.forEach(li => {
    if (li.id !== element.id) {
      li.style.color = '#c3c2b9';
    }
  });
}

function addEventToCategories(catList, sections, saladsNames, saladsImages) {
  catList.forEach(li => {
    li.addEventListener('click', (e) => {
      const catId = e.target.id;
      const elements = document.querySelectorAll('[class^="menu-salad"]');
      if (elements.length) {
        elements.forEach(x => {
          x.parentNode.removeChild(x);
        });
      }
      li.style.color = '#333';
      changeCatColor(li);
      addSaladsInfoToSection(sections, saladsNames[catId], saladsImages[catId]);
    });
  });
}

function createMenu(main, numSections, saladsNames, saladsImages) {
  const article = createArticle(main, 'menu');
  const sections = addSectionsToArticle(article, numSections);
  const catList = addCategoriesList(sections, categories);
  addEventToCategories(catList, sections, saladsNames, saladsImages);
  return article;
}

export { createMenu, saladsNames, saladsImages };