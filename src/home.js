import { creator } from './header';

/*
const ElementFactory = (newElement, parent, typeAtr, nameAtr) => {
  const getName = () => name;
  const getPiece = () => piece;
  const getScore = () => score;
  const createElement = () => {
    const child = document.createElement(`${newElement}`);
    parent.appendChild(child);
    return child;
  };
  const addAtribute = () => {
    if (typeAtr === 'class') {
      createElement.setAttribute('class', `${nameAtr}`);
    }
  };
  return {
    getName,
    getPiece,
    getScore,
    updateScore() {
      score += 1;
    },
  };
};
*/

export const shortMenuInfo = {
  '01': 'Make Store-Bought Tomato Sauce Taste 10x Better',
  '02': 'The $3.99 Lunch Our Editor-in-Chief Swears By',
  '03': 'Red Leaf Salad with Tofu and Sesame Dressing',
  '04': 'Set Your Kitchen, Save Your Body',
};

export function createBackground(content) {
  const bgDivContainer = creator(content, 'div', content.childNodes[0]);
  bgDivContainer.setAttribute('class', 'container-bg');
  for (let i = 0; i < 7; i += 1) {
    const bgDiv = creator(bgDivContainer, 'div', 'append');
    bgDiv.setAttribute('id', `background${i}`);
  }
  return bgDivContainer;
}

export function createArticles(main) {
  for (let i = 0; i < 7; i += 1) {
    const article = creator(main, 'article', 'append');
    article.setAttribute('id', `art${i}`);
  }
  return main.children;
}

export function addSectionsToArticles() {
  const arr = [
    document.getElementById('art0'),
    document.getElementById('art1'),
    document.getElementById('art3'),
    document.getElementById('art6'),
  ];
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < 2; j += 1) {
      const section = creator(arr[i], 'div', 'append');
      section.setAttribute('class', 'art-sect');
    }
  }
}

/*
export function addContentToArt2() {
  const art2 = document.getElementById('home-art2');
  const text1 = creator(art2, 'h3', 'append');
  text1.innerHTML = 'Be the Chef today!';
  const text2 = creator(art2, 'h4', 'append');
  text2.innerHTML = 'BUILD YOUR OWN SALAD';
  const button = creator(art2, 'button', 'append');
  button.innerHTML = 'View Available Choices';
  button.addEventListener('click', () => {
  });
}

function menuShortList(parent) {
  const menuList = creator(parent, 'ul', 'append');
  for (let i = 0; i < 4; i += 1) {
    const container = creator(menuList, 'div', 'append');
    container.setAttribute('id', `short-menu${i}`);
    creator(container, 'p', 'append');
    creator(container, 'li', 'append');
  }
  return menuList;
}

export function addContentToArt3() {
  const art3Child0 = document.getElementById('home-art3').children[0];
  const textChild0 = creator(art3Child0, 'p', 'append');
  textChild0.innerHTML = 'Red Leaf Salad With Tofu and Sesame Dressing';

  const art3Child1 = document.getElementById('home-art3').children[1];
  menuShortList(art3Child1);
}

export function shortMenuContent(shortMenuInfo) {
  for (let i = 0; i < 4; i += 1) {
    const menu = document.getElementById(`short-menu${i}`);
    menu.children[0].innerHTML = Object.keys(shortMenuInfo)[i];
    menu.children[1].innerHTML = shortMenuInfo[`0${i + 1}`];
  }
}
*/
