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
      section.setAttribute('class', `${arr[i].id}-sect`);
    }
  }
}
