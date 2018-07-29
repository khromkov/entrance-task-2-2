import Framework from 'framework';
import './Control.scss';

const FOCUS_CLASS_NAME = 'utilityfocus';

document.addEventListener('mousedown', () => {
  document.documentElement.classList.remove(FOCUS_CLASS_NAME);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Tab') {
    document.documentElement.classList.add(FOCUS_CLASS_NAME);
  }
});

const Control = props => {
  const { tag, cls, dataId, type, children, attrs } = props;

  return Framework.Component.template`
    <${tag} class="Control Control_type_${type} ${cls}" data-id="${dataId}" ${attrs}>
      ${children}
    </${tag}>
  `;
};

Control.defaultProps = {
  type: 'default',
};

export default Control;
