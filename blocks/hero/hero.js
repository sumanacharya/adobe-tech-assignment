import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const rows = [...block.children];
  if (!rows.length) return;

  const contentRow = rows[0];
  const imageRow = rows[1];

  const titleText = contentRow?.children[1]?.textContent?.trim() || '';
  const subTitleText = contentRow?.children[2]?.innerHTML?.trim() || '';

  const picture = imageRow?.querySelector('picture');
  const imageElement = document.createElement('div');
  imageElement.className = 'hero__image';

  if (picture) {
    const img = picture.querySelector('img');
    const src = img?.src;
    if (src) {
      const alt = img?.alt || 'Hero Image';
      imageElement.append(
        createOptimizedPicture(src, alt, false, [{ width: '2000' }]),
      );
    }
  }

  const contentDiv = document.createElement('div');
  contentDiv.className = 'hero__content';

  if (titleText || subTitleText) {
    const card = document.createElement('div');
    card.className = 'hero__card';

    if (titleText) {
      const h4 = document.createElement('h4');
      h4.className = 'hero__title';
      h4.textContent = titleText;
      card.append(h4);
    }

    if (subTitleText) {
      const body = document.createElement('div');
      body.className = 'hero__body';
      body.innerHTML = subTitleText;

      const firstAnchor = body.querySelector('a');
      if (firstAnchor) {
        firstAnchor.classList.add('button', 'hero-button', 'hero-button--primary');
        const ctaWrapper = document.createElement('div');
        ctaWrapper.className = 'hero__cta';
        ctaWrapper.append(firstAnchor);
        card.append(body);
        card.append(ctaWrapper);
      } else {
        card.append(body);
      }
    }

    contentDiv.append(card);
  }

  block.replaceChildren(contentDiv, imageElement);

  const setOverlapStyleProperty = () => {
    const heroContentElem = block.querySelector('.hero__content');
    if (!heroContentElem) return;
    const spacing = 16;
    const height = heroContentElem.offsetHeight;
    const overlap = Math.max(0, Math.round(height / 2 + spacing));
    block.style.setProperty('--hero-overlap', `${overlap}px`);
  };
  requestAnimationFrame(setOverlapStyleProperty);
  document.fonts?.ready?.then(setOverlapStyleProperty);
}
