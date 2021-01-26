import React, { FunctionComponent } from 'react';
import { Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Navspa from '@navikt/navspa';

import App, { AppProps } from './App';
import Utviklingsapp from './utviklingsapp/Utviklingsapp';
import './index.less';

const skalEksporteres = process.env.REACT_APP_EXPORT || process.env.NODE_ENV === 'production';

// Alle klassenavn blir prefikset med ".statistikk" i craco-configen, så også koden
// som brukes under utvikling må wrappes i et element med dette klassenavnet.
export const cssScopeForApp = 'rekbis-statistikk';

if (process.env.REACT_APP_MOCK) {
    require('./mock/mock-api');
}

const AppMedCssScope: FunctionComponent<AppProps> = (props: AppProps) => (
    <div className={cssScopeForApp}>
        <Router history={props.history}>
            <App {...props} />
        </Router>
    </div>
);

if (skalEksporteres) {
    Navspa.eksporter('rekrutteringsbistand-statistikk', AppMedCssScope);
} else {
    ReactDOM.render(<Utviklingsapp />, document.getElementById('utviklingsapp'));
}
