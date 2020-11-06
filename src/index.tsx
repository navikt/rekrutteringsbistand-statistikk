import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Utviklingsapp from './utviklingsapp/Utviklingsapp';
import eksporterApp from './eksporterApp';
import './index.less';

const skalEksporteres = process.env.REACT_APP_EXPORT || process.env.NODE_ENV === 'production';

// Alle klassenavn blir prefikset med ".statistikk" i craco-configen, så også koden
// som brukes under utvikling må wrappes i et element med dette klassenavnet.
export const cssScopeForApp = 'rekbis-statistikk';

if (process.env.REACT_APP_MOCK) {
    require('./mock/mock-api');
}

const AppMedCssScope: FunctionComponent = (props: any) => (
    <div className={cssScopeForApp}>
        <App {...props} />
    </div>
);

if (skalEksporteres) {
    eksporterApp('rekrutteringsbistand-statistikk', AppMedCssScope);
} else {
    ReactDOM.render(<Utviklingsapp />, document.getElementById('utviklingsapp'));
}
