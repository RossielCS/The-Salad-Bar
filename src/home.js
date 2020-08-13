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

export default createBgDivs;