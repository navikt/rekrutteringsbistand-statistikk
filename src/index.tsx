import React from 'react';
import ReactDOM from 'react-dom';
import Navspa from '@navikt/navspa';
import App from './App';
import Utviklingsapp from './utviklingsapp/Utviklingsapp';
import './index.css';

const utviklingsnode = document.getElementById('rekrutteringsbistand-statistikk-utvikling');

if (utviklingsnode) {
    ReactDOM.render(<Utviklingsapp />, utviklingsnode);
} else {
    Navspa.eksporter('rekrutteringsbistand-statistikk', App);
}
