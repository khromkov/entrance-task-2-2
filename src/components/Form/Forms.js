import Framework from 'framework';
import FormLight from './FormLight';
import FormFloor from './FormFloor';
import FormTemp from './FormTemp';

const Forms = () =>
  [
    Framework.createElement(FormLight),
    Framework.createElement(FormFloor),
    Framework.createElement(FormTemp),
  ].join('');

export default Forms;
