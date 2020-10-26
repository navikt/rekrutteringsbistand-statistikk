import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Utviklingsapp from './utviklingsapp/Utviklingsapp';
import './index.css';

const erProd = process.env.NODE_ENV === 'production';
const eksporterApp = process.env.REACT_APP_EXPORT || erProd;

if (eksporterApp) {
    (window as any)['rekrutteringsbistand-statistikk'] = App;
} else {
    ReactDOM.render(<Utviklingsapp />, document.getElementById('utviklingsapp'));
}
