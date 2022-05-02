import React, { FunctionComponent, useEffect, useState } from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { Heading } from '@navikt/ds-react';
import { cssScopeForApp } from '../index';
import App from '../App';
import '@navikt/ds-css';
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
            <Router history={history}>
                <header>
                    <Heading size="large" className="utviklingsapp">
                        Utviklingsapp for rekrutteringsbistand-statistikk
                    </Heading>
                </header>
                <main>
                    <App navKontor={navKontor} history={history} />
                </main>
            </Router>
        </div>
    );
};

export default Utviklingsapp;
