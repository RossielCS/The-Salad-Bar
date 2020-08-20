import * as builders from './builders';
import { createMenu, saladsNames, saladsImages } from './menu';

function addEventToButton(button, element) {
  button.addEventListener('click', () => {
    const main = document.getElementsByTagName('main')[0];
    document.getElementById(`${element}`).remove();
    createMenu(main, 2, saladsNames, saladsImages);
    document.getElementById('menu-cat0').click();
  });
}

function addContentToHome(article) {
  const art0 = article.children[1];
  const title = builders.creator(art0, 'h1', 'append');
  title.innerHTML = 'Pellentesque dignissim enim sit amet venenatis.';

  const pElement = builders.creator(art0, 'p', 'append');
  pElement.innerHTML = 'Sed egestas egestas fringilla phasellus faucibus. Sed pulvinar proin gravida hendrerit lectus a.';

  const button = builders.creator(art0, 'button', 'append');
  button.innerHTML = 'GET PRICES';
  addEventToButton(button, 'art-home');
}

function createHome(main, name, numSections) {
  const article = builders.createArticle(main, name);
  builders.addSectionsToArticle(article, numSections);
  addContentToHome(article);
  return article;
}

export { createHome, addEventToButton };