import Framework from 'framework';
import Card from 'components/Card';
import './CardGroup.scss';

const THEMES = {
  INLINE: 'inline',
  GRID: 'grid',
  VERTICAL: 'vertical',
};

export default class CardGroup extends Framework.Component {
  renderCard(card) {
    const { cardSize, theme } = this.props;

    return Framework.createElement(Card, {
      size: cardSize,
      ...card,
      cls: `CardGroup__card CardGroup__card_theme_${theme}`,
    });
  }

  renderArray(cards) {
    return cards.map(card => this.renderCard(card)).join('');
  }

  renderGrid(cards) {
    let groupIndex = -1;
    const groups = [];
    cards.forEach((card, index) => {
      if (index % 9 === 0) {
        groupIndex += 1;
        groups.push([]);
      }

      groups[groupIndex].push(card);
    });

    return groups
      .map(group => `<div class="CardGroup__group">${this.renderArray(group)}</div>`)
      .join('');
  }

  render() {
    const { cards, theme, cls, clsWrap } = this.props;

    let content;
    switch (theme) {
      case THEMES.GRID: {
        content = this.renderGrid(cards);
        break;
      }
      default: {
        content = this.renderArray(cards);
      }
    }

    return `
    <div class="CardGroup CardGroup_theme_${theme} ${cls}">
      <div class="CardGroup__wrap CardGroup__wrap_theme_${theme} ${clsWrap}">
        ${content}
      </div>
    </div>`;
  }
}

CardGroup.THEMES = THEMES;

CardGroup.defaultProps = {
  theme: THEMES.INLINE,
};
