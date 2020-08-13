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
    const section1 = document.createElement('section');
    section1.setAttribute('class', 'home-art-sect');
    const section2 = document.createElement('section');
    section2.setAttribute('class', 'home-art-sect');
    arr[i].appendChild(section1);
    arr[i].appendChild(section2);
  }
}

export { createBgDivs, createArticles, addSectionsToArticles };