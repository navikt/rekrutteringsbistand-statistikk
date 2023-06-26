import { FunctionComponent, useEffect, useState } from 'react';
import { Router } from 'react-router-dom';
import { Heading } from '@navikt/ds-react';
import { createBrowserHistory } from 'history';
import App from '../App';
import css from './Utviklingsapp.module.css';

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
        <Router location={history.location} navigator={history}>
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
