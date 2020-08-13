function createBgSections() {
  const content = document.getElementsByTagName('main')[0];
  const container = document.createElement('div');
  container.setAttribute('class', 'container-bg');
  for (let i = 0; i < 4; i += 1) {
    const section = document.createElement('div');
    section.setAttribute('id', `bg-div${i}`);
    section.setAttribute('class', 'content-bg-divs');
    container.appendChild(section);
  }
  content.insertBefore(container, content.childNodes[0]);
}

function createArticles() {
  const content = document.getElementById('content');
  for (let i = 0; i < 4; i += 1) {
    const article = document.createElement('article');
    content.appendChild(article);
  }
}


export { createBgSections, createArticles };