import Framework from 'framework';
import Spinner from 'components/Spinner';
import Form from './Form';

const FormLight = props =>
  Framework.createElement(
    Form,
    { ...props, name: 'temp', theme: 'center', value: 23, icon: 'temp', state: 'on' },
    Framework.createElement(Spinner),
  );

export default FormLight;
