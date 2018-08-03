import Framework from 'framework';
import Block from 'components/Block';
import Weather from 'components/Weather';
// import Card from 'components/Card';
import './BlockMain.scss';

/* const data = {
  devices: [
    {
      title: 'Xiaomi Yeelight LED Smart Bulb',
      subTitle: 'Включено',
      size: 'l',
    },
    {
      title: 'D-Link Omna 180 Cam',
      subTitle: 'Включится в 17:00',
      size: 'l',
    },
    {
      title: 'Elgato Eve Degree Connected',
      subTitle: 'Выключено до 17:00',
      size: 'l',
    },
    {
      title: 'LIFX Mini Day & Dusk A60 E27',
      subTitle: 'Включится в 17:00',
      size: 'l',
    },
    {
      title: 'Xiaomi Mi Air Purifier 2S',
      subTitle: 'Включено',
      size: 'l',
    },
    {
      title: 'Philips Zhirui',
      subTitle: 'Выключено',
      size: 'l',
    },
  ],
}; */

const BlockMain = () => {
  const content = `
    <div class="BlockMain">
      <img class="BlockMain__bg" src="/img/bg@1x.png" alt="bg" />
      <div class="BlockMain__content">
        <h1 class="BlockMain__title">Привет, Евгений!</h1>
        <div class="BlockMain__legent">Двери и окна закрыты, сигнализация включена.</div>
        ${Framework.createElement(Weather, { cls: 'BlockMain__weather' })}
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
