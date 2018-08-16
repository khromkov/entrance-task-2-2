import Framework from 'framework';
import Icon from 'components/Icon';
import constants from 'constants/index';
import './Slider.scss';

const Slider = props => {
  const { theme } = props;

  let values;
  if (theme === 'temp') {
    values = {
      min: '-10',
      max: '+30',
    };
  } else if (theme === 'light') {
    values = {
      min: Framework.createElement(Icon, { icon: 'sun_min', size: 'm' }),
      max: Framework.createElement(Icon, { icon: 'sun_max', size: 'm' }),
    };
  }

  return Framework.Component.template`
  <div class="Slider Slider_theme_${theme}" data-id="slider">
    <div class="Slider__value Slider__value_min">${values.min}</div>
    <div class="Slider__value Slider__value_max">${values.max}</div>
    <div class="Slider__cursor" data-id="slider__cursor" touch-action="none"></div>
  </div>`;
};

document.addEventListener('pointerdown', e => {
  const cursor = Framework.getTargetNode(e.target, node => node.dataset.id === 'slider__cursor');
  if (cursor) {
    const direction =
      document.documentElement.clientWidth >= constants.screenWidth.tablet ? 'x' : 'y';

    const directionUpper = direction.toUpperCase();
    const pageKey = `page${directionUpper}`;

    const startX = e[pageKey];
    const slider = cursor.parentNode;
    const cursorDim = cursor.getBoundingClientRect();
    const sliderDim = slider.getBoundingClientRect();
    const startOffset = cursorDim[direction] - sliderDim[direction];
    const offsetCenterX = startX - cursorDim[direction];

    const sliderDim0 = direction === 'x' ? sliderDim.left : sliderDim.top;
    const sliderDim1 = direction === 'x' ? sliderDim.right : sliderDim.bottom;
    const sliderDimWidth = direction === 'x' ? sliderDim.width : sliderDim.height;
    const cursorDimSize = cursorDim.width;

    // eslint-disable-next-line no-shadow
    const pointermove = e => {
      const position = e[pageKey] - offsetCenterX;
      if (position >= sliderDim0 && position + cursorDim.width <= sliderDim1) {
        cursor.style.transform = `translate${directionUpper}(${startOffset +
          e[pageKey] -
          startX}px)`;
      } else if (position < sliderDim0) {
        cursor.style.transform = `translate${directionUpper}(0px)`;
      } else {
        cursor.style.transform = `translate${directionUpper}(${sliderDimWidth - cursorDimSize}px)`;
      }
    };

    const pointerup = () => {
      document.removeEventListener('pointermove', pointermove);
      document.removeEventListener('pointerup', pointerup);
    };

    document.addEventListener('pointermove', pointermove);
    document.addEventListener('pointerup', pointerup);
  }
});

Slider.defaultProps = {
  theme: 'temp',
};

export default Slider;
