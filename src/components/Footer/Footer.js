import Framework from 'framework';
import Link from 'components/Link';
import './Footer.scss';

const links = ['Помощь', 'Обратная связь', 'Разработчикам', 'Условия использования'];

const Footer = ({ cls }) => `<div class="Footer ${cls}">
  <div class="Footer__left">${links
    .map(link => Framework.createElement(Link, { cls: 'Footer__link' }, link))
    .join('')}</div>
  <div class="Footer__right">© 2001–2017  ООО «Яндекс»</div>
</div>`;

export default Footer;
