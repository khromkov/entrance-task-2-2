import Framework from 'framework';
import c from './constants';
import './Spinner.scss';
import cursor from './cursor.svg';

const Spinner = () => {
  const lines = [];
  for (let i = 0; i < c.STEPS; i += 1) {
    lines.push(
      `<line x1="${c.RADIUS}" y1="${c.RADIUS}" x2="${c.RADIUS}" y2="0" class="Spinner__line ${
        i === c.SELECTED_STEP ? 'Spinner__line_value' : ''
      }" transform="rotate(${c.MIN_ANGLE + c.DELTA_ANGLE * i} ${c.RADIUS} ${c.RADIUS})" />`,
    );
  }

  return Framework.Component.template`
    <div class="Spinner Control" data-id="spinner" touch-action="none" data-value-min="10" data-value-max="30">
      <svg class="Spinner__steps" height="${c.DIAMETR}" width="${c.DIAMETR}">
        ${lines.join('')}
      </svg>
      <div class="Spinner__circle">
        <span class="Spinner__value">
          +23
        </span>
        <div class="Spinner__cursor">
          ${cursor}
        </div>
      </div>
    </div>`;
};

export default Spinner;
