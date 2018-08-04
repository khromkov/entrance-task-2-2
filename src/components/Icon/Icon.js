/*
eslint-disable camelcase
*/
import light_state_on from './light_state_on.svg';
import light_state_off from './light_state_off.svg';
import temp_state_off from './temp_state_off.svg';
import temp_state_on from './temp_state_on.svg';
import scheduled from './scheduled.svg';
import cloud from './cloud.svg';
import left from './left.svg';
import right from './right.svg';
import menu from './menu.svg';
import './Icon.scss';

const icons = {
  light_state_on,
  light_state_off,
  temp_state_off,
  temp_state_on,
  scheduled,
  cloud,
  left,
  right,
  menu,
};

const Icon = props => {
  const { icon, state, cls } = props;

  let key = icon;
  if (state) {
    key += `_state_${state}`;
  }

  return `<span class="${cls} Icon">${icons[key]}</span>`;
};

export default Icon;
