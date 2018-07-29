import Framework from 'framework';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Modal from 'components/Modal';
import BlockDevices from 'components/BlockDevices';
import BlockMain from 'components/BlockMain';
import BlockScripts from 'components/BlockScripts';
import './Page.scss';

const Page = () => `
    <div class="Page">
      ${Framework.createElement(Header, { cls: 'Page__container' })}
      <div class="Page__container Page__content">
        <div class="Page__row">
          <div class="Page__col">${Framework.createElement(BlockMain)}</div>
          <div class="Page__col">${Framework.createElement(BlockScripts)}</div>
        </div>
        <div class="Page__row">${Framework.createElement(BlockDevices)}</div>
      </div>
      <div class="Page__footer">${Framework.createElement(Footer, { cls: 'Page__container' })}</div>
    </div>
    ${Framework.createElement(Modal)}
  `;

export default Page;
