function creator(parent, newElement, position) {
  const child = document.createElement(`${newElement}`);
  if (position === 'append') {
    parent.appendChild(child);
  } else {
    parent.insertBefore(child, position);
  }
  return child;
}

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

export { creator, createArticle, addSectionsToArticle };