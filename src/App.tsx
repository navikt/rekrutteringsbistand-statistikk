import React, { FunctionComponent } from 'react';
import Hurtiglenker from './hurtiglenker/Hurtiglenker';
import Statistikk from './statistikk/Statistikk';
import NavFrontendSpinner from 'nav-frontend-spinner';
import './App.less';

export type AppProps = {
    navKontor: string | null;
};

const App: FunctionComponent<AppProps> = ({ navKontor }) => {
    return (
        <div className="app">
            <Hurtiglenker />
            {navKontor ? <Statistikk navKontor={navKontor} /> : <NavFrontendSpinner />}
        </div>
    );
};

export default App;
