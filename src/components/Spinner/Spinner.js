import c from './constants';

const spinner = node => {
  let nodeRect = null;
  const cursorNode = node.querySelector('.Spinner__cursor');
  const stepNodes = node.querySelectorAll('svg > line');
  const valueNode = node.querySelector('.Spinner__value');

  const calculateAngle = vector1 => {
    // min value vector
    const vector0 = {
      x: -Math.sin(((180 + c.MIN_ANGLE) * Math.PI) / 180),
      y: -Math.cos(((180 + c.MIN_ANGLE) * Math.PI) / 180),
    };

    // angle in pi
    let angle = Math.acos(
      (vector1.x * vector0.x + vector1.y * vector0.y) /
        (Math.sqrt(vector0.x ** 2 + vector0.y ** 2) * Math.sqrt(vector1.x ** 2 + vector1.y ** 2)),
    );

    // calculate right angle for obtuse angle and for min value
    if (vector1.y < (vector0.y / vector0.x) * vector1.x) {
      if (vector1.x < 0) {
        angle = 0;
      } else {
        angle = 2 * Math.PI - angle;
      }
    }

    return angle;
  };

  const calculateValue = index => {
    const min = parseInt(node.dataset.valueMin, 10);
    const max = parseInt(node.dataset.valueMax, 10);

    const value = Math.floor(min + ((max - min) / (c.STEPS - 1)) * index);
    let sign = '';
    if (value > 0) {
      sign = '+';
    }

    if (value < 0) {
      sign = '-';
    }

    return `${sign}${value}`;
  };

  const update = e => {
    requestAnimationFrame(() => {
      const { clientX, clientY } = e;
      const angle = calculateAngle({
        x: clientX - nodeRect.x - c.RADIUS,
        y: c.RADIUS - (clientY - nodeRect.y),
      });

      const angleInDeg = Math.min((angle * 180) / Math.PI, Math.abs(c.MIN_ANGLE * 2));
      const index = Math.floor((angleInDeg / Math.abs(c.MIN_ANGLE * 2)) * (c.STEPS - 1));

      const currentStepNode = node.querySelector('.Spinner__line_value');
      if (currentStepNode) {
        currentStepNode.classList.remove('Spinner__line_value');
      }
      cursorNode.style.transform = `rotateZ(${angleInDeg + c.MIN_ANGLE}deg)`;
      stepNodes[index].classList.add('Spinner__line_value');
      valueNode.innerHTML = calculateValue(index);
    });
  };

  const pointermove = update;

  const pointerup = e => {
    // fix for firefox
    // fast tap on component producer Uncaught Error: InvalidPointerId
    if (e.pointerId) {
      node.releasePointerCapture(e.pointerId);
    }
    node.removeEventListener('pointermove', pointermove);
    node.removeEventListener('pointerup', pointerup);
    node.removeEventListener('pointercancel', pointerup);
    node.removeEventListener('pointerleave', pointerup);
  };

  const pointerdown = e => {
    // for capture mouse
    node.setPointerCapture(e.pointerId);
    // think than component has fix position when interactive
    nodeRect = node.getBoundingClientRect();
    node.addEventListener('pointermove', pointermove);
    node.addEventListener('pointerup', pointerup);
    node.addEventListener('pointercancel', pointerup);
    node.addEventListener('pointerleave', pointerup);
    update(e);
  };

  node.addEventListener('pointerdown', pointerdown);
};

document.addEventListener('DOMContentLoaded', () => {
  spinner(document.querySelector('[data-id="spinner"]'));
});
