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

const renderMenuLinks = props =>
  links.map(link => Framework.createElement(Link, { ...link, ...props })).join('');

const Menu = ({ cls }) => `
    <div class="Menu ${cls}">
      <div class="Menu__desktop">
        ${renderMenuLinks({ cls: 'Menu__link Menu__link_desktop' })}
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
            ${renderMenuLinks({ cls: 'Menu__link Menu__link_mobile' })}
          </div>
        </div>
      </div>
    </div>
  `;

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('.Page');
  const menu = document.querySelector('.Menu__modal');
  document.body.appendChild(menu);

  document.addEventListener('click', e => {
    if (Framework.getTargetNode(e.target, node => node.dataset.id === 'menu_close')) {
      menu.classList.remove('Menu__modal_open');
      page.classList.remove('Page_modal');
    }

    if (Framework.getTargetNode(e.target, node => node.dataset.id === 'menu_open')) {
      menu.classList.add('Menu__modal_open');
      page.classList.add('Page_modal');
    }
  });
});

export default Menu;
