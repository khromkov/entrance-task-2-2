import Framework from 'framework';
import Select from 'components/Select';
import Slider from 'components/Slider';
import Form from './Form';

const fastValues = {
  value: 'custom',
  items: [
    { value: 'custom', text: 'Вручную' },
    { value: 'day', text: 'Дневной свет' },
    { value: 'evening', text: 'Вечерний свет' },
    { value: 'morning', text: 'Рассвет' },
  ],
};

const FormLight = props =>
  Framework.createElement(
    Form,
    { ...props, name: 'light', icon: 'light', state: 'off' },
    Framework.Component.template`
    <div class="Form__values">${Framework.createElement(Select, fastValues)}</div>
    <div class="Form__control">${Framework.createElement(Slider, { theme: 'light' })}</div>
  `,
  );

export default FormLight;
