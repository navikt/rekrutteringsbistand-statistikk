import React from 'react';
import ReactDOM from 'react-dom';
import Navspa from '@navikt/navspa';
import App from './App';
import Utviklingsapp from './utviklingsapp/Utviklingsapp';
import './index.css';

const erProd = process.env.NODE_ENV === 'production';
const eksporterApp = process.env.REACT_APP_EXPORT || erProd;

if (eksporterApp) {
    Navspa.eksporter('rekrutteringsbistand-statistikk', App);
} else {
    ReactDOM.render(<Utviklingsapp />, document.getElementById('utviklingsapp'));
}
