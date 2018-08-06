import Framework from 'framework';
import Button from 'components/Button';
import Icon from 'components/Icon';
import './Select.scss';

const Select = props => {
  const { value, items, cls, adaptive } = props;

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
    <span class="Select ${adaptive ? 'Select_adaptive' : ''} ${cls}" data-value="${value}">
      ${Framework.createElement(
        Button,
        {
          theme: 'action',
          cls: 'Select__toggle',
          dataId: 'select__toggle',
        },
        `${selected.text}${Framework.createElement(Icon, { icon: 'left' })}`,
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
  }
});

export default Select;
