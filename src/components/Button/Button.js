import Framework from 'framework';
import Control from 'components/Control';
import './Button.scss';

const Button = props => {
  const { children, cls, theme, size, attrs, icon, ...passPropsThrough } = props;

  return Framework.createElement(
    Control,
    {
      tag: 'button',
      cls: Framework.Component.template`Button Button_theme_${theme} Button_size_${size} ${
        icon ? 'Button_icon' : ''
      } ${cls}`,
      attrs: `data-button_theme="${theme}" data-button_size="${size}" ${attrs}`,
      ...passPropsThrough,
    },
    children,
  );
};

Button.defaultProps = {
  theme: 'normal',
  size: 's',
};

Button.setMod = Framework.createSetMod('Button');

export default Button;
