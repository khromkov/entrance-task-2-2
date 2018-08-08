import Framework from 'framework';
import Select from 'components/Select';
import Slider from 'components/Slider';
import Form from './Form';

const fastValues = {
  value: 'custom',
  items: [
    { value: 'custom', text: 'Вручную' },
    { value: 'cool', text: 'Холодно' },
    { value: 'warm', text: 'Тепло' },
    { value: 'hot', text: 'Жарко' },
  ],
};

const FormLight = props =>
  Framework.createElement(
    Form,
    { ...props, name: 'light' },
    Framework.Component.template`
    <div class="Form__values">${Framework.createElement(Select, fastValues)}</div>
    <div class="Form__control">${Framework.createElement(Slider)}</div>
  `,
  );

export default FormLight;
