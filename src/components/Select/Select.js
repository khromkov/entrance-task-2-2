import Framework from 'framework';
import Button from 'components/Button';
import './Select.scss';

const Select = props => {
  const { value, items, cls } = props;

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

  return `<span class="Select ${cls}" data-value="${value}">${renderItems}</span>`;
};

document.addEventListener('click', e => {
  const item = Framework.getTargetNode(e.target, node => node.dataset.id === 'select__item');
  if (item) {
    const select = item.parentNode;
    const { value } = select.dataset;
    Button.setMod(select.querySelector(`[data-value=${value}]`), 'theme', 'normal');
    Button.setMod(item, 'theme', 'action');
    select.dataset.value = item.dataset.value;
  }
});

export default Select;
