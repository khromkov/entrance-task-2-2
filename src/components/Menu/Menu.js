import Framework from 'framework';
import Link from 'components/Link';
import Button from 'components/Button';
import Icon from 'components/Icon';
import './Menu.scss';

const links = [
  { children: 'Сводка', theme: 'active', view: 'main', size: 'l' },
  { children: 'Устройства', view: 'main', size: 'l' },
  { children: 'Сценарии', view: 'main', size: 'l' },
];

const Menu = ({ cls }) => {
  const renderedLinks = links
    .map(link => Framework.createElement(Link, { ...link, cls: 'Menu__link' }))
    .join('');

  return `
    <div class="Menu ${cls}">
      <div class="Menu__desktop">
        ${renderedLinks}
      </div>
      <div class="Menu__mobile">
        ${Framework.createElement(
          Button,
          { theme: 'pseudo', icon: true, dataId: 'menu_open' },
          Framework.createElement(Icon, { icon: 'menu' }),
        )}
        <div class="Menu__modal">
          <div class="Menu__backdrop" data-id="menu_close" role="presentation"></div>
          <div class="Menu__wrap">
            ${renderedLinks}
          </div>
        </div>
      </div>
    </div>
  `;
};

document.addEventListener('click', e => {
  if (Framework.getTargetNode(e.target, node => node.dataset.id === 'menu_close')) {
    document.querySelector('.Menu__modal').classList.remove('Menu__modal_open');
  }

  if (Framework.getTargetNode(e.target, node => node.dataset.id === 'menu_open')) {
    document.querySelector('.Menu__modal').classList.add('Menu__modal_open');
  }
});

export default Menu;
