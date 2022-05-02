import React, { FunctionComponent } from 'react';
import { Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Navspa from '@navikt/navspa';

import App, { AppProps } from './App';
import Utviklingsapp from './utviklingsapp/Utviklingsapp';
import '@navikt/ds-css';
import './index.css';

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
    ReactDOM.render(<Utviklingsapp />, document.getElementById('utviklingsapp'));
}
