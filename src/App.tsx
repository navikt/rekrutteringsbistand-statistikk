import React, { FunctionComponent } from 'react';
import { Loader } from '@navikt/ds-react';
import Hurtiglenker from './hurtiglenker/Hurtiglenker';
import Statistikk from './statistikk/Statistikk';
import css from './App.module.css';
import { History } from 'history';

export type AppProps = {
    navKontor: string | null;
    history: History;
};

const App: FunctionComponent<AppProps> = ({ navKontor }) => {
    return (
        <div className={css.app}>
            <Hurtiglenker />
            {navKontor ? <Statistikk navKontor={navKontor} /> : <Loader fr="" />}
        </div>
    );
};

export default App;
