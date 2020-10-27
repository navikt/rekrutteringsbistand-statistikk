import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Utviklingsapp from './utviklingsapp/Utviklingsapp';
import eksporterApp from './eksporterApp';
import './index.css';

const erProd = process.env.NODE_ENV === 'production';
const skalEksporteres = process.env.REACT_APP_EXPORT || erProd;

if (skalEksporteres) {
    eksporterApp('rekrutteringsbistand-statistikk', App);
} else {
    ReactDOM.render(<Utviklingsapp />, document.getElementById('utviklingsapp'));
}
