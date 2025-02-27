const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
  const button = accordion.querySelector('.accordion-button');
  const body = accordion.querySelector('.accordion-body');
  const content = accordion.querySelector('.accordion-body-content');

  button.addEventListener('click', (event) => {
    event.preventDefault();

    const contentHeight = content.offsetHeight;

    if (isAccordionExpanded(accordion)) {
      body.style.height = `${contentHeight}px`;
      requestAnimationFrame(() => {
        accordion.classList.remove('accordion-expanded');
        body.style.height = `0px`;
      });
    } else {
      accordion.classList.add('accordion-expanded');
      body.style.height = `${contentHeight}px`;
    }

    accordion.addEventListener('transitionend', () => {
      if (isAccordionExpanded(accordion)) body.style.height = 'auto';
    });
  });
});

const isAccordionExpanded = (accordion) => {
  return accordion.classList.contains('accordion-expanded');
};
