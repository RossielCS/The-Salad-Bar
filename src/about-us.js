import { creator } from './header';

export function addContentAboutUs() {
  const art1Child0 = document.getElementById('art1').children[0];
  const art1Child1 = document.getElementById('art1').children[1];

  const title0 = creator(art1Child0, 'h2', 'append');
  title0.innerHTML = 'We Only Use the Best Ingredients';

  const pElement0 = creator(art1Child0, 'p', 'append');
  pElement0.innerHTML = 'Sed egestas egestas fringilla phasellus faucibus. Sed pulvinar proin gravida hendrerit lectus a. Iaculis urna id volutpat lacus laoreet non. Nunc eget lorem dolor sed viverra ipsum nunc.';

  const title1 = creator(art1Child1, 'h2', 'append');
  title1.innerHTML = 'THE SALAD BAR';

  const pElement1 = creator(art1Child1, 'p', 'append');
  pElement1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
}

export default addContentAboutUs;
