import Framework from 'framework';
import Menu from 'components/Menu';
import './Header.scss';

const Header = ({ cls }) => `
  <div class="Header">
    <div class="Header__container ${cls}">
      <img class="Header__logo" src="/img/logo@1x.png" alt="Яндекс Дом" />
      ${Framework.createElement(Menu, { cls: 'Header__menu' })}
    </div>
  </div>
`;

export default Header;
