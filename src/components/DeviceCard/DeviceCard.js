import Framework from 'framework';
import Control from 'components/Control';
import Icon from 'components/Icon';
import './DeviceCard.scss';

export default class DeviceCard extends Framework.Component {
  render() {
    const { icon, state, title, subTitle, size, cls, ...passPropsThrough } = this.props;

    return Framework.createElement(
      Control,
      {
        tag: 'button',
        cls: Framework.Component
          .template`DeviceCard DeviceCard_size_${size} ${cls} DeviceCard_animation DeviceCard_hover`,
        dataId: 'card',
        ...passPropsThrough,
      },
      Framework.Component.template`
      ${icon && `<span>${Framework.createElement(Icon, { icon, state })}</span>`}
      <div class="DeviceCard__description">
        ${title && `<div class="DeviceCard__title">${title}</div>`}
        ${subTitle && `<div class="DeviceCard__subTitle">${subTitle}</div>`}
      </div>
      `,
    );
  }
}
