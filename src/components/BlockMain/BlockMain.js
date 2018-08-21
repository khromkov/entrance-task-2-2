import Framework from 'framework';
import Block from 'components/Block';
import Weather from 'components/Weather';
import CardGroup from 'components/CardGroup';
import './BlockMain.scss';
import { cards } from './data';

const BlockMain = () => {
  const content = `
    <div class="BlockMain">
      <img class="BlockMain__bg" srcset="img/bg@1x.png, img/bg@2x.png 2x" src="img/bg@1x.png" alt="bg" />
      <div class="BlockMain__content">
        <div class="BlockMain__info">
          <h1 class="BlockMain__title">Привет, Евгений!</h1>
          <div class="BlockMain__legent">Двери и окна закрыты, сигнализация включена.</div>
          ${Framework.createElement(Weather, { cls: 'BlockMain__weather' })}
        </div>
        ${Framework.createElement(CardGroup, {
          cards,
          theme: CardGroup.THEMES.VERTICAL,
        })}
      </div>
    </div>
  `;

  return Framework.createElement(
    Block,
    {
      title: 'Главное',
      hiddenTitle: true,
    },
    content,
  );
};

export default BlockMain;
