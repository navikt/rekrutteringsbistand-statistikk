import React, { FunctionComponent, useEffect, useState } from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { Heading } from '@navikt/ds-react';
import App from '../App';
import './Utviklingsapp.css';

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
    );
};

export default Utviklingsapp;
