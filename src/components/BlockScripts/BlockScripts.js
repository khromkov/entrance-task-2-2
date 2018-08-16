import Framework from 'framework';
import Block from 'components/Block';
import Button from 'components/Button';
import Icon from 'components/Icon';
import CardGroup from 'components/CardGroup';
import { cards } from './data';

const BlockScripts = props => {
  const { size } = props;

  return Framework.createElement(
    Block,
    {
      size,
      title: 'Избранные сценарии',
      attrs: 'data-id="scripts"',
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
    Framework.createElement(CardGroup, { cards, cardSize: 's', theme: CardGroup.THEMES.GRID }),
  );
};

export default BlockScripts;
