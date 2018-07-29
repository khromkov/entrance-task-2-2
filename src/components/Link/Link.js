import Framework from 'framework';
import Control from 'components/Control';
import './Link.scss';

const Link = props => {
  const { children, cls, size, theme, view } = props;

  return Framework.createElement(
    Control,
    {
      tag: 'a',
      type: 'link',
      cls: Framework.Component
        .template`Link Link_size_${size} Link Link_theme_${theme} Link Link_view_${view} ${cls}`,
      attrs: 'href="#"',
    },
    children,
  );
};

Link.defaultProps = {
  size: 's',
};

export default Link;
