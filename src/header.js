export function creator(parent, newElement, position) {
  const child = document.createElement(`${newElement}`);
  if (position === 'append') {
    parent.appendChild(child);
  } else {
    parent.insertBefore(child, position);
  }
  return child;
}

function addLiToATag(aTag, tempName, i) {
  const li = creator(aTag, 'li', 'append');
  li.setAttribute('id', `nav-li${i}`);
  li.innerHTML = `${tempName}`;
}

export function addUlistToNav(navbar, tabNames) {
  const tempNames = [...tabNames];
  const list = creator(navbar, 'ul', 'append');
  for (let i = 0; i < 4; i += 1) {
    if (i === 2) {
      const logo = creator(list, 'div', 'append');
      logo.setAttribute('id', 'home-logo');
    }
    const aTag = creator(list, 'a', 'append');
    aTag.href = `#${tempNames[i]}`.toLowerCase();
    addLiToATag(aTag, tempNames[i], i);
  }
  return navbar.children;
}
