import React, { FunctionComponent, useState } from 'react';

const App: FunctionComponent = () => {
    const [teller, setTeller] = useState<number>(0);

    return (
        <div className="App">
            <h2 className="App-header">Rekrutteringsbistand-statistikk</h2>
            <button onClick={() => setTeller(teller + 1)}>-</button>
            {teller}
            <button onClick={() => setTeller(teller - 1)}>+</button>
        </div>
    );
};

export default App;
