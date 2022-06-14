import React, { FunctionComponent } from 'react';
import Navspa from '@navikt/navspa';

import App, { AppProps } from './App';
import Utviklingsapp from './utviklingsapp/Utviklingsapp';
import '@navikt/ds-css';
import './index.css';
import Router from './Router';
import { createRoot } from 'react-dom/client';

const skalEksporteres = process.env.REACT_APP_EXPORT || process.env.NODE_ENV === 'production';

if (process.env.REACT_APP_MOCK) {
    require('./mock/mock-api');
}

const AppMedCssScope: FunctionComponent<AppProps> = (props: AppProps) => (
    <Router history={props.history}>
        <App {...props} />
    </Router>
);

if (skalEksporteres) {
    Navspa.eksporter('rekrutteringsbistand-statistikk', AppMedCssScope);
} else {
    const container = document.getElementById('utviklingsapp');
    const root = createRoot(container!);
    root.render(<Utviklingsapp />);
}
