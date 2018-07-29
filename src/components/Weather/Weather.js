import Framework from 'framework';
import Icon from 'components/Icon';
import './Weather.scss';

const Weather = props => {
  const { cls } = props;

  return `
    <div class="Weather ${cls}">
      <div class="Weather__item">
        <div class="Weather__title">Дома</div>
        <div class="Weather__value">+23</div>
      </div>
      <div class="Weather__item">
        <div class="Weather__title">За окном</div>
        <div class="Weather__value">
          +19
          ${Framework.createElement(Icon, { icon: 'cloud', cls: 'Weather__valueIcon' })}
        </div>
      </div>
    </div>
  `;
};

export default Weather;
