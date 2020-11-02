import React, { FunctionComponent } from 'react';

export type AppProps = {
    navKontor: string | null;
};

const App: FunctionComponent<AppProps> = ({ navKontor }) => {
    return (
        <div className="statistikk">
            <h2 className="App-header">Rekrutteringsbistand-statistikk</h2>
            <p>Valgt NAV-kontor er: {navKontor}</p>
        </div>
    );
};

export default App;
