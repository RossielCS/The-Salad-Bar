import * as builders from './builders';

function addAttributes(element, name, type, pattern = '') {
  element.setAttribute('id', `${name}`);
  element.setAttribute('type', `${type}`);
  element.setAttribute('name', `${name}`);
  if (type !== 'textarea') element.setAttribute('pattern', `${pattern}`);
  element.required = true;
}

function createForm(article) {
  const form = builders.creator(article, 'form', 'append');

  const nameLabel = builders.creator(form, 'label', 'append');
  nameLabel.setAttribute('for', 'username');
  nameLabel.innerHTML = 'Full Name:';
  const name = builders.creator(form, 'input', 'append');
  addAttributes(name, 'name', 'text', '\\w{4,15}');

  const emailLabel = builders.creator(form, 'label', 'append');
  emailLabel.setAttribute('for', 'email');
  emailLabel.innerHTML = 'E-mail:';
  const emailInput = builders.creator(form, 'input', 'append');
  addAttributes(emailInput, 'email', 'email', '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$');

  const textLabel = builders.creator(form, 'label', 'append');
  textLabel.setAttribute('for', 'comment');
  textLabel.innerHTML = 'Message:';
  const textArea = builders.creator(form, 'textarea', 'append');
  addAttributes(textArea, 'comment', 'text', '\\.{20,500}');

  const submitBtn = builders.creator(form, 'button', 'append');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.innerHTML = 'SUBMIT';
}

function createContact(main) {
  const article = builders.createArticle(main, 'contact');
  const title = builders.creator(article, 'h1', 'append');
  title.innerHTML = 'Contact Us';
  createForm(article);
  return article;
}

export default createContact;