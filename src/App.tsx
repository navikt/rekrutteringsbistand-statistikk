import React, { FunctionComponent } from 'react';
import { History } from 'history';
import { Loader } from '@navikt/ds-react';
import Hurtiglenker from './hurtiglenker/Hurtiglenker';
import Statistikk from './statistikk/Statistikk';
import './App.less';

export type AppProps = {
    navKontor: string | null;
    history: History;
};

const App: FunctionComponent<AppProps> = ({ navKontor }) => {
    return (
        <div className="app">
            <Hurtiglenker />
            {navKontor ? <Statistikk navKontor={navKontor} /> : <Loader fr="" />}
        </div>
    );
};

export default App;
