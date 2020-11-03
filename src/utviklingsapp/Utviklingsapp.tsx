import React, { FunctionComponent } from 'react';
import { Systemtittel } from 'nav-frontend-typografi';
import App from '../App';
import './Utviklingsapp.less';

// Alle klassenavn blir prefikset med ".statistikk" i craco-configen, så også koden
// som brukes under utvikling må wrappes i et element med dette klassenavnet.
const klassenavnForHeader = 'statistikk';

const Utviklingsapp: FunctionComponent = () => (
    <>
        <header className={klassenavnForHeader}>
            <Systemtittel className="utviklingsapp">
                Utviklingsapp for rekrutteringsbistand-statistikk
            </Systemtittel>
        </header>
        <main>
            <App navKontor="0239" />
        </main>
    </>
);

export default Utviklingsapp;
