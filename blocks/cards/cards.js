import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  ul.className = 'cards__list';
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.classList.add('cards__item');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards__image';
      else div.className = 'cards__body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('picture > img').forEach((img) => {
    const picture = img.closest('picture');
    const altText = img.getAttribute('alt') ?? 'Card image';
    picture.replaceWith(createOptimizedPicture(img.src, altText, false, [{ width: '750' }]));
  });
  
  /* icon */
  ul.querySelectorAll('.cards__body').forEach((body) => {
    const link = body.querySelector('a');
    if (link) {
      link.classList.add('cards__link');
      const iconSpan = document.createElement('span');
      iconSpan.className = 'material-icons cards__icon';
      iconSpan.setAttribute('aria-hidden', 'true');
      iconSpan.textContent = 'east';
      body.append(iconSpan);
    }
  });
  block.replaceChildren(ul);
}
