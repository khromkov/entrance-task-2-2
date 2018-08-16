/*
eslint-disable camelcase
*/
import light_state_on from './light_state_on.svg';
import light_state_off from './light_state_off.svg';
import temp_state_off from './temp_state_off.svg';
import temp_state_on from './temp_state_on.svg';
import scheduled from './scheduled.svg';
import cloud from './cloud.svg';
import arrow from './arrow.svg';
import menu from './menu.svg';
import sun_min from './sun_min.svg';
import sun_max from './sun_max.svg';
import './Icon.scss';
import './IconArrow.scss';

const icons = {
  light_state_on,
  light_state_off,
  temp_state_off,
  temp_state_on,
  scheduled,
  cloud,
  arrow,
  menu,
  sun_min,
  sun_max,
};

const Icon = props => {
  const { icon, state, cls, size, direction } = props;

  let key = icon;
  if (state) {
    key += `_state_${state}`;
  }

  let arrowClass = '';
  if (icon === 'arrow') {
    arrowClass = `IconArrow IconArrow_direction_${direction}`;
  }

  return `<span class="${cls} ${arrowClass} Icon Icon_size_${size}">${icons[key]}</span>`;
};

Icon.defaultProps = {
  size: 's',
  direction: 'bottom',
};

export default Icon;
