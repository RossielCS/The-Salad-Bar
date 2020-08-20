import { creator } from './header';

/* export function createBackground(content) {
  const bgDivContainer = creator(content, 'div', content.childNodes[0]);
  bgDivContainer.setAttribute('class', 'container-bg');
  for (let i = 0; i < 7; i += 1) {
    const bgDiv = creator(bgDivContainer, 'div', 'append');
    bgDiv.setAttribute('id', `background${i}`);
  }
  return bgDivContainer;
}
*/

function createArticle(main, name) {
  const article = creator(main, 'article', 'append');
  article.setAttribute('id', `art-${name}`);
  return article;
}

function addSectionsToArticle(article, numSections) {
  for (let i = 0; i < numSections; i += 1) {
    const section = creator(article, 'section', 'append');
    section.setAttribute('class', `${article.id}-sect`);

    const h2 = creator(section, 'h2', 'append');
    h2.setAttribute('class', 'hidden');
    h2.innerHTML = 'Hidden';
  }
  return article.children;
}

function addContentToHome(article) {
  const art0 = article.children[1];
  const title = creator(art0, 'h1', 'append');
  title.innerHTML = 'Pellentesque dignissim enim sit amet venenatis.';

  const pElement = creator(art0, 'p', 'append');
  pElement.innerHTML = 'Sed egestas egestas fringilla phasellus faucibus. Sed pulvinar proin gravida hendrerit lectus a.';

  const button = creator(art0, 'button', 'append');
  button.innerHTML = 'GET PRICES';
}

function createHome(main, name, numSections) {
  const article = createArticle(main, name);
  addSectionsToArticle(article, numSections);
  addContentToHome(article);
  return article;
}

export { createHome, createArticle, addSectionsToArticle };
