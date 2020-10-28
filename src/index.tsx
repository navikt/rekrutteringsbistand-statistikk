import React from 'react';
import ReactDOM from 'react-dom';
import NAVSPA from '@navikt/navspa';
import App from './App';
import Utviklingsapp from './utviklingsapp/Utviklingsapp';
import eksporterApp from './eksporterApp';
import './index.css';

const erProd = process.env.NODE_ENV === 'production';
const skalEksporteres = process.env.REACT_APP_EXPORT || erProd;

if (skalEksporteres) {
    NAVSPA.eksporter('rekrutteringsbistand-statistikk', App);
    eksporterApp('rekrutteringsbistand-statistikk', App);
} else {
    ReactDOM.render(<Utviklingsapp />, document.getElementById('utviklingsapp'));
}
