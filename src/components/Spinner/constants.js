const DIAMETR = 220;
const RADIUS = 220 / 2;
const MIN_ANGLE = -150;
const STEPS = 101;

const SELECTED_STEP = 0;

const DELTA_ANGLE = Math.abs(MIN_ANGLE * 2) / (STEPS - 1);

export default {
  DIAMETR,
  RADIUS,
  MIN_ANGLE,
  STEPS,
  SELECTED_STEP,
  DELTA_ANGLE,
};
