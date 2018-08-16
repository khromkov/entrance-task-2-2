import Framework from 'framework';

const scroll = node => {
  const left = node.querySelector('[data-id="left"]');
  const right = node.querySelector('[data-id="right"]');
  const container = node.querySelector('.Block__content > *');

  const updateStateButtons = () => {
    const { scrollWidth, scrollLeft, clientWidth } = container;

    if (scrollLeft === 0) {
      left.setAttribute('disabled', true);
    } else {
      left.removeAttribute('disabled');
    }

    if (scrollWidth === clientWidth + scrollLeft) {
      right.setAttribute('disabled', true);
    } else {
      right.removeAttribute('disabled');
    }
  };

  const leftClick = () => {
    const startOffset = container.scrollLeft;
    const offset = Math.min(container.scrollLeft, container.clientWidth);
    Framework.animate({
      draw: progress => {
        container.scrollLeft = startOffset - progress * offset;
      },
      timing: timeFraction => timeFraction,
      duration: 200,
    });
  };

  const rightClick = () => {
    const startOffset = container.scrollLeft;
    const offset = Math.min(container.scrollWidth - container.scrollLeft, container.clientWidth);
    Framework.animate({
      draw: progress => {
        container.scrollLeft = startOffset + progress * offset;
      },
      timing: timeFraction => timeFraction,
      duration: 200,
    });
  };

  container.addEventListener('scroll', updateStateButtons);
  document.addEventListener('resize', updateStateButtons);
  left.addEventListener('click', leftClick);
  right.addEventListener('click', rightClick);
  updateStateButtons();
};

document.addEventListener('DOMContentLoaded', () => {
  scroll(document.querySelector('[data-id="devices"]'));
});
