import React, { FunctionComponent, useEffect, useState } from 'react';
import { Systemtittel } from 'nav-frontend-typografi';
import { cssScopeForApp } from '../index';
import { createBrowserHistory } from 'history';
import App from '../App';
import './Utviklingsapp.less';

const history = createBrowserHistory();

const Utviklingsapp: FunctionComponent = () => {
    const [navKontor, setNavKontor] = useState<string | null>(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setNavKontor('0239');
        }, 500);

        return () => {
            clearTimeout(timeout);
        };
    });

    return (
        <div className={cssScopeForApp}>
            <header>
                <Systemtittel className="utviklingsapp">
                    Utviklingsapp for rekrutteringsbistand-statistikk
                </Systemtittel>
            </header>
            <main>
                <App navKontor={navKontor} history={history} />
            </main>
        </div>
    );
};

export default Utviklingsapp;
