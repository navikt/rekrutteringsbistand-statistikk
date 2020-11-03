import React, { FunctionComponent } from 'react';
import Hurtiglenker from './hurtiglenker/Hurtiglenker';
import './App.less';

export type AppProps = {
    navKontor: string | null;
};

const App: FunctionComponent<AppProps> = ({ navKontor }) => {
    return (
        <div className="statistikk">
            <div className="app">
                <Hurtiglenker />
            </div>
        </div>
    );
};

export default App;
