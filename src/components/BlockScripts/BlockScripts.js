import Framework from 'framework';
import Block from 'components/Block';
import Button from 'components/Button';
import DeviceCard from 'components/DeviceCard';
import './BlockScripts.scss';

const data = {
  devices: [
    {
      icon: 'light',
      state: 'on',
      title: 'Выключить весь свет в доме и во дворе',
    },
    {
      icon: 'scheduled',
      title: 'Я ухожу',
    },
    {
      icon: 'light',
      state: 'on',
      title: 'Включить свет в коридоре',
    },
    {
      icon: 'temp',
      state: 'on',
      title: 'Набрать горячую ванну',
      subTitle: 'Начнётся в 18:00',
    },
    {
      icon: 'temp',
      state: 'on',
      title: 'Сделать пол тёплым во всей квартире',
    },
  ],
};

const BlockScripts = props => {
  const { size } = props;

  return Framework.createElement(
    Block,
    {
      size,
      title: 'Избранные сценарии',
      right: [
        Framework.createElement(Button, { theme: 'pseudo' }, 'left'),
        Framework.createElement(Button, { theme: 'pseudo' }, 'right'),
      ].join(''),
    },
    `<div class="BlockScripts">${data.devices
      .map(device => Framework.createElement(DeviceCard, { ...device, size: 's' }))
      .join('')}</div>`,
  );
};

export default BlockScripts;
