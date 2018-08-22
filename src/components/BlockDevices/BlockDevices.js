import Framework from 'framework';
import Block from 'components/Block';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Select from 'components/Select';
import CardGroup from 'components/CardGroup';
import { cards, filter } from './data';

const BlockDevices = props => {
  const { size } = props;

  return Framework.createElement(
    Block,
    {
      size,
      title: 'Избранные устройства',
      attrs: 'data-id="devices"',
      left: Framework.createElement(
        Select,
        { ...filter, adaptive: true, dataId: 'filter' },
        'left',
      ),
      right: [
        Framework.createElement(
          Button,
          { theme: 'pseudo', icon: true, dataId: 'left' },
          Framework.createElement(Icon, { icon: 'arrow', direction: 'left' }),
        ),
        Framework.createElement(
          Button,
          { theme: 'pseudo', icon: true, dataId: 'right' },
          Framework.createElement(Icon, { icon: 'arrow', direction: 'right' }),
        ),
      ].join(''),
    },
    Framework.createElement(CardGroup, { cards }),
  );
};

export default BlockDevices;
