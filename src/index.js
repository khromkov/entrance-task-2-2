import 'pepjs';
import Framework from 'framework';
import './reset.css';
import './main.scss';
import Page from './components/Page';

Framework.render(document.getElementById('container'), Framework.createElement(Page));
