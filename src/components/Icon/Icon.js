/*
eslint-disable camelcase
*/

import light_state_on from './light_state_on.svg';
import light_state_off from './light_state_off.svg';
import temp_state_off from './temp_state_off.svg';
import temp_state_on from './temp_state_on.svg';
import scheduled from './scheduled.svg';
import cloud from './cloud.svg';

const icons = {
  light_state_on,
  light_state_off,
  temp_state_off,
  temp_state_on,
  scheduled,
  cloud,
};

const Icon = props => {
  const { icon, state, cls } = props;

  let key = icon;
  if (state) {
    key += `_state_${state}`;
  }

  return `<span class="${cls}">${icons[key]}</span>`;
};

export default Icon;
