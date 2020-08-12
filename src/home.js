function createSections() {
  const parent = document.getElementById('content');
  for (let i = 0; i < 4; i += 1) {
    const section = document.createElement('section');
    section.setAttribute('id', `section${i}`);
    section.setAttribute('class', 'main-sections');
    parent.appendChild(section);
  }
}

function addBgToSections() {
  const sections = document.getElementsByClassName('main-sections');
}

export { createSections, addBgToSections };