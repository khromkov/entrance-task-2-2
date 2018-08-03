import Framework from 'framework';
import Control from 'components/Control';
import Icon from 'components/Icon';
import './Card.scss';

export default class Card extends Framework.Component {
  render() {
    const { icon, state, title, subTitle, size, cls, ...passPropsThrough } = this.props;

    return Framework.createElement(
      Control,
      {
        tag: 'button',
        cls: Framework.Component.template`Card Card_size_${size} ${cls} Card_animation Card_hover`,
        dataId: 'card',
        ...passPropsThrough,
      },
      Framework.Component.template`
      ${icon && `<span>${Framework.createElement(Icon, { icon, state })}</span>`}
      <div class="Card__description">
        ${title && `<div class="Card__title">${title}</div>`}
        ${subTitle && `<div class="Card__subTitle">${subTitle}</div>`}
      </div>
      `,
    );
  }
}
