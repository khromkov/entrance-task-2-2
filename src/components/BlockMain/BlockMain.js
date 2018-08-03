import Framework from 'framework';
import Block from 'components/Block';
import Weather from 'components/Weather';
import CardGroup from 'components/CardGroup';
import './BlockMain.scss';
import { cards } from './data';

const BlockMain = () => {
  const content = `
    <div class="BlockMain">
      <img class="BlockMain__bg" src="/img/bg@1x.png" alt="bg" />
      <div class="BlockMain__content">
        <div class="BlockMain__info">
          <h1 class="BlockMain__title">Привет, Евгений!</h1>
          <div class="BlockMain__legent">Двери и окна закрыты, сигнализация включена.</div>
          ${Framework.createElement(Weather, { cls: 'BlockMain__weather' })}
        </div>
        ${Framework.createElement(CardGroup, {
          cards,
          theme: CardGroup.THEMES.VERTICAL,
          cls: 'BlockMain__scripts',
        })}
      </div>
    </div>
  `;

  return Framework.createElement(
    Block,
    {
      title: 'Главное',
    },
    content,
  );
};

export default BlockMain;
