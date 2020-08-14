function createBgDivs(content) {
  const bgDivContainer = document.createElement('div');
  bgDivContainer.setAttribute('class', 'container-home-bg');
  for (let i = 0; i < 7; i += 1) {
    const bgDiv = document.createElement('div');
    bgDiv.setAttribute('id', `home-bg${i}`);
    bgDivContainer.appendChild(bgDiv);
  }
  content.insertBefore(bgDivContainer, content.childNodes[0]);
  return bgDivContainer;
}

function createArticles(main) {
  for (let i = 0; i < 7; i += 1) {
    const article = document.createElement('article');
    article.setAttribute('id', `home-art${i}`);
    main.appendChild(article);
  }
  return main.children;
}

function addSectionsToArticles() {
  const art0 = document.getElementById('home-art0');
  const art1 = document.getElementById('home-art1');
  const art3 = document.getElementById('home-art3');
  const art6 = document.getElementById('home-art6');
  const arr = [art0, art1, art3, art6];
  for (let i = 0; i < arr.length; i += 1) {
    const section1 = document.createElement('div');
    section1.setAttribute('class', 'home-art-sect');
    const section2 = document.createElement('div');
    section2.setAttribute('class', 'home-art-sect');
    arr[i].appendChild(section1);
    arr[i].appendChild(section2);
  }
}

function addContentToArt0() {
  const art0 = document.getElementById('home-art0').children[1];
  const title = document.createElement('h1');
  title.innerHTML = 'Pellentesque dignissim enim sit amet venenatis urna cursus eget.';
  const pElement = document.createElement('p');
  const text = document.createTextNode('Sed egestas egestas fringilla phasellus faucibus. Sed pulvinar proin gravida hendrerit lectus a. Iaculis urna id volutpat lacus laoreet non. Nunc eget lorem dolor sed viverra ipsum nunc.');
  pElement.appendChild(text);
  const button = document.createElement('button');
  button.innerHTML = 'BUY SALAD';
  button.addEventListener('click', () => {

  });
  art0.appendChild(title);
  art0.appendChild(pElement);
  art0.appendChild(button);
}

export {
  createBgDivs, createArticles, addSectionsToArticles, addContentToArt0,
};