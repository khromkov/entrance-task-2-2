import { withScroll } from 'components/Block';

document.addEventListener('DOMContentLoaded', () => {
  withScroll(document.querySelector('[data-id="scripts"]'), { step: 660 });
});
