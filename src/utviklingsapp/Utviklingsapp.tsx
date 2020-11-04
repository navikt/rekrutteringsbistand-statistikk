import React, { FunctionComponent } from 'react';
import { Systemtittel } from 'nav-frontend-typografi';
import App from '../App';
import './Utviklingsapp.less';
import { cssScopeForApp } from '../index';

const Utviklingsapp: FunctionComponent = () => (
    <div className={cssScopeForApp}>
        <header>
            <Systemtittel className="utviklingsapp">
                Utviklingsapp for rekrutteringsbistand-statistikk
            </Systemtittel>
        </header>
        <main>
            <App navKontor="0239" />
        </main>
    </div>
);

export default Utviklingsapp;
