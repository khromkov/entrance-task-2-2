import Framework from 'framework';
import Spinner from 'components/Spinner';
import Form from './Form';

const FormLight = props =>
  Framework.createElement(
    Form,
    { ...props, name: 'temp', theme: 'center' },
    Framework.Component.template`
    <div class="Form__control">${Framework.createElement(Spinner)}</div>
  `,
  );

export default FormLight;
