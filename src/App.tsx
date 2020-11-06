import React, { FunctionComponent } from 'react';
import Hurtiglenker from './hurtiglenker/Hurtiglenker';
import Statistikk from './statistikk/Statistikk';
import './App.less';

export type AppProps = {
    navKontor: string | null;
};

const App: FunctionComponent<AppProps> = ({ navKontor }) => {
    return (
        <div className="app">
            <Hurtiglenker />
            {navKontor ? <Statistikk navKontor={navKontor} /> : <div>NAV-kontor må være satt</div>}
        </div>
    );
};

export default App;
