import Framework from 'framework';
import Button from 'components/Button';
import Select from 'components/Select';
import Slider from 'components/Slider';
import Spinner from 'components/Spinner';
import './Form.scss';

const fastValues = {
  value: 'custom',
  items: [
    { value: 'custom', text: 'Вручную' },
    { value: 'cool', text: 'Холодно' },
    { value: 'warm', text: 'Тепло' },
    { value: 'hot', text: 'Жарко' },
  ],
};

const Form = props => {
  const { title, status } = props;

  return Framework.Component.template`
    <div class="Form">
      <div class="Form__body">
        <div class="Form__title">${title}</div>
        <div class="Form__status">${status}</div>
        <div class="Form__values">${Framework.createElement(Select, fastValues)}</div>
        <div class="Form__control">${Framework.createElement(Slider)}</div>
        <div class="Form__control">${Framework.createElement(Spinner)}</div>
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
