import Framework from 'framework';
import Button from 'components/Button';
import './Form.scss';

const Form = props => {
  const { title, status, children, name, theme } = props;

  return Framework.Component.template`
    <div class="Form Form_hidden" data-form="${name}">
      <div class="Form__body">
        <div class="Form__title">${title}</div>
        <div class="Form__status">${status}</div>
        <div class="Form__content Form__content_theme_${theme}">${children}</div>
      </div>
      <div class="Form__actions">
        ${Framework.createElement(
          Button,
          { cls: 'Form__action', theme: 'action', size: 'xl', dataId: 'close' },
          'Применить',
        )}
        ${Framework.createElement(
          Button,
          { cls: 'Form__action', theme: 'second', size: 'xl', dataId: 'close' },
          'Закрыть',
        )}
      </div>
    </div>
  `;
};

Form.defaultProps = {
  title: 'Elgato Eve Degree Connected',
  status: 'Включено',
};

export default Form;
