import { withScroll } from 'components/Block';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('[data-id="devices"]');
  const filter = root.querySelector('[data-id="filter"] select');
  filter.onchange = e => {
    const { value } = e.target;

    const devices = root.querySelectorAll('.Card');

    Object.values(devices).forEach(device => {
      if (value === 'all' || device.dataset.tag === value) {
        device.classList.remove('Card_hide');
      } else {
        device.classList.add('Card_hide');
      }
    });

    window.dispatchEvent(new Event('resize'));
  };
  withScroll(document.querySelector('[data-id="devices"]'));
});
