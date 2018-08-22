import Framework from 'framework';

export default (node, options = {}) => {
  const left = node.querySelector('[data-id="left"]');
  const right = node.querySelector('[data-id="right"]');
  const container = node.querySelector('.Block__content > *');

  const updateStateButtons = () => {
    const { scrollWidth, scrollLeft, clientWidth } = container;

    const isDisabledLeft = scrollLeft === 0;
    const isDisabledRight = scrollWidth === clientWidth + scrollLeft;

    if (isDisabledLeft && isDisabledRight) {
      left.style.display = 'none';
      right.style.display = 'none';
    } else {
      left.style.display = null;
      right.style.display = null;

      if (isDisabledLeft) {
        left.setAttribute('disabled', true);
      } else {
        left.removeAttribute('disabled');
      }

      if (isDisabledRight) {
        right.setAttribute('disabled', true);
      } else {
        right.removeAttribute('disabled');
      }
    }
  };

  const leftClick = () => {
    const startOffset = container.scrollLeft;
    const offset = Math.min(container.scrollLeft, options.step || container.clientWidth);
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
    const offset = Math.min(
      container.scrollWidth - container.scrollLeft,
      options.step || container.clientWidth,
    );
    Framework.animate({
      draw: progress => {
        container.scrollLeft = startOffset + progress * offset;
      },
      timing: timeFraction => timeFraction,
      duration: 200,
    });
  };

  container.addEventListener('scroll', updateStateButtons);
  window.addEventListener('resize', updateStateButtons);
  left.addEventListener('click', leftClick);
  right.addEventListener('click', rightClick);
  updateStateButtons();
};
