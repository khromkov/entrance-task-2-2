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
    { ...props, name: 'floor', value: 23, icon: 'temp', state: 'on' },
    Framework.Component.template`
    <div class="Form__values">${Framework.createElement(Select, fastValues)}</div>
    <div class="Form__control">
      <div class="Form__controlWrap">
        ${Framework.createElement(Slider)}
      </div>
    </div>
  `,
  );

export default FormLight;
