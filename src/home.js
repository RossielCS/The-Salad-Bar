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
}; */

export function creator(parent, newElement, position) {
  const child = document.createElement(`${newElement}`);
  if (position === 'append') {
    parent.appendChild(child);
  } else {
    parent.insertBefore(child, position);
  }
  return child;
}

export function addListToNavbar(navbar, tabNames) {
  const tempNames = [...tabNames];
  for (let i = 0; i < 2; i += 1) {
    const list = creator(navbar, 'ul', 'append');
    for (let j = 0; j < 2; j += 1) {
      const aTag = creator(list, 'a', 'append');
      aTag.href = `#${tempNames[j]}`.toLowerCase();
    }
    tempNames.splice(0, 2);
  }
  return navbar.children;
}

export function addNamesToList(tabNames, list) {
  const tempNames = [...tabNames];
  for (let i = 0; i < list.length; i += 1) {
    for (let j = 0; j < 2; j += 1) {
      const listElement = creator(list[i].children[j], 'li', 'append');
      listElement.setAttribute('id', `nav-li${j}`);
      listElement.innerHTML = `${tempNames[j]}`;
    }
    tempNames.splice(0, 2);
  }
}

export function addLogoToNav(navbar) {
  const logo = creator(navbar, 'div', navbar.childNodes[1]);
  logo.setAttribute('id', 'home-logo');
  return logo;
}

/* export function addPointsBetweenLi(navbar) {
  const point1 = creator(navbar, 'div', navbar.childNodes[0].childNodes[1]);
  point1.setAttribute('class', 'points-li');
} */

export function createBgDivs(content) {
  const bgDivContainer = creator(content, 'div', content.childNodes[0]);
  bgDivContainer.setAttribute('class', 'container-home-bg');
  for (let i = 0; i < 7; i += 1) {
    const bgDiv = creator(bgDivContainer, 'div', 'append');
    bgDiv.setAttribute('id', `home-bg${i}`);
  }
  return bgDivContainer;
}

export function createArticles(main) {
  for (let i = 0; i < 7; i += 1) {
    const article = creator(main, 'article', 'append');
    article.setAttribute('id', `home-art${i}`);
  }
  return main.children;
}

export function addSectionsToArticles() {
  const arr = [
    document.getElementById('home-art0'),
    document.getElementById('home-art1'),
    document.getElementById('home-art3'),
    document.getElementById('home-art6'),
  ];
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < 2; j += 1) {
      const section = creator(arr[i], 'div', 'append');
      section.setAttribute('class', 'home-art-sect');
    }
  }
}

export function addContentToArt0() {
  const art0 = document.getElementById('home-art0').children[1];
  const title = creator(art0, 'h1', 'append');
  title.innerHTML = 'Pellentesque dignissim enim sit amet venenatis urna cursus eget.';

  const pElement = creator(art0, 'p', 'append');
  pElement.innerHTML = 'Sed egestas egestas fringilla phasellus faucibus. Sed pulvinar proin gravida hendrerit lectus a. Iaculis urna id volutpat lacus laoreet non. Nunc eget lorem dolor sed viverra ipsum nunc.';

  const button = creator(art0, 'button', 'append');
  button.innerHTML = 'BUY SALAD';
  button.addEventListener('click', () => {
  });
}

export function addContentToArt1() {
  const art1Child0 = document.getElementById('home-art1').children[0];
  const art1Child1 = document.getElementById('home-art1').children[1];

  const title0 = creator(art1Child0, 'h2', 'append');
  title0.innerHTML = 'Pellentesque dignissim enim sit amet venenatis urna cursus eget.';

  const pElement0 = creator(art1Child0, 'p', 'append');
  pElement0.innerHTML = 'Sed egestas egestas fringilla phasellus faucibus. Sed pulvinar proin gravida hendrerit lectus a. Iaculis urna id volutpat lacus laoreet non. Nunc eget lorem dolor sed viverra ipsum nunc.';

  const title1 = creator(art1Child1, 'h2', 'append');
  title1.innerHTML = 'Pellentesque dignissim enim sit amet venenatis urna cursus eget.';

  const pElement1 = creator(art1Child1, 'p', 'append');
  pElement1.innerHTML = 'Sed egestas egestas fringilla phasellus faucibus. Sed pulvinar proin gravida hendrerit lectus a. Iaculis urna id volutpat lacus laoreet non. Nunc eget lorem dolor sed viverra ipsum nunc.';
}

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
