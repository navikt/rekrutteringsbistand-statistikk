import React, { FunctionComponent, useState } from 'react';

export type AppProps = {
    hilsen: string;
};

const App: FunctionComponent<AppProps> = ({ hilsen }) => {
    const [teller, setTeller] = useState<number>(0);

    return (
        <div className="App">
            <h2 className="App-header">Rekrutteringsbistand-statistikk</h2>
            <p>{hilsen}</p>
            <button onClick={() => setTeller(teller - 1)}>-</button>
            <code>{teller}</code>
            <button onClick={() => setTeller(teller + 1)}>+</button>
        </div>
    );
};

export default App;
