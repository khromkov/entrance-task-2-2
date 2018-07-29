import Framework from 'framework';
import Block from 'components/Block';
import Button from 'components/Button';
import Select from 'components/Select';
import DeviceCard from 'components/DeviceCard';
import './BlockDevices.scss';

const data = {
  devices: [
    {
      icon: 'light',
      state: 'on',
      title: 'Xiaomi Yeelight LED Smart Bulb',
      subTitle: 'Включено',
      size: 'l',
    },
    {
      icon: 'light',
      state: 'off',
      title: 'D-Link Omna 180 Cam',
      subTitle: 'Включится в 17:00',
      size: 'l',
    },
    {
      icon: 'temp',
      state: 'off',
      title: 'Elgato Eve Degree Connected',
      subTitle: 'Выключено до 17:00',
      size: 'l',
    },
    {
      icon: 'light',
      state: 'off',
      title: 'LIFX Mini Day & Dusk A60 E27',
      subTitle: 'Включится в 17:00',
      size: 'l',
    },
    {
      icon: 'light',
      state: 'on',
      title: 'Xiaomi Mi Air Purifier 2S',
      subTitle: 'Включено',
      size: 'l',
    },
    {
      icon: 'light',
      state: 'off',
      title: 'Philips Zhirui',
      subTitle: 'Выключено',
      size: 'l',
    },
  ],
};

const filter = {
  value: 'all',
  items: [
    { value: 'all', text: 'Все' },
    { value: 'kitchen', text: 'Кухня' },
    { value: 'hall', text: 'Зал' },
    { value: 'lights', text: 'Лампочки' },
    { value: 'cameras', text: 'Камеры' },
  ],
};

const BlockDevices = props => {
  const { size } = props;

  return Framework.createElement(
    Block,
    {
      size,
      title: 'Избранные устройства',
      left: Framework.createElement(Select, filter, 'left'),
      right: [
        Framework.createElement(Button, { theme: 'pseudo' }, 'left'),
        Framework.createElement(Button, { theme: 'pseudo' }, 'right'),
      ].join(''),
    },
    `<div class="BlockDevices BlockDevices_size_${size}">${data.devices
      .map(device =>
        Framework.createElement(DeviceCard, { ...device, cls: 'BlockDevices__device' }),
      )
      .join('')}</div>`,
  );
};

export default BlockDevices;
