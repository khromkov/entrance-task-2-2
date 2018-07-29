import Framework from 'framework';
import Link from 'components/Link';
import './Header.scss';

const links = [
  { children: 'Сводка', theme: 'active', view: 'main', size: 'l' },
  { children: 'Устройства', view: 'main', size: 'l' },
  { children: 'Сценарии', view: 'main', size: 'l' },
];

const Header = ({ cls }) => `
  <div class="Header">
    <div class="Header__container ${cls}">
      <img class="Header__logo" src="/img/logo@1x.png" alt="Яндекс Дом" />
      <span class="Header__links">${links
        .map(link => Framework.createElement(Link, { ...link, cls: 'Header__link' }))
        .join('')}</span>
    </div>
  </div>
`;

export default Header;
