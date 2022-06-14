import React, { FunctionComponent, useEffect, useState } from 'react';
import { createBrowserHistory } from 'history';
import { Heading } from '@navikt/ds-react';
import css from './Utviklingsapp.module.css';
import App from '../App';
import Router from '../Router';

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
                <Heading level="1" size="medium" className={css.utviklingsapp}>
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
