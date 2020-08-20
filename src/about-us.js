import * as builders from './builders';
import { addEventToButton } from './home';

function addContentAboutUs(sections) {
  const sect01 = sections[0];

  const title1 = builders.creator(sect01, 'h1', 'append');
  title1.innerHTML = 'THE SALAD BAR';

  const pElement1 = builders.creator(sect01, 'p', 'append');
  pElement1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

  const button1 = builders.creator(sect01, 'button', 'append');
  button1.innerHTML = 'Discover our Menu';
  addEventToButton(button1, 'art-about-us');
}

function createAboutUs(main, numSections) {
  const article = builders.createArticle(main, 'about-us');
  const sections = builders.addSectionsToArticle(article, numSections);
  addContentAboutUs(sections);
  return article;
}

export default createAboutUs;
