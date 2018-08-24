/*
eslint-disable no-use-before-define
*/

import Framework from 'framework';
import Button from 'components/Button';
import Icon from 'components/Icon';
import './Select.scss';

const Select = props => {
  const { value, items, cls, adaptive, dataId } = props;

  const renderItems = items
    .map(item =>
      Framework.createElement(
        Button,
        {
          theme: item.value === value ? 'action' : 'normal',
          cls: 'Select__item',
          dataId: 'select__item',
          attrs: `data-value="${item.value}"`,
        },
        item.text,
      ),
    )
    .join('');

  const selected = items.find(item => item.value === value);

  return `
    <span class="Select ${
      adaptive ? 'Select_adaptive' : ''
    } ${cls}" data-value="${value}" data-id="${dataId}">
      <select class="Select__native" value="${value}">
        ${items.map(item => `<option value="${item.value}">${item.text}</option>`)}
      </select>
      ${Framework.createElement(
        Button,
        {
          theme: 'action',
          cls: 'Select__toggle',
          dataId: 'select__toggle',
        },
        `<span data-id="select__toggleVal">${selected.text}</span>${Framework.createElement(Icon, {
          icon: 'arrow',
        })}`,
      )}
      <span class="Select__wrap">
        ${renderItems}
      </span>
    </span>
  `;
};

document.addEventListener('click', e => {
  const item = Framework.getTargetNode(e.target, node => node.dataset.id === 'select__item');
  if (item) {
    const select = item.parentNode.parentNode;
    const { value } = select.dataset;
    Button.setMod(select.querySelector(`[data-value=${value}]`), 'theme', 'normal');
    Button.setMod(item, 'theme', 'action');
    select.dataset.value = item.dataset.value;
    const toggleVal = select.querySelector('[data-id="select__toggleVal"]');
    toggleVal.innerHTML = item.innerHTML;

    const native = select.querySelector('select');
    native.value = item.dataset.value;
    native.dispatchEvent(new Event('change'));
  }
});

const initSelect = node => {
  const toggle = node.querySelector('[data-id="select__toggle"]');

  const show = () => {
    toggle.onclick = null;
    node.classList.add('Select_open');
    document.documentElement.classList.add('touchable');
    setTimeout(() => {
      document.addEventListener('click', hide);
    });
  };

  const hide = () => {
    node.classList.remove('Select_open');
    document.removeEventListener('click', hide);
    document.documentElement.classList.remove('touchable');
    toggle.onclick = show;
  };

  toggle.onclick = show;
};

document.addEventListener('DOMContentLoaded', () => {
  const selects = document.querySelectorAll('.Select');
  Object.values(selects).forEach(select => {
    initSelect(select);
  });
});

export default Select;
