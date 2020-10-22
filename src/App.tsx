import React, { FunctionComponent } from 'react';
import Navspa from '@navikt/navspa';

const App: FunctionComponent = () => {
    return (
        <div className="App">
            <header className="App-header">
                <p>Rekrutteringsbistand-statistikk</p>
            </header>
        </div>
    );
};

Navspa.eksporter('rekrutteringsbistand-statistikk', App);

export default App;
