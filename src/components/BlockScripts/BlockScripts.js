import Framework from 'framework';
import Block from 'components/Block';
import Button from 'components/Button';
import CardGroup from 'components/CardGroup';
import { cards } from './data';

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
    Framework.createElement(CardGroup, { cards, cardSize: 's', theme: CardGroup.THEMES.GRID }),
  );
};

export default BlockScripts;
