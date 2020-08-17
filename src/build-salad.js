import { creator } from './header';

export function addContentToBuildSalad() {
  const art2 = document.getElementById('art2');
  const text1 = creator(art2, 'h3', 'append');
  text1.innerHTML = 'Be the Chef today!';
  const text2 = creator(art2, 'h4', 'append');
  text2.innerHTML = 'BUILD YOUR OWN SALAD';
  const button = creator(art2, 'button', 'append');
  button.innerHTML = 'View Available Choices';
  button.addEventListener('click', () => {
  });
}

export default addContentToBuildSalad;