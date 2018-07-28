import Framework from 'framework';
import DeviceCard from './components/DeviceCard';

Framework.render(
  document.getElementById('container'),
  Framework.createElement(DeviceCard, { title: 'title', subTitle: 'subTitle' }),
);
