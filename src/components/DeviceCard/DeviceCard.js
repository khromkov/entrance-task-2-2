import Framework from 'framework';

export default class DeviceCard extends Framework.Component {
  render() {
    const { icon, title, subTitle } = this.props;

    return `
      <div>
        ${icon && `<span>${icon}</span>`}
        ${title && `<div>${title}</div>`}
        ${subTitle && `<div>${subTitle}</div>`}
      </div>
    `;
  }
}
