import Framework from 'framework';
import './Slider.scss';

const Slider = props => {
  const { leftValue, rightValue, theme } = props;

  return Framework.Component.template`
  <div class="Slider Slider_theme_${theme}" data-id="slider">
    <div class="Slider__value Slider__value_min">${leftValue}</div>
    <div class="Slider__value Slider__value_max">${rightValue}</div>
    <div class="Slider__cursor" data-id="slider__cursor"></div>
  </div>`;
};

document.addEventListener('mousedown', e => {
  const cursor = Framework.getTargetNode(e.target, node => node.dataset.id === 'slider__cursor');
  if (cursor) {
    const startX = e.pageX;
    const slider = cursor.parentNode;
    const cursorDim = cursor.getBoundingClientRect();
    const sliderDim = slider.getBoundingClientRect();
    const startOffset = cursorDim.x - sliderDim.x;
    const offsetCenterX = startX - cursorDim.x;

    // eslint-disable-next-line no-shadow
    const mousemove = e => {
      const positionX = e.pageX - offsetCenterX;
      if (positionX >= sliderDim.left && positionX + cursorDim.width <= sliderDim.right) {
        cursor.style.transform = `translateX(${startOffset + e.pageX - startX}px)`;
      } else if (positionX < sliderDim.left) {
        cursor.style.transform = 'translateX(0px)';
      } else {
        cursor.style.transform = `translateX(${sliderDim.width - cursorDim.width}px)`;
      }
    };

    const mouseup = () => {
      document.removeEventListener('mousemove', mousemove);
      document.removeEventListener('mouseup', mouseup);
    };

    document.addEventListener('mousemove', mousemove);
    document.addEventListener('mouseup', mouseup);
  }
});

Slider.defaultProps = {
  theme: 'temp',
  leftValue: '-10',
  rightValue: '+30',
};

export default Slider;
