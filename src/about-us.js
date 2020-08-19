import { creator } from './header';
import { createArticle, addSectionsToArticle } from './home';

function addContentAboutUs(sections) {
  const sect01 = sections[0];

  const title1 = creator(sect01, 'h1', 'append');
  title1.innerHTML = 'THE SALAD BAR';

  const pElement1 = creator(sect01, 'p', 'append');
  pElement1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

  const button1 = creator(sect01, 'button', 'append');
  button1.innerHTML = 'Discover our Menu';
}

function createAboutUs(main, numSections) {
  const article = createArticle(main, 'about-us');
  const sections = addSectionsToArticle(article, numSections);
  addContentAboutUs(sections);
  return article;
}

export default createAboutUs;
