import React, { FunctionComponent } from 'react';

export type AppProps = {
    navKontor: string | null;
};

const App: FunctionComponent<AppProps> = ({ navKontor }) => {
    return (
        <>
            <h2 className="App-header">Rekrutteringsbistand-statistikk</h2>
            <p>Valgt NAV-kontor er: {navKontor}</p>
        </>
    );
};

export default App;
