import React, { FunctionComponent } from 'react';
import { Systemtittel } from 'nav-frontend-typografi';
import App from '../App';
import './Utviklingsapp.less';

const Utviklingsapp: FunctionComponent = () => (
    <>
        <header className="utviklingsapp">
            <Systemtittel>Utviklingsapp for rekrutteringsbistand-statistikk</Systemtittel>
        </header>
        <main>
            <App navKontor="0239" />
        </main>
    </>
);

export default Utviklingsapp;
