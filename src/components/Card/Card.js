import Framework from 'framework';
import Control from 'components/Control';
import Icon from 'components/Icon';
import './Card.scss';

export default class Card extends Framework.Component {
  render() {
    const {
      icon,
      state,
      title,
      subTitle,
      size,
      cls,
      type,
      attrs,
      ...passPropsThrough
    } = this.props;

    return Framework.createElement(
      Control,
      {
        tag: 'button',
        cls: Framework.Component.template`Card Card_size_${size} ${cls} Card_animation Card_hover`,
        dataId: 'card',
        attrs: `${attrs} data-type="${type}"`,
        ...passPropsThrough,
      },
      Framework.Component.template`
      <span class="Card__content">
        ${icon && `<span>${Framework.createElement(Icon, { icon, state })}</span>`}
        <span class="Card__description">
          ${title && `<span class="Card__title">${title}</span>`}
          ${subTitle && `<span class="Card__subTitle">${subTitle}</span>`}
        </span>
      </span>
      `,
    );
  }
}

Card.defaultProps = {
  type: 'light',
};
