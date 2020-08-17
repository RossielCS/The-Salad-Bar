import { creator } from './header';

export function addContentToHeroShot() {
  const art0 = document.getElementById('art0').children[1];
  const title = creator(art0, 'h1', 'append');
  title.innerHTML = 'Pellentesque dignissim enim sit amet venenatis.';

  const pElement = creator(art0, 'p', 'append');
  pElement.innerHTML = 'Sed egestas egestas fringilla phasellus faucibus. Sed pulvinar proin gravida hendrerit lectus a.';

  const button = creator(art0, 'button', 'append');
  button.innerHTML = 'GET PRICES';
  button.addEventListener('click', () => {
  });
}

export default addContentToHeroShot;