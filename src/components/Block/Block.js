import Framework from 'framework';
import './Block.scss';

export default class DeviceCard extends Framework.Component {
  render() {
    const { title, children, left, right, size } = this.props;

    return Framework.Component.template`
      <div class="Block Block_size_${size}">
        <div class="Block__header">
          <h2 class="Block__title">${title}</h2>
          ${left && `<span class="Block__left">${left}</span>`}
          ${right && `<span class="Block__right">${right}</span>`}
        </div>
        <div class="Block__content">${children}</div>
      </div>
    `;
  }
}
